// Javascript runs once page is loaded
const bodyLoaded = () => {
    // Global variables
    const exit = document.getElementById('products')
    const products = document.getElementById('products')
    const product1 = document.getElementById('product1')
    const product2 = document.getElementById('product2')
    const product3 = document.getElementById('product3')
    let introEnded = false

    // Run code once images are loaded
    const imagesLoaded = () => {

        /**
         * Controls
         */

        // Main
        const duration = .65
        const ease = 'back.out(1)'
        const delay = duration / 1.5
        // Background
        const backgroundDuration = 1.25
        const backgroundEase = 'back.out(0.7)'
        // Animal
        const animalEase = 'back.out(0.9)'
        // Intro 
        const introDuration = .5
        const introEase = 'back.out(1)'
        const introDelay = introDuration / 1.5
        const endDuration = .6

        // Origins
        const logoOrigin = '35% 50%'
        const dateOrigin = '30% 90%'
        const ctaOrigin = '30% 85%'
        const priceOrigin = '58% 45%'

        // Hover
        const hoverScale = 1.025

        // Particles
        const particleAmount = 500
        const particleColor = '#00ffd9'
        const particleSize = 3
        const particleOpacity = .7

        /**
         * Animation
         */

        const tl = gsap.timeline()

        tl
            .to('.bg', {
                scale: 1,
                rotation: 0,
                ease: backgroundEase,
                duration: backgroundDuration,
            })
            .to('.butterfly', {
                scale: 1,
                x: 0,
                ease: animalEase,
                duration: duration,
            }, '<' + (backgroundDuration - duration))
            .to('.title', {
                scale: 1,
                x: '4%',
                opacity: 1,
                transformOrigin: logoOrigin,
                ease: ease,
                duration: duration,
            }, '<' + delay)

        for (let i = 1; i <= 3; i++) {
            if (i == 1) {
                tl
                    .to('.product' + i, {
                        scale: 1,
                        opacity: 1,
                        ease: introEase,
                        duration: introDuration,
                    }, '<' + delay)
                    .to('.product' + i + '-title', {
                        scale: 1,
                        opacity: 1,
                        ease: introEase,
                        duration: introDuration,
                        transformOrigin: priceOrigin
                    }, '<')
                    .to('.product' + i, {
                        scale: 0,
                        opacity: 0,
                        ease: introEase,
                        duration: introDuration,
                    }, '<' + (introDelay * 3))
                    .to('.product' + i + '-title', {
                        scale: 0,
                        opacity: 0,
                        ease: introEase,
                        duration: introDuration,
                        transformOrigin: priceOrigin
                    }, '<')
            } else {
                tl
                    .to('.product' + i, {
                        scale: 1,
                        opacity: 1,
                        ease: introEase,
                        duration: introDuration,
                    }, '<' + introDelay)
                    .to('.product' + i + '-title', {
                        scale: 1,
                        opacity: 1,
                        ease: introEase,
                        duration: introDuration,
                        transformOrigin: priceOrigin
                    }, '<')
                    .to('.product' + i, {
                        scale: 0,
                        opacity: 0,
                        ease: introEase,
                        duration: introDuration,
                    }, '<' + (introDelay * 3))
                    .to('.product' + i + '-title', {
                        scale: 0,
                        opacity: 0,
                        ease: introEase,
                        duration: introDuration,
                        transformOrigin: priceOrigin
                    }, '<')
            }
        }

        const addEndframeClass = () => {
            products.classList.add('endframe')
        }

        tl
            .call(addEndframeClass)
            .to('.title', {
                x: 0,
                ease: ease,
                duration: endDuration,
            }, '<' + (delay / 2))
            .to('.product1', {
                scale: 1,
                opacity: 1,
                ease: ease,
                duration: endDuration,
            }, '<')
            .to('.product1-title', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<')
            .to('.product2', {
                scale: 1,
                opacity: 1,
                ease: ease,
                duration: endDuration,
            }, '<' + delay)
            .to('.product2-title', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<')
            .to('.product3', {
                scale: 1,
                opacity: 1,
                ease: ease,
                duration: endDuration,
            }, '<' + delay)
            .to('.product3-title', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<')
            .to('.cta', {
                scale: 1,
                opacity: 1,
                transformOrigin: ctaOrigin,
                ease: ease,
                duration: endDuration,
            }, '<' + delay)
            .to('.legals', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<' + delay)
            .eventCallback("onComplete", () => {
                introEnded = true
                hoverAnimation()
            })

        /**
         * Background breath animation
         */
        const backgroundTl = gsap.timeline({
            defaults: {
                force3D: true
            }
        })

        backgroundTl
            .to('.bg', {
                scale: 1.02,
                ease: ease,
                duration: 3
            }, (backgroundDuration - duration) + .2)

        for (let i = 1; i <= 6; i++) {
            backgroundTl
                .to('.bg', {
                    scale: 1,
                    ease: backgroundEase,
                    duration: 3
                }, '>')
                .to('.bg', {
                    scale: 1.01,
                    ease: backgroundEase,
                    duration: 3
                }, '>')
        }

        /**
         * Hide Particles
         */

        const hideParticles = () => {
            gsap.to('.particles', {
                autoAlpha: 0,
                transition: .5
            })
        }

        setTimeout(function () {
            hideParticles()
        }, 29000)

        /**
         * Endframe on click
         */
        exit.addEventListener('click', () => {
            tl.progress(1).pause()
        })

        /**
         * Hover animation
         */
        const hoverAnimation = () => {

            const hoverDefaults = {
                scale: hoverScale,
                ease: ease,
                duration: duration / 2,
                force3D: true
            }

            const product1HoverTl = gsap.timeline({
                defaults: hoverDefaults
            })
            const product2HoverTl = gsap.timeline({
                defaults: hoverDefaults
            })
            const product3HoverTl = gsap.timeline({
                defaults: hoverDefaults
            })

            product1HoverTl
                .to('.product1', {}, '<')
                .to('.product1-title', {}, '<')
                .pause()

            product2HoverTl
                .to('.product2', {}, '<')
                .to('.product2-title', {}, '<')
                .pause()

            product3HoverTl
                .to('.product3', {}, '<')
                .to('.product3-title', {}, '<')
                .pause()

            product1.addEventListener('mouseover', () => {
                product1HoverTl.play()
            })
            product1.addEventListener('mouseleave', () => {
                product1HoverTl.reverse()
            })
            product2.addEventListener('mouseover', () => {
                product2HoverTl.play()
            })
            product2.addEventListener('mouseleave', () => {
                product2HoverTl.reverse()
            })
            product3.addEventListener('mouseover', () => {
                product3HoverTl.play()
            })
            product3.addEventListener('mouseleave', () => {
                product3HoverTl.reverse()
            })

            // const ctaHoverTl = gsap.timeline({
            //     defaults: hoverDefaults
            // })

            // ctaHoverTl
            //     .to('.cta', {
            //         transformOrigin: ctaOrigin,
            //     }, '<').pause()

            // exit.addEventListener('mouseover', () => {
            //     ctaHoverTl.play()
            // })
            // exit.addEventListener('mouseleave', () => {
            //     ctaHoverTl.reverse()
            // })

        }

        /**
         * Particles
         */
        particlesJS(
            "particles", {
                "particles": {
                    "number": {
                        "value": particleAmount
                    },
                    "color": {
                        "value": particleColor
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "opacity": {
                        "value": particleOpacity,
                        "random": true,
                        "anim": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": particleSize,
                        "random": true,
                        "anim": {
                            "enable": false,
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "detect_on": "window",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "resize": true
                    },
                    "modes": {
                        "bubble": {
                            "distance": 30,
                            "size": 0,
                            "duration": 2,
                            "opacity": 0,
                            "speed": 4
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                    }
                },
                "retina_detect": true
            });
    }

    /**
     * Image loader
     */
    let imgs = document.images
    let len = imgs.length
    let counter = 0

    const incrementCounter = () => {
        counter++;
        if (counter === len) {
            imagesLoaded()
        }
    }

    [].forEach.call(imgs, (img) => {
        if (img.complete)
            incrementCounter()
        else
            img.addEventListener('load', incrementCounter, false)
    })

}