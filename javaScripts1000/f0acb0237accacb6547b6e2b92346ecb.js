var GOOGLE_ANALYTICS_TRACKING_BUNDLE = {
    '/au/tenant/property/details': [
        {event: "documentReady", gaCategory: "Application", gaEvent: "Property Details"}
    ],
    '/au/tenant/property/occupancy': [
        {
            gaCategory: "Application",
            gaEvent: "Occupancy/Occupants",
            selector: "#PropertyOccupancyForm_numPeople",
            event: "click"
        },
        {
            gaCategory: "Application",
            gaEvent: "Occupancy/Vehicles",
            selector: "#PropertyOccupancyForm_PropVehicles",
            event: "click"
        }
    ],
    '/au/tenant/extra/questions/*\\w*/*\\d*': [
        {gaCategory: "Application", gaEvent: "Agent Specific", event: "documentReady"}
    ],
    '/au/tenant/property/inspection/*\\w*/*\\d*': [
        {
            gaCategory: "Application",
            gaEvent: "Moving Services/Utility",
            selector: "#MovingServiceForm_Utilities_0",
            event: "click"
        },
    ],
    '/au/ras/identification': [
        {
            gaCategory: "Verification",
            gaEvent: "Start From Modal In ID Docs",
            selector: '.identification-page',
            delegate: '.verification-modal .btn.primary.small ',
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Start In ID Docs",
            selector: '.verification-get-verified_button',
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Start From Header",
            selector: ".main-header__verification-get-verified-button",
            event: "click"
        }

    ],
    '/au/tenant/profile/identification/*\\w*/*\\d*': [
        {
            gaCategory: "Verification",
            gaEvent: "Start From Modal In Application",
            selector: '.identification-page',
            delegate: '.verification-modal .btn.primary.small ',
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Start In Application",
            selector: '.verification-get-verified_button',
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Start From Header",
            selector: ".main-header__verification-get-verified-button",
            event: "click"
        }
    ],
    '/au/tenant/property/declaration': [
        {
            gaCategory: "Application",
            gaEvent: "Declaration/Terms And Conditions",
            selector: "#PropertyDeclarationForm_chktandc",
            event: "click"
        }
    ],
    '/au/tenant/property/review-and-send': [
        {gaCategory: "Application", gaEvent: "Sending", selector: "#sendbutton", event: "mousedown"},
        {gaCategory: "Application", gaEvent: "Legal Link Clicked", selector: "#legal-link", event: "click"},
        {gaCategory: "Application", gaEvent: "Sent", selector: "#sendbutton", event: "click"},
        {
            gaCategory: "Application",
            gaEvent: "Filled",
            selector: "#sendbutton",
            event: "click",
            before: function () {
                return {selector: '.errorSummary', attr: 'length', val: 0}
            }
        }
    ],
    '/au/tenant/property/application-sent/id/\\d+': [
        {
            gaCategory: "Application",
            gaEvent: "Similar Property Clicked",
            selector: '.confirmation-page',
            delegate: '.similar-properties',
            event: "click",
            ignoreBeforeCheck: true
        },
        {
            gaCategory: "Application",
            gaEvent: "SocietyOne Clicked",
            selector: ".society-one",
            event: "click",
            ignoreBeforeCheck: true
        }
    ],
    '(\/au)?/ams/dashboard/index': [
        {
            gaCategory: 'Application Checklist',
            gaEvent: 'View Checklist Clicked',
            selector: '.collapse-button',
            event: 'click'
        },
        {
            gaCategory: 'Application Checklist',
            gaEvent: null,
            selector: '.application-status-actions',
            delegate: 'input:checkbox',
            event: 'click'
        },
        {
            gaCategory: 'REI Forms',
            gaEvent: 'Agreement Form Clicked',
            selector: '.pad-17',
            delegate: '#ams-actions-new .agreement-form',
            event: 'click'
        },
        {
            gaCategory: 'REI Forms',
            gaEvent: 'REI Form Sent',
            selector: 'body',
            delegate: '#dialog-rei-forms #send',
            event: 'click'
        },
        {
            gaCategory: 'REI Forms',
            gaEvent: 'REI Form View',
            selector: 'body',
            delegate: '.reiform_href',
            event: 'click'
        },
        {
            gaCategory: 'Reports',
            gaEvent: 'LPR Header Link Clicked',
            selector: ".listing-presentation-report-header",
            event: 'click'
        },
        {
            gaCategory: 'Reports',
            gaEvent: 'LPR Footer Link Clicked',
            selector: ".listing-presentation-report-footer",
            event: 'click'
        },
        {
            gaCategory: 'Application AMS',
            gaEvent: 'LPR Link Clicked',
            selector: ".listing-presentation-report",
            event: 'click'
        }
    ],
    '(\/au)?/ams/login/index': [
        {
            gaCategory: 'Reports',
            gaEvent: 'LPR Header Link Clicked',
            selector: ".listing-presentation-report-header",
            event: 'click'
        },
        {
            gaCategory: 'Reports',
            gaEvent: 'LPR Footer Link Clicked',
            selector: ".listing-presentation-report-footer",
            event: 'click'
        },
        {
            gaCategory: 'Reports',
            gaEvent: 'RIR Header Link Clicked',
            selector: ".rental-insights-report-header",
            event: 'click'
        },
        {
            gaCategory: 'Reports',
            gaEvent: 'RIR Footer Link Clicked',
            selector: ".rental-insights-report-footer",
            event: 'click'
        }
    ],
    '(\/au)?/tenant/application/returning': [
        {
            gaCategory: 'Reports',
            gaEvent: 'RIR Header Link Clicked',
            selector: ".rental-insights-report-header",
            event: 'click'
        },
        {
            gaCategory: 'Reports',
            gaEvent: 'RIR Footer Link Clicked',
            selector: ".rental-insights-report-footer",
            event: 'click'
        },
        {
            gaCategory: 'Reports',
            gaEvent: 'LPR Header Link Clicked',
            selector: ".listing-presentation-report-header",
            event: 'click'
        },
        {
            gaCategory: 'Reports',
            gaEvent: 'LPR Footer Link Clicked',
            selector: ".listing-presentation-report-footer",
            event: 'click'
        }
    ],
    '/nz/ras/profile': [
        {
            gaCategory: 'PersonalDetails',
            gaEvent: 'Driver License Version Number Empty',
            selector: ".btn.primary",
            event: "click",
            before: function () {
                return {selector: '.field-id_version_nz-wrapper.error', attr: 'length', val: 1}
            }
        }
    ],
    '/au/ras/partner': [
        {
            gaCategory: "Profile",
            gaEvent: "PartnerPopupAvatar",
            selector: ".partner-profile-container .avatar-container",
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "PartnerUploadAvatar",
            selector: "body",
            delegate: '.partner-profile-container .custom-file-upload',
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "PartnerSaveAvatar",
            selector: "body",
            delegate: ".partner-profile-container .save-avatar",
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "PartnerRemoveAvatar",
            selector: "body",
            delegate: ".partner-profile-container .remove_avatar",
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "PartnerEditAvatar",
            selector: "body",
            delegate: ".partner-profile-container .avatar_edit_cover",
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "PartnerEditAvatar",
            selector: "body",
            delegate: ".partner-profile-container .avatar-edit-icon-span",
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "PartnerConfirmRemovingAvatar",
            selector: "body",
            delegate: ".partner-profile-container .confirm-removing-avatar",
            event: "click"
        }
    ],
    '/au/ras/profile': [
        {
            gaCategory: "Profile",
            gaEvent: "BioFilled",
            selector: ".btn.primary",
            event: "click",
            before: function () {
                return {
                    selector: '#ProfilePersonalDetailsForm_Biography',
                    attr: '',
                    val: '',
                    operationFn: function (element, expectedValue) {
                        return element[0].value != expectedValue;
                    }
                }
            }
        },
        {
            gaCategory: "Profile",
            gaEvent: "Save",
            selector: ".btn.primary",
            event: "click",
            before: function () {
                return {
                    selector: '.field-wrapper.error',
                    attr: 'length',
                    val: 0
                }
            }
        },
        {
            gaCategory: "Profile",
            gaEvent: "PopupAvatar",
            selector: ".my-profile-container .avatar-container",
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "UploadAvatar",
            selector: "body",
            delegate: '.my-profile-container .custom-file-upload',
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "SaveAvatar",
            selector: "body",
            delegate: ".my-profile-container .save-avatar",
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "RemoveAvatar",
            selector: "body",
            delegate: ".my-profile-container .remove_avatar",
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "EditAvatar",
            selector: "body",
            delegate: ".my-profile-container .avatar_edit_cover",
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "EditAvatar",
            selector: "body",
            delegate: ".my-profile-container .avatar-edit-icon-span",
            event: "click"
        },
        {
            gaCategory: "Profile",
            gaEvent: "ConfirmRemovingAvatar",
            selector: "body",
            delegate: ".my-profile-container .confirm-removing-avatar",
            event: "click"
        }
    ],
    '/au/ras/verification/landingPage': [
        {
            gaCategory: "Verification",
            gaEvent: "Click Verify ON Landing Page",
            selector: ".verification-landingpage__button",
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Select Driver Licence",
            selector: "body",
            delegate: ".analytics-driver-licence-button",
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Select Passport",
            selector: "body",
            delegate: ".analytics-passport-button",
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Fill Driver Licence",
            selector: "body",
            delegate: ".analytic-driver-licence-continue__button",
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Fill Passport",
            selector: "body",
            delegate: ".analytic-driver-licence-continue__button",
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Filling Email",
            selector: "body",
            delegate: ".analytic-filling-email-continue__button",
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Call TVS",
            selector: "body",
            delegate: ".analytic-address-continue__button",
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Enter Address Manually",
            selector: "body",
            delegate: ".current-address-checkbox",
            event: "click"
        },
        {
            gaCategory: "Verification",
            gaEvent: "Enter Address Via Addressify",
            selector: "body",
            delegate: ".analytic-address-continue__button",
            event: "click",
            before: function () {
                return {
                    selector: '.Select-value',
                    attr: 'length',
                    val: 1
                }
            }
        }
    ],
    '/au/ras': [
        {
            gaCategory: 'Reports',
            gaEvent: 'RIR Header Link Clicked',
            selector: ".rental-insights-report-header",
            event: 'click'
        },
        {
            gaCategory: 'Reports',
            gaEvent: 'RIR Footer Link Clicked',
            selector: ".rental-insights-report-footer",
            event: 'click'
        },
        {
            gaCategory: "Verification",
            gaEvent: "Start From Header",
            selector: ".main-header__verification-get-verified-button",
            event: "click"
        }
    ]
};
