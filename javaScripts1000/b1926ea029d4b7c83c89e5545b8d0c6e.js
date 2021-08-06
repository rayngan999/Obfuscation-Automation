<script id="tpl-loggedIn-dropdDown" type="text/x-jsrender">
<ul>
    <li class="signed-in-content kas-signed-in-content-settings-icon">
        <div class="setting-icon kas-setting-icon"> 
            <img src="/snb/media/images/global-header-refresh-icons/settings-icon.png" alt="setting"> 
        </div>
        <div class="setting-sign-out kas-setting-sign-out"> 
            <a class="Settings" href="/myaccount/v2/myinfo.jsp" title="Settings">Settings</a> <a href="/common/logoutConfirmation.jsp" title="Sign Out">Sign Out</a>
        </div>
    </li>
    <li class="signed-in-heading kas-signed-in-heading-order"> <span>Recent Orders</span> </li>
    <li class="signed-in-content kas-signed-in-content-rewards-icon">
        <div class="general-rewards-icon kas-general-rewards-icon">
            <img src="/snb/media/images/global-header-refresh-icons/recent-orders-icon.png">
        </div>
        <div class="recent-order-text kas-recent-order-text">
            <a href="/myaccount/v2/order-history.jsp" title="Purchase History">
                <strong> <b>View recent orders</b> </strong>
            </a>
        </div>
    </li>
    <li class="signed-in-heading kas-signed-in-heading-Wallet"> <span>Wallet</span> </li>
    <li class="three-wallet kas-three-wallet">
        <div class="wallet-widget-box pilot-user kas-wallet-widget-box-pilot">
            <a href="/wallet/my_wallet.jsp#kohls-cash">
                <div class="dropdown-spinner"></div>
                <div class="wallet-widget-view kas-wallet-widget-view-kc">
                    <div class="wallet-detail-text kohls-cash-color kohlsCash-amount">$0</div>
                    <div class="wallet-detail-label kohls-cash-text">Kohl's Cash</div>
                </div>
            </a>
            <a href="/wallet/my_wallet.jsp#offers">
                <div class="dropdown-spinner"></div>
                <div class="wallet-widget-view kas-wallet-widget-view-offer">
                    <div class="wallet-detail-text offer-color offer-quantity">0</div>
                    <div class="wallet-detail-label">Offers</div>
                </div>
            </a>
        </div>
        <div class="wallet-widget-box non-pilot-user kas-wallet-widget-box-nonpilot" style="display: none;">
            <a href="/wallet/my_wallet.jsp#kohls-cash">
                <div class="dropdown-spinner"></div>
                <div class="non-pilot-wallet-widget " {{if $env.ksLoyaltyFullLaunchEnabled}}style="width:125px"{{/if}}>
                    <div class="wallet-detail-text kohls-cash-color">
                        <span class="kohlsCash-amount">$0</span>
                    </div>
                    <div class="wallet-detail-label">Kohl's Cash</div>
                </div>
            </a>
            <a href="/wallet/my_wallet.jsp#offers">
                <div class="dropdown-spinner"></div>
                <div class="non-pilot-wallet-widget" id="non-pilot-wallet-widget-offer" {{if $env.ksLoyaltyFullLaunchEnabled}}style="width:125px !important"{{/if}}>
                    <div class="wallet-detail-text offer-color">
                        <span class="offer-quantity">0</span>
                    </div>
                    <div class="wallet-detail-label">Offers</div>
                </div>
            </a> 
        </div>
    </li>

        <li class="signed-in-content">
            <div class="general-rewards-icon">
                <img src="/snb/media/images/global-header-refresh-icons/wallet-icon.png">
            </div>
            <div class="wallet-text">
                {{if $env.ksLoyaltyFullLaunchEnabled}}
                    <span>See your offers, Kohl's Rewards and Kohl's Cash in your </span>
                    <a href="/wallet/my_wallet.jsp#offers" title="Wallet">Wallet</a> 
                {{/if}}
            </div>
        </li> 
    <!-- loyalty v2 start -->
    <li class="three-wallet three-wallet-v2 loyaltyV2 kas-three-wallet" style="display: none;">
        <div class="wallet-widget-box pilot-user kas-wallet-widget-box-pilot">
            <a href="/wallet/my_wallet.jsp#kohls-cash">
                <div class="dropdown-spinner"></div>
                <div class="wallet-widget-view kas-wallet-widget-view-kc">
                    <div class="wallet-detail-text kohls-cash-color kohlsCash-amount">$0</div>
                    <div class="wallet-detail-label kohls-cash-text">Kohlâs Cash<sup>&reg;</sup> available</div>
                </div>
            </a>
            <a href="/wallet/my_wallet.jsp#offers">
                <div class="dropdown-spinner"></div>
                <div class="wallet-widget-view kas-wallet-widget-view-offer">
                    <div class="wallet-detail-text offer-color offer-quantity">0</div>
                    <div class="wallet-detail-label">Offers</div>
                </div>
            </a>
        </div>
        <div class="wallet-widget-box non-pilot-user kas-wallet-widget-box-nonpilot" style="display: none;">
            <a href="/wallet/my_wallet.jsp#kohls-cash">
                <div class="dropdown-spinner"></div>
                <div class="non-pilot-wallet-widget "{{if $env.ksLoyaltyFullLaunchEnabled}}style="width:125px"{{/if}}>
                    <div class="wallet-detail-text kohls-cash-color"> <span class="kohlsCash-amount">$0</span> </div>
                    <div class="wallet-detail-label">Kohl's Cash</div>
                </div>
            </a>
            <a href="/wallet/my_wallet.jsp#offers">
                <div class="dropdown-spinner"></div>
                <div class="non-pilot-wallet-widget" id="non-pilot-wallet-widget-offer" {{if $env.ksLoyaltyFullLaunchEnabled}}style="width:125px !important"{{/if}}>
                    <div class="wallet-detail-text offer-color"> <span class="offer-quantity">0</span> </div>
                    <div class="wallet-detail-label">Offers</div>
                </div>
            </a> </div>
    </li>
    <li class="v2signed-in-content loyaltyV2 wallet-v2" style="display: none;">
        <div class="general-rewards-icon">
            <img src="/snb/media/images/global-header-refresh-icons/wallet-icon.png">
        </div>
        <div class="wallet-text"> 
            <span>Find your offers and Kohl's Cash in your </span><a href="/wallet/my_wallet.jsp#offers" title="Wallet">Wallet</a>
        </div>
    </li>
    <li class="v2signed-in-heading loyaltyV2 kas-mykohlscharge mykohlscharge" style="display:none;">
        <div class="ib">My Kohl's Card</div>
        <div class="mvc-badge-horizontal"></div> 
        {{if $env.kccmEnabled && $env.kccmAccountMenuEnabled}}
            <a href="/myaccount/mycard/manage.jsp" class="pay-bill float-right">Pay My Bill</a>   
        {{else}}
            <a href="https://credit.kohls.com/" onclick="javascript:launchCorporate('https://credit.kohls.com/', '', 'kccRedirectionWarning'); return false;" class="pay-bill float-right">Pay My Bill</a>
        {{/if}}
    </li>
    <li class="v2signed-in-content loyaltyV2 kas-event-offer event-offer apply-kcc-container" style="display:none;">
        <div class="event-message kcc-apply-bg"> Take an extra 35% off your first <br>Kohl's Card purchase.<sup>*</sup> 
        </div>
        <a href="javascript:launchCorporate('https://apply.kohls.com/')"class="apply-kcc-link">Apply Now</a>
        <div class="v2-kcc-tos">*Subject to credit approval. Terms and exclusions apply.</div>
    </li>
    <li class="v2signed-in-content loyaltyV2 mvc-tracker non-mvc kas-mvc-tracker" style="display:none;">
        <div class="mvc-tracker-message non-mvc"> Spend <span class="MVCSpenAwayAmount">$XXX</span> more with your
            Kohl's Card by the end of the year to earn Most Valued Customer (MVC) status! </div>
    </li>
    <li class="v2signed-in-content loyaltyV2 mvc-tracker existing-mvc kas-mvc-tracker" style="display:none;">
        <div class="mvc-tracker-message non-mvc"> Spend <span class="MVCSpenAwayAmount">$XXX</span> more with your
            Kohl's Card by the end of the year to enjoy your Most Valued Customer (MVC) benefits for another year!
        </div>
    </li>
    <li class="v2signed-in-content loyaltyV2 kas-event-offer event-offer free-shipping kcc-primary"
        style="display:none;">
        <div class="event-message"> <span class="highlight text-color">YOU HAVE FREE STANDARD SHIPPING<span> </div>
    </li>
    <li class="v2signed-in-content loyaltyV2 kas-event-offer event-offer free-shipping free-shipping-only"
        style="display:none;">
        <div class="event-message"> Get <span class="highlight">free standard shipping</span> when you use your Kohl's
            Charge today. </div>
        <div class="kohls-charge-action-link-container kas-kohls-charge-action-link-container">
            <a href="javascript:void(0)" class="text-color action-link kcc-state set-kohls-primary">Set Kohl's Card as primary payment</a> 
            <a href="javascript:void(0)" class="text-color action-link kcc-state add-kohls-charge">Add your Kohl's Card</a>
            <div class="kas-add-kcc-success-msg kcc-state add-kcc-success-msg">all set!</div>
            <div class="kas-add-kcc-error-msg kcc-state add-kcc-error-msg">Something went wrong</div>
        </div>
    </li>
    <li class="v2signed-in-content loyaltyV2 kas-event-offer event-offer free-shipping earn-event calculated"
        style="display:none;">
        <div class="event-message"> Get <span class="highlight">free standard shipping</span>, plus earn an extra<span
                class="highlight"><span class="earn-amount">$XXX.XX</span> in Kohl's Rewards</span> when you use your
            Kohl's Card today. </div>
        <div class="kohls-charge-action-link-container kas-kohls-charge-action-link-container"> <a
                href="javascript:void(0)" class="text-color action-link kcc-state set-kohls-primary">Set Kohl's Card
                as primary payment</a> <a href="javascript:void(0)"
                class="text-color action-link kcc-state add-kohls-charge">Add your Kohl's Card</a>
            <div class="kas-add-kcc-success-msg kcc-state add-kcc-success-msg">all set!</div>
            <div class="kas-add-kcc-error-msg kcc-state add-kcc-error-msg">Something went wrong</div>
        </div>
    </li>
    <li class="v2signed-in-content loyaltyV2 kas-event-offer event-offer free-shipping earn-event generic"
        style="display:none;">
        <div class="event-message"> Get <span class="highlight">free standard shipping</span>, plus earn <span
                class="highlight"><span class="earn-amount">XX%</span> in Kohl's Rewards</span> when you use your Kohl's
            Charge today. </div>
        <div class="kohls-charge-action-link-container kas-kohls-charge-action-link-container"> <a
                href="javascript:void(0)" class="text-color action-link kcc-state set-kohls-primary">Set Kohl's Card
                as primary payment</a> <a href="javascript:void(0)"
                class="text-color action-link kcc-state add-kohls-charge">Add your Kohl's Card</a>
            <div class="kas-add-kcc-success-msg kcc-state add-kcc-success-msg">all set!</div>
            <div class="kas-add-kcc-error-msg kcc-state add-kcc-error-msg">Something went wrong</div>
        </div>
    </li>
    <li class="v2signed-in-content loyaltyV2 kas-event-offer event-offer earn-event-only calculated"
        style="display:none;">
        <div class="event-message"> Earn an extra <span class="highlight"><span class="calculated-amount">$XXX.XX</span>
                in Kohl's Rewards</span>, when you use your Kohl's Card today. </div>
        <div class="kohls-charge-action-link-container kas-kohls-charge-action-link-container"> <a
                href="javascript:void(0)" class="text-color action-link kcc-state set-kohls-primary">Set Kohl's Card
                as primary payment</a> <a href="javascript:void(0)"
                class="text-color action-link kcc-state add-kohls-charge">Add your Kohl's Card</a>
            <div class="kas-add-kcc-success-msg kcc-state add-kcc-success-msg">all set!</div>
            <div class="kas-add-kcc-error-msg kcc-state add-kcc-error-msg">Something went wrong</div>
        </div>
    </li>
    <li class="v2signed-in-content loyaltyV2 kas-event-offer event-offer earn-event-only generic" style="display:none;">
        <div class="event-message"> Earn <span class="highlight"><span class="generic-amount">XX%</span> in Kohl's
                Rewards</span>, when you use your Kohl's Card today. </div>
        <div class="kohls-charge-action-link-container kas-kohls-charge-action-link-container"> <a
                href="javascript:void(0)" class="text-color action-link kcc-state set-kohls-primary">Set Kohl's Card
                as primary payment</a> <a href="javascript:void(0)"
                class="text-color action-link kcc-state add-kohls-charge">Add your Kohl's Card</a>
            <div class="kas-add-kcc-success-msg kcc-state add-kcc-success-msg">all set!</div>
            <div class="kas-add-kcc-error-msg kcc-state add-kcc-error-msg">Something went wrong</div>
        </div>
    </li>
    <li class="v2signed-in-content loyaltyV2 kas-event-offer event-offer no-event" style="display:none;">
        <div class="event-message"> Have your Kohl's Card ready to go at checkout. </div>
        <div class="kohls-charge-action-link-container kas-kohls-charge-action-link-container"> <a
                href="javascript:void(0)" class="text-color action-link kcc-state set-kohls-primary">Set Kohl's Card
                as primary payment</a> <a href="javascript:void(0)"
                class="text-color action-link kcc-state add-kohls-charge">Add your Kohl's Card</a>
            <div class="kas-add-kcc-success-msg kcc-state add-kcc-success-msg">all set!</div>
            <div class="kas-add-kcc-error-msg kcc-state add-kcc-error-msg">Something went wrong</div>
        </div>
    </li>
    <li class="v2signed-in-heading loyaltyV2 kas-kohlsrewards kohlsrewards" style="display:none;">
        <div class="ib">Kohl's Rewards</div> <a href="/myaccount/kohls_rewards.jsp"
            class="rewards-see-more float-right">See More</a>
    </li>
    <li class="v2signed-in-content loyaltyV2 kas-balance-container balance-container balance-container-loaded"
        style="display:none;">
        <div class="balance-section"> <span class="highlight">$17.82</span> balance </div>
        <div class="balance-progress-section">
            <div class="progress-bar-container">
                <div class="progress-bar"></div>
            </div>
            <div class="balance-progress-message earn-event-spendaway-msg"> Spend <span class="highlight">$XXX.XX</span>
                today with your Kohl's <br> Charge to earn your next <span class="spendaway-earn-amount">$5</span> in
                Kohl's Rewards. </div>
            <div class="balance-progress-message no-earn-event-spendaway-msg"> Spend <span
                    class="highlight">$XXX.XX</span> to earn your <br>next <span class="spendaway-earn-amount">$5</span>
                in Kohl's Rewards. </div>
        </div>
    </li>
    <li class="v2signed-in-content loyaltyV2 kas-balance-container balance-container balance-container-loading"
        style="display:none;">
        <div class="balance-loading-spinner"></div>
    </li>
    <li class="v2signed-in-content loyaltyV2 kas-balance-container balance-container balance-container-error"
        style="display:none;">
        <div class="balance-error-message">View Kohl's Rewards balance, more ways to earn and program details.</div>
    </li> <!-- loyalty v2 End -->
    <li class="signed-in-heading non-elite-user kas-signed-in-content-kohls-charge-non-elite" style="display: none;">
        <span>My Kohl's Card</span> </li>
    <li class="signed-in-content non-elite-user kas-signed-in-content-kohls-charge">
        <div class="kcc-icon kas-kcc-icon"> <img src="/snb/media/images/global-header-refresh-icons/kohls-charge.png"
                alt="kohls-charge" class="non-pilot-user" style="display: none;"> <img
                src="/snb/media/images/kkc_loyalty2Images/ic-creditcard-o.svg" alt="kohls-charge"
                class="pilot-user myKCCImage"> </div>
        <div class="learn-apply kas-kc-learn-apply"> 
            {{if $env.kccmEnabled && $env.kccmAccountMenuEnabled}}
                <a class="Settings" href="/myaccount/mycard/manage.jsp" title="Manage account">Pay My Bill</a> 
            {{else}}
                <a class="Settings" href="https://credit.kohls.com/" onclick="javascript:launchCorporate('https://credit.kohls.com/', '', 'kccRedirectionWarning'); return false;" title="Manage account">Pay My Bill</a>
            {{/if}}
            <a href="javascript:launchCorporate('https://apply.kohls.com/')" title="Apply">Apply</a>
        </div>
    </li>
    <li class="signed-in-heading elite-user kas-signed-in-heading-kc" style="display: list-item;"> 
        <span>My Kohl's Card</span> 
        {{if $env.kccmEnabled && $env.kccmAccountMenuEnabled}}
            <span class="elite-accDropdown-payMyBill kas-elite-accDropdown-payMyBill" onclick="document.location='/myaccount/mycard/manage.jsp';return false;" style="cursor: pointer; display: none;">Pay My Bill</span> 
        {{else}}
            <span class="elite-accDropdown-payMyBill kas-elite-accDropdown-payMyBill" onclick="javascript:launchCorporate('https://credit.kohls.com/', '', 'kccRedirectionWarning'); return false;" style="cursor: pointer; display: none;">Pay My Bill</span> 
        {{/if}}
    </li>
    <li class="signed-in-content elite-user kas-signed-in-content-elite-freeshipping" style="display: none;">
        <div class="elite-accDropdown-section kas-elite-accDropdown-section-freeshipping">
            <div class="elite-accDropdown-img-section kas-elite-accDropdown-img-section-freeshipping"> <img
                    src="/snb/media/images/global-header-refresh-icons/elite-freeshipping.png"
                    class="elite-accDropdown-image kas-elite-accDropdown-image-freeshipping"> </div>
            <div class="elite-accDropdown-msg-section">
                <div class="elite-accDropdown-msg-label"> <span>Get free standard shipping and 10% Kohlâs Cash<sup>&reg;</sup></span>
                    when you use your Kohl's Card </div>
                <div class="elite-accDropdown-wrong-section kas-elite-accDropdown-wrong-section-wrong"
                    style="display:none;"> <img
                        src="/snb/media/images/global-header-refresh-icons/elite-wrong-symbol.png"
                        class="elite-wrongsymbol-image kas-elite-wrongsymbol-image"> <span>Something went wrong.</span>
                </div>
                <div class="elite-accDropdown-allset-section kas-elite-accDropdown-allset-section-allset"
                    style="display: none;"> <img src="/snb/media/images/global-header-refresh-icons/elite-correct.png"
                        class="elite-allset-image kas-elite-allset-image"> <span>all set!</span> </div>
                <div class="elite-accDropdown-setprimary-section kas-elite-accDropdown-setprimary-section"
                    style="display: none;"> <span> <a href="javascript:void(0)" id="set-as-primary"
                            class="kas-set-as-primary">set as primary payment</a> </span> </div>
                <div class="elite-accDropdown-add-kohls-charge kas-elite-accDropdown-add-kohls-charge"
                    style="display: none;"> <span> <a href="javascript:void(0)" id="add-kohls-charge"
                            class="tce-btn-great-add kas-tce-btn-great-add">add your Kohl's Card</a> </span> </div>
            </div>
        </div>
    </li>
    <li class="signed-in-content non-elite-user spend-away-message kas-signed-in-content-spend-away-non-elite"
        style="display: none;">
        <div class="elite-accDropdown-section kas-elite-accDropdown-section-spend-away">
            <div class="elite-accDropdown-img-section kas-elite-accDropdown-img-section-spend-away"> <img
                    src="/snb/media/images/global-header-refresh-icons/elite-tobe-freeshipping.png"
                    class="elite-accdropdown-image kas-elite-accdropdown-image-spend-away"> </div>
            <div class="elite-accDropdown-msg-section kas-elite-accDropdown-msg-section-spend-away">
                <div class="elite-accDropdown-msg-label kas-elite-accDropdown-msg-label-spend-away"> Spend <span
                        id="elitsepenawaypoint"></span> more with your Kohl's Card to get <span>free standard
                        shipping</span> and other Elite Member benefits on future purchases </div>
                <div class="elite-freeshipping-learnmore-section kas-elite-freeshipping-learnmore-section-spend-away">
                    <div class="rpanel_dashboard_links kas-rpanel_dashboard_linkas-spend-away">
                        <ul>
                            <li> <a href="/feature/flex/program-details.jsp?pageName=programDetails">learn more</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li class="signed-in-content non-elite-user kcc-not-linked kas-signed-in-content-freeshipping"
        style="display: flex;">
        <div class="elite-accDropdown-section kas-elite-accDropdown-section-freeshipping">
            <div class="elite-accDropdown-img-section kas-elite-accDropdown-img-section-freeshipping"> <img
                    src="/snb/media/images/global-header-refresh-icons/elite-tobe-freeshipping.png"
                    class="elite-accdropdown-image kas-elite-accdropdown-image"> </div>
            <div class="elite-accDropdown-msg-section kas-elite-accDropdown-msg-section-freeshipping">
                <div class="elite-accDropdown-msg-label kas-elite-accDropdown-msg-label-freeshipping"> <span>Earn 10% of Kohl's Cash<sup>&reg;</sup></span> every day with a Kohl's Card. That's an additional 5%! </div>
                <div class="elite-freeshipping-learnmore-section kas-elite-freeshipping-learnmore-section-freeshipping">
                    <a href="javascript:launchCorporate('https://apply.kohls.com/')" title="apply now">apply now</a>
                </div>
            </div>
        </div>
    </li>

    <li class="signed-in-heading non-pilot-user kas-signed-in-heading-non-pilot" style="display: none;">
    {{if $env.ksLoyaltyFullLaunchEnabled}}<span>Kohl's Rewards</span>{{/if}}
    </li>
    <li class="signed-in-content non-pilot-user kas-signed-in-content-non-pilot" style="display: none;">
        <div class="yes2you-rewards-icon kas-yes2you-rewards-icon">
            <img {{if $env.ksLoyaltyFullLaunchEnabled}}src="/snb/media/images/loyaltyV2/rewards_green.svg"{{/if}} class="wallet-detail-y2y-badge">
        </div>
        <div class="KohlsRewardsText kas-KohlsRewardsText-non-pilot">
            {{if $env.ksLoyaltyFullLaunchEnabled}}
                <span>Earn more Kohl's Cash. Every purchase. No matter how big or small.</span> <a href="/myaccount/kohls_rewards.jsp" title="Kohl's Rewards">Enroll today</a>
            {{/if}}
        </div>
    </li>
    <li class="signed-in-heading pilot-user kas-signed-in-heading"> <span>Kohl's Rewards</span> </li>
    <li class="signed-in-content pilot-user kas-signed-in-content">
        <div class="general-rewards-icon kas-general-rewards-icon"> <img src="/snb/media/images/global-header-refresh-icons/cash-icon.svg" /> </div>
        <div class="KohlsRewardsText kas-KohlsRewardsText"> <span>View recent activity, program details and more ways to earn</span> <a href="/myaccount/kohls_rewards.jsp">Learn more </a> </div>
    </li>
    {{if $env.sephoraEnabled && $env.sephoraWalletEnabled}}
    <li class="signed-in-heading" id="account-menu-bi-insder-container">
        <div class="bi-insder-heading kas-bi-insder-heading bi-menu-hide">Sephora Beauty Insider</div> 
        <div class="bi-insder-heading-text bi-menu-hide"><a href="/wallet/my_wallet.jsp#beauty-insider" id="bi-heading-action">See more</a></div> 
    </li>
    <li class="signed-in-content bi-insder-content kas-bi-insder-content" id="account-menu-bi-insder-content">
        <div class="bi-insder-text bi-menu-hide">
            <a href="javascript:void(0)" class="bi-signup-action existing-account" id="bi-signup-action">Join Now or find your account</a>
            <a href="javascript:void(0)" class="bi-signup-action verify-opt kohls-bi-otp" id="bi-otp-action">Don't forget to verify email to earn</a>
        </div>
    </li>
    {{/if}}
</ul>
</script>

<script id="tpl-guest-dropDown" type="text/x-jsrender">
    <div class="dropdownsigninbtn">
        <a href="/myaccount/kohls_login.jsp" title="Sign In" ex-href="/myaccount/kohls_login.jsp" data-href="/myaccount/modal/kohls_modal_login.jsp" id="pb_signin">
            <div class="account-signin"> SIGN IN </div>
        </a>
    </div>
    <div class="dropdownregisterbtn">
        <a href="/myaccount/kohls_login.jsp?action=createAccount" ex-href="/myaccount/kohls_login.jsp?action=createAccount" data-href="/myaccount/kohls_login.jsp?action=createAccount" class="create-account">Create Account </a>â
    </div>
    <ul>
        <li>
            <div id="utility-nav-wallet" class="utility-nav-wallet">
                <div class="utility-nav-wallet-img">
                    <a href="/wallet/my_wallet.jsp" class="utility-nav-wallet-svg"> <img src="/media/images/global-header-refresh-icons/wallet-icon.png" alt="Kohl's wallet" /> </a>
                </div>
                <div class="utility-nav-wallet-text"> <a href="/wallet/my_wallet.jsp">Wallet</a> </div>
            </div>
        </li>
        <li>
            {{if $env.ksLoyaltyFullLaunchEnabled}}
                <div class="yes2you-logo-img">
                    <a href="/feature/rewards.jsp"> <img src="/snb/media/images/loyaltyV2/rewards-green.png" alt="kohls rewards" title="kohls rewards" style="width:40px" /> </a>
                </div>
                <div class="yes2you-logo-text"> <a href="/feature/rewards.jsp">Kohl's Rewards</a> </div>
            {{/if}}
        </li>
        <li>
            {{if $env.kccmEnabled && $env.kccmAccountMenuEnabled}}
                <div class="kohls-cash-logo-img">
                    <a href="/myaccount/mycard/manage.jsp"><img src="/media/images/global-header-refresh-icons/kohls-charge.png" alt="My Kohl's Card" title="My Kohl's Card" /> </a>
                </div>
                <div class="kohls-cash-logo-text"><a href="/myaccount/mycard/manage.jsp">My Kohl's Card</a></div>
            {{else}}
                <div class="kohls-cash-logo-img">
                    <a href="https://credit.kohls.com/eCustService/" onclick="javascript:launchCorporate('https://credit.kohls.com/eCustService/', '', 'kccRedirectionWarning'); return false;"> <img src="/media/images/global-header-refresh-icons/kohls-charge.png" alt="My Kohl's Card" title="My Kohl's Card" /> </a>
                </div>
                <div class="kohls-cash-logo-text"> <a href="https://credit.kohls.com/eCustService/" onclick="javascript:launchCorporate('https://credit.kohls.com/eCustService/', '', 'kccRedirectionWarning'); return false;">My Kohl's Card</a> </div>
            {{/if}}
        </li>
    </ul>
</script>
