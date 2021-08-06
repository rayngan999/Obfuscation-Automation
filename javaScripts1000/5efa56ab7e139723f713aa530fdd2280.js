
var yotpoWidgetsContainer = yotpoWidgetsContainer || {};
(function(){
    var loader = {
        loadDep: function (link, onLoad, strategy) {
            var script = document.createElement('script');
            script.onload = onLoad || function(){};
            script.src = link;
            if (strategy === 'defer') {
                script.defer = true;
            } else if (strategy === 'async') {
                script.async = true;
            }
            script.setAttribute("type", "text/javascript");
            script.setAttribute("charset", "utf-8");
            document.head.appendChild(script);
        },
        config: {
            data: {
                guid: "xGWzjGiBDDbHhKnW-nvQdw"
            },
            widgets: {
            
                "38448": {
                    instanceId: "38448",
                    instanceVersionId: "769027",
                    templateAssetUrl: "https://cdn-widget-assets.yotpo.com/widget-vip-tiers/app.v1.1.8-2447.js",
                    cssOverrideAssetUrl: "",
                    customizationCssUrl: "",
                    customizations: {
                      "benefits-font-size": "18px",
                      "benefits-icon-color": "rgb(115,142,217)",
                      "benefits-icon-type": "default",
                      "benefits-text-color": "#000000",
                      "card-background-border-color": "#C9CDD9",
                      "card-background-color": "#FFFFFF",
                      "card-background-shadow": "true",
                      "card-separator-color": "#AAAAAA",
                      "card-separator-type": "default",
                      "current-status-bg-color": "#FFFFFF",
                      "current-status-text-color": "#000000",
                      "current-tier-border-color": "#727898",
                      "grid-lines-color": "#ACB5D4",
                      "headline-font-size": "36px",
                      "headline-text-color": "#011247",
                      "layout": "card",
                      "primary-font-name-and-url": "Montserrat@600|https://fonts.googleapis.com/css?family=Montserrat:600\u0026display=swap",
                      "progress-bar-current-status": "{{amount_spent}} Spent",
                      "progress-bar-enabled": "false",
                      "progress-bar-headline-font-size": "14px",
                      "progress-bar-primary-color": "#011247",
                      "progress-bar-secondary-color": "#768cdc",
                      "progress-bar-summary-current": "You have {{current_vip_tier_name}} through the next earning period.",
                      "progress-bar-summary-font-size": "14px",
                      "progress-bar-summary-maintain": "Spend {{spend_needed}} by {{tier_expiration_date}} to maintain {{current_vip_tier_name}}",
                      "progress-bar-summary-next": "Spend {{spend_needed}} to unlock {{next_vip_tier_name}}.",
                      "progress-bar-tier-status": "Tier Status",
                      "progress-bar-you": "YOU",
                      "secondary-font-name-and-url": "Montserrat@500|https://fonts.googleapis.com/css?family=Montserrat:500\u0026display=swap",
                      "selected-extensions": [
                        "2267",
                        "2268",
                        "2269",
                        "2270"
                      ],
                      "show-less-text": "- Show Less",
                      "show-more-text": "+ Show More",
                      "tier-spacing": "big",
                      "tiers-2267-design-header-bg-color": "#FFFFFF",
                      "tiers-2267-design-icon-fill-color": "#6c89e9",
                      "tiers-2267-design-icon-type": "default",
                      "tiers-2267-design-icon-url": "",
                      "tiers-2267-design-include-header-bg": "false",
                      "tiers-2267-design-name-font-size": "22px",
                      "tiers-2267-design-name-text-color": "#011247",
                      "tiers-2267-design-threshold-font-size": "18px",
                      "tiers-2267-design-threshold-text-color": "#727898",
                      "tiers-2267-text-benefits": "Benefit 1||Benefit 2||Benefit 3",
                      "tiers-2267-text-name": "Bronze",
                      "tiers-2267-text-rank": 1,
                      "tiers-2267-text-threshold": "Earn {{points_earned}} Points",
                      "tiers-2268-design-header-bg-color": "#FFFFFF",
                      "tiers-2268-design-icon-fill-color": "#6c89e9",
                      "tiers-2268-design-icon-type": "default",
                      "tiers-2268-design-icon-url": "",
                      "tiers-2268-design-include-header-bg": "false",
                      "tiers-2268-design-name-font-size": "22px",
                      "tiers-2268-design-name-text-color": "#011247",
                      "tiers-2268-design-threshold-font-size": "18px",
                      "tiers-2268-design-threshold-text-color": "#727898",
                      "tiers-2268-text-benefits": "Benefit 1||Benefit 2||Benefit 3",
                      "tiers-2268-text-name": "Silver",
                      "tiers-2268-text-rank": 2,
                      "tiers-2268-text-threshold": "Earn {{points_earned}} Points",
                      "tiers-2269-design-header-bg-color": "#FFFFFF",
                      "tiers-2269-design-icon-fill-color": "#6c89e9",
                      "tiers-2269-design-icon-type": "default",
                      "tiers-2269-design-icon-url": "",
                      "tiers-2269-design-include-header-bg": "false",
                      "tiers-2269-design-name-font-size": "22px",
                      "tiers-2269-design-name-text-color": "#011247",
                      "tiers-2269-design-threshold-font-size": "18px",
                      "tiers-2269-design-threshold-text-color": "#727898",
                      "tiers-2269-text-benefits": "Benefit 1||Benefit 2||Benefit 3",
                      "tiers-2269-text-name": "Gold",
                      "tiers-2269-text-rank": 3,
                      "tiers-2269-text-threshold": "Earn {{points_earned}} Points",
                      "tiers-2270-design-header-bg-color": "#FFFFFF",
                      "tiers-2270-design-icon-fill-color": "#6c89e9",
                      "tiers-2270-design-icon-type": "default",
                      "tiers-2270-design-icon-url": "",
                      "tiers-2270-design-include-header-bg": "false",
                      "tiers-2270-design-name-font-size": "22px",
                      "tiers-2270-design-name-text-color": "#011247",
                      "tiers-2270-design-threshold-font-size": "18px",
                      "tiers-2270-design-threshold-text-color": "#727898",
                      "tiers-2270-text-benefits": "Benefit 1||Benefit 2||Benefit 3",
                      "tiers-2270-text-name": "Platinum",
                      "tiers-2270-text-rank": 4,
                      "tiers-2270-text-threshold": "Earn {{points_earned}} Points",
                      "widget-background-color": "#f5f5f5",
                      "widget-headline": "The VIP Club"
                    },
                    staticContent: {
                      "currency": "USD",
                      "isMultiCurrencyEnabled": false,
                      "merchantId": "37758",
                      "platformName": "shopify"
                    },
                    className: "VipTiersWidget",
                    dependencyGroupId: 2
                },
            
                "38447": {
                    instanceId: "38447",
                    instanceVersionId: "795541",
                    templateAssetUrl: "https://cdn-widget-assets.yotpo.com/widget-my-rewards/app.v0.1.9-2464.js",
                    cssOverrideAssetUrl: "",
                    customizationCssUrl: "",
                    customizations: {
                      "logged-in-description-color": "#728be2",
                      "logged-in-description-font-size": "34",
                      "logged-in-description-text": "You Have {{current_point_balance}} Points",
                      "logged-in-headline-color": "#011247",
                      "logged-in-headline-font-size": "36",
                      "logged-in-headline-text": "Hi {{first_name}}!",
                      "logged-in-primary-button-cta-type": "redemptionWidget",
                      "logged-in-primary-button-text": "REDEEM NOW",
                      "logged-in-secondary-button-text": "REWARDS HISTORY",
                      "logged-out-headline-color": "#011247",
                      "logged-out-headline-font-size": "36",
                      "logged-out-headline-text": "How It Works",
                      "primary-button-background-color": "#728be2",
                      "primary-button-text-color": "#ffffff",
                      "primary-button-type": "filled_rectangle",
                      "primary-font-name-and-url": "Montserrat@600|https://fonts.googleapis.com/css?family=Montserrat:600\u0026display=swap",
                      "reward-step-1-displayname": "Step 1",
                      "reward-step-1-settings-description": "Create an account and\nget 100 points.",
                      "reward-step-1-settings-description-color": "#666d8b",
                      "reward-step-1-settings-description-font-size": "20",
                      "reward-step-1-settings-icon": "default",
                      "reward-step-1-settings-icon-color": "#b7c6f8",
                      "reward-step-1-settings-title": "SIGN UP",
                      "reward-step-1-settings-title-color": "#011247",
                      "reward-step-1-settings-title-font-size": "24",
                      "reward-step-2-displayname": "Step 2",
                      "reward-step-2-settings-description": "Earn points every time\nyou shop.",
                      "reward-step-2-settings-description-color": "#666d8b",
                      "reward-step-2-settings-description-font-size": "20",
                      "reward-step-2-settings-icon": "default",
                      "reward-step-2-settings-icon-color": "#b7c6f8",
                      "reward-step-2-settings-title": "EARN POINTS",
                      "reward-step-2-settings-title-color": "#011247",
                      "reward-step-2-settings-title-font-size": "24",
                      "reward-step-3-displayname": "Step 3",
                      "reward-step-3-settings-description": "Redeem points for\nexclusive discounts.",
                      "reward-step-3-settings-description-color": "#666d8b",
                      "reward-step-3-settings-description-font-size": "20",
                      "reward-step-3-settings-icon": "default",
                      "reward-step-3-settings-icon-color": "#b7c6f8",
                      "reward-step-3-settings-title": "REDEEM POINTS",
                      "reward-step-3-settings-title-color": "#011247",
                      "reward-step-3-settings-title-font-size": "24",
                      "rewards-history-approved-text": "Approved",
                      "rewards-history-background-color": "rgba(1,18,71,0.8)",
                      "rewards-history-headline-color": "#10055c",
                      "rewards-history-headline-font-size": "28",
                      "rewards-history-headline-text": "Rewards History",
                      "rewards-history-pending-text": "Pending",
                      "rewards-history-refunded-text": "Refunded",
                      "rewards-history-reversed-text": "Reversed",
                      "rewards-history-table-action-col-text": "Action",
                      "rewards-history-table-date-col-text": "Date",
                      "rewards-history-table-points-col-text": "Points",
                      "rewards-history-table-status-col-text": "Status",
                      "secondary-button-background-color": "#768cdc",
                      "secondary-button-text-color": "#768cdc",
                      "secondary-button-type": "rectangular_outline",
                      "secondary-font-name-and-url": "Nunito Sans@400|https://fonts.googleapis.com/css?family=Nunito+Sans:400\u0026display=swap",
                      "view-grid-points-column-color": "#7a97e8",
                      "view-grid-rectangular-background-color": "#e6ecff",
                      "view-grid-type": "rectangular"
                    },
                    staticContent: {
                      "currency": "USD",
                      "isMultiCurrencyEnabled": false,
                      "isMultiStoreMerchant": false,
                      "merchantId": "37758",
                      "platformName": "shopify"
                    },
                    className: "MyRewardsWidget",
                    dependencyGroupId: 2
                },
            
                "38446": {
                    instanceId: "38446",
                    instanceVersionId: "809893",
                    templateAssetUrl: "https://cdn-widget-assets.yotpo.com/widget-loyalty-campaigns/app.v0.6.1-2475.js",
                    cssOverrideAssetUrl: "",
                    customizationCssUrl: "",
                    customizations: {
                      "campaign-description-font-color": "#4e5772",
                      "campaign-description-size": "18px",
                      "campaign-item-363853-background-color": "#f9faff",
                      "campaign-item-363853-background-image-color-overlay": "rgba(0, 0, 0, .4)",
                      "campaign-item-363853-background-type": "color",
                      "campaign-item-363853-border-color": "#848ca3",
                      "campaign-item-363853-description-font-color": "#4e5772",
                      "campaign-item-363853-description-font-size": "18",
                      "campaign-item-363853-hover-view-tile-message": "Earn 1 point for every $1.00 you spend in our store",
                      "campaign-item-363853-icon-color": "#768cdc",
                      "campaign-item-363853-icon-type": "defaultIcon",
                      "campaign-item-363853-tile-description": "Make a purchase",
                      "campaign-item-363853-tile-reward": "1 Point Per $1.00",
                      "campaign-item-363853-title-font-color": "#011247",
                      "campaign-item-363853-title-font-size": "27",
                      "campaign-item-363853-type": "PointsForPurchasesCampaign",
                      "campaign-item-363854-background-color": "#f9faff",
                      "campaign-item-363854-background-image-color-overlay": "rgba(0, 0, 0, .4)",
                      "campaign-item-363854-background-type": "color",
                      "campaign-item-363854-border-color": "#848ca3",
                      "campaign-item-363854-description-font-color": "#4e5772",
                      "campaign-item-363854-description-font-size": "18",
                      "campaign-item-363854-hover-view-tile-message": "Earn 50 points when you create an account",
                      "campaign-item-363854-icon-color": "#768cdc",
                      "campaign-item-363854-icon-type": "defaultIcon",
                      "campaign-item-363854-tile-description": "Create an account",
                      "campaign-item-363854-tile-reward": "50 Points",
                      "campaign-item-363854-title-font-color": "#011247",
                      "campaign-item-363854-title-font-size": "27",
                      "campaign-item-363854-type": "CreateAccountCampaign",
                      "campaign-item-399360-action-tile-action-text": "Follow @eggieshop",
                      "campaign-item-399360-action-tile-title": "Earn 25 points when you follow us on Instagram",
                      "campaign-item-399360-background-color": "#f9faff",
                      "campaign-item-399360-background-image-color-overlay": "rgba(0, 0, 0, .4)",
                      "campaign-item-399360-background-type": "color",
                      "campaign-item-399360-border-color": "#848ca3",
                      "campaign-item-399360-description-font-color": "#4e5772",
                      "campaign-item-399360-description-font-size": "18",
                      "campaign-item-399360-icon-color": "#768cdc",
                      "campaign-item-399360-icon-type": "defaultIcon",
                      "campaign-item-399360-tile-description": "Follow us on Instagram",
                      "campaign-item-399360-tile-reward": "25 Points",
                      "campaign-item-399360-title-font-color": "#011247",
                      "campaign-item-399360-title-font-size": "27",
                      "campaign-item-399360-type": "InstagramFollowCampaign",
                      "campaign-title-font-color": "#011247",
                      "campaign-title-size": "27px",
                      "completed-tile-headline": "Completed",
                      "completed-tile-message": "You already completed this campaign",
                      "container-headline": "Ways to earn points",
                      "general-hover-tile-button-color": "#ffffff",
                      "general-hover-tile-button-text-color": "#140060",
                      "general-hover-tile-button-type": "filled_rectangle",
                      "general-hover-tile-color-overlay": "#011247",
                      "general-hover-tile-text-color": "#ffffff",
                      "headline-font-color": "#011247",
                      "headline-font-size": "36px",
                      "logged-out-is-redirect-after-login-to-current-page": "true",
                      "logged-out-message": "Already a member?",
                      "logged-out-sign-in-text": "Log in",
                      "logged-out-sign-up-text": "Sign up",
                      "main-text-font-name-and-url": "Montserrat@600|https://fonts.googleapis.com/css?family=Montserrat:600\u0026display=swap",
                      "secondary-text-font-name-and-url": "Montserrat@400|https://fonts.googleapis.com/css?family=Montserrat\u0026display=swap",
                      "selected-extensions": [
                        "399360",
                        "363854",
                        "363853"
                      ],
                      "tile-border-color": "#848ca3",
                      "tiles-background-color": "#f9faff",
                      "time-between-rewards-days": "You're eligible to participate again in *|days|* days.",
                      "time-between-rewards-hours": "You're eligible to participate again in *|hours|* hours."
                    },
                    staticContent: {
                      "companyName": "Eggie",
                      "currency": "USD",
                      "facebookAppId": "1647129615540489",
                      "isMultiCurrencyEnabled": false,
                      "merchantId": "37758",
                      "platformName": "shopify",
                      "storeAccountLoginUrl": "//eggie.us/account/login",
                      "storeAccountRegistrationUrl": "//eggie.us/account/register"
                    },
                    className: "CampaignWidget",
                    dependencyGroupId: 2
                },
            
                "38445": {
                    instanceId: "38445",
                    instanceVersionId: "792612",
                    templateAssetUrl: "https://cdn-widget-assets.yotpo.com/widget-coupons-redemption/app.v0.3.25-2463.js",
                    cssOverrideAssetUrl: "",
                    customizationCssUrl: "",
                    customizations: {
                      "confirmation-step-cancel-option": "NO",
                      "confirmation-step-confirm-option": "YES",
                      "confirmation-step-title": "ARE YOU SURE?",
                      "coupon-background-type": "no-background",
                      "coupon-code-copied-message-body": "Thank you for redeeming your points. Please paste the code at checkout.",
                      "coupon-code-copied-message-color": "#707997",
                      "coupon-code-copied-message-title": "COPIED",
                      "coupons-redemption-description": "Redeeming your points is easy! Click Redeem My Points and copy \u0026 paste your code at checkout.",
                      "coupons-redemption-headline": "How to use your points",
                      "coupons-redemption-rule": "100 points equals $10.00",
                      "description-color": "#666d8b",
                      "description-font-size": "20",
                      "disabled-outline-button-color": "#929292",
                      "discount-bigger-than-subscription-cost-text": "Your next subscription is lower than the redemption amount",
                      "donate-button-text": "DONATE",
                      "donation-success-message-body": "Thank you for donating ${{donation_amount}} to {{company_name}}",
                      "donation-success-message-color": "#707997",
                      "donation-success-message-title": "SUCCESS",
                      "error-message-color": "#f04860",
                      "error-message-title": "",
                      "headline-color": "#011247",
                      "headline-font-size": "36",
                      "login-button-color": "#556DD8",
                      "login-button-text": "REDEEM MY POINTS",
                      "login-button-text-color": "white",
                      "login-button-type": "filled_rectangle",
                      "message-font-size": "14",
                      "missing-points-amount-text": "You don't have enough points to redeem",
                      "next-subscription-headline-text": "NEXT ORDER",
                      "next-subscription-subtitle-text": "{{product_name}} {{next_order_amount}}",
                      "no-subscription-subtitle-text": "No ongoing subscriptions",
                      "point-balance-text": "You have {{current_point_balance}} points",
                      "points-balance-color": "#011247",
                      "points-balance-font-size": "20",
                      "points-balance-number-color": "#93a1eb",
                      "primary-font-name-and-url": "Montserrat@600|https://fonts.googleapis.com/css?family=Montserrat:600\u0026display=swap",
                      "redeem-button-color": "#556DD8",
                      "redeem-button-text": "REDEEM",
                      "redeem-button-text-color": "white",
                      "redeem-button-type": "filled_rectangle",
                      "redemption-242062-displayname": "100 points ",
                      "redemption-242062-settings-button-color": "#556DD8",
                      "redemption-242062-settings-button-text": "REDEEM",
                      "redemption-242062-settings-button-text-color": "white",
                      "redemption-242062-settings-button-type": "filled_rectangle",
                      "redemption-242062-settings-call-to-action-button-text": "REDEEM",
                      "redemption-242062-settings-cost": 100,
                      "redemption-242062-settings-cost-color": "#666d8b",
                      "redemption-242062-settings-cost-font-size": "20",
                      "redemption-242062-settings-cost-text": "{{points}} POINTS",
                      "redemption-242062-settings-coupon-cost-font-size": "15",
                      "redemption-242062-settings-coupon-reward-font-size": "29",
                      "redemption-242062-settings-discount-amount-cents": 500,
                      "redemption-242062-settings-discount-type": "fixed_amount",
                      "redemption-242062-settings-reward": "100 points ",
                      "redemption-242062-settings-reward-color": "#011247",
                      "redemption-242062-settings-reward-font-size": "30",
                      "redemption-242062-settings-success-message-text": "Discount Applied",
                      "redemption-242063-displayname": "200 points ",
                      "redemption-242063-settings-button-color": "#556DD8",
                      "redemption-242063-settings-button-text": "REDEEM",
                      "redemption-242063-settings-button-text-color": "white",
                      "redemption-242063-settings-button-type": "filled_rectangle",
                      "redemption-242063-settings-call-to-action-button-text": "REDEEM",
                      "redemption-242063-settings-cost": 200,
                      "redemption-242063-settings-cost-color": "#666d8b",
                      "redemption-242063-settings-cost-font-size": "20",
                      "redemption-242063-settings-cost-text": "{{points}} POINTS",
                      "redemption-242063-settings-coupon-cost-font-size": "15",
                      "redemption-242063-settings-coupon-reward-font-size": "29",
                      "redemption-242063-settings-discount-amount-cents": 1500,
                      "redemption-242063-settings-discount-type": "fixed_amount",
                      "redemption-242063-settings-reward": "200 points ",
                      "redemption-242063-settings-reward-color": "#011247",
                      "redemption-242063-settings-reward-font-size": "30",
                      "redemption-242063-settings-success-message-text": "Discount Applied",
                      "redemption-242064-displayname": "300 points ",
                      "redemption-242064-settings-button-color": "#556DD8",
                      "redemption-242064-settings-button-text": "REDEEM",
                      "redemption-242064-settings-button-text-color": "white",
                      "redemption-242064-settings-button-type": "filled_rectangle",
                      "redemption-242064-settings-call-to-action-button-text": "REDEEM",
                      "redemption-242064-settings-cost": 300,
                      "redemption-242064-settings-cost-color": "#666d8b",
                      "redemption-242064-settings-cost-font-size": "20",
                      "redemption-242064-settings-cost-text": "{{points}} POINTS",
                      "redemption-242064-settings-coupon-cost-font-size": "15",
                      "redemption-242064-settings-coupon-reward-font-size": "29",
                      "redemption-242064-settings-discount-amount-cents": 2500,
                      "redemption-242064-settings-discount-type": "fixed_amount",
                      "redemption-242064-settings-reward": "300 points ",
                      "redemption-242064-settings-reward-color": "#011247",
                      "redemption-242064-settings-reward-font-size": "30",
                      "redemption-242064-settings-success-message-text": "Discount Applied",
                      "redemption-243448-displayname": "500 points ",
                      "redemption-243448-settings-button-color": "#556DD8",
                      "redemption-243448-settings-button-text": "REDEEM",
                      "redemption-243448-settings-button-text-color": "white",
                      "redemption-243448-settings-button-type": "filled_rectangle",
                      "redemption-243448-settings-call-to-action-button-text": "REDEEM",
                      "redemption-243448-settings-cost": 500,
                      "redemption-243448-settings-cost-color": "#666d8b",
                      "redemption-243448-settings-cost-font-size": "20",
                      "redemption-243448-settings-cost-text": "{{points}} POINTS",
                      "redemption-243448-settings-coupon-cost-font-size": "15",
                      "redemption-243448-settings-coupon-reward-font-size": "29",
                      "redemption-243448-settings-discount-amount-cents": 5000,
                      "redemption-243448-settings-discount-type": "fixed_amount",
                      "redemption-243448-settings-reward": "500 points ",
                      "redemption-243448-settings-reward-color": "#011247",
                      "redemption-243448-settings-reward-font-size": "30",
                      "redemption-243448-settings-success-message-text": "Discount Applied",
                      "rule-border-color": "#bccdfe",
                      "rule-color": "#061153",
                      "rule-font-size": "18",
                      "secondary-font-name-and-url": "Nunito Sans@400|https://fonts.googleapis.com/css?family=Nunito+Sans\u0026display=swap",
                      "selected-extensions": [
                        "242062",
                        "242063",
                        "242064",
                        "243448"
                      ],
                      "selected-redemptions-modes": "regular",
                      "subscription-coupon-applied-message-body": "The discount was applied to your upcoming subscription order. Youâll be able to get another discount once the next order is processed.",
                      "subscription-coupon-applied-message-color": "#707997",
                      "subscription-coupon-applied-message-title": "",
                      "subscription-divider-color": "#c2cdf4",
                      "subscription-headline-color": "#666d8b",
                      "subscription-headline-font-size": "14",
                      "subscription-points-headline-text": "YOUR POINT BALANCE",
                      "subscription-points-subtitle-text": "{{current_point_balance}} Points",
                      "subscription-redemptions-description": "Choose a discount option that will automatically apply to your next subscription order.",
                      "subscription-redemptions-headline": "Redeem for Subscription Discount",
                      "subscription-subtitle-color": "#768cdc",
                      "subscription-subtitle-font-size": "20",
                      "view-layout": "full-layout"
                    },
                    staticContent: {
                      "currency": "USD",
                      "isMultiCurrencyEnabled": false,
                      "merchantId": "37758",
                      "platformName": "shopify",
                      "storeLoginUrl": "/account/login",
                      "subunitsPerUnit": 100
                    },
                    className: "CouponsRedemptionWidget",
                    dependencyGroupId: 2
                },
            
                "38444": {
                    instanceId: "38444",
                    instanceVersionId: "739949",
                    templateAssetUrl: "https://cdn-widget-assets.yotpo.com/widget-visual-redemption/app.v0.3.3-2418.js",
                    cssOverrideAssetUrl: "",
                    customizationCssUrl: "",
                    customizations: {
                      "description-color": "#666d8b",
                      "description-font-size": "20",
                      "headline-color": "#011247",
                      "headline-font-size": "36",
                      "layout-background-color": "white",
                      "primary-font-name-and-url": "Montserrat@600|https://fonts.googleapis.com/css?family=Montserrat:600\u0026display=swap",
                      "redemption-1-displayname": "Tile 1",
                      "redemption-1-settings-cost": "0 points",
                      "redemption-1-settings-cost-color": "#666d8b",
                      "redemption-1-settings-cost-font-size": "20",
                      "redemption-1-settings-reward": "$0",
                      "redemption-1-settings-reward-color": "#011247",
                      "redemption-1-settings-reward-font-size": "30",
                      "redemption-2-displayname": "Tile 2",
                      "redemption-2-settings-cost": "0 points",
                      "redemption-2-settings-cost-color": "#666d8b",
                      "redemption-2-settings-cost-font-size": "20",
                      "redemption-2-settings-reward": "$0",
                      "redemption-2-settings-reward-color": "#011247",
                      "redemption-2-settings-reward-font-size": "30",
                      "redemption-3-displayname": "Tile 3",
                      "redemption-3-settings-cost": "0 points",
                      "redemption-3-settings-cost-color": "#666d8b",
                      "redemption-3-settings-cost-font-size": "20",
                      "redemption-3-settings-reward": "$0",
                      "redemption-3-settings-reward-color": "#011247",
                      "redemption-3-settings-reward-font-size": "30",
                      "rule-border-color": "#bccdfe",
                      "rule-color": "#061153",
                      "rule-font-size": "18",
                      "secondary-font-name-and-url": "Nunito Sans@400|https://fonts.googleapis.com/css?family=Nunito+Sans\u0026display=swap",
                      "selected-extensions": [
                        "1",
                        "2",
                        "3"
                      ],
                      "view-layout": "full-layout",
                      "visual-redemption-description": "Redeeming your hard-earned points is easy! Simply apply your points for a discount at checkout!",
                      "visual-redemption-headline": "How to use your points",
                      "visual-redemption-rule": "100 points equals $10.00"
                    },
                    staticContent: {
                      "currency": "USD",
                      "isMultiCurrencyEnabled": false,
                      "platformName": "shopify"
                    },
                    className: "VisualRedemptionWidget",
                    dependencyGroupId: 2
                },
            
                "38443": {
                    instanceId: "38443",
                    instanceVersionId: "720312",
                    templateAssetUrl: "https://cdn-widget-assets.yotpo.com/widget-hero-section/app.v0.1.4-2413.js",
                    cssOverrideAssetUrl: "",
                    customizationCssUrl: "",
                    customizations: {
                      "background-image-url": "https://cdn-widget-assets.yotpo.com/widget-hero-section/customizations/defaults/BackgroundImage.jpg",
                      "description-color": "#0F0C6D",
                      "description-font-size": "20",
                      "description-text-logged-in": "As a member you'll earn points \u0026 exclusive rewards every time you shop.",
                      "description-text-logged-out": "Become a member and earn points \u0026 exclusive rewards every time you shop.",
                      "headline-color": "#0a0f5f",
                      "headline-font-size": "40",
                      "headline-text-logged-in": "Welcome to the club",
                      "headline-text-logged-out": "Join the club",
                      "login-button-color": "#0f0c6d",
                      "login-button-text": "LOGIN",
                      "login-button-text-color": "#0f0c6d",
                      "login-button-type": "rectangular_outline",
                      "mobile-background-image-url": "https://cdn-widget-assets.yotpo.com/widget-hero-section/customizations/defaults/MobileBackgroundImage.jpg",
                      "primary-font-name-and-url": "Montserrat@600|https://fonts.googleapis.com/css?family=Montserrat:600\u0026display=swap",
                      "register-button-color": "#0f0c6d",
                      "register-button-text": "JOIN NOW",
                      "register-button-text-color": "#ffffff",
                      "register-button-type": "filled_rectangle",
                      "secondary-font-name-and-url": "Nunito Sans@400|https://fonts.googleapis.com/css?family=Nunito+Sans:400\u0026display=swap",
                      "view-layout": "left-layout"
                    },
                    staticContent: {
                      "merchantId": "37758",
                      "platformName": "shopify",
                      "storeLoginUrl": "//eggie.us/account/login",
                      "storeRegistrationUrl": "//eggie.us/account/register"
                    },
                    className: "HeroSectionWidget",
                    dependencyGroupId: 2
                },
            
            },
            guidStaticContent: {},
            dependencyGroups: {
                      "2": [
                        "https://cdn-widget-assets.yotpo.com/widget-vue-core/app.v0.1.0-2295.js"
                      ]
                    }
        },
        initializer: "https://cdn-widget-assets.yotpo.com/widgets-initializer/app.v0.0.41-2458.js",
        analytics: "https://p.yotpo.com/js/bundle.js"
    }
    var initWidgets = function (config) {
        const widgetInitializer = yotpoWidgetsContainer['yotpo_widget_initializer'](config);
        return widgetInitializer.initWidgets();
    };
    var onInitializerLoad = function (config) {
        yotpoWidgetsContainer.initWidgets = function () {
            return initWidgets(config);
        }
        yotpoWidgetsContainer.initWidgets();
    };
    if (!yotpoWidgetsContainer.yotpo_widget_scripts_loaded) {
        yotpoWidgetsContainer.yotpo_widget_scripts_loaded = true;
        yotpoWidgetsContainer.onInitializerLoad = function () { onInitializerLoad(loader.config) };
        loader.loadDep(loader.analytics, function () {}, 'defer');
        
        loader.loadDep(loader.initializer, function () { yotpoWidgetsContainer.onInitializerLoad() }, 'async');
        
    }
})()
