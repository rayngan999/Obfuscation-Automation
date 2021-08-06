Vue.component('course-group', {

    //template dc Äá»nh nghÄ©a á» default
    template: '#course-group-template',
    props: ['groups', 'lessons', 'courseurl', 'auth', 'ul', 'type', 'lessonprogress', 'price', 'ejulimit'],

    data: function () {
        return {
            url: window.location.origin,
            stateType: this.type,
            listGroups: this.initGroups()
        };
    },

    methods: {

        //khá»i táº¡o láº¡i giÃ¡ trá» biáº¿n groups, gÃ¡n lessons
        initGroups: function(){

            vm = this;
            for (var i = 0; i < vm.groups.length; i++) {

                //khá»i táº¡o danh sÃ¡ch lessons rá»ng cho má»i group
                var lessons = [];
                var groupId = vm.groups[i].id;
                var countLesson = vm.lessons.length;

                for (var n = 0; n < countLesson; n++){
                    if (vm.lessons[n]['group_id'] == groupId) {
                        var newLesson = vm.lessons[n];
                        // Náº¿u bÃ i há»c ÄÃ³ cÃ³ option áº©n tiÃªu Äá» vÃ  há»c viÃªn chÆ°a mua khoÃ¡ há»c vÃ  khÃ´ng pháº£i bÃ i há»c thá»­
                        if (vm.lessons[n].price_option > 0 && !vm.ul && vm.lessons[n].is_secret == 1) {
                            var prefixTitle = vm.lessons[n].name.split(':')[0];
                            newLesson.name = prefixTitle + ': Ná»i dung bá» áº©n';
                        }
                        lessons.push(newLesson);
                    }
                }

                vm.groups[i].lessons = lessons;
            }

            return vm.groups;
        },

        printContent: function(text){
            return text.replace(/\*new/gi, '<span class="new-group">má»i</span>');
        },

        //in ra tráº¡ng thÃ¡i bÃ i há»c cá»§a khÃ³a há»c khÃ¡c N5
        printLessonStatus: function(price_option){

            vm = this;
            if (price_option == 0) return "<span class='free'>Há»c thá»­</span>";
            else if (vm.ul == 0) return "<i class='fa fa-lock pull-right'></i>";
        },

        //in ra tráº¡ng thÃ¡i cá»§a riÃªng N5
        printN5Status: function(feature){

            vm = this;
            if (feature == 1) return "<span class='free'>Há»c thá»­</span>";
            else if(vm.auth == 1) return "<span class='free'>Miá»n phÃ­</span>";
            else return "<i class='zmdi zmdi-info-outline pull-right' title='yÃªu cáº§u ÄÄng nháº­p'></i>";
        },
        // TÃ­nh toÃ¡n tiáº¿n Äá» hoÃ n thÃ nh bÃ i há»c
        // LÃ m trÃ²n Äáº¿n sá» tháº­p phÃ¢n thá»© 2
        calcProgress: function () {
            vm = this;
            var progressIds = _.map(vm.lessonprogress, 'lesson_id');
            vm.groups.map(function (group) {
                var groupProgress = 0;
                var lessons = _.get(group, 'lessons', []);
                if (!group.is_step) {
                    if (lessons.length > 0) {
                        lessons.forEach(function (lesson) {
                            if (progressIds.includes(lesson.id)) {
                                var progress = _.find(vm.lessonprogress, ['lesson_id', lesson.id]);
                                groupProgress += _.floor((progress.video_progress + progress.example_progress)/200, 2);
                            }
                        });
                        group.progress = _.floor(groupProgress/group.lessons.length, 2);
                    } else {
                        group.progress = 0;
                    }


                }
                return group;
            });
        },
        displayCheckMark: function(id) {
            vm = this;

            var progress = _.find(vm.lessonprogress, ['lesson_id', id]);
            if (progress) {
                var lessonProgress = 0;
                lessonProgress += _.floor((progress.video_progress + progress.example_progress)/200, 2);
                if (lessonProgress == 1) {
                    return "<span style='display: block; width: 10px; height: 10px; border-radius: 100%; background: #00FF00; box-shadow: 0px 0px 10px 0px #0ff; margin-right: 10px;'></span>"
                } else {
                    return "<span style='display: block; width: 10px; height: 10px; border-radius: 100%; background: #eee; margin-right: 10px;'></span>"
                }
            } else {
                return "<span style='display: block; width: 10px; height: 10px; border-radius: 100%; background: #eee; margin-right: 10px;'></span>"
            }
            // if (lesson == 1) {
            //     return "<i class='fa fa-lock pull-right'></i>"
            // }
        },
        // Hiá»n thá» progress bar
        displayProgress: function () {
            vm = this;
            var totalProgress =_.sumBy(vm.groups, function (obj) {
                return obj.progress
            })/vm.groups.length;

            // Hiá»n thá» há»c viÃªn ÄÃ£ cÃ³ há»c bÃ i há»c
            if (_.floor(totalProgress, 3) != 0 && _.floor(totalProgress, 2) == 0) totalProgress = 0.01;
            else totalProgress = _.floor(totalProgress, 2);

            // Test hiá»n thá» cá»§a thanh tiáº¿n Äá»
            // totalProgress = 0.12;

            // Tiáº¿n trÃ¬nh tá»ng, dáº¡ng ÄÆ°á»ng tháº³ng
            var bar = new ProgressBar.Line('#lesson__progress--bar', {
                strokeWidth: 4,
                easing: 'bounce',
                duration: 1400,
                color: '#00A338',
                trailColor: 'rgb(239, 255, 211)',
                trailWidth: 4,
                marginBottom: 0,
                text: {
                    style: {
                        // Text color.
                        // Default: same as stroke color (options.color)
                        color: '#FFF',
                        // position: 'absolute',
                        // right: '0',
                        // top: '0',
                        // padding: 0,
                        // margin: 0,
                        // transform: null
                    },
                    autoStyleContainer: true
                },
                from: {color: '#FFF'},
                to: {color: '#2b8202'},
                step: (state, bar) => {
                    bar.setText(Math.round(bar.value() * 100) + '%');
                }
            });
            bar.animate(totalProgress);  // Value from 0.0 to 1.0
            // Tiáº¿n trÃ¬nh cá»§a tá»«ng bÃ i há»c, dáº¡ng ÄÆ°á»ng trÃ²n
            vm.groups.forEach(function(group, index) {
                if (!group.is_step) {
                    var circleColor = '#EEE';
                    if (group.progress > 0 && group.progress < 0.25) {
                        circleColor = '#FF4500';
                    }
                    if (group.progress >= 0.25 && group.progress < 0.5) {
                        circleColor = '#FFD700';
                    }
                    if (group.progress >= 0.5 && group.progress < 0.75) {
                        circleColor = '#1E90FF';
                    }
                    if (group.progress >= 0.75) {
                        circleColor = '#ADFF2F';
                    }
                    var circle = new ProgressBar.Circle('#lesson__progress--circle-' + group.id, {
                        color: '#fff',
                        // This has to be the same size as the maximum width to
                        // prevent clipping
                        strokeWidth: 10,
                        trailColor: '#a7d75c',
                        trailWidth: 10,
                        easing: 'bounce',
                        duration: 1400,
                        text: {
                            autoStyleContainer: false,
                        },
                        from: { color: '#FFF', width: 12 },
                        to: { color: '#FFF', width: 12 },
                        // Set default step function for all animate calls
                        step: function(state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                            circle.path.setAttribute('stroke-width', state.width);

                            var value = Math.round(circle.value() * 100);
                            if (value == 100) {
                                circle.setText('<span>â</span>')
                            } else {
                                circle.setText(value + '%');
                            }
                        }
                    });
                    circle.text.style.fontSize = '10px';
                    circle.text.style.color = '#fff';
                    circle.set(group.progress);
                }
            })
        },
    },

    mounted: function () {
        var vm = this;
        if (!vm.stateType) {
            vm.stateType = "";
        }

        if((vm.ul || vm.price == 0) && vm.auth) {
            vm.calcProgress();
            vm.displayProgress();
        }
        // console.log("ejulimit", vm.ejulimit);
        // console.log("groups", vm.groups);
        // console.log("lessonprogress", vm.lessonprogress);
        // console.log("lessons", vm.lessons);
        // console.log("courseurl", vm.courseurl);
        // console.log("auth", vm.auth);
        // console.log("unlock", vm.ul);
    }

})

Vue.component('course-group-ld', {

    //template dc Äá»nh nghÄ©a á» default
    template: '#course-group-ld',
    props: ['groups', 'lessons', 'courseurl', 'auth', 'ul', 'type', 'lessonprogress', 'price'],

    data: function () {
        return {
            url: window.location.origin,
            stateType: this.type,
            listDeKyNang: [],
            listDeTongHop: [],
            tab: 1,
        };
    },

    created() {
        // this.$root.$refs.luyende = this;
    },

    methods: {

        //khá»i táº¡o láº¡i giÃ¡ trá» biáº¿n groups, gÃ¡n lessons
        initGroups: function(){

            vm = this;

            //thÃªm lessons vÃ o cÃ¡c groups
            for (var i = 0; i < vm.groups.length; i++) {

                //khá»i táº¡o danh sÃ¡ch lessons rá»ng cho má»i group
                var lessons = [];
                var groupId = vm.groups[i].id;
                var countLesson = vm.lessons.length;

                for (var n = 0; n < countLesson; n++){
                    if (vm.lessons[n]['group_id'] == groupId) {
                        var newLesson = vm.lessons[n];
                        // Náº¿u bÃ i há»c ÄÃ³ cÃ³ option áº©n tiÃªu Äá» vÃ  há»c viÃªn chÆ°a mua khoÃ¡ há»c vÃ  khÃ´ng pháº£i bÃ i há»c thá»­
                        if (vm.lessons[n].price_option > 0 && !vm.ul && vm.lessons[n].is_secret == 1) {
                            var prefixTitle = vm.lessons[n].name.split(':')[0];
                            newLesson.name = prefixTitle + ': Ná»i dung bá» áº©n';
                        }
                        lessons.push(newLesson);
                    }
                }

                vm.groups[i].lessons = lessons;

                if(vm.groups[i].type_ld == "ldkn"){
                    vm.listDeKyNang.push(vm.groups[i]);
                }
                if(vm.groups[i].type_ld == "ldth"){ //chá» load luyá»n Äá» ká»¹ nÄng
                    vm.listDeTongHop = [];
                    vm.listDeTongHop = vm.groups[i].lessons;
                }
            }

            // console.log("vm.listDeKyNang", vm.listDeKyNang);
            // console.log("vm.listDeTongHop", vm.listDeTongHop);

        },

        changeTab: function(tab){

            vm = this;
            vm.tab = tab;
            // console.log("switchTab component", vm.tab);
            vm.$forceUpdate(); //update láº¡i giao diá»n khi gá»i tá»« component ngoÃ i
        },

        printContent: function(text){
            return text.replace(/\*new/gi, '<span class="new-group">má»i</span>');
        },

        //in ra tráº¡ng thÃ¡i bÃ i há»c cá»§a khÃ³a há»c khÃ¡c N5
        printLessonStatus: function(price_option){

            vm = this;
            if (price_option == 0) return "<span class='free'>Há»c thá»­</span>";
            else if (vm.ul == 0) return "<i class='fa fa-lock pull-right'></i>";
        },

        //in ra tráº¡ng thÃ¡i cá»§a riÃªng N5
        printN5Status: function(feature){

            vm = this;
            if (feature == 1) return "<span class='free'>Há»c thá»­</span>";
            else if(vm.auth == 1) return "<span class='free'>Miá»n phÃ­</span>";
            else return "<i class='zmdi zmdi-info-outline pull-right' title='yÃªu cáº§u ÄÄng nháº­p'></i>";
        },
        
        displayCheckMark: function(id) {
            vm = this;

            var progress = _.find(vm.lessonprogress, ['lesson_id', id]);
            if (progress) {
                var lessonProgress = 0;
                lessonProgress += _.floor((progress.video_progress + progress.example_progress)/200, 2);
                if (lessonProgress == 1) {
                    return "<span style='display: block; width: 10px; height: 10px; border-radius: 100%; background: #00FF00; box-shadow: 0px 0px 10px 0px #0ff; margin-right: 10px;'></span>"
                } else {
                    return "<span style='display: block; width: 10px; height: 10px; border-radius: 100%; background: #eee; margin-right: 10px;'></span>"
                }
            } else {
                return "<span style='display: block; width: 10px; height: 10px; border-radius: 100%; background: #eee; margin-right: 10px;'></span>"
            }
            // if (lesson == 1) {
            //     return "<i class='fa fa-lock pull-right'></i>"
            // }
        },
    },

    mounted: function () {

        var vm = this;
        if (!vm.stateType) {
            vm.stateType = "";
        }

        if((vm.ul || vm.price == 0) && vm.auth) {
            // vm.calcProgress();
            // vm.displayProgress();
        }

        vm.initGroups();
    }

})

var delayTimer;
const driver = new Driver();

function replaceAscent(str){
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/Ã |Ã¡|áº¡|áº£|Ã£|Ã¢|áº§|áº¥|áº­|áº©|áº«|Ä|áº±|áº¯|áº·|áº³|áºµ/g, 'a');
  str = str.replace(/Ã¨|Ã©|áº¹|áº»|áº½|Ãª|á»|áº¿|á»|á»|á»/g, 'e');
  str = str.replace(/Ã¬|Ã­|á»|á»|Ä©/g, 'i');
  str = str.replace(/Ã²|Ã³|á»|á»|Ãµ|Ã´|á»|á»|á»|á»|á»|Æ¡|á»|á»|á»£|á»|á»¡/g, 'o');
  str = str.replace(/Ã¹|Ãº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, 'u');
  str = str.replace(/á»³|Ã½|á»µ|á»·|á»¹/g, 'y');
  str = str.replace(/Ä/g, 'd');
  return str;
};

var groupMenu = Vue.component('course-group-premium', {

    //template dc Äá»nh nghÄ©a á» default
    template: '#course-group-premium',
    props: ['categories', 'groups', 'lessons', 'lprogress', 'courseurl', 'auth', 'ul', 'price', 'focus'],

    data: function () {
        return {

            url: window.location.origin,
            currentStage: 1, //cháº·ng máº·c Äá»nh

            pickedCategory: null, //category Äang ÄÆ°á»£c chá»n
            listCategories: [], //danh sÃ¡ch category theo cháº·ng ÄÆ°á»£c chá»n
            listGroups: [], //danh sÃ¡ch group load theo cháº·ng vÃ  category
            guideLessons: [], //danh sÃ¡ch bÃ i há»c kiá»u hÆ°á»ng dáº«n

            totalPrecent: 0,
            progress: this.lprogress,

            key: '', //key tÃ¬m kiáº¿m
            results: [] //máº£ng chá»©a káº¿t quáº£ tÃ¬m kiáº¿m
        };
    },

    methods: {

        //khá»i táº¡o láº¡i giÃ¡ trá» biáº¿n groups, gÃ¡n lessons
        initData: function(){

            var vm = this;

            if(vm.auth && vm.courseurl == 'khoa-n5') vm.ul = 1;

            // console.log("focus", vm.focus);
            // console.log("progress", vm.progress);
            // console.log("all groups", vm.groups);

            if(vm.focus == null)
                vm.changeStage(1); //chá»n cháº·ng 1

            //váº¥n Äá» focus vÃ o bÃ i há»c
            else{

                vm.changeStage(vm.focus['stage']); //báº¥m vÃ o cháº·ng
                setTimeout(function(){
                    $("#ct-focus-"+ vm.focus['category']).click();
                    setTimeout(function(){
                        $("#click-group-"+ vm.focus['group']).click();
                        $(".lesson-item-"+ vm.focus['lesson']).addClass('active');
                    }, 10);
                }, 10);

            }

            //táº¡o bÃ i cho hÆ°á»ng dáº«n
            vm.initGuideList();

        },

        //tÃ¬m kiáº¿m bÃ i há»c theo tÃªn
        searchLessons: function(){

            vm = this;


            clearTimeout(delayTimer);
            delayTimer = setTimeout(function() {

                console.log("TÃ¬m kiáº¿m: ", vm.key);

                if(vm.key.length == 0){

                    driver.reset();
                    vm.results = [];
                } else if (vm.key.length > 0) {

                    driver.highlight('.focus-highlight');
                    vm.results = [];

                    for (var i = 0; i < vm.listGroups.length; i++) {
                        for (var n = 0; n < vm.listGroups[i].lessons.length; n++) {

                            var lowerName = replaceAscent(vm.listGroups[i].lessons[n].name.toLowerCase());
                            var lowerkey = replaceAscent(vm.key.toLowerCase());

                            if( (lowerName.indexOf(lowerkey) !== -1)) {
                                vm.listGroups[i].lessons[n].group_name = vm.listGroups[i].name;
                                vm.results.push(vm.listGroups[i].lessons[n]);
                            }
                            if(vm.results.length == 10) break;
                        }
                        if(vm.results.length == 10) break;
                    }

                    console.log(vm.results);
                }


            }, 500);

        },

        //xÃ³a tá»« khÃ³a tÃ¬m kiáº¿m
        clearSearch: function(){

            vm = this;
            vm.key = "";
            vm.results = [];
            driver.reset();

        },

        //tÃ­nh % cá»§a táº¥t cáº£ group
        calcGroupProgress: function(){

            vm = this;

            // console.log("focus", vm.focus);
            // console.log("progress", vm.progress);
            // console.log("all groups", vm.groups);

            //tÃ­nh luÃ´n % hoÃ n thÃ nh cá»§a táº¥t cáº£ group
            for (var i = 0; i < vm.groups.length; i++) {

                var sum = 0;
                for (var n = 0; n < vm.progress.length; n++) {
                    if(vm.groups[i].id == vm.progress[n].group_id){
                        sum += vm.progress[n].video_progress;
                        sum += vm.progress[n].example_progress;
                    }
                }

                //trÃ¡nh trÆ°á»ng há»£p chia cho 0 NaN
                if(vm.groups[i].get_all_lesson_count > 0)
                    sum =  Math.round(sum/vm.groups[i].get_all_lesson_count/2); //tÃ­nh ra %

                vm.groups[i].progress = sum;

            }
        },

        //chuyá»n cháº·ng
        changeStage: function(stage){

            var vm = this;

            //thay Äá»i giÃ¡ trá» stage
            vm.currentStage = stage;

            //khá»i táº¡o láº¡i group progress
            if(vm.ul && vm.auth) vm.calcGroupProgress();

            //khá»i táº¡o nhÃ³m category theo stage má»i
            var cts = [];
            for (var i = 0; i < vm.categories.length; i++)
                if(vm.categories[i].stage == stage) {
                    cts.push(vm.categories[i]);
                }
            vm.listCategories = cts;

            //thay Äá»i % tiáº¿n trÃ¬nh cá»§a cÃ¡c category
            if(vm.ul && vm.auth) vm.updateCategoryProgress();

            //chá»n category ÄÆ°á»£c active theo index
            if(vm.currentStage == 1) vm.focusCategory(1);
            else vm.focusCategory(0);

        },

        //chuyá»n category
        focusCategory: function(index){

            vm = this;

            //chá»n category ÄÆ°á»£c active
            vm.pickedCategory = vm.listCategories[index];

            //khá»i táº¡o danh sÃ¡ch groups má»i theo category ÄÆ°á»£c active
            var currentGroups = [];
            for (var i = 0; i < vm.groups.length; i++) {
                if(vm.groups[i].lesson_category_id == vm.pickedCategory.id){

                    //khá»i táº¡o danh sÃ¡ch lessons cho má»i group
                    var lessons = [];
                    var groupId = vm.groups[i].id;
                    var countLesson = vm.lessons.length;
                    for (var n = 0; n < countLesson; n++){
                        if (vm.lessons[n]['group_id'] == groupId)
                            lessons.push(vm.lessons[n]);
                    }
                    vm.groups[i].lessons = lessons;

                    currentGroups.push(vm.groups[i]); //thÃªm group vÃ o máº£ng
                }
            }

            vm.listGroups = currentGroups;

            // console.log('danh sÃ¡ch ct', vm.listCategories);
            // console.log('ct ÄÆ°á»£c chá»n ', vm.pickedCategory.title);
            // console.log("listGroups ", vm.listGroups);

            return;

        },

        initGuideList: function(){

            var categoryGuide = vm.categories[0];
            var groupGuide = null; //nhÃ³m cá»§a cÃ¡c bÃ i hÆ°á»ng dáº«n
            for (var i = 0; i < vm.groups.length; i++){
                if(vm.groups[i].lesson_category_id == categoryGuide.id){
                    groupGuide = vm.groups[i];
                    break
                }
            }

            var countLesson = vm.lessons.length;
            for (var i = 0; i < countLesson; i++){
                if (vm.lessons[i]['group_id'] == groupGuide.id)
                    vm.guideLessons.push(vm.lessons[i]);
            }

            //focus bÃ i há»c náº¿u bÃ i há»c náº±m trong guide list -> expand chá» hÆ°á»ng dáº«n
            if(vm.focus && vm.categories[0].id == vm.focus['category']){
                $(".guide-click").click();
            }

        },


        printContent: function(text){
            return text.replace(/\*new/gi, '<span class="new-group">má»i</span>');
        },

        printNameLesson: function(is_secret, price_option, name){

            // Náº¿u bÃ i há»c ÄÃ³ cÃ³ option áº©n tiÃªu Äá» vÃ  há»c viÃªn chÆ°a mua khoÃ¡ há»c vÃ  khÃ´ng pháº£i bÃ i há»c thá»­
            if (price_option > 0 && !vm.ul && is_secret == 1)
                return '<span style="opacity: .7">Ná»i dung bá» áº©n</span>';
            return name;

        },

        //in ra tráº¡ng thÃ¡i bÃ i há»c cá»§a khÃ³a há»c khÃ¡c N5
        printLessonStatus: function(price_option){

            vm = this;

            if (vm.ul == 0 && vm.courseurl != 'khoa-n5'){
                if (price_option == 0) return "<span class='free'>Há»c thá»­</span>";
                else return "<i class='fa fa-lock pull-right'></i>";
            }

            return;

        },

        displayCheckMark: function(lid) {

            vm = this;

            var progress = _.find(vm.progress, ['lesson_id', lid]);
            if (progress) {
                var check =  progress.video_progress + progress.example_progress;
                if (check >= 200) {
                    return "<i class='fa fa-check' style='color: #41A336;'></i>";
                }
                return "";
            }
            return "";
        },

        //in ra lá» trÃ¬nh cháº·ng
        updateCategoryProgress: function(){

            vm = this;

            // console.log('vm.listCategories', vm.listCategories);

            var html = "<h4>Cháº·ng "+ vm.currentStage +"</h4>";

            //bá» qua category hÆ°á»ng dáº«n
            var x = 0;
            if(vm.currentStage == 1) x=1;

            // in ra % cá»§a cÃ¡c category
            for (var i = x; i < vm.listCategories.length; i++) {

                var sum = 0;
                var totalGroup = 0;

                for (var n = 0; n < vm.groups.length; n++) {
                    if(vm.listCategories[i].id == vm.groups[n].lesson_category_id){
                        sum += vm.groups[n].progress;
                        totalGroup++;
                    }
                }

                //trÃ¡nh trÆ°á»ng há»£p chia cho 0 NaN
                if(totalGroup > 0)
                    sum =  Math.round(sum/totalGroup); //tÃ­nh ra %

                html += '<div class="ct-progress-item"><p>'+vm.listCategories[i].title+'<span>'+sum+'%</span></p><div class="pg100"><div class="pgdata" style="width: '+sum+'%;"></div></div></div>';
            }

            // console.log(html);
            $("#stage-bar").html(html);
        },

        totalProgressOfStage: function(stage){

            var tmpCT = [];

            // láº¥y ra cÃ¡c ct thuá»c cháº·ng
            for (var i = 0; i < vm.categories.length; i++)
                if(vm.categories[i].stage == stage) tmpCT.push(vm.categories[i]);

            var total = 0;

            // in ra % cá»§a cÃ¡c category
            for (var i = 0; i < tmpCT.length; i++) {

                var sum = 0;
                var countCtGroup = 0; //tá»ng group trong má»i category

                for (var n = 0; n < vm.groups.length; n++) {
                    if(tmpCT[i].id == vm.groups[n].lesson_category_id){
                        sum += vm.groups[n].progress;
                        countCtGroup++;
                    }
                }

                //trÃ¡nh trÆ°á»ng há»£p chia cho 0 NaN
                if(countCtGroup > 0){
                    sum =  Math.round(sum/countCtGroup); //tÃ­nh ra %
                    total += sum;
                }
            }

            // console.log("stage:"+ stage + " ---%:"+ total + "length:"+ tmpCT.length);

            if(tmpCT.length == 0) return 0;

            return Math.round(total/tmpCT.length);
        },


        //tÃ­nh tá»ng progress
        totalProgress: function(){

            vm = this;
            vm.totalPrecent = Math.round((vm.totalProgressOfStage(1) + vm.totalProgressOfStage(2) + vm.totalProgressOfStage(3)) / 3);
            $("#ldbar-total").attr("data-value", vm.totalPrecent);

            // console.log("tÃ­nh % tá»ng");

        }

    },

    mounted: function () {
        var vm = this;

        vm.initData();

        //chá» báº­t progress cho ngÆ°á»i dÃ¹ng ÄÃ£ mua & ÄÄng nháº­p
        if(vm.ul && vm.auth) vm.totalProgress();

    }

})

Vue.component('comment-fb', {
    template: '<div class="fb-comments" data-width="100%" :data-href="url" data-numposts="8"></div>',
    props: ['url']

})
Vue.component('item-course', {

    template: '#home-preview-template',

    props: ['course', 'lessons', 'authors'],

    data: function () {
        return {
            url: window.location.origin
        };
    },

    methods: {

        //láº¥y ra thÃ´ng tin author name theo id
        printAuthorName: function(id){

            vm = this;
            // console.log("táº¥t cáº£ tÃ¡c giáº£", vm.authors);

            //hÃ m tÃ¬m kiáº¿m object es6
            // let teacher = vm.authors.find(obj => obj.id == id);
            // if(teacher != null) return teacher.name;

            for(var i = 0; i < vm.authors.length ; i++){
                if(vm.authors[i].id == id) return vm.authors[i].name;
            }

            return null;
        }
    }

})
Vue.component('home-feedback', {

    template: '#home-feedback-template',

    props: ['feedbacks', 'users'],

    data: function () {
        return {
            url: window.location.origin,
            listFeedbacks: this.initFeedbacks()
        };
    },

    methods: {

        //khá»i táº¡o láº¡i giÃ¡ trá» biáº¿n groups, gÃ¡n lessons
        initFeedbacks: function(){

            vm = this;
            var feedbacks = [];
            for (var i = 0; i < vm.feedbacks.length; i++) {
                var userId = vm.feedbacks[i].user_id;
                vm.feedbacks[i].user = vm.findUser(userId);
                feedbacks.push(vm.feedbacks[i]); 
            }
            return feedbacks;
        },

        //tÃ¬m kiáº¿m user dá»±a trÃªn id
        findUser: function(id){

            vm = this;
            for (var i = 0; i < vm.users.length; i++){
                if (vm.users[i]['id'] == id){
                    return vm.users[i];
                }
            }
            return;
        }
    },

    mounted: function () {

        var vm = this;
        
        // console.log("listFeedbacks", vm.listFeedbacks);
        // console.log("users", vm.users);
    }

})

Vue.component("ht-select", {
  template: '#ht-template',
  props: {
    init_options: {
      required: true
    },
    init_selected: null,
    init_other_value: null,
  },
  watch: {
    selected: function(new_value, old_value) {
      if (new_value !== this.init_other_value) {
        this.$emit("change", new_value);
      }
    },
    other_value: function(new_value, old_value) {
      this.$emit("change", new_value);
    },
    init_selected:  function(new_value, old_value) {
      this.selected = new_value;
    }
  },
  data: function() {
    return {
      options: null,
      selected: null,
      other_value: null,
    };
  },
  methods: {
    getElement: function(value) {
      if (this.options == null) {
        return {text: ""}
      }
      for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].value === value) return this.options[i];
      }
      return null;
    },
    isContainValueIn: function(value) {
      for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].value === value) return true;
      }
      return false;
    }
  },
  mounted: function (){
    var vm = this;
    // Neu gia tri khoi tao khong nam trong danh sach cac key dua vao thi bat hien tai la
    // other va gan gia tri other do chinh la gia tri moi.
    this.options = JSON.parse(this.init_options);
    if(this.isContainValueIn(this.init_selected)) {
      this.selected = this.init_selected;
    } else {
      this.other_value = this.init_selected;
      this.selected = this.init_other_value;
    }
  }
})
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

//táº¡o hÃ m truyá»n tham trá»
function copyUser(){

  var newUser = {
    id: 0,
    avatar: null,
    name: "DÅ©ng Mori",
    email: "dungmori@gmail.com",
    username: null,
    birday: null,
    phone: "0969.86.84.85",
    nihongo: "N1",
    address: "19 Nguyá»n TrÃ£i Thanh XuÃ¢n HÃ  Ná»i",
    country: "Viá»t Nam"
  };

  return newUser;

}

//láº¥y ra giÃ¡ trá» params cá»§a url
function getParramValue(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

//hÃ m merge cmt vÃ  replies
function mergeCmt(cmt, replies){

    var countReplies = replies.length;
    for (var i = 0; i < cmt.length; i++) {

        //khá»i táº¡o danh sÃ¡ch reply rá»ng cho má»i cmt
        var tmpReplies = [];
        var cmtid = cmt[i].id;
        for (var n = 0; n < countReplies; n++){
            if (replies[n]['parent_id'] == cmtid)
                tmpReplies.push(replies[n]);
        }
        cmt[i].replies = tmpReplies;
    }
    return cmt;
}

//components hiá»n thá» comments
Vue.component('comments', {

    template: '#comment-template',

    props: ['meid', 'avatar', 'tbid', 'tbname', 'numPosts', 'background'],

    data: function () {
        return {

            url: window.location.origin, //ÄÆ°á»ng dáº«n host
            listComments: [],    //sanh sÃ¡ch cÃ¡c comments
            page: 1,             //trang thá»© máº¥y
            numPost: 15,
            ref: null, //nguá»n chuyá»n hÆ°á»ng (notice hoáº·c 0)

            showLoading: false,  //tráº¡ng thÃ¡i hiá»n thá» button táº£i thÃªm
            theEnd: false,       //thÃ´ng bÃ¡o háº¿t danh sÃ¡ch

            showLoadingUser: false,  //tráº¡ng thÃ¡i táº£i thÃ´ng tin ngÆ°á»i dÃ¹ng
            currentUser: copyUser(), //preview profile ngÆ°á»i dÃ¹ng

            adminActive: enableFIV, //kiá»m tra cÃ³ phiÃªn lÃ m viá»c cá»§a admin hay khÃ´ng true\false
            adminCurrentEditId: null,
            adminCurrentEditContent: null,

            showLoadingNewComment: false,

            previewImg: null, //ÄÆ°á»ng dáº«n xem trÆ°á»c áº£nh sáº½ up
        };
    },

    methods: {

        //in ra thÃ´ng tin email dáº¡ng ná»­a kÃ­n ná»­a há»
        printPrivateEmail: function(email){

          // console.log("Biáº¿n permission", enableFIV);

          if(email != "dungmori@gmail.com"){

            //náº¿u biáº¿n cho phÃ©p hiá»n thá» = true
            if(enableFIV && enableFIV == true) return email;
            else return "****"+ email.slice(4);
          }
          else
            return "dungmori@gmail.com";
        },

        //in ra thÃ´ng tin mobile dáº¡ng ná»­a kÃ­n ná»­a há»
        printPrivatePhone: function(phone){

          if(phone != "0969.86.84.85"){

             //náº¿u biáº¿n cho phÃ©p hiá»n thá» = true
            if(enableFIV && enableFIV == true) return phone;
            else return "*******"+ phone.slice(-5);
          }
          else
            return "0969.86.84.85";

        },

        //in ra thÃ´ng tin cÃ³ dáº¥u cÃ¡ch
        printInfo: function(info){

          var result = info;

          result = result.replace('<', '&#60;');
          result = result.replace('>', '&#62;');

          //xá»­ lÃ½ xuá»ng dÃ²ng
          result =  info.replace(new RegExp('\r?\n','g'), '<br />');

          var re = /(\(.*?)?\b((?:https?|ftp|file):\/\/[-a-z0-9+&@#\/%?=~_()|!:,.;]*[-a-z0-9+&@#\/%=~_()|])/ig;
          return result.replace(re, function(match, lParens, url) {
              var rParens = '';
              lParens = lParens || '';

              // Try to strip the same number of right parens from url
              // as there are left parens.  Here, lParenCounter must be
              // a RegExp object.  You cannot use a literal
              //     while (/\(/g.exec(lParens)) { ... }
              // because an object is needed to store the lastIndex state.
              var lParenCounter = /\(/g;
              while (lParenCounter.exec(lParens)) {
                  var m;
                  // We want m[1] to be greedy, unless a period precedes the
                  // right parenthesis.  These tests cannot be simplified as
                  //     /(.*)(\.?\).*)/.exec(url)
                  // because if (.*) is greedy then \.? never gets a chance.
                  if (m = /(.*)(\.\).*)/.exec(url) ||
                          /(.*)(\).*)/.exec(url)) {
                      url = m[1];
                      rParens = m[2] + rParens;
                  }
              }
              return lParens + "<a href='" + url + "' target='_blank'>" + url + "</a>" + rParens;
          });
        },

        //táº£i vá» cÃ¡c comments cho láº§n táº£i Äáº§u tiÃªn
        fetchlistComments: function() {

          var vm = this;

          //focus vÃ o comment ÄÆ°á»£c ÄÃ¡nh dáº¥u
          if(getParramValue("ref") != null) vm.ref = "notice";

          data = {
            id: vm.tbid,
            name: vm.tbname,
            numpost: vm.numPost,
            ref: vm.ref
          };
          $.post(window.location.origin +"/api/comments/comments-load-first", data, function(response, status){

            //gáº¯n replies vÃ o cmt cha
            vm.listComments = mergeCmt(response.comments, response.replies);

            // console.log("láº§n Äáº§u load", vm.listComments);

            //náº¿u ÄÃ£ háº¿t danh sÃ¡ch
            if(response.comments.length < vm.numPost) vm.theEnd = true;

            //áº©n biá»u tÆ°á»£ng loading
            vm.showLoading = false;

            //báº­t autosize
            setTimeout(function(){
              autosize(document.querySelectorAll('textarea'));
            }, 100);

            //thÃªm emoji
            setTimeout(function(){new EmojiPicker(); }, 100);

            // //focus vÃ o comment ÄÆ°á»£c ÄÃ¡nh dáº¥u
            // var focus = getParramValue("focus");
            // if(focus != null){
            //   console.log("focus: "+ focus);
            //   setTimeout(function(){

            //     $("#answer-reply-"+ focus).click();

            //     //cuá»n trang tá»i vá» trÃ­ dc focus
            //     $('html, body').animate({
            //         scrollTop: $("#answer-reply-"+ focus).offset().top - 120;
            //     }, 200);

            //   }, 500);
            // }



          });
        },

        //táº£i cÃ¡c pháº£n há»i
        fetchMoreComments: function(){

          vm = this;

          //hiá»n biá»u tÆ°á»£ng loading
          vm.showLoading = true;

          setTimeout(function(){
            data = {
              id  : vm.tbid,
              name: vm.tbname,
              numpost: vm.numPost,
              page: vm.page++
            };
            //console.log(data);
            $.post(window.location.origin +"/api/comments/comments-load-more", data, function(response, status){

              var tmp = mergeCmt(response.comments, response.replies);
              console.log("láº§n sau", tmp);

              //ná»i thÃªm máº£ng táº£i thÃªm
              vm.listComments = vm.listComments.concat(tmp);

              //náº¿u ÄÃ£ háº¿t danh sÃ¡ch
              if(response.comments.length < vm.numPost) vm.theEnd = true;

              //áº©n biá»u tÆ°á»£ng loading
              vm.showLoading = false;

              //báº­t autosize
              setTimeout(function(){
                autosize(document.querySelectorAll('textarea'));
              }, 100);


              //thÃªm emoji
              setTimeout(function(){new EmojiPicker(); }, 100);

            });

          }, 500);

          //console.log('táº£i thÃªm cÃ¡c bÃ¬nh luáº­n');

        },

        //táº£i thÃ´ng tin user
        fetchUserInfo: function(id){

          console.log('preview thÃ´ng tin ngÆ°á»i dÃ¹ng '+ id);
          vm = this;
          vm.showLoadingUser = false;

          //console.log(defaultUser);
          setTimeout(function(){
            if(id == 0) {

                vm.currentUser = copyUser();
                console.log(vm.currentUser);
                vm.showLoadingUser = true;
            }
            else{

              console.log(data);
              $.post(window.location.origin +"/api/profile/get-profile-by-id", {id: id}, function(response, status){

                console.log(response);
                vm.currentUser.id     = response.id;
                vm.currentUser.avatar = response.avatar;
                vm.currentUser.name   = response.name;
                vm.currentUser.email  = response.email;
                vm.currentUser.username = response.username;
                vm.currentUser.birday   = response.birday;
                vm.currentUser.phone    = response.phone;
                vm.currentUser.nihongo  = response.japanese_level;
                vm.currentUser.address  = response.address;
                vm.currentUser.country  = "Viá»t Nam";

                vm.showLoadingUser = true;

              });
            }
          }, 600);
        },

        //in ra Äá»nh dáº¡ng ngÃ y giá» Äáº¹p
        prettyDate: function(t){

            var d = new Date(t);
            // return d.getDate() + "/" +(d.getMonth()+1)+ "/" + d.getFullYear() + " " +d.getHours() + ":" + d.getMinutes();
            return d.toLocaleDateString('en-GB', { timeZone: 'Asia/Ho_Chi_Minh', day:"2-digit", month:"2-digit", year:"numeric"}) +" "+ t.substring(11,16);
        },

        //preview áº£nh ÄÃ­nh kÃ¨m khi ÄÄng bÃ¬nh luáº­n má»i
        previewImage: function(event) {

            vm = this;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#preview-image-cmt").html('<img src="' + e.target.result + '"/>');
                };
                reader.readAsDataURL(input.files[0]);
            }
        },

        //preview áº£nh ÄÃ­nh kÃ¨m khi ÄÄng reply má»i
        previewImageReply: function(event) {

            // console.log("event: ", event.target.id);
            // commentImagePicked64421

            //láº¥y ra comment id tá»« event
            var cmtId = event.target.id.split("commentImagePicked")[1];
            // console.log("cmtid: ", cmtId);

            vm = this;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#preview-image-cmt-"+ cmtId).html('<img src="'+e.target.result+'"/>');
                };
                reader.readAsDataURL(input.files[0]);
            }
        },

        //ÄÄng bÃ¬nh luáº­n má»i
        postNewComment: function(){

            vm = this;

            // bá» qua comment rá»ng
            if ($("#comment-content").val() == null || $("#comment-content").val() == undefined || $("#comment-content").val().trim() == "") {

                alert("Vui lÃ²ng nháº­p ná»i dung");
                return;
            }

            var file_data = $('#commentImagePicked').prop('files')[0];
            var form_data = new FormData();
            form_data.append('tbid', vm.tbid);
            form_data.append('tbname', vm.tbname);
            form_data.append('content', $("#comment-content").val());
            form_data.append('file', file_data);

            vm.showLoadingNewComment = true;

            setTimeout(function(){
                $.ajax({
                    url: window.location.origin +"/api/comments/add-new-comment",
                    type: "POST",
                    data: form_data,
                    contentType: false,
                    cache: false,
                    processData:false,
                    success: function(response){

                        console.log(response);
                        if(response == 'imagesize') alert("áº£nh vÆ°á»£t quÃ¡ dung lÆ°á»£ng cho phÃ©p");
                        else if (response == 'type') alert("Äá»nh dáº¡ng áº£nh khÃ´ng cho phÃ©p");
                        else{

                            response.replies = [];
                            vm.listComments.unshift(response);
                            $("#comment-content").val('');
                            $("#comment-content").css('height', '42px');
                            $("#preview-image-cmt").html(''); //xÃ³a áº£nh preview
                            $('#commentImagePicked').val(''); //reset láº¡i nÃºt chá»n áº£nh
                        }
                        vm.showLoadingNewComment = false;
                    }
                });
            }, 500);
        },

        //xÃ³a comment theo id
        delComment: function(id){
          setTimeout(function(){
            $.post(window.location.origin +"/api/comments/delete-comment", {id: id}, function(response, status){
              if(response == "success"){
                $("#cmt-item-"+id).fadeOut();
              }else{
                alert("thao tÃ¡c khÃ´ng há»£p lá»");
              }
            });
          }, 500);
        },

        //ÄÄng reply má»i
        postNewAnswer: function(parent_id){

            vm = this;

            // bá» qua comment rá»ng
            if ($("#reply-input-content-"+ parent_id).val() == null || $("#reply-input-content-"+ parent_id).val() == undefined || $("#reply-input-content-"+ parent_id).val().trim() == "") {
                alert("Vui lÃ²ng nháº­p ná»i dung");
                return;
            }

            var file_data = $('#commentImagePicked'+parent_id).prop('files')[0];
            var form_data = new FormData();
            form_data.append('tbid', vm.tbid);
            form_data.append('tbname', vm.tbname);
            form_data.append('parent_id', parent_id);
            form_data.append('content', $("#reply-input-content-"+ parent_id).val());
            form_data.append('file', file_data);

            setTimeout(function(){
                $.ajax({
                    url: window.location.origin +"/api/comments/add-new-reply",
                    type: "POST",
                    data: form_data,
                    contentType: false,
                    cache: false,
                    processData:false,
                    success: function(response){

                        console.log("reply má»i ", response);
                        if(response == 'imagesize') alert("áº£nh vÆ°á»£t quÃ¡ dung lÆ°á»£ng cho phÃ©p");
                        else if (response == 'type') alert("Äá»nh dáº¡ng áº£nh khÃ´ng cho phÃ©p");
                        else{

                            var indexOfComment = 0; //thá»© tá»± cá»§a comment Äang reply
                            for(var i=0; i<vm.listComments.length; i++) if(vm.listComments[i].id == parent_id)  indexOfComment = i;

                            //console.log(indexOfComment);
                            vm.listComments[indexOfComment].replies.push(response);
                            $("#reply-input-content-"+ parent_id).val('');
                            $("#reply-input-content-"+ parent_id).css('height', '42px');
                            $("#preview-image-cmt-"+ parent_id).html(''); //xÃ³a áº£nh preview
                            $('#commentImagePicked'+ parent_id).val(''); //reset láº¡i nÃºt chá»n áº£nh
                        }
                    }
                });
            }, 500);


              // setTimeout(function(){
              //   data = {
              //     tbid    : vm.tbid,
              //     tbname  : vm.tbname,
              //     parent_id : parent_id,
              //     content   : $("#reply-input-content-"+ parent_id).val()
              //   };
              //   $.post(window.location.origin +"/api/comments/add-new-reply", data, function(response, status){

              //     var indexOfComment = 0; //thá»© tá»± cá»§a comment Äang reply
              //     for(var i=0; i<vm.listComments.length; i++) if(vm.listComments[i].id == parent_id)  indexOfComment = i;

              //     //console.log(indexOfComment);
              //     vm.listComments[indexOfComment].replies.push(response);
              //     $("#reply-input-content-"+ parent_id).val('');

              //     // $("#comment-content").css('height', '42px');
              //     // vm.showLoadingNewComment = false;

              //   });
              // }, 500);
        },

        //xÃ³a reply theo id
        delReply: function(id){
          setTimeout(function(){
            $.post(window.location.origin +"/api/comments/delete-comment", {id: id}, function(response, status){
              if(response == "success"){
                $("#reply-item-"+id).fadeOut();
              }else{
                alert("thao tÃ¡c khÃ´ng há»£p lá»");
              }
            });
          }, 500);
        },

        //hÃ m admin sá»­a cmt
        editAdminComment: function(id, content){

            vm = this;
            // console.log("hiá»n sá»­a cmt", id);
            // console.log("hiá»n sá»­a cmt content", content);

            //gÃ¡n giÃ¡ trá» cáº§n sá»­a
            $("#edit-comment-area").text(content);
            $("#edit-comment-id").val(id);

        },

        //hÃ m lÆ°u láº¡i giÃ¡ trá» sá»­a
        saveAdminComment: function(){

            vm = this;

            var content = $("#edit-comment-area").val();
            var id = $("#edit-comment-id").val();

            console.log("lÆ°u giÃ¡ trá» id", id);
            console.log("lÆ°u giÃ¡ trá» má»i", content);

            $.post(window.location.origin +"/api/comments/edit-comment", {id: id, content: content}, function(response){
                if(response == "success"){
                    console.log("lÆ°u thÃ nh cÃ´ng");

                    //cáº­p nháº­t láº¡i giÃ¡ trá» trÃªn giao diá»n
                    $("#child-comment-content-"+ id).html(vm.printInfo(content));

                    $.fancybox.close();
                }else{
                    alert("lÆ°u tháº¥t báº¡i");
                }
            });
        },

        //cancel ÄÃ³ng popup náº¿u khÃ´ng muá»n sá»­a cmt
        cancelAdminComment: function(){
            $.fancybox.close();
        },


    },

    mounted: function () {

        //náº¿u lÃ  giao diá»n mobile chá» load 4 items
        if(screen.width < 800) this.numPost = 4;

        this.fetchlistComments();

        // //khi cÃ¢y DOM áº£o ÄÃ£ load xong
        // this.$nextTick(function () {

        //     //báº­t autosize
        //     setTimeout(function(){
        //       autosize(document.querySelectorAll('textarea'));
        //     }, 500);
        // })
    }

})
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

//táº¡o hÃ m truyá»n tham trá»
function copyUser(){

  var newUser = {
    id: 0,
    avatar: null,
    name: "DÅ©ng Mori",
    email: "dungmori@gmail.com",
    username: null,
    birday: null,
    phone: "0969.86.84.85",
    nihongo: "N1",
    address: "19 Nguyá»n TrÃ£i Thanh XuÃ¢n HÃ  Ná»i",
    country: "Viá»t Nam"
  };

  return newUser;

}

//láº¥y ra giÃ¡ trá» params cá»§a url
function getParramValue(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

//hÃ m merge cmt vÃ  replies
function mergeCmt(cmt, replies){

    var countReplies = replies.length;
    for (var i = 0; i < cmt.length; i++) {

        //khá»i táº¡o danh sÃ¡ch reply rá»ng cho má»i cmt
        var tmpReplies = [];
        var cmtid = cmt[i].id;
        for (var n = 0; n < countReplies; n++){
            if (replies[n]['parent_id'] == cmtid)
                tmpReplies.push(replies[n]);
        }
        cmt[i].replies = tmpReplies;
    }
    return cmt;
}

//components hiá»n thá» comments
Vue.component('comments-feedback', {

    template: '#comment-feedback-template',

    props: ['meid', 'avatar', 'tbid', 'tbname', 'numPosts', 'background'],

    data: function () {
        return {

            url: window.location.origin, //ÄÆ°á»ng dáº«n host
            listComments: [],    //sanh sÃ¡ch cÃ¡c comments
            page: 1,             //trang thá»© máº¥y
            numPost: 15,
            ref: null, //nguá»n chuyá»n hÆ°á»ng (notice hoáº·c 0)

            showLoading: false,  //tráº¡ng thÃ¡i hiá»n thá» button táº£i thÃªm
            theEnd: false,       //thÃ´ng bÃ¡o háº¿t danh sÃ¡ch

            showLoadingUser: false,  //tráº¡ng thÃ¡i táº£i thÃ´ng tin ngÆ°á»i dÃ¹ng
            currentUser: copyUser(), //preview profile ngÆ°á»i dÃ¹ng

            adminActive: enableFIV, //kiá»m tra cÃ³ phiÃªn lÃ m viá»c cá»§a admin hay khÃ´ng true\false
            adminCurrentEditId: null,
            adminCurrentEditContent: null,

            showLoadingNewComment: false,

            previewImg: null, //ÄÆ°á»ng dáº«n xem trÆ°á»c áº£nh sáº½ up
        };
    },

    methods: {

        //in ra thÃ´ng tin email dáº¡ng ná»­a kÃ­n ná»­a há»
        printPrivateEmail: function(email){

          // console.log("Biáº¿n permission", enableFIV);

          if(email != "dungmori@gmail.com"){

            //náº¿u biáº¿n cho phÃ©p hiá»n thá» = true
            if(enableFIV && enableFIV == true) return email;
            else return "****"+ email.slice(4);
          }
          else
            return "dungmori@gmail.com";
        },

        //in ra thÃ´ng tin mobile dáº¡ng ná»­a kÃ­n ná»­a há»
        printPrivatePhone: function(phone){

          if(phone != "0969.86.84.85"){

             //náº¿u biáº¿n cho phÃ©p hiá»n thá» = true
            if(enableFIV && enableFIV == true) return phone;
            else return "*******"+ phone.slice(-5);
          }
          else
            return "0969.86.84.85";

        },

        //in ra thÃ´ng tin cÃ³ dáº¥u cÃ¡ch
        printInfo: function(info){

          var result = info;

          result = result.replace('<', '&#60;');
          result = result.replace('>', '&#62;');

          //xá»­ lÃ½ xuá»ng dÃ²ng
          result =  info.replace(new RegExp('\r?\n','g'), '<br />');

          var re = /(\(.*?)?\b((?:https?|ftp|file):\/\/[-a-z0-9+&@#\/%?=~_()|!:,.;]*[-a-z0-9+&@#\/%=~_()|])/ig;
          return result.replace(re, function(match, lParens, url) {
              var rParens = '';
              lParens = lParens || '';

              // Try to strip the same number of right parens from url
              // as there are left parens.  Here, lParenCounter must be
              // a RegExp object.  You cannot use a literal
              //     while (/\(/g.exec(lParens)) { ... }
              // because an object is needed to store the lastIndex state.
              var lParenCounter = /\(/g;
              while (lParenCounter.exec(lParens)) {
                  var m;
                  // We want m[1] to be greedy, unless a period precedes the
                  // right parenthesis.  These tests cannot be simplified as
                  //     /(.*)(\.?\).*)/.exec(url)
                  // because if (.*) is greedy then \.? never gets a chance.
                  if (m = /(.*)(\.\).*)/.exec(url) ||
                          /(.*)(\).*)/.exec(url)) {
                      url = m[1];
                      rParens = m[2] + rParens;
                  }
              }
              return lParens + "<a href='" + url + "' target='_blank'>" + url + "</a>" + rParens;
          });
        },

        //táº£i vá» cÃ¡c comments cho láº§n táº£i Äáº§u tiÃªn
        fetchlistComments: function() {

          var vm = this;

          //focus vÃ o comment ÄÆ°á»£c ÄÃ¡nh dáº¥u
          if(getParramValue("ref") != null) vm.ref = "notice";

          data = {
            id: vm.tbid,
            name: vm.tbname,
            numpost: vm.numPost,
            ref: vm.ref
          };
          $.post(window.location.origin +"/api/comments/comments-load-first", data, function(response, status){

            for(var i=0; i<response.comments.length; i++){

                if(response.comments[i].ulikes == null || response.comments[i].ulikes == '') response.comments[i].ulikes = [];
                else response.comments[i].ulikes = response.comments[i].ulikes.split(',');
            }

            //gáº¯n replies vÃ o cmt cha
            vm.listComments = mergeCmt(response.comments, response.replies);

            // console.log("láº§n Äáº§u load", vm.listComments);

            //náº¿u ÄÃ£ háº¿t danh sÃ¡ch
            if(response.comments.length < vm.numPost) vm.theEnd = true;

            //áº©n biá»u tÆ°á»£ng loading
            vm.showLoading = false;

            //báº­t autosize
            setTimeout(function(){
              autosize(document.querySelectorAll('textarea'));
            }, 100);

            //thÃªm emoji
            setTimeout(function(){new EmojiPicker(); }, 100);

            // //focus vÃ o comment ÄÆ°á»£c ÄÃ¡nh dáº¥u
            // var focus = getParramValue("focus");
            // if(focus != null){
            //   console.log("focus: "+ focus);
            //   setTimeout(function(){

            //     $("#answer-reply-"+ focus).click();

            //     //cuá»n trang tá»i vá» trÃ­ dc focus
            //     $('html, body').animate({
            //         scrollTop: $("#answer-reply-"+ focus).offset().top - 120;
            //     }, 200);

            //   }, 500);
            // }



          });
        },

        //táº£i cÃ¡c pháº£n há»i
        fetchMoreComments: function(){

          vm = this;

          //hiá»n biá»u tÆ°á»£ng loading
          vm.showLoading = true;

          setTimeout(function(){
            data = {
              id  : vm.tbid,
              name: vm.tbname,
              numpost: vm.numPost,
              page: vm.page++
            };
            //console.log(data);
            $.post(window.location.origin +"/api/comments/comments-load-more", data, function(response, status){

                for(var i=0; i<response.comments.length; i++){

                    if(response.comments[i].ulikes == null || response.comments[i].ulikes == '') response.comments[i].ulikes = [];
                    else response.comments[i].ulikes = response.comments[i].ulikes.split(',');
                }

              var tmp = mergeCmt(response.comments, response.replies);
              console.log("láº§n sau", tmp);

              //ná»i thÃªm máº£ng táº£i thÃªm
              vm.listComments = vm.listComments.concat(tmp);

              //náº¿u ÄÃ£ háº¿t danh sÃ¡ch
              if(response.comments.length < vm.numPost) vm.theEnd = true;

              //áº©n biá»u tÆ°á»£ng loading
              vm.showLoading = false;

              //báº­t autosize
              setTimeout(function(){
                autosize(document.querySelectorAll('textarea'));
              }, 100);


              //thÃªm emoji
              setTimeout(function(){new EmojiPicker(); }, 100);

            });

          }, 500);

          //console.log('táº£i thÃªm cÃ¡c bÃ¬nh luáº­n');

        },

        likeCmt: function(cmtid){

            vm = this;

            // console.log("báº¥m like", cmtid);

            var i = _.findIndex(vm.listComments , ['id', cmtid]);
            // console.log("user ", vm.meid);

            //náº¿u ÄÃ£ like
            if(vm.listComments[i].ulikes.includes(vm.meid)){
                // $.notify("ÄÃ£ tá»n táº¡i", "warn" );

                console.log("unlike", cmtid);
                _.remove(vm.listComments[i].ulikes, function(e) {return e === vm.meid; }); //xÃ³a tÃ´i khá»i máº£ng ulikes

            //náº¿u chÆ°a tá»n táº¡i
            }else{

                console.log("like", cmtid);

                vm.listComments[i].ulikes.push(vm.meid); //thÃªm tÃ´i vÃ o máº£ng ulikes

            }

            setTimeout(function(){

                var data = {
                    cmtid: cmtid, 
                    ulikes: vm.listComments[i].ulikes.toString()
                };
                // console.log("data", data);
                $.post(vm.url +"/api/feedback-like-cmt", data, function(response){
                    if(response == "success") {
                        console.log("saved");
                        vm.$forceUpdate();
                    }
                });
            }, 500);
            
            console.log("báº¥m like", vm.listComments[i].ulikes);
        },

        //táº£i thÃ´ng tin user
        fetchUserInfo: function(id){

          console.log('preview thÃ´ng tin ngÆ°á»i dÃ¹ng '+ id);
          vm = this;
          vm.showLoadingUser = false;

          //console.log(defaultUser);
          setTimeout(function(){
            if(id == 0) {

                vm.currentUser = copyUser();
                console.log(vm.currentUser);
                vm.showLoadingUser = true;
            }
            else{

              console.log(data);
              $.post(window.location.origin +"/api/profile/get-profile-by-id", {id: id}, function(response, status){

                console.log(response);
                vm.currentUser.id     = response.id;
                vm.currentUser.avatar = response.avatar;
                vm.currentUser.name   = response.name;
                vm.currentUser.email  = response.email;
                vm.currentUser.username = response.username;
                vm.currentUser.birday   = response.birday;
                vm.currentUser.phone    = response.phone;
                vm.currentUser.nihongo  = response.japanese_level;
                vm.currentUser.address  = response.address;
                vm.currentUser.country  = "Viá»t Nam";

                vm.showLoadingUser = true;

              });
            }
          }, 600);
        },

        //in ra Äá»nh dáº¡ng ngÃ y giá» Äáº¹p
        prettyDate: function(t){

            var d = new Date(t);
            // return d.getDate() + "/" +(d.getMonth()+1)+ "/" + d.getFullYear() + " " +d.getHours() + ":" + d.getMinutes();
            return d.toLocaleDateString('en-GB', { timeZone: 'Asia/Ho_Chi_Minh', day:"2-digit", month:"2-digit", year:"numeric"}) +" "+ t.substring(11,16);
        },

        //preview áº£nh ÄÃ­nh kÃ¨m khi ÄÄng bÃ¬nh luáº­n má»i
        previewImage: function(event) {

            vm = this;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#preview-image-cmt").html('<img src="' + e.target.result + '"/>');
                };
                reader.readAsDataURL(input.files[0]);
            }
        },

        //preview áº£nh ÄÃ­nh kÃ¨m khi ÄÄng reply má»i
        previewImageReply: function(event) {

            // console.log("event: ", event.target.id);
            // commentImagePicked64421

            //láº¥y ra comment id tá»« event
            var cmtId = event.target.id.split("commentImagePicked")[1];
            // console.log("cmtid: ", cmtId);

            vm = this;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#preview-image-cmt-"+ cmtId).html('<img src="'+e.target.result+'"/>');
                };
                reader.readAsDataURL(input.files[0]);
            }
        },

        //ÄÄng bÃ¬nh luáº­n má»i
        postNewComment: function(){

            vm = this;

            // bá» qua comment rá»ng
            if ($("#comment-content").val() == null || $("#comment-content").val() == undefined || $("#comment-content").val().trim() == "") {

                alert("Vui lÃ²ng nháº­p ná»i dung");
                return;
            }

            var file_data = $('#commentImagePicked').prop('files')[0];
            var form_data = new FormData();
            form_data.append('tbid', vm.tbid);
            form_data.append('tbname', vm.tbname);
            form_data.append('content', $("#comment-content").val());
            form_data.append('file', file_data);

            vm.showLoadingNewComment = true;

            setTimeout(function(){
                $.ajax({
                    url: window.location.origin +"/api/comments/add-new-comment",
                    type: "POST",
                    data: form_data,
                    contentType: false,
                    cache: false,
                    processData:false,
                    success: function(response){

                        console.log(response);
                        if(response == 'imagesize') alert("áº£nh vÆ°á»£t quÃ¡ dung lÆ°á»£ng cho phÃ©p");
                        else if (response == 'type') alert("Äá»nh dáº¡ng áº£nh khÃ´ng cho phÃ©p");
                        else{

                            // console.log(response);

                            response.replies = [];
                            if(response.ulikes == null || response.ulikes == '') response.ulikes = [];
                            else response.ulikes = response.ulikes.split(',');

                            vm.listComments.unshift(response);
                            $("#comment-content").val('');
                            $("#comment-content").css('height', '42px');
                            $("#preview-image-cmt").html(''); //xÃ³a áº£nh preview
                            $('#commentImagePicked').val(''); //reset láº¡i nÃºt chá»n áº£nh
                        }
                        vm.showLoadingNewComment = false;
                    }
                });
            }, 500);
        },

        //xÃ³a comment theo id
        delComment: function(id){
          setTimeout(function(){
            $.post(window.location.origin +"/api/comments/delete-comment", {id: id}, function(response, status){
              if(response == "success"){
                $("#cmt-item-"+id).fadeOut();
              }else{
                alert("thao tÃ¡c khÃ´ng há»£p lá»");
              }
            });
          }, 500);
        },

        //ÄÄng reply má»i
        postNewAnswer: function(parent_id){

            vm = this;

            // bá» qua comment rá»ng
            if ($("#reply-input-content-"+ parent_id).val() == null || $("#reply-input-content-"+ parent_id).val() == undefined || $("#reply-input-content-"+ parent_id).val().trim() == "") {
                alert("Vui lÃ²ng nháº­p ná»i dung");
                return;
            }

            var file_data = $('#commentImagePicked'+parent_id).prop('files')[0];
            var form_data = new FormData();
            form_data.append('tbid', vm.tbid);
            form_data.append('tbname', vm.tbname);
            form_data.append('parent_id', parent_id);
            form_data.append('content', $("#reply-input-content-"+ parent_id).val());
            form_data.append('file', file_data);

            setTimeout(function(){
                $.ajax({
                    url: window.location.origin +"/api/comments/add-new-reply",
                    type: "POST",
                    data: form_data,
                    contentType: false,
                    cache: false,
                    processData:false,
                    success: function(response){

                        console.log("reply má»i ", response);
                        if(response == 'imagesize') alert("áº£nh vÆ°á»£t quÃ¡ dung lÆ°á»£ng cho phÃ©p");
                        else if (response == 'type') alert("Äá»nh dáº¡ng áº£nh khÃ´ng cho phÃ©p");
                        else{

                            var indexOfComment = 0; //thá»© tá»± cá»§a comment Äang reply
                            for(var i=0; i<vm.listComments.length; i++) if(vm.listComments[i].id == parent_id)  indexOfComment = i;

                            //console.log(indexOfComment);
                            vm.listComments[indexOfComment].replies.push(response);
                            $("#reply-input-content-"+ parent_id).val('');
                            $("#reply-input-content-"+ parent_id).css('height', '42px');
                            $("#preview-image-cmt-"+ parent_id).html(''); //xÃ³a áº£nh preview
                            $('#commentImagePicked'+ parent_id).val(''); //reset láº¡i nÃºt chá»n áº£nh
                        }
                    }
                });
            }, 500);


              // setTimeout(function(){
              //   data = {
              //     tbid    : vm.tbid,
              //     tbname  : vm.tbname,
              //     parent_id : parent_id,
              //     content   : $("#reply-input-content-"+ parent_id).val()
              //   };
              //   $.post(window.location.origin +"/api/comments/add-new-reply", data, function(response, status){

              //     var indexOfComment = 0; //thá»© tá»± cá»§a comment Äang reply
              //     for(var i=0; i<vm.listComments.length; i++) if(vm.listComments[i].id == parent_id)  indexOfComment = i;

              //     //console.log(indexOfComment);
              //     vm.listComments[indexOfComment].replies.push(response);
              //     $("#reply-input-content-"+ parent_id).val('');

              //     // $("#comment-content").css('height', '42px');
              //     // vm.showLoadingNewComment = false;

              //   });
              // }, 500);
        },

        //xÃ³a reply theo id
        delReply: function(id){
          setTimeout(function(){
            $.post(window.location.origin +"/api/comments/delete-comment", {id: id}, function(response, status){
              if(response == "success"){
                $("#reply-item-"+id).fadeOut();
              }else{
                alert("thao tÃ¡c khÃ´ng há»£p lá»");
              }
            });
          }, 500);
        },

        //hÃ m admin sá»­a cmt
        editAdminComment: function(id, content){

            vm = this;
            // console.log("hiá»n sá»­a cmt", id);
            // console.log("hiá»n sá»­a cmt content", content);

            //gÃ¡n giÃ¡ trá» cáº§n sá»­a
            $("#edit-comment-area").text(content);
            $("#edit-comment-id").val(id);

        },

        //hÃ m lÆ°u láº¡i giÃ¡ trá» sá»­a
        saveAdminComment: function(){

            vm = this;

            var content = $("#edit-comment-area").val();
            var id = $("#edit-comment-id").val();

            console.log("lÆ°u giÃ¡ trá» id", id);
            console.log("lÆ°u giÃ¡ trá» má»i", content);

            $.post(window.location.origin +"/api/comments/edit-comment", {id: id, content: content}, function(response){
                if(response == "success"){
                    console.log("lÆ°u thÃ nh cÃ´ng");

                    //cáº­p nháº­t láº¡i giÃ¡ trá» trÃªn giao diá»n
                    $("#child-comment-content-"+ id).html(vm.printInfo(content));

                    $.fancybox.close();
                }else{
                    alert("lÆ°u tháº¥t báº¡i");
                }
            });
        },

        //cancel ÄÃ³ng popup náº¿u khÃ´ng muá»n sá»­a cmt
        cancelAdminComment: function(){
            $.fancybox.close();
        },


    },

    mounted: function () {

        //náº¿u lÃ  giao diá»n mobile chá» load 4 items
        if(screen.width < 800) this.numPost = 4;

        this.fetchlistComments();

        // //khi cÃ¢y DOM áº£o ÄÃ£ load xong
        // this.$nextTick(function () {

        //     //báº­t autosize
        //     setTimeout(function(){
        //       autosize(document.querySelectorAll('textarea'));
        //     }, 500);
        // })
    }

})
Vue.filter('dateTime', function(value) {
    return moment(value).format('HH:mm DD/MM/YYYY');
});
Vue.filter('isPassed', function(value) {
    return value ? "Äáº¡t" : "ChÆ°a Äáº¡t";
});
Vue.filter('mark', function(value) {
    return value < 10 && value > 0 ? `0${value}` : value;
});
Vue.component('mixed-test', {
    template: '#mixed-test-template',
    props: ['tasks','lesson'],
    data: function () {
        return {
            url: window.location.origin,
            user_id: 0,
            questions: [],
            titles: [],
            result: {
                passed: [],
                failed: []
            },
            results: [],
            resultQuestions: [],
            selectedResult: {},
            viewHistory: 0,
            current: 0,
            currentQuestion: {},
            loading: false,
            answered: 0,
            mp3: null,
            playingMp3: false,
            state: "",
            autoplay: false,
            showOldResult: 0,
            playingQuestionAudio: false,
            playingAnswerAudio: false,
        };
    },
    mounted: function () {
        var vm = this;
        vm.userId = user_id;
        vm.nextWhenEnter();
        vm.checkAutoplay();
        vm.getQuestions();
    },
    watch: {
        current: function (val) {
            var vm = this;
            if (vm.mp3) {
                vm.pauseAudio();
                if (vm.autoplay && vm.questions[val].question_audio) {
                    setTimeout(function () {
                        vm.playAudio(vm.questions[val].question_audio);
                    }, 30);
                }
            }
        }
    },
    computed: {

    },
    methods: {
        getResults: function() {
            var vm = this;

            var lessonId = vm.tasks[0].lesson_id;
            var data = {
                lessonId: lessonId
            };
            $.post(vm.url + "/api/quiz/get-results", data, function (res) {
                if (res.code === 200) {
                    vm.resultQuestions = res.questions.map(function (question) {
                        return question;
                    });
                    vm.results = res.data.map(function (result) {
                        result.data = JSON.parse(result.data);
                        return result;
                    });
                    vm.processResults(vm.resultQuestions);
                    vm.showSelectedResult(vm.results[0]);
                    vm.showOldResult = 1;
                }
            });
        },
        showSelectedResult: function(result) {
            vm = this;
            vm.selectedResult = result;
            vm.showOldResult = 1;
            vm.resultQuestions = vm.resultQuestions.map(function (question) {
                if (question.type === 11) {
                    question.sortedAnswers = [];
                    vm.selectedResult.data[question.id].forEach(function (id) {
                        if (_.find(question.answers, {'id': parseInt(id)})) {
                            question.sortedAnswers.push(_.find(question.answers, {'id': parseInt(id)}));
                        }
                    });
                }
                return question;
            });
        },
        checkAutoplay: function() {
            vm = this;
            var settings = {};
            var cookies = localStorage.getItem('quiz_settings_' + vm.userId);
            if (cookies) {
                settings = JSON.parse(cookies);
                vm.autoplay = settings.autoplay;
            } else {
                settings = {
                    autoplay: false
                };
                // setCookie("quiz_settings", JSON.stringify(settings), 30);
                localStorage.setItem("quiz_settings_" + vm.userId, JSON.stringify(settings));
            }
        },
        setProcessCookie: function () {
            var setCookieQuestions = vm.questions.map(function (question) {
                return {
                    a: question.answer, // answer
                    ad: question.answered, // answered
                    ca: { // currentAnswer
                        id: question.currentAnswer.id,
                        grade: question.currentAnswer.grade
                    },
                    bs: question.blocks, // block
                    abls: question.answerBlocks, // answerBlocks
                    i: question.id, // id
                    c: question.correct, // correct
                    r: question.resultId // result
                };
            });
            // setCookie("quiz_process_" + vm.tasks[0].lesson_id, JSON.stringify(setCookieQuestions), 30);
            localStorage.setItem("quiz_process_"  + vm.userId + "_" + vm.tasks[0].lesson_id, JSON.stringify(setCookieQuestions));
        },
        nextQuestion: function () {
            var vm = this;
            vm.current++;
            vm.currentQuestion = vm.questions[vm.current];
        },
        getQuestions: function () {
            var vm = this;
            vm.loading = true;
            var lessonId = vm.tasks[0].lesson_id;

            $.post(window.location.origin + "/api/quiz/questions", {lesson_id: lessonId}, function (response) {

                vm.questions = response.data.map(function (question) {
                    question.currentAnswer = {};
                    question.currentAnswers = [];
                    question.answers.forEach(function (answer) {
                        question.currentAnswers.push(null);
                    });
                    question.answered = 0;
                    question.longgggg = 0;
                    question.correct = 0;
                    question.answer = {};
                    question.answers.forEach(function (answer) {
                        if (answer.value.length > 17) {
                            question.longgggg = 1;
                        }
                        return answer;
                    });
                    return question;
                });

                vm.nextLessonUrl = response.next_url;
                vm.titles = response.titles;
                vm.current = 0;
                vm.currentQuestion = vm.questions[vm.current];
                vm.processQuestions(vm.questions);
                vm.getCurrentProcess();
                vm.state = 'testing';
                vm.loading = false;
                if (vm.autoplay && vm.questions[0].question_audio) {
                    setTimeout(function () {
                        vm.playAudio(vm.questions[0].question_audio);
                    },30);
                }
            });
        },
        getCurrentProcess: function () {
            var processCookie = localStorage.getItem('quiz_process_'  + vm.userId + '_' + vm.tasks[0].lesson_id);
            if (processCookie) {
                var process = JSON.parse(processCookie);
                vm.questions = vm.questions.map(function (question, index) {
                    var match = _.find(process, {"i": question.id});
                    if (match) {
                        question.answer = match.a ? match.a : {};
                        question.answered = match.ad;
                        question.currentAnswer = match.ca;
                        question.currentAnswer.grade = match.ca.grade;
                        question.blocks = match.bs;
                        question.answerBlocks = match.abls;
                        question.correct = match.c;
                        question.resultId = match.r;
                    }
                    if (question.answered) {
                        vm.current = index;
                    }
                    return question;
                });
            }
        },

        processResults: function(questions) {
            vm = this;
            var regexAnswerAudio = /\{\!(.*?)\!\}/;
            var regexQuestionAudio = /\{\?(.*?)\?\}/;
            var regexHidden = /\{\*(.*?)\*\}/;
            var regexGap = /\[\[(.*?)\]\]/;
            var regexStar = /\[\*(.*?)\*\]/;
            questions.forEach(function (question) {
                question.mask = question.value;
                question.answered = 0;
                if (regexAnswerAudio.exec(question.mask)) {
                    question.answer_audio = _.trim(regexAnswerAudio.exec(question.value)[1].replace(/&nbsp;/gi, '').replace(/%20/g, ''));
                    question.mask = question.mask.replace(regexAnswerAudio, "");
                }
                while (regexAnswerAudio.exec(question.mask)) {
                    question.answer_audio = _.trim(regexAnswerAudio.exec(question.mask)[1].replace(/&nbsp;/gi, '').replace(/%20/g, ''));
                    question.mask = question.mask.replace(regexAnswerAudio, "");
                }
                if (regexQuestionAudio.exec(question.mask)) {
                    question.question_audio = _.trim(regexQuestionAudio.exec(question.value)[1].replace(/&nbsp;/gi, '').replace(/%20/g, ''));
                    question.mask = question.mask.replace(regexQuestionAudio, "");
                }
                while (regexQuestionAudio.exec(question.mask)) {
                    question.question_audio = _.trim(regexQuestionAudio.exec(question.mask)[1].replace(/&nbsp;/gi, '').replace(/%20/g, ''));
                    question.mask = question.mask.replace(regexQuestionAudio, "");
                }
                if (regexHidden.exec(question.mask)) {
                    question.hidden = _.trim(regexHidden.exec(question.value)[1]);
                    question.mask = question.mask.replace(regexHidden, `<span class="text-success text-bold">${question.hidden}</span>`);
                }
                while (regexHidden.exec(question.mask)) {
                    question.hidden = _.trim(regexHidden.exec(question.mask)[1]);
                    question.mask = question.mask.replace(regexHidden, `<span class="text-success text-bold">${question.hidden}</span>`);
                }
                if (regexGap.exec(question.mask)) {
                    question.hidden = _.trim(regexGap.exec(question.value)[1]);
                    question.mask = question.mask.replace(regexGap, `<span class="text-success text-bold">${question.hidden}</span>`);
                }
                while (regexGap.exec(question.mask)) {
                    question.hidden = _.trim(regexGap.exec(question.mask)[1]);
                    question.mask = question.mask.replace(regexGap, `<span class="text-success text-bold">${question.hidden}</span>`);
                }
                if (regexStar.exec(question.mask)) {
                    question.hidden = _.trim(regexStar.exec(question.value)[1]);
                    question.mask = question.mask.replace(regexStar, `<span class="text-success text-bold">${question.hidden}</span>`);
                }
                while (regexStar.exec(question.mask)) {
                    question.hidden = _.trim(regexStar.exec(question.mask)[1]);
                    question.mask = question.mask.replace(regexStar, `<span class="text-success text-bold">${question.hidden}</span>`);
                }
                // if (question.type === 11) {
                //     question.blocks = question.mask.split(/\s+/);
                //     question.answerBlocks = question.mask.split(/\s+/);
                //     question.gapMap = [];
                //     question.blocks.forEach(function (val, index) {
                //         if (val === "____") {
                //             question.gapMap.push(index);
                //         }
                //     });
                // }
                return question;
            });
        },

        processQuestions: function (questions) {
            vm = this;
            vm.titles.forEach(function (title) {
                questions.forEach(function (question) {
                    if (question.sort > title.sort) {
                        question.section = title.value;
                    }
                    return question;
                });
            });
            var regexAnswerAudio = /\{\!(.*?)\!\}/;
            var regexQuestionAudio = /\{\?(.*?)\?\}/;
            var regexHidden = /\{\*(.*?)\*\}/;
            questions.forEach(function (question) {
                question.mask = question.value;
                question.answered = 0;
                if (regexAnswerAudio.exec(question.mask)) {
                    question.answer_audio = _.trim(regexAnswerAudio.exec(question.value)[1].replace(/&nbsp;/gi, '').replace(/%20/g, ''));
                    question.mask = question.mask.replace(regexAnswerAudio, "");
                }
                while (regexAnswerAudio.exec(question.mask)) {
                    question.answer_audio = _.trim(regexAnswerAudio.exec(question.mask)[1].replace(/&nbsp;/gi, '').replace(/%20/g, ''));
                    question.mask = question.mask.replace(regexAnswerAudio, "");
                }
                if (regexQuestionAudio.exec(question.mask)) {
                    question.question_audio = _.trim(regexQuestionAudio.exec(question.value)[1].replace(/&nbsp;/gi, '').replace(/%20/g, ''));
                    question.mask = question.mask.replace(regexQuestionAudio, "");
                }
                while (regexQuestionAudio.exec(question.mask)) {
                    question.question_audio = _.trim(regexQuestionAudio.exec(question.mask)[1].replace(/&nbsp;/gi, '').replace(/%20/g, ''));
                    question.mask = question.mask.replace(regexQuestionAudio, "");
                }
                if (regexHidden.exec(question.mask)) {
                    question.hidden = _.trim(regexHidden.exec(question.value)[1]);
                    question.mask = question.mask.replace(regexHidden, "____");
                }
                while (regexHidden.exec(question.mask)) {
                    question.hidden = _.trim(regexHidden.exec(question.mask)[1]);
                    question.mask = question.mask.replace(regexHidden, "____");
                }
                if (question.type === 11) {
                    question.blocks = question.mask.split(/\s+/);
                    question.answerBlocks = question.mask.split(/\s+/);
                    question.gapMap = [];
                    question.blocks.forEach(function (val, index) {
                        if (val === "____" || val === "__â__") {
                            question.gapMap.push(index);
                        }
                        if (val === "__â__") {
                            question.starIndex = index;
                        }
                    });
                }
                return question;
            });
        },
        checkQuestion: function (question) {
            vm = this;
            var lessonId = vm.tasks[0].lesson_id;
            if (question.type === 10 && question.currentAnswer.id) {
                var data = {
                    qid: question.id,
                    aid: question.currentAnswer.id,
                    lid: lessonId
                };
                $.post(vm.url + '/api/quiz/check-answer-quiz', data, function (res) {
                    if (res.code == 200) {
                        question.answers = question.answers.map(function (answer) {
                            res.data.forEach(function (item) {
                                if (answer.id === item.id) {
                                    answer.grade = parseInt(item.grade);
                                }
                                if (parseInt(item.grade) > 0) {
                                    vm.currentQuestion.answer = item;
                                    question.answer = item;
                                }
                            });
                            return answer;
                        });
                        question.correct = (question.currentAnswer.id === question.answer.id) ? 1 : 0;
                        vm.saveResult(data);
                        // console.log(question);
                        question.answered = 1;
                        vm.setProcessCookie();
                    }
                });

            }
            if (question.type === 11 && !question.currentAnswers.includes(null)) {
                var data = {
                    qid: question.id,
                    as: question.currentAnswers,
                    lid: lessonId,
                    sid: question.starId
                };
                $.post(vm.url + '/api/quiz/check-answer-gap-fill', data, function (res) {
                    if (res.code === 200) {
                        question.currentAnswers.forEach(function (a, index) {
                            var block = question.blocks[question.gapMap[index]];
                            var blockClass = (a === res.data[index].id) ? "quiz__body--content-block-correct" : "quiz__body--content-block-wrong";
                            question.blocks[question.gapMap[index]] = `<span class="quiz__body--content-block ${blockClass}">${block}</span>`;
                        });
                        question.correct = 1;
                        res.data.forEach(function (item, index) {
                            question.answerBlocks[question.gapMap[index]] = item.value;
                            if (item.id !== question.currentAnswers[index]) {
                                question.correct = 0;
                            }
                        });
                        vm.saveResult(data);
                        question.answered = 1;
                        vm.setProcessCookie();
                    }
                });
            }
        },

        saveResult: function(payload) {
            vm = this;

            var rid = undefined;
            vm.questions.forEach(function (q) {
                if (!_.isNil(q.resultId)) {
                    rid = q.resultId;
                }
            });
            var data = {
                ...payload,
                rid: rid
            };
            $.post(vm.url + '/api/quiz/save-result', data, function (res) {
                vm.questions = vm.questions.map(function (question) {
                    question.resultId = res.data;
                    return question;
                });
                vm.setProcessCookie();
            });
        },

        setAnswer: function (question, answer) {
            vm = this;

            switch (question.type) {
                case 10:
                    vm.questions = vm.questions.map(function (q) {
                        if (question.id === q.id) {
                            q.currentAnswer = answer;
                            q.currentAnswer.grade = parseInt(answer.grade);
                        }
                        return q;
                    });
                    break;
                case 11:
                    vm.questions = vm.questions.map(function (q) {
                        if (question.id === q.id) {
                            var idx = 0;
                            if (q.currentAnswers.indexOf(answer.id) > -1) {
                                var answerIdx = q.currentAnswers.indexOf(answer.id);
                                q.currentAnswers[answerIdx] = null;
                                idx = answerIdx;
                                vm.fillTheGap(q, idx, answer);
                            } else {
                                var nullIdx = q.currentAnswers.indexOf(null);
                                q.currentAnswers[nullIdx] = answer.id;
                                idx = nullIdx;
                                vm.fillTheGap(q, idx, answer);
                            }

                        }
                        return q;
                    });
                    break;
                default:
                    vm.questions = vm.questions.map(function (q) {
                        if (question.id === q.id) {
                            q.currentAnswer = answer;
                            q.currentAnswer.grade = parseInt(answer.grade);
                        }
                        return q;
                    });
            }
            vm.checkQuestion(question)
        },

        fillTheGap: function (question, index, answer) {
            vm = this;
            if (question.blocks[question.gapMap[index]] === "__â__"){
                question.starId = answer.id;
            }
            if (question.blocks[question.gapMap[index]] === "____" || question.blocks[question.gapMap[index]] === "__â__"){
                question.blocks[question.gapMap[index]] = ` ${answer.value} `;
            } else {
                if (question.gapMap[index] === question.starIndex) {
                    question.blocks[question.gapMap[index]] = "__â__";
                } else {
                    question.blocks[question.gapMap[index]] = "____";
                }
            }

        },

        setAutoplay: function(autoplay) {
            vm = this;

            if(!autoplay) {
                vm.pauseAudio();
            }
            var settings = {
                autoplay: autoplay
            };
            vm.autoplay = autoplay;
            localStorage.setItem("quiz_settings_"  + vm.userId, JSON.stringify(settings));
        },

        playAudio: function (audio, param) {
            // console.log("click play audio", audio);
            var vm = this;

            vm.playingQuestionAudio = false;
            vm.playingAnswerAudio = false;
            vm[param] = true;
            // if(vm.mp3 == null) vm.mp3 = new Audio(vm.url + '/cdn/audio/' + audio);
            if(vm.mp3 == null) vm.mp3 = new Audio('https://mp3.dungmori.com/' + audio);
            else{
                vm.mp3.pause();
                vm.mp3.currentTime = 0;
                vm.mp3 = new Audio('https://mp3.dungmori.com/' + audio);
                // vm.mp3 = new Audio(vm.url + '/cdn/audio/' + audio);
            }
            vm.mp3.play();
            vm.playingMp3 = true;
        },

        // pause audio trong flashcards
        pauseAudio: function () {
            var vm = this;
            vm.mp3.pause();
            vm.mp3.currentTime = 0;
            vm.playingMp3 = false;
        },

        clearCookie: function () {
            var vm = this;
            var setCookieQuestions = [];
            localStorage.removeItem("quiz_process_" +  + vm.userId + '_' + vm.tasks[0].lesson_id);
        },

        showResult: function () {
            var vm = this;
            var passed = [];
            var failed = [];

            vm.clearCookie();
            vm.getResults();

            vm.viewHistory = 0;
            var resultText = '';
            passed = vm.questions.filter(function (question) {
                return question.correct === 1;
            });
            failed = vm.questions.filter(function (question) {
                return question.correct === 0;
            });
            var sentences = {
                low: [
                    "Má»i sai láº§m Äá»u pháº£i tráº£ giÃ¡. Náº¿u váº¥p ngÃ£ pháº£i tá»± Äá»©ng lÃªn. Lá»¥c lá»i láº¡i kiáº¿n thá»©c bÃ i há»c Äá» sáºµn sÃ ng thá»­ sá»©c má»t láº§n ná»¯a báº¡n nhÃ©!",
                    "PhÃ­a sau má»t láº§n thÃ nh cÃ´ng lÃ  cáº£ ngÃ n tháº¥t báº¡i. Xem láº¡i bÃ i há»c má»t lÆ°á»£t Äá» tá»± tin khi lÃ m bÃ i hÆ¡n báº¡n nha!!"
                ],
                medium: [
                    "Báº¡n ÄÃ£ náº¯m ÄÆ°á»£c kha khÃ¡ kiáº¿n thá»©c rá»i ÄÃ³! Tuy nhiÃªn cáº§n pháº£i ná» lá»±c hÆ¡n ná»¯a. Xem láº¡i bÃ i há»c má»t lÆ°á»£t Äá» xem báº¡n cÃ³ bá» lá»¡ Äiá»u gÃ¬ khÃ´ng nhÃ©!",
                    "Kiáº¿n thá»©c lÃ  káº¿t quáº£ cá»§a sá»± váº­n dá»¥ng vÃ  láº·p láº¡i liÃªn tá»¥c. Má»i láº§n xem láº¡i bÃ i há»c báº¡n sáº½ khÃ¡m phÃ¡ ra nhiá»u thá»© ÄÃ³!"
                ],
                high: [
                    "Tiáº¿c quÃ¡! Má»t chÃºt ná»¯a thÃ´i lÃ  báº¡n ÄÃ£ Äáº¡t Äiá»m tuyá»t Äá»i rá»i! HÃ­t má»t hÆ¡i tháº­t sÃ¢u vÃ  thá»­ thÃªm má»t láº§n ná»¯a nhÃ©?",
                    "Kiáº¿n thá»©c cá»§a báº¡n ráº¥t tuyá»t vá»i! Báº¡n ÄÃ£ sáºµn sÃ ng chinh phá»¥c Äá»nh cao vÃ o láº§n sau chÆ°a?",
                ],
                done: [
                    "ChÃºc má»«ng! ChÃºc má»«ng! HÃ£y tá»± thÆ°á»ng cho báº£n thÃ¢n vÃ  sáºµn sÃ ng cho nhá»¯ng kiáº¿n thá»©c má»i nÃ o!",
                    "Báº¡n ÄÃ£ cÃ³ má»t bÆ°á»c tiáº¿n ráº¥t dÃ i ÄÃ³! Liá»u báº¡n cÃ³ khao khÃ¡t khÃ¡m phÃ¡ thÃªm kiáº¿n thá»©c cÃ¹ng DÅ©ng Mori khÃ´ng nÃ o?",
                ]
            };
            var process = passed.length/vm.questions.length;
            switch (true) {
                case process < 0.5:
                    resultText = sentences.low[_.random(0, sentences.low.length - 1)];
                    break;
                case 0.5 <= process && process < 0.9:
                    resultText = sentences.medium[_.random(0, sentences.medium.length - 1)];
                    break;
                case 0.9 <= process && process < 1:
                    resultText = sentences.high[_.random(0, sentences.high.length - 1)];
                    break;
                case process == 1:
                    resultText = sentences.done[_.random(0, sentences.done.length - 1)];
                    break;
                default:
                    resultText = "ChÃºc má»«ng báº¡n ÄÃ£ hoÃ n thÃ nh bÃ i test!";
            }

            vm.result = {
                passed: passed,
                failed: failed,
                resultText: resultText
            };
            vm.state = 'finished';
        },

        reviewAnswer: function () {
            var vm = this;

            vm.state = 'testing';
            vm.current = 0;
        },

        testAgain: function () {
            vm = this;

            vm.clearCookie();
            vm.getQuestions();
        },

        end: function () {
            vm  = this;

            vm.state = 'end';
        },

        nextWhenEnter: function () {
            vm = this;
            window.addEventListener('keyup', function(event) {
                if (event.key == 'Enter') {
                    vm.$refs.navBtn[0].click();
                }
            });
        },

        saveExamProgress: function () {
            vm = this;

            $.post(window.location.origin +"/api/lesson/progress/save", saveProgressData, function(response, status){

            });
        },

        closeOldResult: function () {
            vm = this;
            setTimeout(function () {
                vm.showOldResult = false;
            }, 100);
        },

        deleteResult: function (result) {
            vm = this;


            Swal.fire({
                title: 'XÃ¡c nháº­n xoÃ¡ káº¿t quáº£',
                text: "Káº¿t quáº£ sáº½ bá» xoÃ¡ vÃ  khÃ´ng thá» khÃ´i phá»¥c láº¡i",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'XoÃ¡',
                cancelButtonText: 'Huá»·'
            }).then((kq) => {
                if (kq.value) {
                    var data = {
                        resultId: result.id
                    };
                    $.post(vm.url + "/api/quiz/delete-result", data, function (res) {
                        if (res.code === 200) {
                            vm.results = vm.results.filter(function (r) {
                                return r.id !== result.id;
                            });
                            Swal.fire(
                                'ÄÃ£ xong!',
                                'Káº¿t quáº£ ÄÃ£ ÄÆ°á»£c xoÃ¡',
                                'success'
                            );
                        }
                    });
                }
            });


        }
    },
});
Vue.component('share-for-gift', {
  template: '#share4gift__inner',
  props: [],
  data: function () {
    return {
      url: window.location.origin,
      stage: undefined,
      tutorialIndex: undefined,
      postUrl: '',
      submitLoading: false,
      error: {}
    }
  },
  watch: {
    postUrl: function (val, oldVal) {
      var vm = this;

      if(_.trim(oldVal) == '') {
        vm.error = {};
      }
    },
    stage: function (val) {
      if (val == 'congrats') {
        var player = document.querySelector("lottie-player");
        player.load("https://assets4.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json");
      }
    },
    tutorialIndex: function (val) {
      var vm = this;
      if (val == 0) {
        setTimeout(function () {
          var player = document.querySelector("lottie-player");
          player.load(vm.url + "/assets/animation/share_tutorial_step_1.json");
        }, 100)
      }
      if (val == 1 ) {
        setTimeout(function () {
          var player = document.querySelector("lottie-player");
          player.load(vm.url + "/assets/animation/share_tutorial_step_2.json");
        }, 100)
      }
    }
  },
  methods: {
    skipTutorial: function () {
      var vm = this;
      vm.tutorialIndex = 1;
      vm.stage = 'submit';
    },
    nextTutorial: function () {
      var vm = this;
      if (vm.tutorialIndex < 1) {
        vm.tutorialIndex++;
      } else {
        FB.ui({
          method: 'share',
          href: 'https://dungmori.com/',
          hashtag: '#dungmori'
        }, function(response){
          // console.log(response)
        });
        vm.stage = 'submit';
      }
    },
    cancel: function () {
      var vm = this;
      $.fancybox.close();
      vm.tutorialIndex = 0;
      vm.postUrl = '';
      vm.stage = 'tutorial';
      vm.error = {};
    },

    validate: function () {
      var vm = this;
      if(_.trim(vm.postUrl) == '') {
        vm.error = {
          postUrl: 'required'
        };
        return false;
      }
      return true;
    },

    submit: function () {
      var vm = this;

      if (!vm.validate()) {
        return;
      }

      vm.submitLoading = true;
      var data = {
        postUrl: _.trim(vm.postUrl)
      };

      $.post(vm.url + '/api/submit-sharing-url', data, function (res) {
        if (res.code == 200) {
          vm.postUrl = '';
          vm.stage = 'congrats';
        } else {
          vm.error = res.error
        }
      }).fail(function(err) {
        if (err.responseJSON.hasOwnProperty('postUrl')) {
          vm.error = {
            postUrl: 'required'
          };
        }
      }).always(function() {
        vm.submitLoading = false;
      })
    }
  },
  mounted: function () {
    // console.log(this)
    var vm = this;

    vm.stage = 'tutorial';
    vm.tutorialIndex = 0;
  }
});
//# sourceMappingURL=components.js.map
