define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MemberInfoUtil = exports.CocoonType = void 0;
    var CocoonType;
    (function (CocoonType) {
        CocoonType["AGNOSTIC"] = "AGNOSTIC";
        CocoonType["CX"] = "CX";
        CocoonType["HOMESCHOOL"] = "HOMESCHOOL";
        CocoonType["NONE"] = "NONE";
        CocoonType["TEST_PREP"] = "TEST_PREP";
    })(CocoonType = exports.CocoonType || (exports.CocoonType = {}));
    var MemberInfoUtil = (function () {
        function MemberInfoUtil() {
            Object.defineProperty(this, "memberInfo", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            this.memberInfo = this.buildMemberInfoFromDOM();
        }
        Object.defineProperty(MemberInfoUtil, "instance", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                if (!this.__INSTANCE) {
                    this.__INSTANCE = new MemberInfoUtil();
                }
                return this.__INSTANCE;
            }
        });
        Object.defineProperty(MemberInfoUtil.prototype, "buildMemberInfoFromDOM", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                var memberInfo = {};
                var memberDataElement = document.querySelector("#memberData");
                if (memberDataElement) {
                    memberInfo.cocoon = memberDataElement.getAttribute("data-cocoon");
                    var cocoonTypeStr = memberDataElement.getAttribute("data-cocoon-type");
                    memberInfo.cocoonType = (cocoonTypeStr) ? cocoonTypeStr : CocoonType.NONE;
                    memberInfo.memberId = this.getNumberAttribute(memberDataElement, "data-member-id");
                    memberInfo.isDomestic = this.getBooleanAttribute(memberDataElement, "data-is-domestic");
                    memberInfo.isLoggedIn = !isNaN(memberInfo.memberId);
                    memberInfo.isTestPrep = this.getBooleanAttribute(memberDataElement, "data-is-test-prep");
                    memberInfo.isFamilyAdminActingAsStudent = this.getBooleanAttribute(memberDataElement, "data-is-family-admin-acting-as-student");
                    memberInfo.isFamilyPlanStudent = this.getBooleanAttribute(memberDataElement, "data-is-family-plan-student");
                    memberInfo.paymentProviderStatus = memberDataElement.getAttribute("data-member-status");
                    memberInfo.productKey = memberDataElement.getAttribute("data-member-product-key");
                    memberInfo.accountType = memberDataElement.getAttribute("data-member-account-type");
                    memberInfo.persona = memberDataElement.getAttribute("data-member-persona");
                    memberInfo.firstName = memberDataElement.getAttribute("data-member-first-name");
                    memberInfo.goalKey = memberDataElement.getAttribute("data-goal-key");
                    memberInfo.hasInstitutionLicense = this.getBooleanAttribute(memberDataElement, "data-member-has-institution-license");
                    memberInfo.taxStatus = memberDataElement.getAttribute("data-tax-status");
                    memberInfo.schoologyId = memberDataElement.getAttribute("data-schoology-id");
                    memberInfo.canvasId = memberDataElement.getAttribute("data-canvas-id");
                    memberInfo.isPaidTrialEligible = this.getBooleanAttribute(memberDataElement, "data-is-paid-trial-eligible");
                    memberInfo.googleUserId = memberDataElement.getAttribute("data-google-user-id");
                }
                return memberInfo;
            }
        });
        Object.defineProperty(MemberInfoUtil.prototype, "getNumberAttribute", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (memberDataElement, attributeName) {
                var attrValueStr = memberDataElement.getAttribute(attributeName);
                return parseInt(attrValueStr, 10);
            }
        });
        Object.defineProperty(MemberInfoUtil.prototype, "getBooleanAttribute", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (memberDataElement, attributeName) {
                var attrValueStr = memberDataElement.getAttribute(attributeName);
                if (!attrValueStr) {
                    return false;
                }
                return attrValueStr.toLowerCase() === "true";
            }
        });
        return MemberInfoUtil;
    }());
    exports.MemberInfoUtil = MemberInfoUtil;
});

//# sourceMappingURL=member-info.util.js.map
