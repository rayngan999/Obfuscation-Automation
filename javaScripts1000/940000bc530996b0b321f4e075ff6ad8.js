webpackJsonp([1,33,46,78],{162:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(857),r=n(858),i=n(855);e.default={namespaced:!0,state:a.default,mutations:r.default,actions:i.default}},2393:function(t,e,n){t.exports={default:n(2394),__esModule:!0}},2394:function(t,e,n){n(2395),t.exports=n(6).Object.entries},2395:function(t,e,n){var a=n(14),r=n(775)(!0);a(a.S,"Object",{entries:function(t){return r(t)}})},2396:function(t,e,n){"use strict";function a(t){return t instanceof Object?(c()(t).forEach(function(e){return void 0===t[e]&&delete t[e]}),"?"+o()(t).map(function(t){var e=i()(t,2);return e[0]+"="+e[1]}).join("&")):""}e.a=a;var r=n(2397),i=n.n(r),u=n(2393),o=n.n(u),s=n(39),c=n.n(s)},2397:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(2398),i=a(r),u=n(2401),o=a(u);e.default=function(){function t(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var u,s=(0,o.default)(t);!(a=(u=s.next()).done)&&(n.push(u.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{!a&&s.return&&s.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,i.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},2398:function(t,e,n){t.exports={default:n(2399),__esModule:!0}},2399:function(t,e,n){n(250),n(131),t.exports=n(2400)},2400:function(t,e,n){var a=n(252),r=n(16)("iterator"),i=n(43);t.exports=n(6).isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||i.hasOwnProperty(a(e))}},2401:function(t,e,n){t.exports={default:n(2402),__esModule:!0}},2402:function(t,e,n){n(250),n(131),t.exports=n(2403)},2403:function(t,e,n){var a=n(38),r=n(253);t.exports=n(6).getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return a(e.call(t))}},2411:function(t,e,n){"use strict";var a=n(132),r=n.n(a),i=n(251),u=n.n(i),o=function(){function t(e){if(r()(this,t),!e.id)throw new Error("Object must have Id");this._id=e.id,this._data=e}return u()(t,[{key:"id",get:function(){return this._id}},{key:"number",get:function(){return this._id}},{key:"name",get:function(){return this._data.name?this._data.name:this._id?this._id.toString():""}},{key:"description",get:function(){return this._data.description||""}},{key:"isPublic",get:function(){return Boolean(this._data.isPublic)}},{key:"isTest",get:function(){return Boolean(this._data.isTest)}},{key:"status",get:function(){return this._data.status||4}},{key:"isActive",get:function(){return 4===this._data.status}},{key:"isDisabled",get:function(){return 4!==this._data.status}},{key:"isLiqudated",get:function(){return 5===this._data.status||6===this._data.status}},{key:"isClosed",get:function(){return this._data.status>6}},{key:"isActivating",get:function(){return this._data.status<4}}]),t}();e.a=o},2449:function(t,e,n){"use strict";var a=n(778),r=n.n(a),i=n(132),u=n.n(i),o=n(251),s=n.n(o),c=n(779),f=n.n(c),l=n(780),d=n.n(l),y=n(2411),h=function(t){function e(){return u()(this,e),f()(this,(e.__proto__||r()(e)).apply(this,arguments))}return d()(e,t),s()(e,[{key:"itemType",get:function(){return"pamm"}},{key:"showEquity",get:function(){return Boolean(this._data.showEquity)}},{key:"showTurnover",get:function(){return Boolean(this._data.showTurnover)}},{key:"showTradingStatements",get:function(){return Boolean(this._data.showTradingStatements)}},{key:"returnOverall",get:function(){return this._data.returnOverall}},{key:"returnYear",get:function(){return this._data.returnYear}},{key:"returnHalfYear",get:function(){return this._data.returnHalfYear}},{key:"returnQuarterYear",get:function(){return this._data.returnQuarterYear}},{key:"returnMonth",get:function(){return this._data.returnMonth}},{key:"returnWeek",get:function(){return this._data.returnWeek}},{key:"returnDay",get:function(){return this._data.returnDay}},{key:"averageReturnYear",get:function(){return this._data.averageReturnYear}},{key:"averageReturnHalfYear",get:function(){return this._data.averageReturnHalfYear}},{key:"averageReturnQuarterYear",get:function(){return this._data.averageReturnQuarterYear}},{key:"averageReturnMonth",get:function(){return this._data.averageReturnMonth}},{key:"averageReturnWeek",get:function(){return this._data.averageReturnWeek}},{key:"averageReturnDay",get:function(){return this._data.averageReturnDay}},{key:"returnDeviationYear",get:function(){return this._data.returnDeviationYear}},{key:"returnDeviationHalfYear",get:function(){return this._data.returnDeviationHalfYear}},{key:"returnDeviationQuarterYear",get:function(){return this._data.returnDeviationQuarterYear}},{key:"returnDeviationMonth",get:function(){return this._data.returnDeviationMonth}},{key:"returnDeviationWeek",get:function(){return this._data.returnDeviationWeek}},{key:"returnDeviationDay",get:function(){return this._data.returnDeviationDay}},{key:"volatilityOverall",get:function(){return this._data.volatilityOverall}},{key:"volatilityYear",get:function(){return this._data.volatilityYear}},{key:"volatilityHalfYear",get:function(){return this._data.volatilityHalfYear}},{key:"volatilityQuarterYear",get:function(){return this._data.volatilityQuarterYear}},{key:"volatilityMonth",get:function(){return this._data.volatilityMonth}},{key:"volatilityWeek",get:function(){return this._data.volatilityWeek}},{key:"maxDrawdownOverall",get:function(){return this._data.maxDrawdownOverall}},{key:"maxDrawdownYear",get:function(){return this._data.maxDrawdownYear}},{key:"maxDrawdownHalfYear",get:function(){return this._data.maxDrawdownHalfYear}},{key:"maxDrawdownQuarterYear",get:function(){return this._data.maxDrawdownQuarterYear}},{key:"maxDrawdownMonth",get:function(){return this._data.maxDrawdownMonth}},{key:"maxDrawdownWeek",get:function(){return this._data.maxDrawdownWeek}},{key:"maxDrawdownDate",get:function(){return this._data.maxDrawdownDate}},{key:"currentDrawdown",get:function(){return this._data.currentDrawdown}},{key:"maxProfitOverall",get:function(){return this._data.maxProfitOverall}},{key:"maxProfitYear",get:function(){return this._data.maxProfitYear}},{key:"maxProfitHalfYear",get:function(){return this._data.maxProfitHalfYear}},{key:"maxProfitQuarterYear",get:function(){return this._data.maxProfitQuarterYear}},{key:"maxProfitMonth",get:function(){return this._data.maxProfitMonth}},{key:"maxProfitWeek",get:function(){return this._data.maxProfitWeek}},{key:"maxProfitDate",get:function(){return this._data.maxProfitDate}},{key:"factorOverall",get:function(){return this._data.factorOverall}},{key:"factorYear",get:function(){return this._data.factorYear}},{key:"factorHalfYear",get:function(){return this._data.factorHalfYear}},{key:"factorQuarterYear",get:function(){return this._data.factorQuarterYear}},{key:"factorMonth",get:function(){return this._data.factorMonth}},{key:"factorWeek",get:function(){return this._data.factorWeek}},{key:"investmentsOverall",get:function(){return this._data.investmentsOverall}},{key:"investmentsYear",get:function(){return this._data.investmentsYear}},{key:"investmentsQuarterYear",get:function(){return this._data.investmentsQuarterYear}},{key:"investmentsHalfYear",get:function(){return this._data.investmentsHalfYear}},{key:"investmentsMonth",get:function(){return this._data.investmentsMonth}},{key:"investmentsWeek",get:function(){return this._data.investmentsWeek}},{key:"investmentsDay",get:function(){return this._data.investmentsDay}},{key:"returnRisk",get:function(){return this._data.returnRisk}},{key:"downsideDeviation",get:function(){return this._data.downsideDeviation}},{key:"profitVolatility",get:function(){return this._data.profitVolatility}},{key:"averageDayProfit",get:function(){return this._data.averageDayProfit}},{key:"averageDayLoss",get:function(){return this._data.averageDayLoss}},{key:"lossDayPercent",get:function(){return this._data.lossDayPercent}},{key:"maxDayProfit",get:function(){return this._data.maxDayProfit}},{key:"maxDayProfitDate",get:function(){return this._data.maxDayProfitDate}},{key:"maxDayLoss",get:function(){return this._data.maxDayLoss}},{key:"maxDayLossDate",get:function(){return this._data.maxDayLossDate}},{key:"aggressiveness",get:function(){return this._data.aggressiveness}},{key:"rating",get:function(){return this._data.rating}},{key:"efficiency",get:function(){return this._data.efficiency}},{key:"stars",get:function(){return this._data.stars}},{key:"ratingConservative",get:function(){return this._data.ratingConservative}},{key:"efficiencyConservative",get:function(){return this._data.efficiencyConservative}},{key:"starsConservative",get:function(){return this._data.starsConservative}},{key:"ratingAggressive",get:function(){return this._data.ratingAggressive}},{key:"efficiencyAggressive",get:function(){return this._data.efficiencyAggressive}},{key:"achievements",get:function(){var t=this._data.achievements.replace(/\s+/g,"").split(",");if(1!==t.length||0!==t[0].length)return t}},{key:"starsAggressive",get:function(){return this._data.starsAggressive}},{key:"averageLeverage",get:function(){return this._data.averageLeverage}},{key:"maxLeverage",get:function(){return this._data.maxLeverage}},{key:"maxLeverageHalfYear",get:function(){return this._data.maxLeverageHalfYear}},{key:"maxLeverageMonth",get:function(){return this._data.maxLeverageMonth}},{key:"maxLeverageQuarter",get:function(){return this._data.maxLeverageQuarter}},{key:"maxLeverageWeek",get:function(){return this._data.maxLeverageWeek}},{key:"maxLeverageYear",get:function(){return this._data.maxLeverageYear}},{key:"kalmarOverall",get:function(){return this._data.kalmarOverall}},{key:"sharpOverall",get:function(){return this._data.sharpOverall}},{key:"sortinoOverall",get:function(){return this._data.sortinoOverall}},{key:"shvagerOverall",get:function(){return this._data.shvagerOverall}},{key:"numberOfActiveInvestors",get:function(){return this._data.numberOfActiveInvestors}},{key:"daysMonitoringOverall",get:function(){return this._data.daysMonitoringOverall}},{key:"volatilityUpOverall",get:function(){return this._data.volatilityUpOverall}},{key:"volatilityDownOverall",get:function(){return this._data.volatilityDownOverall}},{key:"meanSquareDeviation",get:function(){return this._data.meanSquareDeviation}},{key:"daysWithLoss",get:function(){return this._data.daysWithLoss}},{key:"daysWithProfit",get:function(){return this._data.daysWithProfit}},{key:"tradeResult",get:function(){return this._data.tradeResult}},{key:"tradeResultUsd",get:function(){return this._data.tradeResultUsd}},{key:"equity",get:function(){return this._data.equity}},{key:"equityUsd",get:function(){return this._data.equityUsd}},{key:"equityManager",get:function(){return this._data.equityManager}},{key:"equityManagerUsd",get:function(){return this._data.equityManagerUsd}},{key:"equityInvestors",get:function(){return this.showEquity?this._data.equityInvestors:null}},{key:"equityInvestorsUsd",get:function(){return this.showEquity?this._data.equityInvestorsUsd:null}},{key:"canInvest",get:function(){return Boolean(this._data.canInvest)}},{key:"canRefill",get:function(){return Boolean(this._data.canRefill)}},{key:"currency",get:function(){return this._data.currency}},{key:"capital",get:function(){return this._data.capital}},{key:"capitalUsd",get:function(){return this._data.capitalUsd}},{key:"dateActivation",get:function(){return this._data.dateActivation}},{key:"oldDatePublication",get:function(){return this._data.oldDatePublication}},{key:"dateLiquidation",get:function(){return this._data.dateLiquidation}},{key:"isDisableCalc",get:function(){return Boolean(this._data.isDisableCalc)}},{key:"forumThread",get:function(){return this._data.forumThread}},{key:"forumNick",get:function(){return this._data.forumNick}},{key:"forumUserId",get:function(){return this._data.forumUserId}},{key:"mtAccountType",get:function(){return this._data.mtAccountType}},{key:"tradeLeverage",get:function(){return this._data.tradeLeverage}},{key:"publicOfferId",get:function(){return this._data.publicOfferId}},{key:"publicOfferBillingPeriod",get:function(){return this._data.publicOfferBillingPeriod}},{key:"publicOfferMaxFee",get:function(){return this._data.publicOfferMaxFee}},{key:"publicOfferMinFee",get:function(){return this._data.publicOfferMinFee}},{key:"publicOfferMinBalance",get:function(){return this._data.publicOfferMinBalance}},{key:"isAudited",get:function(){return Boolean(this._data.isAudited)}},{key:"agentFee",get:function(){return this._data.agentFee}},{key:"agentFeeNext",get:function(){return this._data.agentFeeNext}},{key:"dateAgentFeeNext",get:function(){return this._data.dateAgentFeeNext}},{key:"showDeclarationHistory",get:function(){return Boolean(this._data.showDeclarationHistory)}},{key:"ageInDays",get:function(){return this._data.ageInDays}},{key:"rolloversNumber",get:function(){return this._data.rolloversNumber}},{key:"capitalRecommendedAmount",get:function(){return this._data.capitalRecommendedAmount}},{key:"capitalRecommendedPercent",get:function(){return this._data.capitalRecommendedPercent}},{key:"capitalAdequacyPercent",get:function(){return this._data.capitalAdequacyPercent}},{key:"capitalAdequacyCoefficient",get:function(){return this._data.capitalAdequacyCoefficient}},{key:"increaseMaxUnitPriceWeek",get:function(){return this._data.increaseMaxUnitPriceWeek}},{key:"increaseMaxUnitPriceMonth",get:function(){return this._data.increaseMaxUnitPriceMonth}},{key:"increaseMaxUnitPriceQuarter",get:function(){return this._data.increaseMaxUnitPriceQuarter}},{key:"increaseMaxUnitPriceYear",get:function(){return this._data.increaseMaxUnitPriceYear}},{key:"increaseMaxUnitPriceOverall",get:function(){return this._data.increaseMaxUnitPriceOverall}}]),e}(y.a);e.a=h},2450:function(t,e,n){"use strict";var a=n(778),r=n.n(a),i=n(132),u=n.n(i),o=n(251),s=n.n(o),c=n(779),f=n.n(c),l=n(780),d=n.n(l),y=n(2411),h=function(t){function e(){return u()(this,e),f()(this,(e.__proto__||r()(e)).apply(this,arguments))}return d()(e,t),s()(e,[{key:"itemType",get:function(){return"portfolio"}},{key:"equityInvestors",get:function(){return this.showEquity?this.equity-this.equityManager:null}},{key:"equityInvestorsUsd",get:function(){return this.showEquity?this.equityUsd-this.equityManagerUsd:null}},{key:"stars",get:function(){return this._data.stars1}},{key:"showEquity",get:function(){return Boolean(this._data.showEquity)}},{key:"isCompany",get:function(){return Boolean(this._data.isCompany)}},{key:"currency",get:function(){return this._data.currency}},{key:"returnOverall",get:function(){return this._data.returnOverall}},{key:"returnYear",get:function(){return this._data.returnYear}},{key:"returnHalfYear",get:function(){return this._data.returnHalfYear}},{key:"returnQuarterYear",get:function(){return this._data.returnQuarterYear}},{key:"returnMonth",get:function(){return this._data.returnMonth}},{key:"returnWeek",get:function(){return this._data.returnWeek}},{key:"returnDay",get:function(){return this._data.returnDay}},{key:"averageReturnYear",get:function(){return this._data.averageReturnYear}},{key:"averageReturnHalfYear",get:function(){return this._data.averageReturnHalfYear}},{key:"averageReturnQuarterYear",get:function(){return this._data.averageReturnQuarterYear}},{key:"averageReturnMonth",get:function(){return this._data.averageReturnMonth}},{key:"averageReturnWeek",get:function(){return this._data.averageReturnWeek}},{key:"averageReturnDay",get:function(){return this._data.averageReturnDay}},{key:"returnDeviationYear",get:function(){return this._data.returnDeviationYear}},{key:"returnDeviationHalfYear",get:function(){return this._data.returnDeviationHalfYear}},{key:"returnDeviationQuarterYear",get:function(){return this._data.returnDeviationQuarterYear}},{key:"returnDeviationMonth",get:function(){return this._data.returnDeviationMonth}},{key:"returnDeviationWeek",get:function(){return this._data.returnDeviationWeek}},{key:"returnDeviationDay",get:function(){return this._data.returnDeviationDay}},{key:"volatilityOverall",get:function(){return this._data.volatilityOverall}},{key:"volatilityYear",get:function(){return this._data.volatilityYear}},{key:"volatilityHalfYear",get:function(){return this._data.volatilityHalfYear}},{key:"volatilityQuarterYear",get:function(){return this._data.volatilityQuarterYear}},{key:"volatilityMonth",get:function(){return this._data.volatilityMonth}},{key:"volatilityWeek",get:function(){return this._data.volatilityWeek}},{key:"maxDrawdownOverall",get:function(){return this._data.maxDrawdownOverall}},{key:"maxDrawdownYear",get:function(){return this._data.maxDrawdownYear}},{key:"maxDrawdownHalfYear",get:function(){return this._data.maxDrawdownHalfYear}},{key:"maxDrawdownQuarterYear",get:function(){return this._data.maxDrawdownQuarterYear}},{key:"maxDrawdownMonth",get:function(){return this._data.maxDrawdownMonth}},{key:"maxDrawdownWeek",get:function(){return this._data.maxDrawdownWeek}},{key:"maxDrawdownDate",get:function(){return this._data.maxDrawdownDate}},{key:"maxProfitOverall",get:function(){return this._data.maxProfitOverall}},{key:"maxProfitYear",get:function(){return this._data.maxProfitYear}},{key:"maxProfitHalfYear",get:function(){return this._data.maxProfitHalfYear}},{key:"maxProfitQuarterYear",get:function(){return this._data.maxProfitQuarterYear}},{key:"maxProfitMonth",get:function(){return this._data.maxProfitMonth}},{key:"maxProfitWeek",get:function(){return this._data.maxProfitWeek}},{key:"maxProfitDate",get:function(){return this._data.maxProfitDate}},{key:"factorOverall",get:function(){return this._data.factorOverall}},{key:"factorYear",get:function(){return this._data.factorYear}},{key:"factorHalfYear",get:function(){return this._data.factorHalfYear}},{key:"factorQuarterYear",get:function(){return this._data.factorQuarterYear}},{key:"factorMonth",get:function(){return this._data.factorMonth}},{key:"factorWeek",get:function(){return this._data.factorWeek}},{key:"investmentsOverall",get:function(){return this._data.investmentsOverall}},{key:"investmentsYear",get:function(){return this._data.investmentsYear}},{key:"investmentsQuarterYear",get:function(){return this._data.investmentsQuarterYear}},{key:"investmentsHalfYear",get:function(){return this._data.investmentsHalfYear}},{key:"investmentsMonth",get:function(){return this._data.investmentsMonth}},{key:"investmentsWeek",get:function(){return this._data.investmentsWeek}},{key:"investmentsDay",get:function(){return this._data.investmentsDay}},{key:"returnRisk",get:function(){return this._data.returnRisk}},{key:"downsideDeviation",get:function(){return this._data.downsideDeviation}},{key:"profitVolatility",get:function(){return this._data.profitVolatility}},{key:"averageDayProfit",get:function(){return this._data.averageDayProfit}},{key:"averageDayLoss",get:function(){return this._data.averageDayLoss}},{key:"maxDayProfit",get:function(){return this._data.maxDayProfit}},{key:"maxDayProfitDate",get:function(){return this._data.maxDayProfitDate}},{key:"maxDayLoss",get:function(){return this._data.maxDayLoss}},{key:"maxDayLossDate",get:function(){return this._data.maxDayLossDate}},{key:"aggressiveness",get:function(){return this._data.aggressiveness}},{key:"rating",get:function(){return this._data.rating}},{key:"rating1",get:function(){return this._data.rating1}},{key:"efficiency1",get:function(){return this._data.efficiency1}},{key:"stars1",get:function(){return this._data.stars1}},{key:"rating2",get:function(){return this._data.rating2}},{key:"efficiency2",get:function(){return this._data.efficiency2}},{key:"stars2",get:function(){return this._data.stars2}},{key:"tradeResult",get:function(){return this._data.tradeResult}},{key:"tradeResultUsd",get:function(){return this._data.tradeResultUsd}},{key:"numberOfActiveInvestors",get:function(){return this._data.numberOfActiveInvestors}},{key:"contestRating",get:function(){return this._data.contestRating}},{key:"contestReturn",get:function(){return this._data.contestReturn}},{key:"contestDrawdown",get:function(){return this._data.contestDrawdown}},{key:"contestReturnDrawdownPoint",get:function(){return this._data.contestReturnDrawdownPoint}},{key:"contestVolatility",get:function(){return this._data.contestVolatility}},{key:"contestVolatilityPoint",get:function(){return this._data.contestVolatilityPoint}},{key:"canInvest",get:function(){return this._data.canInvest}},{key:"canRefill",get:function(){return this._data.canRefill}},{key:"managerFee",get:function(){return this._data.managerFee}},{key:"dateActivation",get:function(){return this._data.dateActivation}},{key:"dateLiquidation",get:function(){return this._data.dateLiquidation}},{key:"liquidationReason",get:function(){return this._data.liquidationReason}},{key:"equityManager",get:function(){return this._data.equityManager}},{key:"equityManagerUsd",get:function(){return this._data.equityManagerUsd}},{key:"equity",get:function(){return this._data.equity}},{key:"equityUsd",get:function(){return this._data.equityUsd}},{key:"forumThread",get:function(){return this._data.forumThread}},{key:"forumNick",get:function(){return this._data.forumNick}},{key:"forumUserId",get:function(){return this._data.forumUserId}},{key:"unitPrice",get:function(){return this._data.unitPrice}},{key:"unitsAmount",get:function(){return this._data.unitsAmount}},{key:"ageInDays",get:function(){return this._data.ageInDays}},{key:"pammsCount",get:function(){return this._data.pammsCount}}]),e}(y.a);e.a=h},2457:function(t,e,n){"use strict";function a(t,e,n){return function(a){return t.isCanceled?n({isCanceled:!0}):e(a)}}function r(t,e){return function(n,r){return e.then(a(t,n,r)).catch(a(t,r,r))}}function i(t){var e=null;return function(){return e&&(e.isCanceled=!0),e={isCanceled:!1},new g.a(r(e,t.apply(void 0,arguments)))}}function u(t){return t&&t.data&&(t.data.data||t.data)}function o(t){if(t&&t.data)throw t.data;throw t}function s(t){var e=y()(t),n=i(l.a),a="/invest/"+e;return function(t){return n(f()({baseURL:a},t)).then(u).catch(o)}}var c=n(37),f=n.n(c),l=n(31),d=n(776),y=n.n(d),h=n(25),g=n.n(h);n.d(e,"a",function(){return v}),n.d(e,"c",function(){return _}),n.d(e,"b",function(){return m});var v=function(t){var e=s(t);return function(t){return e({url:"rating.json",params:t})}},_=function(t){var e=s(t);return function(t){return e({url:"/place.json",params:{limit:t}})}},m=function(t){var e=s(t);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return e({url:"rating.json",params:{limit:t,map:!0}})}}},855:function(t,e,n){"use strict";function a(t){return g.a.get("/"+t+"/pamm/service/info/")}function r(t,e){return g.a.get("/"+t+"/pamm/"+e+"/")}function i(t,e,n,a){return g.a.get("/"+t+"/pamm/"+e+"/monitoring/"+n+"_return_candle.json"+Object(v.a)(a))}function u(t){return g.a.get("/"+t+"/pamm/rating/top/?limit=1&method=return")}function o(t){return g.a.get("/"+t+"/pamm_portfolio/rating/top/?limit=1&method=return")}function s(t){return g.a.get("/"+t+"/pamm_reviews/list/")}function c(t){return g.a.get("/"+t+"/pamm/achievements/translates/")}function f(t){return g.a.get("/"+t+"/pamm/achievements/info/")}Object.defineProperty(e,"__esModule",{value:!0});var l=n(129),d=n.n(l),y=n(25),h=n.n(y),g=n(31),v=n(2396),_=n(2457),m=n(135);e.default={FETCH_PAMM_RATING:function(t,e){var n=t.commit,a=e.itemType,r=e.server;return Object(_.b)(a,r)().then(function(t){return t.items}).then(function(t){t&&n("SET_RATING_TOP",{itemType:a,data:t})}).catch(this.pushError("FETCH_PAMM_RATING"))},FETCH_PAMM_RETURNS:function(t,e){var n=t.commit,a=(t.state,e.locale),r=e.id,u=e.interval,o=e.query;return i(a,r,u,o).then(m.a).then(function(t){t&&n("SET_PAMM_RETURNS",{id:r,data:t})}).catch(this.pushError("FETCH_PAMM_RETURNS"))},FETCH_PAMM_BEST_MANAGER:function(t,e){var n=t.commit,a=e.locale,r=e.type;return u(a).then(m.a).then(function(t){t&&t.pamms&&n("SET_PAMM_BEST_MANAGER",{data:t.pamms[0],type:r})}).catch(this.pushError("FETCH_PAMM_BEST_MANAGER"))},FETCH_PORTFOLIO_BEST_MANAGER:function(t,e){var n=t.commit,a=e.locale,r=e.type;return o(a).then(m.a).then(function(t){t&&t.portfolios&&n("SET_PORTFOLIO_BEST_MANAGER",{data:t.portfolios[0],type:r})}).catch(this.pushError("FETCH_PORTFOLIO_BEST_MANAGER"))},FETCH_PAMM_SERVICE_INFO:function(t,e){var n=t.commit;return a(e).then(m.a).then(function(t){t.serviceInfo.locale=e,n("SET_PAMM_SERVICE_INFO",t.serviceInfo)}).catch(this.pushError("FETCH_PAMM_SERVICE_INFO"))},FETCH_PAMM_INFO:function(t,e){var n=t.commit;return r(e.locale,e.id).then(m.a).then(function(t){t&&n("SET_PAMM_INFO",t.pamm)}).catch(this.pushError("FETCH_PAMM_INFO"))},FETCH_REVIEWS_LIST:function(t,e){var n=(t.state,t.commit),a=t.dispatch;return s(e).then(m.a).then(function(t){n("CLEAR_REVIEWS_LIST"),n("SET_REVIEWS_LIST",t.reviews);var r=t.reviews.popular.map(function(t){return t.login}),i=t.reviews.profitable.map(function(t){return t.login});return h.a.all([].concat(d()(r.map(function(t){return a("FETCH_PAMM_INFO",{locale:e,id:t,type:"popular"})})),d()(i.map(function(t){return a("FETCH_PAMM_INFO",{locale:e,id:t,type:"profitable"})})))).then(function(){return n("MERGE_PAMM_DATA",{type:"reviewsPopular",items:r}),n("MERGE_PAMM_DATA",{type:"reviewsProfitable",items:i}),!0})}).catch(this.pushError("FETCH_REVIEWS_LIST"))},FETCH_PAMM_ACHIEVEMENTS:function(t,e){var n=t.commit;return c(e.locale).then(m.a).then(function(t){return t.translates}).then(function(t){return t.reduce(function(t,e){var n=e.name,a=e.title,r=e.description;return t[n]={title:a,description:r},t},{})}).then(function(t){t&&n("SET_PAMM_ACHIEVEMENTS",t)}).catch(this.pushError("FETCH_PAMM_ACHIEVEMENTS"))},FETCH_PAMM_ACHIEVEMENTS_INFO:function(t,e){var n=t.commit;return f(e.locale).then(m.a).then(function(t){return t.reduce(function(t,e){var n=e.name,a=e.title,r=e.description,i=e.pamms;return t[n]={title:a,description:r,pamms:i},t},{})}).then(function(t){t&&n("SET_PAMM_ACHIEVEMENTS_INFO",t)}).catch(this.pushError("FETCH_PAMM_ACHIEVEMENTS_INFO"))}}},857:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{rating:{pamm:[],portfolio:[]},chartsData:{pamm:{},portfolio:{}},bestPamm:{},bestPortfolio:{},reviewsIntro:"",reviewsProfitable:{},reviewsPopular:{},reviewsPopularOrder:[],reviewsProfitableOrder:[],pamm:{},pammAchievements:{},pammAchievementsInfo:{},pammServiceInfo:{investor:{account:{minInvestment:{value:null,descValue:null,descTranslationKey:"for-non-public-pamm"},minBalance:{hasHint:!0,value:null,descValue:null,descTranslationKey:"for-non-public-pamm"},minDepositWithdraw:{hasHint:!0,value:null,descValue:null},banner:{style:"small_gray",iconName:"banner_invest.svg",title:"let-money-work",class:"invest",button:{translationKey:"invest",route:"registration",query:{account:"invest.pamm"}}}},portfolio:{minInvestment:{value:null,descValue:null},minBalance:{hasHint:!0,value:null,descValue:null},minDepositWithdraw:{hasHint:!0,value:null,descValue:null},banner:{style:"small_gray",iconName:"banner_portfolio.svg",title:"reduce-possible-risks",class:"portfolio",button:{translationKey:"select-portfolio",route:"investor_portfolio_ratings"}}}},manager:{account:{accountTypes:{value:null,descValue:null},offerLevel:{value:null,descValue:null,valueTranslationKey:"profit-investor"},maxDemand:{value:null,descValue:null,valueTranslationKey:"per-a-day",descTranslationKey:"threshold-from"},banner:{style:"big_gray",iconName:"banner_pamm.svg",title:"work-more",text:"raise-funds",class:"pamm",button:{translationKey:"open-pamm",route:"registration",query:{account:"pamm.standard.mt4"}}}},portfolio:{minAmountActivatePublic:{value:null,descValue:null},minAmountActivateNon:{value:null,descValue:null},maxOwnPammOffer:{value:null,descValue:null,valueTranslationKey:"no-more-than"},maxOwnPammPercent:{value:null,descValue:null,valueTranslationKey:"no-more-than",descTranslationKey:"no-restrictions"},maxPortfolioManager:{value:null,descValue:null,valueTranslationKey:"profit-investor"},oneTimePerDay:{value:null,descValue:null,valueTranslationKey:"per-a-day",descTranslationKey:"threshold-from"}}}}}}},858:function(t,e,n){"use strict";function a(t,e,n){var a="";return t.map(function(t,r){r<e&&(a+=t[n]+" "+t.symbol+", ")}),a.slice(0,-2)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(104),i=n.n(r),u=n(37),o=n.n(u),s=n(26),c=n.n(s),f=n(12),l=n.n(f),d=n(2449),y=n(2450),h=function(t){return function(e){return"portfolio"===t?new y.a(e):new d.a(e)}};e.default={SET_PAMM_BEST_MANAGER:function(t,e){var n=e.data;t[e.type]=n},SET_PORTFOLIO_BEST_MANAGER:function(t,e){var n=e.data;t[e.type]=n},SET_RATING_TOP:function(t,e){var n=e.itemType,a=e.data;Array.isArray(a)&&l.a.set(t.rating,n,a.map(h(n)))},SET_PAMM_RETURNS:function(t,e){var n=e.id,a=e.data,r={series:[],categories:[]};a.forEach(function(t){r.categories.push(c()(t[0]).format("DD MMM")),r.series.push(t[t.length-1])}),t.chartsData.pamm=o()({},t.chartsData.pamm,i()({},n,o()({},r)))},SET_PAMM_SERVICE_INFO:function(t,e){var n=t.pammServiceInfo;n.investor.account.minInvestment.value=a(e.currency,3,"minBalanceOfferLevel"),n.investor.account.minBalance.value=a(e.currency,3,"minBalanceOfferLevel"),n.investor.account.minDepositWithdraw.value=a(e.currency,3,"minInputInvestment"),n.investor.portfolio.minInvestment.value=a(e.currency,3,"minFirstInputPortfolio"),n.investor.portfolio.minBalance.value=a(e.currency,3,"minFirstInputPortfolio"),n.investor.portfolio.minDepositWithdraw.value=a(e.currency,3,"minInputPortfolio"),n.manager.account.accountTypes.value=e.accountTypes.map(function(t){return t.name}),n.manager.account.offerLevel.value=e.offerLevelMaxFee,n.manager.account.maxDemand.descValue=e.maxDemandStopTime,n.manager.portfolio.minAmountActivatePublic.value=a(e.currency,3,"minAmountActivatePublicPortfolio"),n.manager.portfolio.minAmountActivateNon.value=a(e.currency,3,"minAmountActivateNonPublicPortfolio"),n.manager.portfolio.maxOwnPammOffer.value=e.maxOwnPammOfferFeeInPortfolio,n.manager.portfolio.maxOwnPammPercent.value=e.maxOwnPammPercentInPortfolio,n.manager.portfolio.maxPortfolioManager.value=e.maxPortfolioManagerFee,n.manager.portfolio.oneTimePerDay.descValue=e.maxFundDemandStopTime},SET_PAMM_INFO:function(t,e){t.pamm[e.id]=e},CLEAR_REVIEWS_LIST:function(t){t.reviewsPopular={},t.reviewsPopular={},t.reviewsPopularOrder=[],t.reviewsProfitableOrder=[],t.reviewsIntro=""},SET_REVIEWS_LIST:function(t,e){var n=e.intro,a=e.popular,r=e.profitable;a.forEach(function(e){t.reviewsPopular[e.login]=e,t.reviewsPopularOrder.push(e.login)}),r.forEach(function(e){t.reviewsProfitable[e.login]=e,t.reviewsProfitableOrder.push(e.login)}),t.reviewsIntro=n},MERGE_PAMM_DATA:function(t,e){var n=e.items,a=e.type;n.forEach(function(e){var n=t.pamm[e];n&&t[a][e]&&l.a.set(t[a],e,o()({},t[a][e],{name:n.name,returnOverall:n.activities.returnOverall,returnMonth:n.activities.returnMonth,equityUsd:n.equityUsd,stars:n.activities.stars}))})},SET_PAMM_ACHIEVEMENTS:function(t,e){t.pammAchievements=e},SET_PAMM_ACHIEVEMENTS_INFO:function(t,e){t.pammAchievementsInfo=e}}}});