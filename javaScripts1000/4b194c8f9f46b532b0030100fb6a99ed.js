const Events = {
    init: 'init',
    start: 'start',
    seek: 'seek',
    play: 'play',
    pause: 'pause',
    ready: 'ready',
    resize: 'resize',
    clear: 'clear',
};

const TIX = 20;
const Colors = {
    primary: '#fff',
    secondary: 'rgba(255,255,255,.4)',
    stroke: 'rgb(255, 237, 0)',
    shadow: 'rgba(0,0,0,0.5)',
};

let context;
let time = 0;
let sections = [];
let paused = true;
let drawLooping;
let canvasWidth = 0;
let fontSize = 50;
let fontFamily = 'sans-serif';
let lineHeight = 1.5;
let image;
let song;
let currentHeight = 0;
const lines = 2; // 2,4
const fadeout = 0.4;
const fadein = 0.4;

self.onmessage = function (event) {
    const { type, canvas, sentences, currentTime, height, song } = event.data;
    switch (type) {
        case Events.init:
            init(canvas, height);
            break;
        case Events.start:
            start(currentTime, sentences, song);
            break;
        case Events.play:
            play(currentTime);
            break;
        case Events.pause:
            pause();
            break;
        case Events.seek:
            seek(currentTime);
            break;
        case Events.clear:
            pause();
            context.clearRect(0, 0, 1500, 1000);
            break;
        case Events.resize:
            currentHeight = height;
            draw();
            break;
        default:
            break;
    }
};

function normalize(sentences = [], context) {
    context.font = 'bold 50px sans-serif';
    const n = sentences.length - 1;
    const _sections = [];
    let _sentences = [];
    let preEnd = 0;
    let setenceIndex = 0;

    sentences.forEach((sentence, index) => {
        const sentenceText = sentence.words
            .reduce((results, value) => results + value.data + ' ', '')
            .trim();

        if (!sentenceText) {
            return;
        }

        const sentenceTextWidth = context.measureText(sentenceText).width;

        let wordText = '';
        const words = sentence.words.map((word) => {
            const startAt =
                context.measureText(wordText).width / sentenceTextWidth;
            const perInSentence =
                context.measureText(word.data).width / sentenceTextWidth;
            wordText = wordText + word.data + ' ';

            return {
                start: word.startTime,
                end: word.endTime,
                duration: word.endTime - word.startTime,
                text: word.data,
                startAt,
                perInSentence,
            };
        });

        const start = sentence.words[0].startTime;
        const end = sentence.words[sentence.words.length - 1].endTime;
        const preSentence = _sentences[index - 1];

        if (preSentence && start < preSentence.end) {
            preSentence.end = start;
        }

        let countdown;
        if (start - preEnd > 10000) {
            const items = [1, 2, 3].map((count) => ({
                count,
                start: start - 1000 * (count + 1),
                end: start - 1000 * count,
            }));

            countdown = {
                items,
                sentenceTextWidth,
            };
        }

        preEnd = end;

        if (_sentences.length && countdown) {
            _sections.push({
                sentences: _sentences,
                start: _sentences[0].start,
                end: _sentences[_sentences.length - 1].end,
            });
            _sentences = [];
            setenceIndex = 0;
        }

        _sentences.push({
            index: setenceIndex,
            start: start,
            end: end,
            duration: end - start,
            text: sentenceText,
            words: words,
            alpha: 1,
            countdown,
        });
        setenceIndex++;

        if (index === n) {
            _sections.push({
                sentences: _sentences,
                start: _sentences[0].start,
                end: _sentences[_sentences.length - 1].end,
            });
        }
    });

    return _sections;
}

function buildSentences(sections, time) {
    const section = sections.find((section) => time < section.end);
    return findSentences(section, time);
}

function findSentences({ sentences = [], start, end } = {}, time) {
    const n = sentences.length;
    let _sentences = [];
    if (!n || start - time > 6000 || time > end) {
        return _sentences;
    }

    if (time < sentences[1].start) {
        _sentences = sentences.slice(0, 2);
        _sentences.forEach((i) => (i.alpha = 1));
        return _sentences;
    }

    if (time > sentences[n - 2].end) {
        _sentences = sentences.slice(n - 2);
        _sentences.forEach((i) => (i.alpha = 1));
        return _sentences;
    }

    for (let i = 0; i < n; i++) {
        const sentence = sentences[i];

        if (time >= sentence.start && time < sentence.end) {
            _sentences.push(sentence);
            const deta = (time - sentence.start) / sentence.duration;

            if (deta <= fadeout) {
                const preSentence = sentences[i - 1];
                if (preSentence) {
                    const alpha = 1 - deta / fadeout;
                    preSentence.alpha = alpha;
                    _sentences.push(preSentence);
                }
                break;
            }

            if (deta >= fadein) {
                const nextSentence = sentences[i + 1];
                if (nextSentence) {
                    const alpha = (deta - fadein) / fadein;
                    nextSentence.alpha = alpha;
                    _sentences.push(nextSentence);
                }
                break;
            }
            break;
        }

        if (time < sentence.end) {
            _sentences.push(sentence);
            _sentences.push(sentences[i - 1]);
            _sentences.forEach((i) => (i.alpha = 1));
            break;
        }
    }
    return _sentences;
}

function init(canvas, height) {
    context = canvas.getContext('2d');
    canvasWidth = context.canvas.width;

    currentHeight = height;
}

function drawIntro(song = {}) {
    const fontsize = [60, 40];
    [song.title, song.artistsNames].forEach((text, index) => {
        const contentHeight =
            fontSize * lines + lineHeight * fontSize * (lines - 1);

        const positionY =
            (currentHeight - contentHeight) / 2 +
            (lineHeight * fontSize + fontSize) * (index % lines);
        const positionX = canvasWidth / 2;

        context.font = `bold ${fontsize[index]}px ${fontFamily}`;
        context.fillText(text, positionX, positionY);
    });
}

function drawCountdown({ items = [] } = {}, time) {
    if (!items.length) {
        return;
    }

    items.forEach(({ count, start, end }) => {
        if (time >= start && time < end) {
            context.globalAlpha = 1;
            context.fillStyle = Colors.primary;
            const contentHeight = fontSize + lineHeight * fontSize;
            const positionY = (currentHeight / 2 - contentHeight) / 2 - 15;
            let i = 0;

            while (i < count) {
                context.beginPath();
                context.arc(
                    canvasWidth / 2 - 60 + 50 * i,
                    positionY,
                    15,
                    0,
                    Math.PI * 2,
                    true
                );
                context.fill();
                i++;
            }
        }
    });
}

function draw() {
    context.fillStyle = Colors.primary;
    context.clearRect(0, 0, 1500, 1000);
    context.font = `bold ${fontSize}px ${fontFamily}`;
    context.textAlign = 'center';
    context.globalAlpha = 1;

    const sentences = buildSentences(sections, time);
    if (!sentences.length) {
        drawIntro(song);
        return;
    }

    sentences.forEach(({ text, start, end, words, index, alpha }) => {
        const meaText = context.measureText(text);
        const gradient = context.createLinearGradient(
            (canvasWidth - meaText.width) / 2,
            0,
            (canvasWidth + meaText.width) / 2,
            0
        );

        context.globalAlpha = alpha;

        if (time > end) {
            gradient.addColorStop(1, Colors.stroke);
        } else if (time < start) {
            gradient.addColorStop(1, Colors.primary);
        } else {
            context.globalAlpha = 1;
            let percent = 0;
            for (let i = 0; i < words.length; i++) {
                const word = words[i];
                if (time > word.end) {
                    continue;
                }

                percent = word.startAt;
                const deta = (time - word.start) / word.duration || 0;

                if (deta < 0) {
                    break;
                }

                percent = Math.min(percent + deta * word.perInSentence, 1);
                break;
            }
            gradient.addColorStop(percent, Colors.stroke);
            gradient.addColorStop(percent, Colors.primary);
        }

        const contentHeight =
            fontSize * lines + lineHeight * fontSize * (lines - 1);

        const positionY =
            (currentHeight - contentHeight) / 2 +
            (lineHeight * fontSize + fontSize) * (index % lines);
        const positionX = canvasWidth / 2;

        context.fillStyle = gradient;
        context.fillText(text, positionX, positionY);
        context.shadowColor = Colors.shadow;
        context.shadowBlur = 10;
    });

    drawCountdown(sentences[0].countdown, time);
}

function start(currentTime, sentences, _song) {
    song = _song;
    sections = normalize(sentences, context);
    time = currentTime * 1000;
    draw();
    self.postMessage({ type: Events.ready });
}

function play(currentTime = 0) {
    if (!paused || !sections.length) {
        return;
    }

    paused = false;
    time = currentTime * 1000;

    drawLooping = setInterval(() => {
        time = time + TIX;
        draw();
    }, TIX);
}

function pause() {
    clearInterval(drawLooping);
    paused = true;
}

function seek(currentTime = 0) {
    if (paused) {
        time = currentTime * 1000;
        draw();
        return;
    }
    pause();
    play(currentTime);
}
