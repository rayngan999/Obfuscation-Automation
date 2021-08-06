define(["require", "exports", "angularDependency", "angularDependency"], function (require, exports, angular) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RecentActivityService = void 0;
    var module = angular.module("recent-activity.service", []);
    var RecentActivityService = (function () {
        function RecentActivityService($http, $q) {
            Object.defineProperty(this, "activityMetaData", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: {
                    TEXT: {
                        icon: 'article',
                        cssClass: 'lesson',
                        description: 'Lesson'
                    },
                    LESSON: {
                        icon: 'video_lesson',
                        cssClass: 'lesson',
                        description: 'Lesson'
                    },
                    VIDEO: {
                        icon: 'play',
                        cssClass: 'video',
                        description: 'Video'
                    },
                    COURSE: {
                        icon: 'courses',
                        cssClass: 'course',
                        description: 'Course'
                    },
                    ARTICLE: {
                        icon: 'document-small',
                        cssClass: 'article',
                        description: 'Article'
                    },
                    SCHOOL: {
                        icon: 'library',
                        cssClass: 'school',
                        description: 'School'
                    },
                    FORM: {
                        icon: 'list-ol',
                        cssClass: 'form-complete',
                        description: 'Form Complete'
                    },
                    FORM_INCOMPLETE: {
                        icon: 'warning-sign gold',
                        cssClass: 'form',
                        description: 'Form'
                    },
                    TEXTBOOK_COURSE: {
                        icon: 'literature',
                        cssClass: 'textbook',
                        description: 'Textbook Match'
                    },
                    TOPIC_EXAM: {
                        icon: 'final_exam',
                        cssClass: 'topic_exam',
                        description: 'Practice Chapter Exam'
                    },
                    COURSE_EXAM: {
                        icon: 'final_exam',
                        cssClass: 'course_exam',
                        description: 'Practice Final Exam'
                    },
                    FULL_LENGTH_EXAM: {
                        icon: 'final_exam',
                        cssClass: 'course_exam',
                        description: 'Full Length Practice Exam'
                    },
                    STUDY_ANSWER: {
                        icon: 'icon_answer',
                        cssClass: 'study_answer',
                        description: 'Answer'
                    }
                }
            });
            Object.defineProperty(this, "MAX_ACTIVITY_COUNT_PER_REQUEST", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: 20
            });
            Object.defineProperty(this, "$http", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "$q", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "activities", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            this.$http = $http;
            this.$q = $q;
            this.activities = [];
        }
        Object.defineProperty(RecentActivityService.prototype, "getActivities", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (config) {
                var _this = this;
                var offset = config.offset || 0;
                var count = Math.min(config.count, this.MAX_ACTIVITY_COUNT_PER_REQUEST);
                var withImages = !!config.withImages;
                return this.$q(function (resolve) {
                    if (count + offset <= _this.activities.length) {
                        resolve(_this.activities.slice(offset, count + offset));
                    }
                    else {
                        var url = RecentActivityService.getActivityEndpointURL(config);
                        _this.$http.get(url)
                            .then(function (response) {
                            var data = response.data;
                            if (data && data.length > 0) {
                                this.addActivities(data, count, offset);
                                resolve(this.activities.slice(offset, count + offset));
                            }
                            else {
                                resolve([]);
                            }
                        }.bind(_this));
                    }
                });
            }
        });
        ;
        Object.defineProperty(RecentActivityService, "getActivityEndpointURL", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (config) {
                var url = undefined;
                if (config.withCourseData) {
                    url = "/member/activity/getMemberActivityWithCourseData.ajax";
                }
                else if (config.withImages) {
                    url = "/member/activity/getMemberActivityWithImages.ajax";
                }
                else if (config.withSiteResourceId) {
                    url = "/member/activity/getMemberActivityWithSiteResourceId.ajax";
                }
                else {
                    url = "/member/activity/getMemberActivity.ajax";
                }
                url += "?count=" + config.count;
                if (config.type) {
                    url += '&type=' + config['type'];
                }
                if (config.offset) {
                    url += "&offset=" + config.offset;
                }
                return url;
            }
        });
        Object.defineProperty(RecentActivityService.prototype, "addActivities", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (activities, count, offset) {
                for (var o = 0; o < offset; o++) {
                    if (o >= this.activities.length) {
                        this.activities.push(null);
                    }
                }
                for (var c = 0; c < count; c++) {
                    if (activities[c]) {
                        if (c >= this.activities.length) {
                            this.activities.push(activities[c]);
                        }
                        else if (!this.activities[offset + c].imageUri) {
                            this.activities[offset + c] = activities[c];
                        }
                    }
                }
            }
        });
        ;
        Object.defineProperty(RecentActivityService, "$inject", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ['$http', '$q']
        });
        return RecentActivityService;
    }());
    exports.RecentActivityService = RecentActivityService;
    module.service("RecentActivityService", RecentActivityService);
});

//# sourceMappingURL=recent-activity.service.js.map
