<script type="text/javascript">
$env.gobalHeader = (Kjs.cookie.get("headerT") == ''? 'expB' : Kjs.cookie.get("headerT"));
</script>
<script id="tr_phase2_persistent_bar_template" type="text/x-jsrender">
    {{if pbDetails.pbEnabled == 'true' }}
    <div class="tr_phase2_sub_header animationPB">
        <input type="hidden" id="pbEnable" value="1" />
        <div class="tr_phase2_shopping-bag_content">
            {{for tmpl="newPBImageSectionLayout_ghr" /}}
            <div class="tr_phase2_shopping-bag_matercontainer_ghr">
            {{if pilotProgram && isGuest == 'false' && #data.purchaseEarnings && purchaseEarnings.kohlsCashEarnings && purchaseEarnings.loyaltyPilotUser}}
                {{if ~root.$env.ksLoyaltyV2}}
                    <ul class="TM3---10-Static---Dial-pb">
                    {{for tmpl="ksLoyaltyTrackerTemplatePBV2" /}}  
                    </ul>
                {{else}}
                <!-- ksLoyaltyV2 off and loyaltyPilotUser and logged in -->
                    <ul class="TM3---10-Static---Dial-pb">
                    {{for tmpl="ksLoyaltyTrackerTemplatePB" /}}  
                    </ul>
                {{/if}}
            {{else}}
            <!-- Guest -->
            {{if ~root.$env.ksLoyaltyV2 && #data.purchaseEarnings && purchaseEarnings.kohlsCashEarnings && purchaseEarnings.loyaltyPilotUser}}
                <ul class="TM3---10-Static---Dial-pb">
                    {{for tmpl="ksLoyaltyTrackerTemplatePBV2" /}}  
                    </ul>
                {{else}}
                {{if (pbDetails.pbKohlsCashEnabled == 'true' && pbDetails.pbKohlsRewardsEnabled == 'true')}}
                <input type="hidden" value="1" class="kohls_cashCheck">
                <ul class="tr_phase2_purchase_earning_meter {{if #data.purchaseEarnings && !purchaseEarnings.kohlsCash}}tr_phase2_purchase_earning_meter_center{{/if}}">
                    {{for tmpl="tr_phase2_persistent_bar_kohlscash_ghr" /}}
                    {{if (purchaseEarnings && purchaseEarnings.rewards && purchaseEarnings.rewards.loyaltyId)}}
                        {{for tmpl="tr_phase2_persistent_bar_kohlsreward_ghr" /}} 
                    {{else}}
                        {{for tmpl="tr_phase2_persistent_bar_kohlsreward_signup_ghr" /}} 
                    {{/if}}

                </ul>
                {{else pbDetails.pbKohlsCashEnabled == 'true' && pbDetails.pbKohlsRewardsEnabled == 'false'}}
                    <input type="hidden" value="1" class="kohls_cashCheck">
                    <ul class="tr_phase2_purchase_earning_meter tr_phase2_purchase_earning_meter_center">
                        {{for tmpl="tr_phase2_persistent_bar_kohlscash_ghr" /}}
                    </ul>

                {{else pbDetails.pbKohlsRewardsEnabled == 'true' && pbDetails.pbKohlsCashEnabled == 'false'}}
                    <input type="hidden" value="1" class="kohls_cashCheck">
                    <ul class="tr_phase2_purchase_earning_meter tr_phase2_purchase_earning_meter_center">
                        {{if (purchaseEarnings && purchaseEarnings.rewards && purchaseEarnings.rewards.loyaltyId)}}
                            {{for tmpl="tr_phase2_persistent_bar_kohlsreward_ghr" /}}
                        {{else}}
                            {{for tmpl="tr_phase2_persistent_bar_kohlsreward_signup" /}}
                        {{/if}}
                    </ul>
                {{else}}
                    <input type="hidden" value="0" class="kohls_cashCheck">
                {{/if}}
            {{/if}}
            {{/if}}
            {{if pbDetails.pbOrderSummaryEnabled }}
                {{for tmpl="tr_phase2_Order_summary_ajax_call_ghr" /}}
            {{/if}} 
            </div>
        </div>
    {{else}}
        <div class="tr_phase2_sub_header">
            <input type="hidden" id="pbEnable" value="0" />
        </div>
    {{/if}}
</script>
<script class="ksLoyaltyTrackerTemplate" id="ksLoyaltyTrackerTemplatePBV2" type="text/x-jsrender">
    <div class="kc_bonus_event_yes">
        {{if #data.loyaltyData.type== "spend"}}
            <div class="kc_bonus_event_img">
            <img src="{{:~root.$env.resourceRoot}}images/lpf/02-kohl-s-cash-get.png" />
            </div>
        {{/if}}
        {{if #data.loyaltyData.type== "reward"}}
            <div class="kc_bonus_event_reward_img">
            <img src="{{:~root.$env.resourceRoot}}images/lpf/rewards-lockup-d-green@2x.png" />
            </div>
        {{/if}}
        {{if #data.loyaltyData.type== "get"}}
            <div class="kc_bonus_event_img">
            <img src="{{:~root.$env.resourceRoot}}images/lpf/01-kohl-s-cash-spend.png" />
            </div>
        {{/if}}
        <div class="kc_bonus_event_text">
            {{:#data.loyaltyData.loyaltyMessage}}
        </div>
    </div>
</script>

<script class="ksLoyaltyTrackerTemplate" id="ksLoyaltyTrackerTemplatePB" type="text/x-jsrender">
{{if isGuest == "false" && #data.purchaseEarnings  && purchaseEarnings.kohlsCashEarnings}}
    {{if purchaseEarnings.loyaltyPilotUser}} 
        {{if !purchaseEarnings.kohlsCashEarnings.loyaltySystem || (cartItems && cartItems.length == 0)}}
            <div class="TM3---10-Static---Dial">
            <div class="im_background_pb">
                {{if purchaseEarnings.kohlsCashEarnings.earnPeriod }}
                    <div class="Rewards-Stacked-Green-Gradient2"></div>
                {{else}}
                    <div class="Rewards-Stacked-Green-Gradient"></div>
                {{/if}}
                <div class="layer1 radialProgressBar">
                    <div class="set-size charts-container">
                        <div class="pie-wrapper progress-45 style-2">
                            {{if purchaseEarnings.kohlsCashEarnings.earnPeriod && purchaseEarnings.kohlsCashEarnings.eventKc}}
                                <span class="label">${{:purchaseEarnings.kohlsCashEarnings.eventKc.earnThresholdforEventKc}}</span>
                            {{else}}
                                <span class="label">${{:purchaseEarnings.kohlsCashEarnings.everyDayKc.earnTrackerThreshold}}</span>
                            {{/if}}
                            <div class="pie">
                                <div class="left-side half-circle"></div>
                                <div class="right-side half-circle"></div>
                            </div>
                            <div class="shadow"></div>
                        </div>
                    </div>
                </div>
                {{if cartItems && cartItems.length == 0 && purchaseEarnings.kohlsCashEarnings.earnPeriod && purchaseEarnings.kohlsCashEarnings.eventKc}}
                    {{if  purchaseEarnings.kohlsCashEarnings.eventKc.spendAwayEvent > thresholdKohlsMeterValue}}
                        <div class="Spend-20-to-get-you-pb pb-event-text" id="loyalityTrackerEarnKCCText">
                            <span>
                                {{:~messageForLoyalty(trLabels.kls_static_loyalty_earn_message_event_PB, purchaseEarnings.kohlsCashEarnings.eventKc.earnThresholdforEventKc, purchaseEarnings.kohlsCashEarnings.eventKc.spendThresholdforEventKc,purchaseEarnings.kohlsCashEarnings.eventKc.eventEarnPeriodEndDate, '')}}
                            </span>
                        </div>
                    {{else}}
                        <div class="Spend-20-to-get-you-pb pb-message pb-event-text" id="loyalityTrackerSpentAwayKCCText">
                            <span>
                                {{:~messageForLoyalty(trLabels.kls_static_loyalty_spend_message_event_PB_belowThreshold, purchaseEarnings.kohlsCashEarnings.eventKc.spendAwayEvent, purchaseEarnings.kohlsCashEarnings.eventKc.earnThresholdforEventKc, purchaseEarnings.kohlsCashEarnings.eventKc.eventEarnPeriodEndDate, '')}}
                            </span>
                        </div>
                    {{/if}}
                {{else}}
                    {{if purchaseEarnings.kohlsCashEarnings.hasKcc}}
                        <div class="Spend-20-to-get-you-pb pb-message pb-event-text" id="loyalityTrackerEarnEventText">
                            {{:~messageForLoyalty(trLabels.kls_loyality_PB_static_message__hasKCC, purchaseEarnings.kohlsCashEarnings.everyDayKc.everydayKccPercentage, '', '')}}
                        </div>
                    {{else}}
                        <div class="Spend-20-to-get-you-pb pb-message pb-event-text" id="loyalityTrackerEarnEventText">
                            {{:~messageForLoyalty(trLabels.kls_loyality_PB_static_message__noKCC, purchaseEarnings.kohlsCashEarnings.everyDayKc.everydayNonKccPercentage, '', '')}}
                        </div>
                    {{/if}}
                {{/if}}
            </div>
        </div>
        {{else}}
        {{if purchaseEarnings.kohlsCashEarnings.earnPeriod}}
            {{for tmpl="persistent_bar_kohlscash_event" /}}				
        {{else purchaseEarnings.kohlsCashEarnings.everyDayKc && purchaseEarnings.kohlsCashEarnings.everyDayKc != null}}	
            {{for tmpl="persistent_bar_kohlscash_everyday" /}}	
        {{/if}}
        {{/if}}
    {{/if}}
{{/if}}
</script>

<script id="persistent_bar_kohlscash_event" type="text/x-jsrender">
{{if #data.purchaseEarnings && purchaseEarnings.kohlsCashEarnings && purchaseEarnings.kohlsCashEarnings.eventKc}}
<div class="TM3---10-Static---Dial eventTrackerMain">
    <div class="im_background_pb">
        <div class="Rewards-Stacked-Green-Gradient2">
            <div class="layer1 radialProgressBar">
                <div class="set-size charts-container">
                    <div class="pie-wrapper progress-45 style-2">
                        <span class="label">${{:purchaseEarnings.kohlsCashEarnings.eventKc.earnThresholdforEventKc}}</span>
                        <div class="pie">
                            <div class="left-side half-circle"></div>
                            <div class="right-side half-circle"></div>
                        </div>
                        <div class="shadow"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Radial-progress-bar"></div>
        {{if (purchaseEarnings.kohlsCashEarnings.eventKc.spendAwayEvent > thresholdKohlsMeterValue) }}
            <div class="Spend-20-to-get-you-pb pb-event-text" id="loyalityTrackerEarnKCCText">
                <span>
                    {{:~messageForLoyalty(trLabels.kls_static_loyalty_earn_message_event_PB, purchaseEarnings.kohlsCashEarnings.eventKc.earnThresholdforEventKc, purchaseEarnings.kohlsCashEarnings.eventKc.spendThresholdforEventKc,purchaseEarnings.kohlsCashEarnings.eventKc.eventEarnPeriodEndDate, '') }}
                </span>
            </div>
        {{else}}
            <div class="Spend-20-to-get-you-pb pb-message pb-event-text" id="loyalityTrackerSpentAwayKCCText">
                    {{:~messageForLoyalty(trLabels.kls_static_loyalty_spend_message_event_PB_belowThreshold, purchaseEarnings.kohlsCashEarnings.eventKc.spendAwayEvent, purchaseEarnings.kohlsCashEarnings.eventKc.earnThresholdforEventKc, purchaseEarnings.kohlsCashEarnings.eventKc.eventEarnPeriodEndDate, '') }}
            </div>
        {{/if}}
    </div>
</div>
{{/if}}
</script>

<script id="persistent_bar_kohlscash_everyday" type="text/x-jsrender">
{{if #data.purchaseEarnings && purchaseEarnings.kohlsCashEarnings && purchaseEarnings.kohlsCashEarnings.everyDayKc}}
    <div class="TM3---10-Static---Dial">
    <div class="im_background_pb">
    <div class="Rewards-Stacked-Green-Gradient"></div>
    <div class="layer1 radialProgressBar">
    <div class="set-size charts-container">
        <div class="pie-wrapper progress-45 style-2">
            <span class="label">${{:purchaseEarnings.kohlsCashEarnings.everyDayKc.earnTrackerThreshold}}</span>
            <div class="pie">
                <div class="left-side half-circle"></div>
                <div class="right-side half-circle"></div>
            </div>
            <div class="shadow"></div>
        </div>
    </div>
    </div>
    {{if purchaseEarnings.kohlsCashEarnings.hasKcc}}
    {{if purchaseEarnings.kohlsCashEarnings.everyDayKc.spendAwayEverydayKcc > thresholdKohlsMeterValue}}
    <!----------- END Null check ---------->	
        <div class="Spend-20-to-get-you-pb pb-earn-with-kcc" id="loyalityTrackerEarnEventText">
            {{:~messageForLoyalty(trLabels.kls_static_loyalty_earn_message_hasKCC, purchaseEarnings.kohlsCashEarnings.everyDayKc.everydayKccPercentage, purchaseEarnings.kohlsCashEarnings.everyDayKc.earnTrackerThreshold ,'', '')}}
        </div>
    {{else}}
        <div class="Spend-20-to-get-you-pb pb-message" id="loyalityTrackerSpentAwayEventText">
            {{:~messageForLoyalty(trLabels.kls_static_loyalty_spend_message_event_PB_belowThreshold_KCC, purchaseEarnings.kohlsCashEarnings.everyDayKc.spendAwayEverydayKcc, purchaseEarnings.kohlsCashEarnings.everyDayKc.earnTrackerThreshold, '', '')}}
        </div>
    {{/if}}
    {{else}}
    {{if purchaseEarnings.kohlsCashEarnings.everyDayKc.spendAwayEverydayNonKcc && purchaseEarnings.kohlsCashEarnings.everyDayKc.spendAwayEverydayNonKcc > thresholdKohlsMeterValue}}
    <!----------- END Null check ---------->	
        <div class="Spend-20-to-get-you-pb pb-earn-no-kcc" id="loyalityTrackerEarnEventText">
            {{:~messageForLoyalty(trLabels.kls_static_loyalty_earn_message_noKCC_PB, purchaseEarnings.kohlsCashEarnings.everyDayKc.everydayNonKccPercentage, purchaseEarnings.kohlsCashEarnings.everyDayKc.earnTrackerThreshold ,'', '')}}
        </div>
    {{else}}
        <div class="Spend-20-to-get-you-pb pb-message" id="loyalityTrackerSpentAwayEventText">
            {{:~messageForLoyalty(trLabels.kls_static_loyalty_spend_message_event_PB_belowThreshold_NOKCC, purchaseEarnings.kohlsCashEarnings.everyDayKc.spendAwayEverydayNonKcc, purchaseEarnings.kohlsCashEarnings.everyDayKc.earnTrackerThreshold, '', '')}}
        </div>
    {{/if}}
    {{/if}}
    </div>
    </div>
{{/if}}
</script>

<script type="text/x-jsrender" id="tr_phase2_persistent_bar_kohlscash_ghr">  
	<!-- Changes done for COD-4423 -->
	<li class="add_progress_bar_cash_color">
		{{if purchaseEarnings }}
			{{if purchaseEarnings.kohlsCash}}
				{{if purchaseEarnings.kohlsCash.awayAmount}}
					<span class="tr_phase2_purchase_earning_meter_amount_ghr tr_phase2_space">{{:~addCurrency(purchaseEarnings.kohlsCash.awayAmount)}}</span>
				{{/if}}
				<span class="tr_phase2_purchase_earning_meter_awayfrom tr_phase2_space">{{:pbDetails.pbStaticLabels.awayFromNext}}</span>
				{{if purchaseEarnings.kohlsCash.earnAmount}}
					<span class="tr_phase2_purchase_earning_meter_awayfrom_cash_ghr tr_phase2_space">&#36;{{:purchaseEarnings.kohlsCash.earnAmount}}&nbsp;{{:~convertHTML(pbDetails.pbStaticLabels.kohlsCash)}}</span>
				{{/if}}
				{{if purchaseEarnings.kohlsCash.awayAmount}}
					<input type="hidden" class="tr_phase2_cashsmetervalue" value="{{:~calculateProgressBar(purchaseEarnings.kohlsCash.awayAmount || 0, purchaseEarnings.kohlsCash.qualificationAmount || 0)}}"/>
				{{/if}}
				<div id="progressbar" class="tr_phase2_progress" ></div> 
			{{/if}}
		{{/if}}
	</li>
</script>

<script type="text/x-jsrender" id="tr_phase2_persistent_bar_kohlsreward_ghr">  
	<!-- Changes done for COD-4423 -->
	<li class="tr_phase2_rewardpoint">
		<span class="tr_phase2_purchase_earning_meter_amount_ghr tr_phase2_space">
			{{if purchaseEarnings}}
				{{if purchaseEarnings.rewards}}
					{{if purchaseEarnings.rewards.awayPoints}}
						{{:purchaseEarnings.rewards.awayPoints}}
					{{else}} 
						{{:trLabels.kls_static_pb_zero}} 
					{{/if}}
				{{else}} 
					{{:trLabels.kls_static_pb_zero}} 
				{{/if}}
			{{else}} 
			  {{:trLabels.kls_static_pb_zero}}
			{{/if}} {{:pbDetails.pbStaticLabels.pbAwayPoints}}</span>
		<span class="tr_phase2_purchase_earning_meter_awayfrom tr_phase2_space">{{:pbDetails.pbStaticLabels.awayFromNext}}</span>
		<span class="tr_phase2_purchase_earning_meter_awayfrom_cash_ghr tr_phase2_space">{{:~convertHTML(pbDetails.pbStaticLabels.kohlsRewardAmount)}}&nbsp;{{:pbDetails.pbStaticLabels.kohlsReward}}</span>
		{{if purchaseEarnings}}
			{{if purchaseEarnings.rewards}}
				{{if purchaseEarnings.rewards.balancePercentage || purchaseEarnings.rewards.balancePercentage == 0}}
					<input type="hidden" class="tr_phase2_rewardsmetervalue1" value="{{:purchaseEarnings.rewards.balancePercentage}}" />
				{{/if}}
				{{if purchaseEarnings.rewards.earnPercentage || purchaseEarnings.rewards.earnPercentage == 0}}
					<input type="hidden" class="tr_phase2_rewardsmetervalue2" value="{{:purchaseEarnings.rewards.earnPercentage}}" />
				{{/if}}
			{{/if}}
		{{/if}}
		<div id="progressbar1" class="tr_phase2_progress"></div> 
		<span class="tr_phase2_purchase_earning_meter_amount_ghr tr_phase2_reward_space_ghr">
			{{if purchaseEarnings}}
				{{if purchaseEarnings.rewards}}
					{{if purchaseEarnings.rewards.currentPurchaseEarnPoint}}
						{{:purchaseEarnings.rewards.currentPurchaseEarnPoint}}
					{{else}}
						{{:trLabels.kls_static_pb_zero}}
					{{/if}}
				{{else}}
					{{:trLabels.kls_static_pb_zero}}
				{{/if}}
			{{else}} 
				{{:trLabels.kls_static_pb_zero}}
			{{/if}} {{:pbDetails.pbStaticLabels.pbEarnedPoints}}</span>
		<span class="tr_phase2_purchase_earning_meter_awayfrom">{{:pbDetails.pbStaticLabels.earnedOnThisOrder}}</span>
	</li>
</script>

<script type="text/x-jsrender" id="tr_phase2_persistent_bar_kohlsreward_signup_ghr">  
	<!-- Changes done for COD-4423 -->
	{{if pbDetails.ksLoyaltyFullLaunchEnabled}}
		<li class="tr_phase2_potentialpoint">
			<span class="tr_phase2_purchase_earning_meter_awayfrom_cash_ghr tr_phase2_space">{{:pbDetails.pbStaticLabels.kohlsRewardText}}</span>
			<span class="tr_phase2_purchase_earning_meter_awayfrom tr_phase2_space">{{:pbDetails.pbStaticLabels.earnMoreKohlsCash}}</span>
			<span class="tr_phase2_purchase_earning_meter_signup tr_phase2_space"><a href="/myaccount/kohls_rewards.jsp" title="Sign Up">{{:pbDetails.pbStaticLabels.enrollToday}}</a></span>
		</li>

	{{else}}
		<li class="tr_phase2_potentialpoint">
			<span class="tr_phase2_purchase_earning_meter_awayfrom_cash_ghr tr_phase2_space">{{:pbDetails.pbStaticLabels.kohlsReward}}</span>
			<span class="tr_phase2_purchase_earning_meter_amount_ghr tr_phase2_space">
				{{if purchaseEarnings}}
					{{if (purchaseEarnings.rewards && purchaseEarnings.rewards.currentPurchaseEarnPoint)}}
						{{:purchaseEarnings.rewards.currentPurchaseEarnPoint}}
					{{else}}
						{{:trLabels.kls_static_pb_zero}}
					{{/if}}
				{{/if}} {{:pbDetails.pbStaticLabels.pbEarnedPoints}}</span>
			<span class="tr_phase2_purchase_earning_meter_awayfrom tr_phase2_space">{{:pbDetails.pbStaticLabels.earnedOnThisOrder}}</span>
			<span class="tr_phase2_purchase_earning_meter_signup tr_phase2_space"><a href="/myaccount/kohls_rewards.jsp" title="Sign Up">{{:pbDetails.pbStaticLabels.signUpNow}}</a></span>
		</li>
	{{/if}}	
</script>

<script type="text/x-jsrender" id="tr_phase2_persistent_bar_kohlsreward_signup">
	<li class="tr_phase2_potentialpoint">
		<span class="tr_phase2_purchase_earning_meter_awayfrom_cash tr_phase2_space">{{:pbDetails.pbStaticLabels.kohlsReward}}</span>
		<span class="tr_phase2_purchase_earning_meter_amount tr_phase2_space">
			{{if purchaseEarnings}}
				{{if purchaseEarnings.rewards && purchaseEarnings.rewards.currentPurchaseEarnPoint}}
						{{:purchaseEarnings.rewards.currentPurchaseEarnPoint}}
				{{else}}
					{{:trLabels.kls_static_pb_zero}}
				{{/if}}
			{{/if}} {{:pbDetails.pbStaticLabels.pbEarnedPoints}}</span>
		<span class="tr_phase2_purchase_earning_meter_awayfrom tr_phase2_space">{{:pbDetails.pbStaticLabels.earnedOnThisOrder}}</span>
		<span class="tr_phase2_purchase_earning_meter_signup tr_phase2_space"><a href="/myaccount/kohls_rewards.jsp" title="Sign Up">{{:pbDetails.pbStaticLabels.signUpNow}}</a></span>
	</li>
</script>
<script type="text/x-jsrender" id="tr_phase2_Order_summary_ajax_call">
	<ul class ="tr_phase2_order_summary">
		<li><h5> {{:pbDetails.pbStaticLabels.orderSummary}} </h5></li>
		<li>
			<h6>{{:pbDetails.pbStaticLabels.merchandise}}</h6>
			<span class="tr_phase2_order_summary_right-float">
				{{if orderSummary && orderSummary.merchandisePromoAmount}}
					{{:~addCurrency(orderSummary.merchandisePromoAmount)}}	
				{{else}}
					{{:trLabels.kls_static_pb_zero_dollar}}
				{{/if}}
			</span>
		</li>
		
		{{if orderSummary}}
			{{if orderSummary.taxFeeEnabled}}
				{{if orderSummary.giftWrapLabel || orderSummary.totalGiftWrapAmount}}				
					<li>
						<div class="clearfix">
							{{if orderSummary.giftWrapLabel}}
								<h6>{{:orderSummary.giftWrapLabel}}</h6>
							{{/if}}
							
							{{if orderSummary.totalGiftWrapAmount}}
								<span class="tr_phase2_order_summary_right-float">
									{{:~addCurrency(orderSummary.totalGiftWrapAmount)}}
								</span>
							{{/if}}
						</div>
					</li>
				{{/if}}
			{{/if}}
		{{/if}}

		<li>
			{{if cartItems.length > 0}}
				<h6>
					<a href="/checkout/v2/includes/kohlsCash.jsp?shouldIncludeForms=true" class="kohlscashapplylink tr_phase2_discount_a">
						{{:pbDetails.pbStaticLabels.kohlsCashAndDiscounts}}
					</a>
					<div id="tr_phase2_apply">
						<a class="kohlscashapply" href="/checkout/v2/includes/kohlsCash.jsp?shouldIncludeForms=true">{{:trLabels.kls_static_tr_checkout_payment_apply}}</a>
					</div>
				</h6>
			{{else}}
				<h6>
					<span class="fleft tr_phase2_discount_a kas-newpb-kohls-discount-disabled">
						{{:pbDetails.pbStaticLabels.kohlsCashAndDiscounts}}
					</span>
					<div id="tr_phase2_apply" class="disabled">
						<span class="kohlscashapply">{{:trLabels.kls_static_tr_checkout_payment_apply}}</span>
					</div>
				</h6>
			{{/if}}
			<span class="tr_phase2_order_summary_right-float tr_phase2_addGreen_ghr"> - {{if orderSummary}} {{if orderSummary.totalKohlsCashAndPromoDiscounts != 0 }} {{:~addCurrency(orderSummary.totalKohlsCashAndPromoDiscounts)}} {{/if}}{{/if}}</span>
			<span class="tr_phase2_order_summary_right-float tr_phase2_addGreen"> - 
				{{if orderSummary}} 
					{{if orderSummary.discountedShippingAmount != 0 }} 
						{{:~addCurrency(orderSummary.discountedShippingAmount)}}
					{{/if}} 
				{{/if}}
			</span>
		</li>
		<li class="tr_phase2_add_padding">
			<h6 class="tr_phase2_free_shipping_message kas-newpb-free-shipping-msg">
				{{if cartItems.length > 0}}
					<a class="shipSurchargeGiftTax" href="#giftsTax" >{{:pbDetails.pbStaticLabels.shippingFee}}</a>
				{{else}}
					{{:pbDetails.pbStaticLabels.shippingFee}}
				{{/if}}
				{{if shipmentInfo}}
					{{if shipmentInfo.length > 0}}
						{{if shipmentInfo[0].shipmentPriceInfo}}
							{{if ~getFreeShipDelta()}}
							{{if #data.purchaseEarnings && #data.purchaseEarnings.loyaltyPilotUser}}
								<span class="freeShipMessFirst">{{:~addCurrency(~getFreeShipDelta())}}</span>
							{{else}}
								<div class="freeShipMessFirstV2">{{:~addCurrency(~getFreeShipDelta())}}</div>
							{{/if}}
								{{/if}}

							{{if orderSummary}}
								{{if orderSummary.discountedShippingAmount != 0 && ~getFreeShipDelta()}}
									{{if cartItems}}
										{{if cartItems.length > 0}}	
										{{if #data.purchaseEarnings && #data.purchaseEarnings.loyaltyPilotUser}}
											<span>{{:pbDetails.pbStaticLabels.awayFromSuggestMsgOrderSummaryPage}}</span>
											<span class="freeShipMesslast">{{:pbDetails.pbStaticLabels.freeShippingSuggestMsgOrderSummaryPage}}</span>
										{{else}}
											<div class="freeShipMessMidV2">{{:pbDetails.pbStaticLabels.awayFromSuggestMsgOrderSummaryPage}}</div>
											<div class="freeShipMesslastV2">{{:pbDetails.pbStaticLabels.freeShippingSuggestMsgOrderSummaryPage}}</div>
										{{/if}}
										{{/if}}
									{{/if}}
								{{/if}}
							{{/if}}

						{{/if}}
					{{/if}}							
				{{/if}}
			</h6>
			{{if orderSummary}}
				{{if orderSummary.discountedShippingAmount == 0}}
					{{if cartItems}}
						{{if cartItems.length > 0}}
							<span class="tr_phase2_order_summary_right-float tr_phase2_addGreen"><strong>{{:pbDetails.pbStaticLabels.freeShippingLabel}}</strong></span>
						{{else}}
							<span class="tr_phase2_order_summary_right-float"><strong>{{:trLabels.kls_static_pb_zero_dollar}}</strong></span>
						{{/if}}
					{{else}}
						<span class="tr_phase2_order_summary_right-float"><strong>{{:trLabels.kls_static_pb_zero_dollar}}</strong></span>
					{{/if}}
				{{/if}}
			{{else}}
				<span class="tr_phase2_order_summary_right-float">
					{{if orderSummary}}
						{{if orderSummary.discountedShippingAmount}}
							{{:~addCurrency(orderSummary.discountedShippingAmount)}}
						{{else}}
							{{:trLabels.kls_static_pb_zero_dollar}}
						{{/if}}
					{{else}}
						{{:trLabels.kls_static_pb_zero_dollar}}
					{{/if}}
				</span>
			{{/if}}
		</li>
		<li>
			<h6 class="kas-newpb-calculated-tax">
				{{if cartItems.length > 0}}
					{{if orderSummary.surchargesGiftsTaxLabel}}
						<a class="shipSurchargeGiftTax" href="#giftsTax" >{{:orderSummary.surchargesGiftsTaxLabel}}</a>
					{{else}}
						{{:pbDetails.pbStaticLabels.estimatedTax}}
					{{/if}}
				{{else}}
					{{:pbDetails.pbStaticLabels.estimatedTax}}
				{{/if}}
			</h6>
			<span class="tr_phase2_order_summary_right-float">
				{{if orderSummary}}
					{{if orderSummary.totalTax}}
						{{:~addCurrency(orderSummary.totalTax)}}
					{{else}}
						{{:trLabels.kls_static_pb_zero_dollar}}
					{{/if}}
				{{else}}
					{{:trLabels.kls_static_pb_zero_dollar}}
				{{/if}}
			</span>
		</li>
		<li>
			<h4>{{:pbDetails.pbStaticLabels.total}}</h4>
			<h4 style="float:right;">
				{{if orderSummary}}
					{{if orderSummary.total != 0}}
						{{:~addCurrency(orderSummary.total)}}
					{{else}}
						{{:trLabels.kls_static_pb_zero_dollar}}
					{{/if}}
				{{else}}
					{{:trLabels.kls_static_pb_zero_dollar}}
				{{/if}}
			</h4>
		</li>
	</ul>
</script>
<script type="text/x-jsrender" id="tr_phase2_Order_summary_ajax_call_ghr">
<ul class ="tr_phase2_order_summary_ghr"> 
        <li>
            <h5> {{:pbDetails.pbStaticLabels.orderSummary}} </h5>
        </li>
        <li>
            <h6>{{:pbDetails.pbStaticLabels.merchandise}}</h6>
            <span class="tr_phase2_order_summary_right-float">
                {{if orderSummary}}
                    {{if orderSummary.merchandisePromoAmount}}
                        {{:~addCurrency(orderSummary.merchandisePromoAmount)}}
                    {{else}}
                        {{:trLabels.kls_static_pb_zero_dollar}}
                    {{/if}}
                {{else}}
                    {{:trLabels.kls_static_pb_zero_dollar}}
                {{/if}}
            </span>
        </li>		
        {{if orderSummary }}
            {{if orderSummary.taxFeeEnabled}}	
                {{if orderSummary.giftWrapLabel || orderSummary.totalGiftWrapAmount}}			
                    <li>
                        <div class="clearfix">
                            {{if orderSummary.giftWrapLabel}}
                                <h6>{{:orderSummary.giftWrapLabel}}</h6>
                            {{/if}}
                            {{if orderSummary.totalGiftWrapAmount}}
                                <span class="tr_phase2_order_summary_right-float">{{:orderSummary.totalGiftWrapAmount}}</span>
                            {{/if}}
                        </div>
                    </li>
                {{/if}}
            {{/if}}	 
        {{/if}}		
        <li>
            {{if cartItems.length > 0}}
                <h6>
					{{if !~disableNewDgsFeatures() }}
                    <a href="/checkout/v2/includes/kohlsCash.jsp?shouldIncludeForms=true" class="kohlscashapplylink tr_phase2_discount_a tr_phase2_discount_a_ghr ">
                        {{:pbDetails.pbStaticLabels.kohlsCashAndDiscounts}}
                    </a>
					{{else}}
						<span class="fleft tr_phase2_discount_a_ghr">
							{{:pbDetails.pbStaticLabels.kohlsCashAndDiscounts}}
						</span>
					{{/if}}
					{{if !~disableNewDgsFeatures()}}
						<div id="tr_phase2_apply_ghr">
							<a class="kohlscashapply" href="/checkout/v2/includes/kohlsCash.jsp?shouldIncludeForms=true">{{:trLabels.kls_static_tr_checkout_payment_apply}}</a>
						</div>
					{{/if}}
                </h6>
            {{else}}
                <h6>
                    <span class="fleft tr_phase2_discount_a_ghr kas-newpb-kohls-discount-disabled">
                    {{:pbDetails.pbStaticLabels.kohlsCashAndDiscounts}}
                    </span>
                    <div id="tr_phase2_apply_ghr" class="disabled">
                        <span class="kohlscashapply">{{:trLabels.kls_static_tr_checkout_payment_apply}}</span>
                    </div>
                </h6>
            {{/if}}
            <span class="tr_phase2_order_summary_right-float tr_phase2_addGreen_ghr"> - {{if orderSummary}} {{if orderSummary.totalKohlsCashAndPromoDiscounts != 0 }} {{:~addCurrency(orderSummary.totalKohlsCashAndPromoDiscounts)}} {{/if}}{{/if}}</span>
        </li>
        <li class="tr_phase2_add_padding_ghr">
            <h6 class="tr_phase2_free_shipping_message kas-newpb-free-shipping-msg">
                {{if cartItems.length > 0}}
					<a class="shipSurchargeGiftTax" href="#giftsTax" >{{:pbDetails.pbStaticLabels.shippingFee}}</a>
				{{else}}
                    {{:pbDetails.pbStaticLabels.shippingFee}}
                {{/if}}	
                {{if #data.shipmentInfo && ~isEliteFreeShipping(shipmentInfo) === false}}
                    {{if shipmentInfo}}
                        {{if shipmentInfo.length > 0}}
                            {{if shipmentInfo[0].shipmentPriceInfo}}
								{{if ~getFreeShipDelta()}}
									{{if #data.purchaseEarnings && #data.purchaseEarnings.loyaltyPilotUser}}
										<span class="freeShipMessFirst">{{:~addCurrency(~getFreeShipDelta())}}</span>
									{{else}}
                                    <div class="freeShipMessFirstV2">{{:~addCurrency(~getFreeShipDelta())}}</div>
									{{/if}}
								
									{{/if}}
                                {{if orderSummary}}
                                    {{if orderSummary.discountedShippingAmount != 0 && ~getFreeShipDelta()}}
                                        {{if cartItems}}
											{{if cartItems.length > 0}}	
												{{if #data.purchaseEarnings && #data.purchaseEarnings.loyaltyPilotUser}}
													<span>{{:pbDetails.pbStaticLabels.awayFromSuggestMsgOrderSummaryPage}}</span>
													<span class="freeShipMesslast">{{:pbDetails.pbStaticLabels.freeShippingSuggestMsgOrderSummaryPage}}</span>
												{{else}}	
													<div class= "freeShipMessMidV2">{{:pbDetails.pbStaticLabels.awayFromSuggestMsgOrderSummaryPage}}</div>
													<div class="freeShipMesslastV2">{{:pbDetails.pbStaticLabels.freeShippingSuggestMsgOrderSummaryPageV2}}</div>
												{{/if}}
											{{/if}}
                                        {{/if}}
                                    {{/if}}
                                {{/if}}
                            {{/if}}
                        {{/if}}
                    {{/if}}
                {{/if}}
            </h6>
        {{if #data.shipmentInfo && ~isEliteFreeShipping(shipmentInfo) && orderSummary && orderSummary.discountedShippingAmount == 0}}
            <div id="shipchargesPB" class="eliteFreeShipping tr_phase2_order_summary_right-float tr_phase2_addGreen_ghr">
            {{if ~root.$env.ksLoyaltyV2}}
                <img alt="MVC" src="{{:~root.$env.resourceRoot}}images/lpf/mvc-color.png" class="purple" />
				<span class='free_mvc'>{{:trLabels.kls_static_tr2_pb_free_shipping_label}}</span>
                {{else}}
                <img alt="Elite" src="{{:~root.$env.resourceRoot}}images/elite/purple.png" class="purple" />
				<span class='free'>{{:trLabels.kls_static_tr2_pb_free_shipping_label}}</span>
            {{/if}}
			</div>
			{{if #data.purchaseEarnings && !#data.purchaseEarnings.loyaltyPilotUser}}
				<div class= "freeShippingMsgfreeV2">{{:trLabels.kls_static_you_earned_free_shipping}}</div>			
			{{/if}}

        {{else}}		
            {{if orderSummary}}
                {{if orderSummary.discountedShippingAmount == 0}}
                    {{if cartItems}}
					{{if cartItems.length > 0}}
							{{if #data.purchaseEarnings && #data.purchaseEarnings.loyaltyPilotUser}}
								<span class="tr_phase2_order_summary_right-float tr_phase2_addGreen_ghr"><strong>{{:pbDetails.pbStaticLabels.freeShippingLabel}}</strong></span>
								{{else}}	
								<span class="freeShippingFreeTextBlack"><strong>{{:pbDetails.pbStaticLabels.freeShippingLabel}}</strong></span>
							{{/if}}
							{{if ~cartHasShipItem(fulfillmentTypes)}}
								{{if #data.purchaseEarnings && !#data.purchaseEarnings.loyaltyPilotUser}}
									<span class= "freeShippingMsgfreeV2">{{:trLabels.kls_static_you_earned_free_shipping}}</span>
								{{/if}}
							{{/if}}
                        {{else}}
                            <span class="tr_phase2_order_summary_right-float"><strong>{{:trLabels.kls_static_pb_zero_dollar}}</strong></span>
                        {{/if}}
                    {{else}}
                        <span class="tr_phase2_order_summary_right-float"><strong>{{:trLabels.kls_static_pb_zero_dollar}}</strong></span>
                    {{/if}}
                {{/if}}
            {{else}}
                <span class="tr_phase2_order_summary_right-float">
                    {{if orderSummary}}
                        {{if orderSummary.discountedShippingAmount}}
                            {{:~addCurrency(orderSummary.discountedShippingAmount)}}
                        {{else}}
                            {{:trLabels.kls_static_pb_zero_dollar}}
                        {{/if}}
                    {{else}}
                        {{:trLabels.kls_static_pb_zero_dollar}}
                    {{/if}}
                </span>
            {{/if}}		
            <span class="tr_phase2_order_summary_right-float "> {{if orderSummary}} {{if orderSummary.discountedShippingAmount != 0 }} {{:~addCurrency(orderSummary.discountedShippingAmount)}} {{/if}}{{/if}}</span>
        {{/if}}
    </li>
    <li>
        <h6 class="kas-newpb-calculated-tax">
            {{if cartItems.length > 0}}
                {{if orderSummary.surchargesGiftsTaxLabel}}
					<a class="shipSurchargeGiftTax" href="#giftsTax" >{{:orderSummary.surchargesGiftsTaxLabel}}</a>
                {{else}}
                    {{:pbDetails.pbStaticLabels.estimatedTax}}
                {{/if}}
            {{else}}
                {{:pbDetails.pbStaticLabels.estimatedTax}}
            {{/if}}
        </h6>
        <span class="tr_phase2_order_summary_right-float">
            {{if orderSummary}}
                {{if orderSummary.totalTax}}
                    {{:~addCurrency(orderSummary.totalTax)}}
                {{else}}
                    {{:trLabels.kls_static_pb_zero_dollar}}
                {{/if}}
            {{else}}
                {{:trLabels.kls_static_pb_zero_dollar}}
            {{/if}}
        </span>
    </li>
    <li>
        <h4>{{:pbDetails.pbStaticLabels.total}}</h4>
        <h4 style="float:right;">
            {{if orderSummary}} 
                {{if orderSummary.total != 0}}
                    {{:~addCurrency(orderSummary.total)}}
                {{else}}
                    {{:trLabels.kls_static_pb_zero_dollar}}
                {{/if}}
            {{else}}
                {{:trLabels.kls_static_pb_zero_dollar}}
            {{/if}}
        </h4>
    </li>
</ul>
</script>

<script type="text/x-jsrender" id="tr_phase2_persistent_bar_kohlscash">
	<li class="add_progress_bar_cash_color">
		{{if purchaseEarnings }}
			{{if purchaseEarnings.kohlsCash}}
				{{if purchaseEarnings.kohlsCash.awayAmount}}
					<span class="tr_phase2_purchase_earning_meter_amount tr_phase2_space">{{:~addCurrency(purchaseEarnings.kohlsCash.awayAmount)}}</span>
				{{/if}}
				<span class="tr_phase2_purchase_earning_meter_awayfrom tr_phase2_space">{{:pbDetails.pbStaticLabels.awayFromNext}}</span>
				{{if purchaseEarnings.kohlsCash.earnAmount}}
					<span class="tr_phase2_purchase_earning_meter_awayfrom_cash tr_phase2_space">&#36;{{:purchaseEarnings.kohlsCash.earnAmount}}{{:~convertHTML(pbDetails.pbStaticLabels.kohlsCash)}}</span>
				{{/if}}
				{{if purchaseEarnings.kohlsCash.awayAmount}}
					<input type="hidden" class="tr_phase2_cashsmetervalue" value="{{:~calculateProgressBar(purchaseEarnings.kohlsCash.awayAmount || 0, purchaseEarnings.kohlsCash.qualificationAmount || 0)}}"/>
				{{/if}}
				<div id="progressbar" class="tr_phase2_progress" ></div>
			{{/if}}
		{{/if}}
	</li>
</script>

<script type="text/x-jsrender" id="tr_phase2_persistent_bar_kohlsreward">
	<li class="tr_phase2_rewardpoint">
		<span class="tr_phase2_purchase_earning_meter_amount tr_phase2_space">
			{{if purchaseEarnings}}
				{{if purchaseEarnings.rewards}}
					{{if purchaseEarnings.rewards.awayPoints}}
						{{:purchaseEarnings.rewards.awayPoints}}
					{{/if}}
				{{/if}}
			{{else}} 0 {{/if}} {{:pbDetails.pbStaticLabels.pbAwayPoints}}</span>
		<span class="tr_phase2_purchase_earning_meter_awayfrom tr_phase2_space">{{:pbDetails.pbStaticLabels.awayFromNext}}</span>
		<span class="tr_phase2_purchase_earning_meter_awayfrom_cash tr_phase2_space">{{:~convertHTML(pbDetails.pbStaticLabels.kohlsRewardAmount)}}{{:pbDetails.pbStaticLabels.kohlsReward}}</span>
		{{if purchaseEarnings}}
			{{if purchaseEarnings.rewards}}
				{{if purchaseEarnings.rewards.balancePercentage || purchaseEarnings.rewards.balancePercentage == 0 }}
					<input type="hidden" class="tr_phase2_rewardsmetervalue1" value="{{:purchaseEarnings.rewards.balancePercentage}}" />
				{{/if}}
				{{if purchaseEarnings.rewards.earnPercentage || purchaseEarnings.rewards.earnPercentage == 0 }}
					<input type="hidden" class="tr_phase2_rewardsmetervalue2" value="{{:purchaseEarnings.rewards.earnPercentage}}" />
				{{/if}}
			{{/if}}
		{{/if}}
		<div id="progressbar1" class="tr_phase2_progress"></div>
		<span class="tr_phase2_purchase_earning_meter_amount tr_phase2_reward_space">
			{{if purchaseEarnings}}
				{{if purchaseEarnings.rewards}}
					{{if purchaseEarnings.rewards.currentPurchaseEarnPoint}}
						{{:purchaseEarnings.rewards.currentPurchaseEarnPoint}}
					{{/if}}
				{{/if}}
			{{else}} 0 {{/if}} {{:pbDetails.pbStaticLabels.pbEarnedPoints}}</span>
		<span class="tr_phase2_purchase_earning_meter_awayfrom">{{:pbDetails.pbStaticLabels.earnedOnThisOrder}}</span>
	</li>
</script>

<script type="text/javascript">
	var calculateDate = function(message, type, startDate, endDate){
		if(type == "hasKCCAboveThreshold" && startDate && startDate != null && endDate && endDate != null){
			var objDate = new Date(startDate),
    			locale = "en-us",
    			startMonth = objDate.toLocaleString(locale, { month: "short" });
			var objDate1 = new Date(endDate),
    			endMonth = objDate1.toLocaleString(locale, { month: "short" });
			if(startMonth == endMonth){
				return startMonth +'&nbsp'+ objDate.getDate() +'&nbsp' +'-'+'&nbsp'+objDate1.getDate();
			}else{
				return startMonth +'&nbsp'+ objDate.getDate() +'&nbsp' +'-'+'&nbsp'+ endMonth +'&nbsp'+ objDate1.getDate();
			}
		}else if(type == ("eventAboveThreshold" || "eventBelowThreshold") && startDate && startDate != null){
			var objDate = new Date(startDate),
    			locale = "en-us",
    			startMonth = objDate.toLocaleString(locale, { month: "short" });
				return startMonth +'&nbsp'+ objDate.getDate();
		}
	};
	function showLoyaltyMesage(message, type, startDate, endDate){
		var pbJsonData = Kjs.PB.getPbCartStorage();
		var amount0, amount1, date;
		if(pbJsonData && !pbJsonData.purchaseEarnings){
			return ''; // return empty if cart have not purchaseEarnings
		}

		if(type == "eventAboveThreshold"){
			amount0 = pbJsonData.purchaseEarnings.kohlsCashEarnings.eventKc.eventKohlsCashEarn;
			amount1 = pbJsonData.purchaseEarnings.kohlsCashEarnings.eventKc.spendThresholdforEventKc;
			date = pbJsonData.purchaseEarnings.kohlsCashEarnings.eventKc.eventEarnPeriodEndDate;
		}else if(type == "eventBelowThreshold"){
			amount0 = pbJsonData.purchaseEarnings.kohlsCashEarnings.eventKc.spendAwayEvent;
			amount1 = pbJsonData.purchaseEarnings.kohlsCashEarnings.eventKc.spendThresholdforEventKc;
		}else if(type == "hasKCCAboveThreshold"){
			amount0 = pbJsonData.purchaseEarnings.kohlsCashEarnings.everyDayKc.everydayKccPercentage;
			amount1 = pbJsonData.purchaseEarnings.kohlsCashEarnings.everyDayKc.earnTrackerThreshold;
			date = calculateDate(message, type, startDate, endDate);
		}else if(type == "hasKCCBelowThreshold"){
			amount0 = pbJsonData.purchaseEarnings.kohlsCashEarnings.everyDayKc.spendAwayEverydayKcc;
			amount1 = pbJsonData.purchaseEarnings.kohlsCashEarnings.everyDayKc.everydayKccPercentage;
		}else if(type == "noKCCAboveThreshold"){
			amount0 = pbJsonData.purchaseEarnings.kohlsCashEarnings.everyDayKc.everydayNonKccPercentage;
			amount1 = pbJsonData.purchaseEarnings.kohlsCashEarnings.everyDayKc.earnTrackerThreshold;
		}else if(type == "noKCCBelowThreshold"){
			amount0 = pbJsonData.purchaseEarnings.kohlsCashEarnings.everyDayKc.spendAwayEverydayNonKcc;
			amount1 = pbJsonData.purchaseEarnings.kohlsCashEarnings.everyDayKc.everydayNonKccPercentage;
		}

		if(date && (date != null || date != undefined)){
			return  (message.replace('{0}', amount0).replace('{1}', amount1).replace('{2}', date));
		}else if((amount0 && amount0 != null) || (amount1 && amount1 != null)){
			return  (message.replace('{0}', amount0).replace('{1}', amount1));
		}else{
			return	(message);
		}	
	}
</script>

<script class="surchargeGiftsTaxTemplate" id="surchargeGiftsTaxTemplate" type="text/x-jsrender">
	<div class="shippingTaxOuterWrap">
		<div id="csimodal-container">
			<div class="">
				{{if orderSummary}}
					{{if orderSummary.taxFeeEnabled}}
						<h2 class="title_background">
							<span>{{:trLabels.kls_static_tr_checkout_ship_tax}}</span>
							<a href="#" rel="modal:close"><span class="button_close_shippingTax"></span></a>
						</h2>
					{{else}}
						<h2>
							<span>
								{{:trLabels.Kls_static_tr_cart_shipping}} 
								{{if orderSummary.giftWrapBoxCount > 0}}
									{{:trLabels.kls_static_checkout_symbol}} {{:trLabels.kls_static_tr_checkout_gift}}
								{{/if}}
								{{if #data.shipmentInfo && shipmentInfo.length > 0}} 
									{{if shipmentInfo['0'].shipmentItemsCount > 0}}
										{{:trLabels.kls_static_checkout_symbol}} {{:trLabels.kls_static_tr_checkout_gift_surcharges}}
									{{/if}} & {{:trLabels.kls_static_tr_checkout_gift_tax}}
								{{/if}}
							</span>
							<a href="#" rel="modal:close"><span class="button_close_shippingTax"></span></a>
						</h2>
					{{/if}}
				{{/if}}
				<div class="csi-content shippingTax_wrap">
					<div class="fleft shippingTax_LHS_tr">
						{{if #data.shipmentInfo && shipmentInfo.length > 0}}
							{{for shipmentInfo ~trLabels = #data.trLabels}}
							{{if fulfillmentType && fulfillmentType.toLowerCase() != 'email'}}
								<div class="shippingTax">
									<!--Start: Code changes for Marketplace defect MPP-550 -->
									{{if shippingMethod !='BOPUS' && shippingMethod !='BOSS'}}
										{{if #data.addresses && addresses.length > 0 }}
											{{for addresses}}
												{{if shippingMethod !='WFSTD' && shippingMethod !='WF2DA'}}
													{{if typeof id != 'undefined' && id == shippingAddressRefId}}
														{{if postalCode}}
															<span class="fleft shippingDetailModal">{{:~getShippingDetailLabelByMethod(trCheckoutCartErrors,shippingMethod,shippingMethodDescription)}} {{:~trLabels.kls_static_tr_checkout_gift_to_small}} {{:postalCode}}&nbsp;{{:~trLabels.Browse_static_left_bracket}}{{:shipmentItemsCount}} {{:~trLabels.kls_static_tr_checkout_gift_items_comma}} {{if shipmentPriceInfo }}{{:~addCurrency(shipmentPriceInfo.shipmentItemsTotal)}} {{/if}}{{:~trLabels.Browse_static_right_bracket}}</span>
														{{else}}
															{{if isRegAdress}}
																<span class="fleft shippingDetailModal">{{:~getShippingDetailLabelByMethod(trCheckoutCartErrors,shippingMethod,shippingMethodDescription)}}  {{if isRegAdress && registryName}} {{:~trLabels.kls_static_tr_checkout_gift_to_small}} {{:registryName}} {{/if}} &nbsp;{{:~trLabels.Browse_static_left_bracket}}{{:shipmentItemsCount}} {{:~trLabels.kls_static_tr_checkout_gift_items_comma}} {{if shipmentPriceInfo }}{{:~addCurrency(shipmentPriceInfo.shipmentItemsTotal)}}{{/if}}{{:~trLabels.Browse_static_right_bracket}}</span>
															{{else}}
															     <span class="fleft shippingDetailModal">{{:~getShippingDetailLabelByMethod(trCheckoutCartErrors,shippingMethod,shippingMethodDescription)}}&nbsp;{{:~trLabels.Browse_static_left_bracket}}&nbsp;{{:shipmentItemsCount}}&nbsp;{{:~trLabels.kls_static_tr_checkout_gift_items_comma_wo_kohls}}&nbsp;{{if shipmentPriceInfo }}{{:~addCurrency(shipmentPriceInfo.shipmentItemsTotal)}}{{/if}}&nbsp;{{:~trLabels.Browse_static_right_bracket}}</span>
															{{/if}}
														{{/if}}
													{{else}}
													{{if isOnlyVGCAddress && shippingMethod != "null" }}
														{{if shippingMethod && shippingMethodDescription }}
														    <span class="fleft shippingDetailModal">{{:~getShippingDetailLabelByMethod(trCheckoutCartErrors,shippingMethod,shippingMethodDescription)}} &nbsp;{{:~trLabels.Browse_static_left_bracket}}{{:shipmentItemsCount}} {{:~trLabels.kls_static_tr_checkout_gift_items_comma}} {{if shipmentPriceInfo }}{{:~addCurrency(shipmentPriceInfo.shipmentItemsTotal)}} {{/if}}{{:~trLabels.Browse_static_right_bracket}}</span>
														{{/if}}
													{{/if}}
													{{/if}}
												{{else}}
													{{if id == shippingAddressRefId}}
														{{if postalCode}}
															<span class="fleft shippingDetailModal">{{:~getShippingDetailLabelByMethod(trCheckoutCartErrors,shippingMethod,shippingMethodDescription)}} {{:~trLabels.kls_static_tr_checkout_gift_to_small}} {{:postalCode}}&nbsp;{{:~trLabels.Browse_static_left_bracket}}{{:shipmentItemsCount}} {{:~trLabels.kls_static_tr_checkout_gift_items_comma}} {{if shipmentPriceInfo }}{{:~addCurrency(shipmentPriceInfo.shipmentItemsTotal)}}{{/if}}{{:~trLabels.Browse_static_right_bracket}}</span>
														{{else}}
														{{if isRegAdress}}
															<span class="fleft shippingDetailModal">{{:~getShippingDetailLabelByMethod(trCheckoutCartErrors,shippingMethod,shippingMethodDescription)}}{{if isRegAdress && registryName}} {{:~trLabels.kls_static_tr_checkout_gift_to_small}} {{:registryName}} {{/if}}&nbsp;{{:~trLabels.Browse_static_left_bracket}}${shipmentItemsCount} {{:~trLabels.kls_static_tr_checkout_gift_items_comma}} {{if shipmentPriceInfo }}{{:~addCurrency(shipmentPriceInfo.shipmentItemsTotal)}}{{/if}}{{:~trLabels.Browse_static_right_bracket}}</span>
														{{/if}}
														{{/if}}
													{{/if}}
												{{/if}}
											{{/for}}
										{{else}}
											<span class="fleft shippingDetailModal">{{:~getShippingDetailLabelByMethod(trCheckoutCartErrors,shippingMethod,shippingMethodDescription)}}&nbsp;{{:~trLabels.Browse_static_left_bracket}}&nbsp;{{:shipmentItemsCount}}&nbsp;{{:~trLabels.kls_static_tr_checkout_gift_items_comma_wo_kohls}}&nbsp;{{if shipmentPriceInfo }}{{:~addCurrency(shipmentPriceInfo.shipmentItemsTotal)}}{{/if}}&nbsp;{{:~trLabels.Browse_static_right_bracket}}</span>
										{{/if}}
									{{else}}
									 {{if shippingMethod ==='BOPUS' || shippingMethod ==='BOSS' }}
										<span class="fleft shippingDetailModal">{{:~getShippingDetailLabelByMethod(trCheckoutCartErrors,shippingMethod,shippingMethodDescription)}}&nbsp;{{:~trLabels.Browse_static_left_bracket}}&nbsp;{{:shipmentItemsCount}}&nbsp;{{:~trLabels.kls_static_tr_checkout_gift_items_comma_wo_kohls}}&nbsp;{{if shipmentPriceInfo }}{{:~addCurrency(shipmentPriceInfo.shipmentItemsTotal)}}{{/if}}&nbsp;{{:~trLabels.Browse_static_right_bracket}}</span>
									 {{/if}}
									{{/if}}

									<!--End: Code changes for Marketplace defect MPP-550 -->
									<!-- START : BOPUSV-134 -->
									{{if shippingMethod !='BOPUS' && shippingMethod !='BOSS' && shipmentPriceInfo}}
										<span class="fright">{{:~addCurrency(shipmentPriceInfo.originalShippingCharges)}}</span> 
									{{else}}
									 {{if shippingMethod ==='BOPUS' || shippingMethod ==='BOSS' }}
										<span class="fright free_ship">{{:~trLabels.kls_static_tr2_pb_free_shipping_label}}</span>
									 {{/if}}
									{{/if}}
									<!-- END : BOPUSV-134 -->
									<!-- START: Code Changes for MarketPlace Defect MPP-794/ATG-6541 -->
										{{if shipmentPriceInfo && shipmentPriceInfo.freeShipQualificationDelta != "" && shipmentPriceInfo.freeShipQualificationDelt }}
											<span class="fright frightShippingGreen">{{:~addCurrency(shipmentPriceInfo.freeShipQualificationDelta)}} {{:~trLabels.kls_static_tr2_free_ship_suggest_message_modal_window}}</span>
										{{/if}}
									<!-- END: Code Changes for MarketPlace Defect MPP-794/ATG-6541 -->
									{{if shippingOffers}}
										{{if shippingOffers.length > 0}}
											{{for shippingOffers}}
												{{if confirmationMessage}}
													<span class="fleft shippingTxtGreen "> {{:confirmationMessage}}</span>
													<span class="float_right_free_ship_amount">{{:~trLabels.kls_static_checkout_minus_sign}} {{:~addCurrency(discountAmount)}}</span>
												{{else eliteFreeShipping && offerName}}
													<span class="fleft shippingTxtGreen "> {{:offerName}}</span>
													<span class="float_right_free_ship_amount">{{:~trLabels.kls_static_checkout_minus_sign}} {{:~addCurrency(discountAmount)}}</span>
												{{/if}}
											{{/for}}
										{{/if}}
									{{/if}}
								</div>
							{{/if}}
							{{/for}}
							{{if #data.shipmentInfo && ~getAllVgcShipmentItemsCountOrTotal(shipmentInfo,'vgcItem')}}
							<div class="shippingTax">
								<span class="fleft shippingDetailModal">{{:trLabels.kls_static_tr2_pb_vgc_email_label_shipping_tax_model}} &nbsp;{{:trLabels.Browse_static_left_bracket}}&nbsp;{{:~getAllVgcShipmentItemsCountOrTotal(shipmentInfo,'itemsCount')}}&nbsp;{{:trLabels.kls_static_tr_checkout_gift_items_comma_wo_kohls}}&nbsp;{{:~getAllVgcShipmentItemsCountOrTotal(shipmentInfo,'itemsTotal')}}&nbsp;{{:trLabels.Browse_static_right_bracket}}</span>
								<span class="fright free_ship">{{:trLabels.kls_static_tr2_pb_free_shipping_label}}</span>
							</div>
							{{/if}}
						{{/if}}
 	 					<div class="clear"></div>
						<!-- Code changes for KOSPC-11377 -->
						{{if orderSummary && (orderSummary.discountedShippingAmount || orderSummary.discountedShippingAmount==0)}}
							<div class="shippingTax">
								<p class="fleft textBold"><b>{{:trLabels.kls_static_tr_checkout_gift_total_shipping}}</b></p>
								<p class="fright textBold"><b>{{:~addCurrency(orderSummary.discountedShippingAmount)}}</b></p>
							</div>
						{{/if}}
						<div class="clear {{if !orderSummary.taxFeeEnabled }} borderbtm padTB10{{/if}} "></div>
						{{if !orderSummary.taxFeeEnabled  }}
   							{{if orderSummary && orderSummary.totalSurcharges}}
						    	<div class="clear"></div>
									<div class="shippingTax shippingTaxpad">
										<p class="fleft textBold"><b>{{:trLabels.kls_static_tr_checkout_gift_total_surcharges}}</b></p>
										<p class="fright textBold"><b>{{if shipmentPriceInfo}}{{:~addCurrency(orderSummary.totalSurcharges)}}{{/if}}</b></p>
									</div>
	 							<div class="clear borderbtm padTB10"></div>
							{{/if}}
							{{if #data.orderSummary && orderSummary.giftWrapBoxCount > 0}}
								<div class="shippingTax shippingTaxpad">
									<p class="fleft textBold"><b>{{:trLabels.kls_static_tr_checkout_gift_boxes_wrap}}</b>{{:trLabels.Browse_static_left_bracket}}{{:orderSummary.giftWrapBoxCount}}{{:trLabels.kls_static_tr_checkout_gift_items}}{{:trLabels.Browse_static_right_bracket}}</b></p>
									<p class="fright textBold"><b>{{:~addCurrency(orderSummary.totalGiftWrapAmount)}}</b></p>
								</div>
								<div class="clear {{if !orderSummary.taxFeeEnabled }} borderbtm {{/if}} padTB10"></div>
							{{/if}}
						{{/if}}
						{{if #data.orderSummary && orderSummary.taxFeeEnabled }}
							<div class="shippingTax shippingTaxpad marTB0">
								{{if #data.shipmentInfo && shipmentInfo.length > 0}}
									<p class="fleft textBold"><b>
									{{if shipmentInfo['0'].shipmentItemsCount > 0 && orderSummary.taxFees > 0 }}
										{{:trLabels.kls_static_tr_cart_surcharges_tax_fee}}
									{{else  shipmentInfo['0'].shipmentItemsCount > 0 && orderSummary.totalSurcharges > 0}}
										{{if orderSummary.tax && orderSummary.tax.estimated}}
											{{:trLabels.kls_static_tr_cart_surcharges_estimated_tax}}
										{{else}}
											{{:trLabels.kls_static_tr_cart_surcharge_tax}}
										{{/if}}
									{{else  orderSummary.taxFees > 0 }}
										{{:trLabels.kls_static_tr_cart_tax_fee}}
									{{else 	orderSummary.tax && orderSummary.tax.estimated}}
										{{:trLabels.kls_static_tr_cart_tax_estimated}}
									{{else}}
										{{:trLabels.kls_static_tr_cart_tax}}
									{{/if}}
									</b></p>
								{{/if}}
								<p class="fright textBold"><b>{{:~addCurrency(orderSummary.totalTax)}}</b></p>
							</div>
							<div class="taxfeecontainer padTB0">										
								{{if orderSummary.totalSurcharges}}
									{{if cartItems && cartItems.length > 0}}
										{{for cartItems}}
											{{if surchargePriceInfo}}
												{{if surchargePriceInfo.surchargeExtendedPriceAfterDiscounts}}
													<div class="shippingTax shippingTaxpad marTB0 padTB0">
														<p class="fleft">{{:~root.trLabels.kls_static_tr_checkout_gift_shipping_surcharges}}</p>
														<p class="fright">{{:~addCurrency(surchargePriceInfo.surchargeExtendedPriceAfterDiscounts)}}</p>
													</div>
												{{/if}}
											{{/if}}
										{{/for}}
									{{/if}}
								{{/if}}
									{{if cartItems && cartItems.length > 0}}
										{{for cartItems}}
											{{if taxFee}}
												{{if taxFee.length > 0}}
													{{for taxFee}}
														{{if feeDescription}}
															<div class="shippingTax mtop5">
																<span class="fleft">{{:feeDescription}}
                                                                  
																</span>
																<span class="fright">{{:~addCurrency(feeAmount)}}</span>
															</div>
														{{/if}}
													{{/for}}
												{{/if}}
											{{/if}}
												{{if ~isPickupItem(shippingInfo.shipmentRefId)}}
													<span>{{:~getBopusStoreName(~getStoreIdOrName(shippingInfo.shipmentRefId,true))}}</span>
												{{else}}
													{{if addresses && addresses.length > 0}}
														{{if addresses['0'].city != "" }}
															<span> {{:addresses['0'].city}}</span>
														{{else}}
															<span> {{:addresses['0'].state}}</span>
														{{/if}}
													{{/if}}
												{{/if}}
										{{/for}}
									{{/if}}									
							</div>
							{{if orderSummary}}
								<div class="taxfeecontainer">
									<div class="shippingTax">
										<span class="fleft">{{:trLabels.kls_static_tr_checkout_sales_tax}}</span>										
										<span class="fright">{{:~addCurrency(orderSummary.tax.tax)}}</span>
									</div>
								</div>
							{{/if}}
	   					{{else}}
						   {{if orderSummary}}
								<div class="shippingTax shippingTaxpad">
									<p class="fleft textBold"><b>{{:trLabels.kls_static_tr_checkout_gift_tax}} </b>
									{{if orderSummary.tax.estimated}}
										<span>{{:trLabels.Browse_static_left_bracket}}{{:orderSummary.tax.taxRate}}%{{:trLabels.Browse_static_right_bracket}}</span></p>
									{{/if}}
									<p class="fright textBold"><b>{{:~addCurrency(orderSummary.tax.tax)}}</b></p>
								</div>
							{{/if}}
						{{/if}}
		 			</div>
					<div class="fleft shippingTax_RHS_tr">
						{{if addresses}}
							{{if addresses.length > 0}}
							{{if !isVGCOnly && !isOnlyVGCAddress}}
								<div class="shippingTax">
		 							<p class="fleft textBold"><b>{{:trLabels.Kls_static_tr_cart_shipping}} {{:trLabels.kls_static_tr_checkout_gift_to_small}} {{if addresses.length > 1 && typeof orderSummary.taxFeeEnabled != "undefined" && !orderSummary.taxFeeEnabled}}{{:trLabels.kls_static_tr_checkout_multiple_locations}}{{/if}}</b></p>
		 						</div>
		 						<div class="clear"></div>
		 						<div class="shippingTax">
									{{for addresses}}
										{{if isRegAdress}}
											<p class="fleft">{{:registryName}}</p>
										{{else}}
											<p class="fleft">{{:city}},{{:state}} {{:postalCode}}</p>
										{{/if}}
										<div class="clear" />
									{{/for}}
								 	<!-- <p class="fright"><a>{{:trLabels.kls_static_pb_change_location}}</a></p> -->
							 	</div>
		 						<div class="clear {{if !orderSummary.taxFeeEnabled }} borderbtm  {{/if}} padTB10"></div>
	         				{{/if}}
							{{/if}}
	 					{{/if}}
						<div class="shippingTax">
							{{if orderSummary}}
								{{if orderSummary.taxFeeEnabled }}
									<p class="fleft textBold mtop10 mbot_10"><b>{{:~convertHTML(trLabels.kls_static_tr_checkout_how_ship_rates_calculated)}}</b></p>
								{{/if}}
							{{/if}}
							<p class="fleft ">{{:(trLabels.kls_static_tr_checkout_shipping_ratesV2)}}</p>
							{{if orderSummary}}
							{{if orderSummary.tax && orderSummary.tax.estimated}}
								<p class="fleft mtop10 mbot_10">{{:~convertHTML(trLabels.kls_static_tr_checkout_shipping_estimated_rates)}}</p>
							{{/if}}
							{{/if}}
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
    	</div>
	</div>
</script>
<script id="borderCreationTemplate" type="text/x-jsrender">
    {{if #data ~borderData = ~getborderTplData(#data,#getIndex()) }}
            {{:~borderData.cartItemId}}
    {{/if}}
</script>
<script id="oldPBImageSectionLayout" type="text/x-jsrender">
<div class="tr_phase2_shopping-bag_slidercontainer">
	<ul class="tr_phase2_tabs">
		<li class="tr_phase2_tabshopbag"> {{:pbDetails.pbStaticLabels.shoppingBag}}({{if cartItems.length > 0}}{{:pbDetails.totalCommerceItemCount}}{{else}}{{:trLabels.kls_static_pb_zero}}{{/if}})
		<a href="{{:emptyBagURL}}" title="Edit shopping bag">
		<span class="tr_pahse2_edit-shopingbag">{{:pbDetails.pbStaticLabels.pbEeditShoppingBag}}</span>
		</a>
		</li>
	</ul>
	<div class="tr_phase2_tab_containers">
		<div class="slider-container">
			<div class="flexslider carousel">
				 <ul class="slides">

				 {{if cartItems.length > 0 }}
		          {{for cartItems}}
			       <li class="item" id="demo-html"><a 
				   href=
				   "{{if itemProperties}} 
							{{:itemProperties.productEditSeoUrl}}
					{{/if}}" 
				   title=
				   "{{if itemProperties}} 
				   		{{:productTitle}}
				   {{/if}}">
				   <img 
				   		src=
						"{{if itemProperties}} 
							{{if itemProperties.image}} 
								{{:itemProperties.image.url}} 
							{{/if}} 
						{{/if}}" width="92" height="92" 
						alt=
						"{{if itemProperties}} 
				   			{{:productTitle}}
				   		{{/if}}"
						/></a></li>
		          {{/for}}
	             {{else}}
	             	{{for tmpl="emptyPbMessageSection" /}}
	            {{/if}}

				 </ul>
			 </div>
		</div>
	</div>
</div>
</script>
<script id="newPBImageSectionLayout_ghr" type="text/x-jsrender">
    <div class="tr_phase2_shopping-bag_slidercontainer">
        {{if cartItems.length > 0 }}
            <div class="tr_phase2_tab_containers">
                <div class="slider-container" data-totalProd="{{:cartItems.length}}">
                    <div class="carousel flexslider newPBSlider"> 
                        <ul class="slides" id="sliderSection">						
                        {{for ~pbStaticLabelDetails = ~root.pbDetails.pbStaticLabels ~cartId=~root.cartId tmpl="LineItemsTemplate" /}}
                        </ul>
                    </div>		
                </div>
                <div class="view-bag-container">
                    <!--START KOSPC-12150 -->
                    <a href="/checkout/shopping_cart.jsp" title="View Shopping Cart" class="viewBag_ghr">
                        <i class="boss-view-bag-ico_ghr"></i>
                        <span class="kas-newpb-viewbag-link_ghr">{{:pbDetails.pbStaticLabels.bossViewBag}}</span>
                    </a>
                        <!-- END -->
                    <div class="new-pb-carouser-nav kas-newpb-carouser-nav-next-prev"></div>
                </div>
            </div>
        {{else}}
            {{for tmpl="emptyPbMessageSection" /}}
        {{/if}} 
    </div>
</script>
<script id="LineItemsTemplate" type="text/x-jsrender">
    <li class="item">
	{{for cartItems ~isPromoInfo = #data.promoInfo && #data.promoInfo[0] ~cartId = #data.cartId ~pbStaticLabelDetails = #data.pbDetails.pbStaticLabels ~pbDetails = #data.pbDetails}}
            {{if #getIndex() !=0 && #getIndex() % 5 ==0 }}
                </li>
                <li class="item">
            {{/if}}
           
            
            {{if isGWPNewGift}}
                <div class="item_list"
                data-groupid="{{if offerInfo}}{{if offerInfo.length > 0}}{{for offerInfo}}{{if gwpPwpInfo}}{{if gwpPwpInfo.groupId}}{{:gwpPwpInfo.groupId}}{{/if}}{{/if}}{{/for}}{{/if}}{{/if}}"
                data-buyItemId="{{:buyItemCommerceId}}"
                data-editurl="{{if itemProperties}}{{:itemProperties.productEditSeoUrl}}{{/if}}" data-promoinfo="GWP" 
                data-action="{{:gwpGiftDestinationPage}}" {{if gwpGiftPageUrl}} data-href="{{:gwpGiftPageUrl}}" {{else}} data-productId = "{{:gwpGiftProductId}}" data-skuId="{{:gwpGiftSKUId}}" data-quantity = "{{:gwpGiftQuantity}}"{{/if}} >
                    <div class="pb_item_container {{:~getborderTplData(#data,#getIndex(), ~root.cartItems).groupClass}}">
                        <div class="front chooseGift">
                            <div id="plusIcon">+</div>
                            <div id="plusText">{{:~pbDetails.pbStaticLabels.addFreeGiftLabel}}</div>
                        </div>
                        <span class="zigzag-placeholder"></span>
                    </div>
                </div>
            {{else}}
                <div class="pagination_class item_list" 
                    data-editurl="{{if ~gwpGetItemCheck(#data) && item && !item.getItemSellable }}/checkout/shopping_cart.jsp{{else}}{{if itemProperties}}{{:itemProperties.productEditSeoUrl}}{{/if}}{{/if}}" 
                    data-commerceId="{{:cartItemId}}" data-productId="{{:productId}}" data-skuNumber="{{:skuId}}" data-cartId="{{:~cartId}}"
                    data-groupid="{{:groupId}}"
                    data-fulfillmentType="{{:~getShippingMethod(#data)}}" 
                    data-groupid="{{:groupId}}" 
                    data-promoinfo="{{if isPromoInfo }}{{:promoInfo[0].promoType}}{{/if}}">
                    <div class="pb_item_container {{:~getborderTplData(#data,#getIndex(), ~root.cartItems).groupClass}}">
                        <div class="pbFlipImage flip">
                            <div class="front {{if cartItemId == ~getCommerceId()}}ieflip{{/if}}">
                                {{if inventoryInfo && inventoryInfo.outOfStock}}
                                    <img src="{{:~pbDetails.pbStaticLabels.oosImageURL}}" class="kas-newpb-out-of-stock-product-image" draggable="false" alt="Out Of Stock"/>
                                    <div class="imageSection">
                                        
                                            <span class="outOfStockLabel">
                                                {{if shippingInfo}}
                                                    {{if ~isPickupItem(shippingInfo.shipmentRefId)}}
                                                        {{:~pbDetails.pbStaticLabels.oosLabelForBopusItem}} 
                                                    {{else}}
                                                        {{:~pbDetails.pbStaticLabels.oosLabelForShipItem}}
                                                    {{/if}}
                                                {{else}}
                                                    {{:~pbDetails.pbStaticLabels.oosLabelForShipItem}}
                                                {{/if}}</span>	
                                    </div>
                                {{else}}
                                    <a href="{{if ~isGwpGetItem && item && !item.getItemSellable }}/checkout/shopping_cart.jsp{{else}}{{if itemProperties}} {{:itemProperties.productEditSeoUrl}}{{/if}}{{/if}}"  title="{{if itemProperties}}{{:~convertHTML(itemProperties.productTitle)}}{{/if}}">
                                        <img src="{{if itemProperties}}
                                                    {{if itemProperties.image && itemProperties.image.url}}
                                                        {{:itemProperties.image.url}}
                                                    {{else}}
                                                        {{:~pbDetails.pbStaticLabels.noColorImageUrl}}
                                                    {{/if}}
                                                {{/if}}" class="kas-newpb-product-image" draggable="false" 
                                                alt="{{if itemProperties}}{{:~convertHTML(itemProperties.productTitle)}}{{/if}}"/>
                                        </a>
										{{for ~item = #data ~trLabels= ~root.trLabels ~pbStaticLabelDetails = ~root.pbDetails.pbStaticLabels ~pbDetails = ~root.pbDetails ~isGwpGetItem = ~gwpGetItemCheck(#data) ~isPwpGetItem = ~pwpGetItemCheck(#data) tmpl='priceNewPBTemplate' /}}

                                {{/if}}
                            </div>
							{{for ~item = #data ~trLabels= ~root.trLabels ~pbStaticLabelDetails = ~root.pbDetails.pbStaticLabels ~isGwpGetItem = ~gwpGetItemCheck(#data) ~isPwpGetItem = ~pwpGetItemCheck(#data) ~isPromoInfo = #data.promoInfo && #data.promoInfo[0] tmpl="newPBFlipBackPanel" /}}
                        </div>
                        <span class="zigzag-placeholder"></span>
                    </div>
                </div>
            {{/if}}
            {{if (~root.cartItems.length - 1) ==  #getIndex() && (~root.cartItems.length % 5) != 0}}
              		{{if ~root.$env.displayPreQualContent !== "undefined" && ~root.$env.displayPreQualContent}}
                         	<a href="/feature/pre-qual/prequal_inquiry.jsp">
                                  <div class="prequal_drawer_items">
                                          <img src="/cnc/media/images/kohls_expert_card.png" alt="">
                                          <h3>{{:~pbStaticLabelDetails.prequalHeadtext}}</h3>
                                          <a href="/feature/pre-qual/prequal_inquiry.jsp" class="get-started">{{:~pbStaticLabelDetails.prequalActiontext}}</a>
                                  </div>
                    		</a>
                        {{else ~showPerkNotification()}}
             			<a href="/myaccount/kohls_rewards.jsp">
                                  <div class="birthday_perk_box">
                                          <img class="yellow_star" src="/cnc/media/images/group@3x.png" alt=""></img>
                                          <img class="green_star" src="/cnc/media/images/green_star.png" alt=""></img>
                                          <img class="kohls_reward_img" src="/cnc/media/images/kohls_reward.png" alt="">
                                          <p class="members_exclusive">{{:~root.trLabels.kls_static_members_exclusive_text}}</p>
                                          <img class="gift_box_img" src="/cnc/media/images/gift_box.png" alt="">
                                          <p class="birthday_text">{{:~root.trLabels.kls_static_birthday_text}}</p>
                                          <a href="/myaccount/kohls_rewards.jsp" class="birthday_text_link">{{:~root.trLabels.kls_static_birthday_link_text}}</a>
                                  </div>
                                </a>        
			{{else ~showPrefsNotification()}}
                          <a href="/myaccount/v2/myinfo.jsp#shoppingprefs">
                            <div class="birthday_pref_box">
                                  <div class="kohls_reward_div">
                                          <img class="kohls_reward_pref_img" src="/cnc/media/images/kohls_reward.png" alt="">
                                  </div>
                                  <p class="want_more_text">{{:~root.trLabels.kls_static_birthdayperk_want_more_text}}</p>
                                  <p class="set_prefrences_text">{{:~root.trLabels.kls_static_set_prefrences_text}}</p>
                            </div>
                          </a>
			{{/if}}
              {{/if}}
		{{/for}}
    </li>
</script>
<script id="newPBFlipBackPanel" type="text/x-jsrender">
<div class="back {{if #data.cartItemId == ~getCommerceId()}}ieflip{{/if}}">
		{{if #data.inventoryInfo && inventoryInfo.outOfStock}}
			{{if #data.inventoryInfo && inventoryInfo.otherSkuAvailable}}
			<div class="stockOtherSkuDetails {{if inventoryInfo.otherSkuAvailable}}hasOtherSKU{{/if}}">
				<span>{{:~trLabels.kls_static_pb_change_or_remove_item_to_checkout}}</span>
			</div>
				<div class="viewItemBox">
					<span>{{:~trLabels.kls_static_pb_view_item}}</span>
				</div>
			{{else}}
			<div class="stockOtherSkuDetails">
			<span>{{:~trLabels.kls_static_pb_remove_item_to_checkout}}</span>
			</div>
		    {{/if}}
			{{else}}
			<div class="backConfig-wrapper {{if offerInfo && offerInfo.length > 0}}{{for offerInfo ~itemProperties = #data.itemProperties}}{{if #data.gwpPwpInfo && #data.gwpPwpInfo.getItem && ~itemProperties.color && ~itemProperties.size == "" }}hideBackConfig{{/if}}{{/for}}{{/if}}">
				{{if #data.itemType != 'VGC'}}
				<div class="skuDetails">
				<span class="skuColor"><img src="{{if !itemProperties.swatchURL}} {{:~pbStaticLabelDetails.noColorImageUrl}} {{else}} {{:itemProperties.swatchURL}} {{/if}}" /></span>
				<span class="skuName">{{if itemProperties.size == ""}}One Size{{else}}{{if itemProperties.size && itemProperties.size.length > 8}}{{:itemProperties.size.substring(0, 8)}}&#46;&#46;{{else}}{{:itemProperties.size}}{{/if}}{{/if}}</span>
					<span class="skuChange"></span>
				</div>

				{{if !~isGwpGetItem}}
				<div class="quantitySec  {{if offerInfo && offerInfo.length>0}}{{for offerInfo}}{{if #data.gwpPwpInfo && #data.gwpPwpInfo.gwpItem && #data.gwpPwpInfo.getItem}}hideBackConfig{{/if}}{{/for}}{{/if}}">
						<span class="{{if #data.quantity > 1}} qtyDecrementPB {{else}} pbRemoveItem {{/if}}">
						-</span>
						<span class="qty">{{:#data.quantity}}</span>
						<span class={{if #data.inventoryInfo && inventoryInfo.quantityIncAllowed == true}} "qtyInrementPB" {{else}} "qtyDisabled" {{/if}}>+</span>
				</div>
				{{/if}}
				{{/if}}
			</div>
			<div class="prodType">
				{{if #data.itemType == 'VGC'}}
					<div class="viewItemBox" style="left: -5px; position: absolute;text-align: center;">
						<span>{{:~trLabels.kls_static_pb_edit_item}}</span>
					</div>
				{{/if}}
				{{if ~isGwpGetItem}}
					<span>{{:~pbStaticLabelDetails.giftwPurchase}}</span>
					<span class="freeItem">{{:~pbStaticLabelDetails.free}}</span>
				{{/if}}
				{{if ~isPwpGetItem}}
					<span>{{:~pbStaticLabelDetails.pwpGetItemText}}</span>
				{{else promoInfo }}
					{{if promoInfo.length>0}}
						{{for promoInfo}}
							{{if promoType && promoType.toLowerCase() == "bogo"}}
									<span>{{:promoText1}}</span>
										{{:promoText2}}
							{{/if}}
						{{/for}}
					{{/if}}
				{{/if}}
			</div>
		{{/if}}
		<a href="javascript:void(0);" class='pbRemoveItem' id="remove_{{if itemProperties && itemProperties.productEditSeoUrl}}{{:itemProperties.productEditSeoUrl.split('prd-')[1].split('/')[0]}}{{else}}''{{/if}}">{{:~trLabels.kls_static_tr_cart_remove}}</a>
	</div>
</script>
<script id="emptyPbMessageSection" type="text/x-jsrender">
	<div class="tr-phase2-noitems">
		{{if ~root.$env.displayPreQualContent !== "undefined" && ~root.$env.displayPreQualContent}}
				<div class="prequal_drawer_empty">
				 	<img src="/media/images/kohls_expert_card.png" alt="">
				 		<div class="mid-section">
				 			<h3>{{:pbDetails.pbStaticLabels.prequalHeadtext}}</h3>
				 			<span>{{:pbDetails.pbStaticLabels.prequalSpantext}}</span>
				 		</div>
				    <a href="/feature/pre-qual/prequal_inquiry.jsp" class="get-started">{{:pbDetails.pbStaticLabels.prequalActiontext}}</a>
			    </div>
		{{else}}
			<p class="tr-phase2-noitems-message" >{{:pbDetails.pbStaticLabels.emptyShoppingBag}}</p>
		{{/if}}
		
		{{if ~root.$env && ~root.$env.isGuestUser}}
				<div class="tr-phase2-noitems-message-signin">{{:~convertHTML(pbDetails.pbStaticLabels.hadItems)}}
				<a href="/myaccount/kohls_login.jsp"  data-href="/myaccount/modal/kohls_modal_login.jsp" id="signInLink">{{:pbDetails.pbStaticLabels.signIn}}</a>&nbsp;{{:pbDetails.pbStaticLabels.viewThisItems}}
				</div>
		{{/if}}
	</div>
</script>
<script id="priceNewPBTemplate" type="text/x-jsrender">

{{if ~isGwpGetItem}}
	<div class="imageSection">
		<span class="priceLabel colorBlack">{{:~pbStaticLabelDetails.giftwPurchase}}</span>
		<span class="price colorGreen">{{:~pbStaticLabelDetails.free}}</span>
	</div>
{{else}}
	{{if ~isPwpGetItem}}
		<div class="imageSection">
			<span class="priceLabel">{{:~pbStaticLabelDetails.pwpGetItemPriceText}}</span>
			<span class="price">{{:~addCurrency(itemPriceInfo.promoAdjustedExtendedPrice)}}</span>
			<span class="secondaryPrice">{{:~pbStaticLabelDetails.pwpGetItemOriginaPrice}}&nbsp;{{:~addCurrency(itemPriceInfo.regularUnitPrice)}}</span>
		</div>
	{{else}}
		{{if promoInfo && promoInfo.length > 0}}
			{{for promoInfo ~item=#data}}
				{{if promoType && promoType.toLowerCase() == "bogo"}}
					<div class="imageSection bogo-price-section">
						<span class="priceLabel colorBlack">{{:promoText1}}</span>
						<span class="price colorBle">{{:promoText2}}</span>
						<span class="secondaryPrice colorBlack">{{:~pbStaticLabelDetails.detailsInBag}}</span>
					</div>
				{{else}}
					{{for ~item = ~item ~trLabels = ~root.trLabels ~itemPriceInfo = ~root.itemPriceInfo ~pbDetails = ~root.pbDetails tmpl='imgSecTemplate' /}}
					
				{{/if}}
			{{/for}}
		{{else}}
		{{for ~item = #data ~trLabels = ~root.trLabels ~itemPriceInfo = ~root.itemPriceInfo ~pbDetails = ~root.pbDetails tmpl='imgSecTemplate' /}}
		{{/if}}
	{{/if}}
{{/if}}
</script>
<script id="imgSecTemplate" type="text/x-jsrender">
		<div class="imageSection">
			{{if ~item.itemType == 'VGC'}}
				<span class="priceLabel colorBlack">{{:~trLabels.kls_static_suggested_items_amount_price}}</span>
				<span class="price colorBlack">{{:~addCurrency(~item.itemPriceInfo.promoAdjustedExtendedPrice)}}</span>
			{{else}}
				{{if ~item.itemPriceInfo}}
					{{if ~item.itemPriceInfo.saleUnitprice < ~item.itemPriceInfo.regularUnitPrice && !~item.itemPriceInfo.salePriceLabel}}
						<span class="price colorBlack noSaleLabel">{{:~addCurrency(~item.itemPriceInfo.saleUnitprice)}}</span>
						<span class="secondaryPrice lowerCaseRegular">{{:~trLabels.kls_static_pb_or}}&nbsp;{{if ~item.itemPriceInfo && ~item.itemPriceInfo.regularPriceLabel && ~item.itemPriceInfo.regularPriceLabel.toLowerCase() == 'original'}}{{:~trLabels.kls_static_pb_orig_smallcase}}{{else ~item.itemPriceInfo && ~item.itemPriceInfo.regularPriceLabel && ~item.itemPriceInfo.regularPriceLabel.toLowerCase() == 'regular'}}{{:~trLabels.kls_static_pb_reg_smallcase}}{{else}}{{~item.itemPriceInfo.regularPriceLabel}}{{/if}}</span>
						<span class="secondaryPrice noSaleLabel">{{:~addCurrency(~item.itemPriceInfo.regularUnitPrice)}}&nbsp;{{:~trLabels.kls_static_pb_ea}}.</span>	
					{{else ~item.itemPriceInfo.saleUnitprice < ~item.itemPriceInfo.regularUnitPrice}}
						<span class="priceLabel">{{if ~item.itemPriceInfo && ~item.itemPriceInfo.salePriceLabel && ~item.itemPriceInfo.salePriceLabel.toLowerCase() == 'sale'}}{{:~trLabels.kls_static_suggested_items_sale_price}}{{else ~item.itemPriceInfo && ~item.itemPriceInfo.salePriceLabel && ~item.itemPriceInfo.salePriceLabel.toLowerCase() == 'clearance'}}{{:~trLabels.kls_static_suggested_items_clearance_price}}{{else}}{{:~item.itemPriceInfo.salePriceLabel}}{{/if}}</span>
						<span class="price">{{:~addCurrency(~item.itemPriceInfo.saleUnitprice)}}</span>
						<span class="secondaryPrice">{{if ~item.itemPriceInfo && ~item.itemPriceInfo.regularPriceLabel && ~item.itemPriceInfo.regularPriceLabel.toLowerCase() == 'original'}}{{:~trLabels.kls_static_pb_orig}}{{else ~item.itemPriceInfo && ~item.itemPriceInfo.regularPriceLabel && ~item.itemPriceInfo.regularPriceLabel.toLowerCase() == 'regular'}}{{:~trLabels.kls_static_pb_reg}}{{else}}{{~item.itemPriceInfo.regularPriceLabel}}{{/if}}&nbsp;{{:~addCurrency(~item.itemPriceInfo.regularUnitPrice)}}</span>
					{{else}}
						<span class="priceLabel colorBlack">{{if ~item.itemPriceInfo && ~item.itemPriceInfo.regularPriceLabel && ~item.itemPriceInfo.regularPriceLabel.toLowerCase() == 'original'}}{{:~trLabels.kls_static_suggested_items_original_price}}{{else ~item.itemPriceInfo && ~item.itemPriceInfo.regularPriceLabel && ~item.itemPriceInfo.regularPriceLabel.toLowerCase() == 'regular'}}{{:~trLabels.kls_static_suggested_items_regular_price}}{{else}}{{:data.itemPriceInfo.regularPriceLabel}}{{/if}}</span>
						<span class="price colorBlack">{{:~addCurrency(~item.itemPriceInfo.regularUnitPrice)}}</span>
					{{/if}}
				{{/if}}
			{{/if}}
		</div>
</script>

<script id="tr_phase2_matercontainerajax_call" type="text/x-jsrender">
<div class="tr_phase2_shopping-bag_matercontainer">
		{{if pilotProgram && #data.purchaseEarnings && purchaseEarnings.kohlsCashEarnings && purchaseEarnings.loyaltyPilotUser && isGuest == 'false'}}
		{{if ~root.$env.ksLoyaltyV2}}
					 	<ul class="TM3---10-Static---Dial-pb">
                         {{for tmpl="ksLoyaltyTrackerTemplatePBV2" /}}
						</ul>
					{{else}}
			<ul class="TM3---10-Static---Dial-pb">
                {{for tmpl="ksLoyaltyTrackerTemplatePB" /}}
			</ul>
			{{/if}}
        {{else}}
		{{if ~root.$env.ksLoyaltyV2 && #data.purchaseEarnings && purchaseEarnings.kohlsCashEarnings && purchaseEarnings.loyaltyPilotUser}}
			<ul class="TM3---10-Static---Dial-pb">
                {{for tmpl="ksLoyaltyTrackerTemplatePBV2" /}}
				</ul>
		{{else}}
		{{if (pbDetails.pbKohlsCashEnabled == 'true' && pbDetails.pbKohlsRewardsEnabled == 'true')}}
		  	<input type="hidden" value="1" class="kohls_cashCheck">

		  	<ul class="tr_phase2_purchase_earning_meter">
			
		  	{{for tmpl="tr_phase2_persistent_bar_kohlscash_ghr" /}}
			
			{{if (purchaseEarnings && purchaseEarnings.rewards && purchaseEarnings.rewards.loyaltyId)}}
				{{for tmpl="tr_phase2_persistent_bar_kohlsreward_ghr" /}}
			{{else}}				
                {{for tmpl="tr_phase2_persistent_bar_kohlsreward_signup_ghr" /}}
			{{/if}}
		 </ul>

		{{else pbDetails.pbKohlsCashEnabled == 'true' && pbDetails.pbKohlsRewardsEnabled == 'false'}}

			<input type="hidden" value="1" class="kohls_cashCheck">

			<ul class="tr_phase2_purchase_earning_meter tr_phase2_purchase_earning_meter_center">
			
			{{for tmpl="tr_phase2_persistent_bar_kohlscash_ghr" /}}
			
			</ul>
			
		{{else pbDetails.pbKohlsRewardsEnabled == 'true' && pbDetails.pbKohlsCashEnabled == 'false'}}

			<input type="hidden" value="1" class="kohls_cashCheck">

			<ul class="tr_phase2_purchase_earning_meter tr_phase2_purchase_earning_meter_center">

				{{if (purchaseEarnings && purchaseEarnings.rewards && purchaseEarnings.rewards.loyaltyId)}}		
                    {{for tmpl="tr_phase2_persistent_bar_kohlsreward_ghr" /}}
			   {{else}}
                	{{for tmpl="tr_phase2_persistent_bar_kohlsreward_signup_ghr" /}} 
			   {{/if}}

		   </ul>

			{{else}}

				<input type="hidden" value="0" class="kohls_cashCheck">

			{{/if}}
		{{/if}}
		{{/if}}
            {{if pbDetails.pbOrderSummaryEnabled }}  <!-- Changes done for COD-4423 -->
            
                {{for tmpl="tr_phase2_Order_summary_ajax_call_ghr" /}}
				
           {{/if}}
</div>
</script>

<div class="display-none" id="surchargeGiftsTax">
<div class="surchargeGiftsTaxContainer" style="width:642px;height:auto;" id="giftsTax">

</div>
</div>

<form name="pbAddToBag-form" action="/cnc/checkout/cartItems/addItemToCart" method="POST" autocomplete="off"></form>
<form name="pbUpdateToBag-form" action="/cnc/checkout/cartItems/update" method="POST" autocomplete="off"></form>
<form name="pbRemoveFromBag-form" action="/cnc/checkout/cartItemRemove"></form>