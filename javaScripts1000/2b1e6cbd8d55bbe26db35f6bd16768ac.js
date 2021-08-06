ï»¿var vtexTagManagerHelper = (function () {

    function vtexTagManagerHelper(eventType) {

var self = this;

        self.eventType = eventType;

        self.data = {};

        //#region private members

        self.sendEvent = function () {
            vtex.events.sendEvent(self.eventType);
            return false;
        };

        self.pageViewEvent = function () {

            var done = function (data) {

                vtex.events.addData(self.visitorData(data));

                self.processSubEvent();

            };

            var fail = function () {
                //console.log("Failed to get User Profile from current context.");
            };

            self.getProfile(done, fail);
        };

        self.homeViewEvent = function () {
            //console.log("Firing evevnt: HomeView;");
            return self.sendEvent();
        };

        self.productViewEvent = function () {
            //console.log("Firing evevnt: ProductView;");
            return self.sendEvent();
        };

        self.departmentViewEvent = function () {
            //console.log("Firing evevnt: DepartmentView;");
            return self.sendEvent();
        };

        self.categoryViewEvent = function () {
            //console.log("Firing evevnt: CategoryView;");
            return self.sendEvent();
        };

        self.internalSiteSearchView = function () {
            //console.log("Firing evevnt: InternalSiteSearchView;");
            return self.sendEvent();
        };

        //#endregion

    }

    vtexTagManagerHelper.prototype.getProfile = function (doneCallBack, failCallBack) {
        $.getJSON('/no-cache/profileSystem/getProfile')
            .done(doneCallBack)
            .fail(failCallBack);
    };

    vtexTagManagerHelper.prototype.visitorData = function (profileData) {

        if (arguments.length === 0) {
            return this.data;
        }

        this.data["visitorLoginState"] = profileData.IsUserDefined;
        this.data["visitorExistingCustomer"] = profileData.IsUserDefined && profileData.UserId !== null;
        this.data["visitorType"] = profileData.IsReturningUser ? "returning user" : "new user";

        if (profileData.IsUserDefined) {
            this.data["visitorId"] = profileData.UserId;
            this.data["visitorContactInfo"] = [profileData.Email, profileData.FirstName, profileData.LastName];

            if (profileData.Gender !== null) {
                this.data["visitorDemographicInfo"] = {};
                this.data["visitorDemographicInfo"]["gender"] = profileData.Gender;
            }
                
        }

        //visitorLifetimeValue
        //visitorSocialConnections

        return this.data;

    };

    vtexTagManagerHelper.prototype.processCurrentEvent = function () {

        var self = this;

        self.pageViewEvent();

    };

    vtexTagManagerHelper.prototype.processSubEvent = function () {

        var self = this;

        if (!self.eventType) return false;

        var subEvent = self[(self.eventType + 'Event')];

        if (typeof subEvent === "function") {
            return subEvent();
        } else {
            return self.sendEvent();
        }

    };

    vtexTagManagerHelper.prototype.init = function (callback) {

        var self = this;

        if (!vtex.events) return false;

        self.processCurrentEvent(callback);

        return false;
    };

    return vtexTagManagerHelper;

}());