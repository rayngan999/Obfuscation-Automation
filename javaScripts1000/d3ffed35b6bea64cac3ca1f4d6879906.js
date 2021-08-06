define(["require", "exports", "angularDependency", "jquery", "lib/moment", "angularDependency", "jquery", "lib/jquery/cookie", "lib/moment", "logging/visible/track-visible.directive"], function (require, exports, angular, $, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnnouncementsController = void 0;
    var announcements = angular.module("announcements.directive", ["track-visible.directive"]);
    var AnnouncementsController = (function () {
        function AnnouncementsController($http, $element) {
            Object.defineProperty(this, "DISPLAY_LIMIT", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: 3
            });
            Object.defineProperty(this, "$http", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "announcements", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: []
            });
            Object.defineProperty(this, "errorText", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: ""
            });
            Object.defineProperty(this, "isLoading", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: false
            });
            Object.defineProperty(this, "overlay", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "unreadCount", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            this.$http = $http;
            this.announcements = [];
            this.overlay = $element.find('.modal');
            if (window.localStorage) {
                this.unreadCount = window.localStorage.getItem(AnnouncementsController.STORAGE_KEY_COUNT);
            }
            this.checkAnnouncements();
        }
        Object.defineProperty(AnnouncementsController.prototype, "checkAnnouncements", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                var storageDate = $.cookie(AnnouncementsController.STORAGE_KEY_DATE);
                if (this.unreadCount === null || storageDate === null || !storageDate ||
                    moment(storageDate).add(AnnouncementsController.WAIT_TIME_MINUTES, 'minutes').isBefore(moment())) {
                    this.getAllAnnouncements(false);
                }
            }
        });
        ;
        Object.defineProperty(AnnouncementsController.prototype, "seeAll", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                this.getAllAnnouncements(false);
                this.overlay.modal();
            }
        });
        ;
        Object.defineProperty(AnnouncementsController.prototype, "showList", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                this.getAllAnnouncements(true);
            }
        });
        ;
        Object.defineProperty(AnnouncementsController.prototype, "readAllAnnouncements", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                var updateList = [];
                for (var _i = 0, _a = this.announcements; _i < _a.length; _i++) {
                    var announcement = _a[_i];
                    if (!announcement.dateRead) {
                        announcement.dateRead = moment().format(AnnouncementsController.MOMENT_FORMAT);
                        updateList.push(announcement);
                    }
                }
                this.$http.post(AnnouncementsController.UPDATE_URL, updateList).then(function () {
                    this.unreadCount = AnnouncementsController._countUnreadAnnouncements(this.announcements);
                    window.localStorage.setItem(this.STORAGE_KEY_COUNT, this.unreadCount);
                }.bind(this));
            }
        });
        ;
        Object.defineProperty(AnnouncementsController.prototype, "readAnnouncement", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (announcement) {
                announcement.dateRead = moment().format(AnnouncementsController.MOMENT_FORMAT);
                this.$http.post(AnnouncementsController.UPDATE_URL, [announcement]).then(function () {
                    this.unreadCount = AnnouncementsController._countUnreadAnnouncements(this.announcements);
                    window.localStorage.setItem(this.STORAGE_KEY_COUNT, this.unreadCount);
                }.bind(this));
            }
        });
        ;
        Object.defineProperty(AnnouncementsController.prototype, "deleteAnnouncement", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (announcement) {
                announcement.status = 'DELETED';
                this.$http.post(AnnouncementsController.UPDATE_URL, [announcement]).then(function () {
                    this.getAllAnnouncements(false);
                }.bind(this));
            }
        });
        ;
        Object.defineProperty(AnnouncementsController.prototype, "getAllAnnouncements", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (markAllRead) {
                this.isLoading = true;
                this.errorText = "";
                this.$http.get(AnnouncementsController.GET_URL).then(function (response) {
                    $(".user-dropdown li,.study-nav__site-nav li").mouseenter(function () {
                        $(".nav-announcements").removeClass("open");
                    });
                    if (response['data']) {
                        this.announcements = response['data']['announcements'];
                        if (markAllRead) {
                            this.readAllAnnouncements();
                        }
                        else {
                            this.unreadCount = AnnouncementsController._countUnreadAnnouncements(this.announcements);
                        }
                        if (window.localStorage) {
                            window.localStorage.setItem(this.STORAGE_KEY_COUNT, this.unreadCount);
                        }
                        var cookieExpiresString = moment().add(this.WAIT_TIME_MINUTES, 'minutes').toDate().toUTCString();
                        document.cookie = this.STORAGE_KEY_DATE + '=' + moment().format() + '; expires=' + cookieExpiresString + '; path=/';
                    }
                    else {
                        this.errorText = this.DEFAULT_ERROR_TEXT;
                    }
                    this.isLoading = false;
                }.bind(this), function (response) {
                    this.errorText = response['data'] || this.DEFAULT_ERROR_TEXT;
                    this.isLoading = false;
                }.bind(this));
            }
        });
        ;
        Object.defineProperty(AnnouncementsController, "_countUnreadAnnouncements", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (announcements) {
                var count = 0;
                for (var _i = 0, announcements_1 = announcements; _i < announcements_1.length; _i++) {
                    var announcement = announcements_1[_i];
                    if (!announcement.dateRead) {
                        count++;
                    }
                }
                return count;
            }
        });
        ;
        Object.defineProperty(AnnouncementsController, "DEFAULT_ERROR_TEXT", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "Oops! Something went wrong."
        });
        Object.defineProperty(AnnouncementsController, "GET_URL", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "/academy/announce/get-member-announce-list.ajax"
        });
        Object.defineProperty(AnnouncementsController, "MOMENT_FORMAT", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "MMM D, YYYY h:mm:ss A"
        });
        Object.defineProperty(AnnouncementsController, "STORAGE_KEY_COUNT", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "announcements-count"
        });
        Object.defineProperty(AnnouncementsController, "STORAGE_KEY_DATE", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "announcements-date"
        });
        Object.defineProperty(AnnouncementsController, "UPDATE_URL", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "/academy/announce/update-member-announce-list.ajax"
        });
        Object.defineProperty(AnnouncementsController, "WAIT_TIME_MINUTES", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 60
        });
        Object.defineProperty(AnnouncementsController, "$inject", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ['$http', '$element']
        });
        return AnnouncementsController;
    }());
    exports.AnnouncementsController = AnnouncementsController;
    announcements.directive("studyAnnouncements", function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/global/announcements.tpl',
            controller: AnnouncementsController,
            controllerAs: 'adc'
        };
    });
    announcements.directive("bindCompileUnsafe", ['$compile', '$sce', function ($compile, $sce) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    scope.$watch(function (scope) {
                        return scope.$eval(attrs.bindCompileUnsafe);
                    }, function (value) {
                        element.html($sce.trustAsHtml(value).toString());
                        $compile(element.contents())(scope);
                    });
                }
            };
        }]);
});

//# sourceMappingURL=announcements.directive.js.map
