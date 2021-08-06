define(["require", "exports", "angularDependency", "util/value-proxy", "member/info/member-info.util", "member/info/member-info.util", "angularDependency", "util/value-proxy"], function (require, exports, angular, ValueProxy, member_info_util_1, member_info_util_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MemberInfoService = exports.CocoonType = void 0;
    Object.defineProperty(exports, "CocoonType", { enumerable: true, get: function () { return member_info_util_2.CocoonType; } });
    var MemberInfoService = (function () {
        function MemberInfoService($q) {
            var _this = this;
            Object.defineProperty(this, "memberInfoProxy", {
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
            this.$q = $q;
            this.memberInfoProxy = new ValueProxy({}, function () { return _this.memberInfoLoader(); });
        }
        Object.defineProperty(MemberInfoService.prototype, "memberInfoLoader", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                var deferred = this.$q.defer();
                var memberInfo = this.buildMemberInfoFromDOM();
                deferred.resolve(memberInfo);
                return deferred.promise;
            }
        });
        Object.defineProperty(MemberInfoService.prototype, "buildMemberInfoFromDOM", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                var memberInfoUtil = member_info_util_1.MemberInfoUtil.instance();
                return memberInfoUtil.memberInfo;
            }
        });
        Object.defineProperty(MemberInfoService, "$inject", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["$q"]
        });
        return MemberInfoService;
    }());
    exports.MemberInfoService = MemberInfoService;
    var module = angular.module("member-info.service", []);
    module.service("MemberInfoService", MemberInfoService);
});

//# sourceMappingURL=member-info.service.js.map
