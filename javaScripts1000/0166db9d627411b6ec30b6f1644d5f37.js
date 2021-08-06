ï»¿/*
 * setupLoanApprovalEstimateBannerAndModal() is being called on TradeSites list page
 * setLoanApprovalEstimateModalNewRegistrantFlag(); is being called on TradeSites Registration page (2 views) and TradePubs registration page
*/

var enableLoanApprovalEstimateTopDropdown = false;
var enableNewRegistrationPopUp = true;
var enableListDetailBanners = true;
 
var loanApprovalEstimateTopDropdownLocalStorageName = "currencyTopDropdownClosed_2";
var approvalAmountLocalStorageName = "approvalEstimate";
var popupListDetailLoanApprovalEstimateModal = "popupListDetailLoanApprovalEstimateModal";

//Document Ready
$(document).ready(function () {

    //Top Dropdown Click Events
    $(".currency-topdropdown-btn-save").click(function () {
        if (loanApprovalEstimateFieldsFilledOut("TopDropDown")) {
            loanApprovalEstimateCalculate("TopDropDown");
        }
    });

    $(".currency-topdropdown-btn-close").click(function () {
        localStorage.setItem(loanApprovalEstimateTopDropdownLocalStorageName, new Date());
        $('.currency-topdropdown').hide();
    });

    $(".currency-topdropdown .banner-message-mobile").click(function () {
        $(".currency-topdropdown .banner-message-mobile").hide();
        $(".currency-topdropdown .banner-form").slideToggle();
    });

    setupLoanApprovalEstimateBannerAndModal();
    showLoanApprovalEstimateModalForNewRegistrant();
});

function loanApprovalEstimateIsAuctionResults() {
    return $("#IsAuctionResults").val() == "true";
}

function setupLoanApprovalEstimateBannerAndModal() {
    // Banner Click Events
    $(".currency-btn").click(function () {
        openLoanApprovalEstimateModal();
    });
    $(".recalc-btn").click(function () {
        $("body").addClass("lock");
        if (loanApprovalEstimateFieldsFilledOut("Modal")) {
            $(".approval-amount").show();
            $(".modal-buttons").hide();
            loanApprovalEstimateCalculate("Modal");
        } else {
            $(".approval-amount").hide();
            $(".modal-buttons").show();
        }
        $(".currency-modal").show();
    });

    //Modal Click Events
    $(".currency-modal .close").click(function () {
        closeLoanApprovalEstimateModal();
    });
    $(".save-modal").click(function () {
        if (loanApprovalEstimateFieldsFilledOut("Modal")) {
            loanApprovalEstimateCalculate("Modal");
        }
    });
    $(".close-modal").click(function () {
        closeLoanApprovalEstimateModal();
    });

    if (loanApprovalEstimateIsAuctionResults()) {
        hideLoanApprovalEstimateTopDropdown();
        hideLoanApprovalEstimateBanner();
    }
    else {
        dropdownLoanApprovalEstimateTopDropdown();
        toggleLoanApprovalEstimateBanner();
    }
}

//Banner Functions
function showLoanApprovalEstimateNewBanner() {
    if (enableListDetailBanners) {
        $(".currency-estimate-not-completed").css("display", "flex");
        $(".modal-buttons").show();
        $(".currency-estimate-completed").hide();
        showLoanApprovalEstimateBanner();
    }
}

function showLoanApprovalEstimateCompletedBanner() {
    if (enableListDetailBanners) {
        $(".currency-estimate-completed").css("display", "flex");
        $(".approval-amount").show();
        $(".currency-estimate-not-completed").hide();
        showLoanApprovalEstimateBanner();
    }
}

function showLoanApprovalEstimateBanner() {
    $(".currency-banner").css("display", "flex");
}

//Top Dropdown Functions
function dropdownLoanApprovalEstimateTopDropdown() {
    if (canShowLoanApprovalEstimateTopDropdown()) {
        setTimeout(function () {
            $('.currency-topdropdown').slideDown();
        }, 1000);
    }
}

function canShowLoanApprovalEstimateTopDropdown() {
    var loanApprovalEstimateTopDropdownCloseDate = localStorage.getItem(loanApprovalEstimateTopDropdownLocalStorageName);
    if (!enableLoanApprovalEstimateTopDropdown || loanApprovalEstimateTopDropdownCloseDate) {
        return false;
    } else {
        return true;
    }
}

function showLoanApprovalEstimateTopDropdownNewEstimate() {
    $(".currency-topdropdown .banner-not-completed").show();
    $(".currency-topdropdown .banner-completion").hide();
    dropdownLoanApprovalEstimateTopDropdown();
}


function showLoanApprovalEstimateTopDropdownEstimateCompleted() {
    $(".currency-topdropdown .banner-not-completed").hide();
    $(".currency-topdropdown .banner-completion").show();
    dropdownLoanApprovalEstimateTopDropdown();
}

//Modal Functions
function setLoanApprovalEstimateModalNewRegistrantFlag() {
    if (enableNewRegistrationPopUp && !localStorage.getItem(approvalAmountLocalStorageName)) {
        localStorage.setItem(popupListDetailLoanApprovalEstimateModal, true);
    }
}

function showLoanApprovalEstimateModalForNewRegistrant() {
    if (enableNewRegistrationPopUp && localStorage.getItem(popupListDetailLoanApprovalEstimateModal) === "true" && !localStorage.getItem(approvalAmountLocalStorageName) && $('.currency-modal').length) {
        localStorage.removeItem(popupListDetailLoanApprovalEstimateModal);
        openLoanApprovalEstimateModal();
        window.dataLayer.push({ 'event': 'loan-approval-estimate-registration-triggered-modal-popup' });
    }
}

function hideLoanApprovalEstimateTopDropdown() {
    if (canShowLoanApprovalEstimateTopDropdown()) {
        $(".currency-topdropdown").slideUp();
    }
}

function hideLoanApprovalEstimateBanner() {
    $(".currency-banner").hide();
}

function openLoanApprovalEstimateModal() {
    $("body").addClass("lock");
    $(".currency-modal").show();
}

function closeLoanApprovalEstimateModal() {
    $("body").removeClass("lock");
    $(".currency-modal").hide();
}

//Common Functions
function toggleLoanApprovalEstimateBanner() {
    var loanApprovalEstimateApprovalAmt = localStorage.getItem(approvalAmountLocalStorageName);
    if (loanApprovalEstimateApprovalAmt) {
        showLoanApprovalEstimateCompletedBanner();
        showLoanApprovalEstimateTopDropdownEstimateCompleted();
        setLoanApprovalEstimateApprovalAmount(loanApprovalEstimateApprovalAmt);
    } else {
        showLoanApprovalEstimateNewBanner();
        showLoanApprovalEstimateTopDropdownNewEstimate();
    }
}

function setLoanApprovalEstimateApprovalAmount(loanApprovalEstimateApprovalAmt) {
    $(".loan-approval-amount").text(loanApprovalEstimateApprovalAmt);
}

function loanApprovalEstimateFieldsFilledOut(idType) {
    return $("#laemYearsInBusiness" + idType).val() && $("#laemCreditRange" + idType).val() && $("#laemPriorMaxLoanSize" + idType).val() && $("#laemAssetClass" + idType).val();
}

function loanApprovalEstimateCalculate(idType) {
    var loanApprovalEstimateApprovalAmt = loanApprovalEstimateGetApprovalAmount(idType);
    if (!isNaN(loanApprovalEstimateApprovalAmt)) {
        if (loanApprovalEstimateApprovalAmt > 0) {
            loanApprovalEstimateApprovalAmt = loanApprovalEstimateNumberWithCommas(loanApprovalEstimateApprovalAmt);
            loanApprovalEstimateApprovalAmt = "$".concat(loanApprovalEstimateApprovalAmt, "**");
            localStorage.setItem(approvalAmountLocalStorageName, loanApprovalEstimateApprovalAmt);
            $("#approval-gt0").show();
            $("#approval-0").hide();
            $(".currency-topdropdown-btn-save").text("Check Buying Power");
        } else {
            localStorage.removeItem(approvalAmountLocalStorageName);
            if (idType == 'Modal') {
                $("#approval-gt0").hide();
                $("#approval-0").show();
            } else if (idType = 'TopDropDown') {
                $(".currency-topdropdown-btn-save").text("Weâre sorry, we could not issue pre-approval based on the information provided");
            }
        }
        toggleLoanApprovalEstimateBanner();
        $(".approval-amount").show();
        $(".modal-buttons").hide();
    }
}

function loanApprovalEstimateGetApprovalAmount(idType) {
    var loanApprovalEstimateYearsInBusiness = loanApprovalEstimateGetYearsInBusinessVal(idType);
    var loanApprovalEstimateCreditRange = loanApprovalEstimateGetCreditRangeVal(idType);
    var loanApprovalEstimatePriorMaxLoanSize = loanApprovalEstimateGetPriorMaxLoanSizeVal(idType);
    var loanApprovalEstimateAssetClass = loanApprovalEstimateGetAssetClassVal(idType);
    var compMultiplier = 0.75;
    var loanApprovalEstimateApprovalAmount = loanApprovalEstimateYearsInBusiness * loanApprovalEstimateCreditRange * loanApprovalEstimatePriorMaxLoanSize * loanApprovalEstimateAssetClass * compMultiplier;

    if (loanApprovalEstimateApprovalAmount > 100000) {
        loanApprovalEstimateApprovalAmount = 100000;
    } else {
        loanApprovalEstimateApprovalAmount = Math.ceil(loanApprovalEstimateApprovalAmount / 100) * 100;
    }
    return loanApprovalEstimateApprovalAmount;
}

function loanApprovalEstimateNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function loanApprovalEstimateGetYearsInBusinessVal(idType) {
    switch ($("#laemYearsInBusiness" + idType).val()) {
        case "1":
            return 1.2;
            break;
        case "2":
            return 1;
            break;
        case "3":
            return 0.8;
            break;
        case "4":
            return 0;
            break;
        default:
            return 0;
    }
}
function loanApprovalEstimateGetCreditRangeVal(idType) {
    switch ($("#laemCreditRange" + idType).val()) {
        case "1":
            return 1.25;
            break;
        case "2":
            return 1.15;
            break;
        case "3":
            return 1.13;
            break;
        case "4":
            return 0.6;
            break;
        case "5":
            return 0;
            break;
        default:
            return 0;
    }
}
function loanApprovalEstimateGetPriorMaxLoanSizeVal(idType) {
    switch ($("#laemPriorMaxLoanSize" + idType).val()) {
        case "1":
            return 0;
            break;
        case "2":
            return 27000;
            break;
        case "3":
            return 38000;
            break;
        case "4":
            return 58000;
            break;
        case "5":
            return 81000;
            break;
        case "6":
            return 100000;
            break;
        default:
            return 0;
    }
}
function loanApprovalEstimateGetAssetClassVal(idType) {
    switch ($("#laemAssetClass" + idType).val()) {
        case "1":
            return 1.3;
            break;
        case "2":
            return 0.75;
            break;
        case "3":
            return 0.92;
            break;
        case "4":
            return 1.3;
            break;
        case "5":
            return 1.1;
            break;
        case "6":
            return 0.8;
            break;
        default:
            return 0.8;
    }
}


