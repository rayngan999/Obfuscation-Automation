(window.webpackJsonp = window.webpackJsonp || []).push([
    [54], {
        10: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })),
                function(t) {
                    t[t.SCHEDULED = 1] = "SCHEDULED", t[t.LIVE = 2] = "LIVE", t[t.FINISHED = 3] = "FINISHED", t[t.POSTPONED = 4] = "POSTPONED", t[t.CANCELED = 5] = "CANCELED", t[t.EXTRATIME = 6] = "EXTRATIME", t[t.PENALTY = 7] = "PENALTY", t[t.RETIRED = 8] = "RETIRED", t[t.WALKOVER = 9] = "WALKOVER", t[t.AFTER_ET = 10] = "AFTER_ET", t[t.AFTER_PEN = 11] = "AFTER_PEN", t[t.FIRST_HALF = 12] = "FIRST_HALF", t[t.SECOND_HALF = 13] = "SECOND_HALF", t[t.FIRST_PER = 14] = "FIRST_PER", t[t.SECOND_PER = 15] = "SECOND_PER", t[t.THIRD_PER = 16] = "THIRD_PER", t[t.FIRST_SET = 17] = "FIRST_SET", t[t.SECOND_SET = 18] = "SECOND_SET", t[t.THIRD_SET = 19] = "THIRD_SET", t[t.FOURTH_SET = 20] = "FOURTH_SET", t[t.FIFTH_SET = 21] = "FIFTH_SET", t[t.FIRST_QRT = 22] = "FIRST_QRT", t[t.SECOND_QRT = 23] = "SECOND_QRT", t[t.THIRD_QRT = 24] = "THIRD_QRT", t[t.FOURTH_QRT = 25] = "FOURTH_QRT", t[t.FIRST_INN = 26] = "FIRST_INN", t[t.SECOND_INN = 27] = "SECOND_INN", t[t.THIRD_INN = 28] = "THIRD_INN", t[t.FOURTH_INN = 29] = "FOURTH_INN", t[t.FIFTH_INN = 30] = "FIFTH_INN", t[t.SIXTH_INN = 31] = "SIXTH_INN", t[t.SEVENTH_INN = 32] = "SEVENTH_INN", t[t.EIGHTH_INN = 33] = "EIGHTH_INN", t[t.NINTH_INN = 34] = "NINTH_INN", t[t.EXTRA_INN = 35] = "EXTRA_INN", t[t.INTERUPTED = 36] = "INTERUPTED", t[t.ABANDONED = 37] = "ABANDONED", t[t.HALF_TIME = 38] = "HALF_TIME", t[t.TIME_OUT = 39] = "TIME_OUT", t[t.FIRST_ET = 40] = "FIRST_ET", t[t.SECOND_ET = 41] = "SECOND_ET", t[t.PENDING = 42] = "PENDING", t[t.DELAYED = 43] = "DELAYED", t[t.SUSPENDED = 44] = "SUSPENDED", t[t.TO_FINISH = 45] = "TO_FINISH", t[t.PAUSED = 46] = "PAUSED", t[t.FIRST_SET_TB = 47] = "FIRST_SET_TB", t[t.SECOND_SET_TB = 48] = "SECOND_SET_TB", t[t.THIRD_SET_TB = 49] = "THIRD_SET_TB", t[t.FOURTH_SET_TB = 50] = "FOURTH_SET_TB", t[t.FIFTH_SET_TB = 51] = "FIFTH_SET_TB", t[t.GAME = 52] = "GAME", t[t.SECOND_PLACE = 53] = "SECOND_PLACE", t[t.AWARDED = 54] = "AWARDED", t[t.SIXTH_SET = 55] = "SIXTH_SET", t[t.SEVENTH_SET = 56] = "SEVENTH_SET", t[t.AFTER_DAY1 = 57] = "AFTER_DAY1", t[t.AFTER_DAY2 = 58] = "AFTER_DAY2", t[t.AFTER_DAY3 = 59] = "AFTER_DAY3", t[t.AFTER_DAY4 = 60] = "AFTER_DAY4", t[t.AFTER_DAY5 = 61] = "AFTER_DAY5", t[t.AFTER_ROUND1 = 62] = "AFTER_ROUND1", t[t.AFTER_ROUND2 = 63] = "AFTER_ROUND2", t[t.AFTER_ROUND3 = 64] = "AFTER_ROUND3", t[t.FIRST_ROUND = 65] = "FIRST_ROUND", t[t.SECOND_ROUND = 66] = "SECOND_ROUND", t[t.THIRD_ROUND = 67] = "THIRD_ROUND", t[t.FOURTH_ROUND = 68] = "FOURTH_ROUND", t[t.AFTER_EI = 69] = "AFTER_EI", t[t.RACE = 73] = "RACE", t[t.OVERALL = 74] = "OVERALL", t[t.HEAT_6 = 124] = "HEAT_6", t[t.AFTER_STAGE_1 = 149] = "AFTER_STAGE_1", t[t.AFTER_STAGE_2 = 150] = "AFTER_STAGE_2", t[t.AFTER_STAGE_3 = 151] = "AFTER_STAGE_3", t[t.AFTER_STAGE_4 = 152] = "AFTER_STAGE_4", t[t.AFTER_STAGE_5 = 153] = "AFTER_STAGE_5", t[t.AFTER_STAGE_6 = 154] = "AFTER_STAGE_6", t[t.AFTER_STAGE_7 = 155] = "AFTER_STAGE_7", t[t.AFTER_STAGE_8 = 156] = "AFTER_STAGE_8", t[t.AFTER_STAGE_9 = 157] = "AFTER_STAGE_9", t[t.AFTER_STAGE_10 = 158] = "AFTER_STAGE_10", t[t.AFTER_STAGE_11 = 159] = "AFTER_STAGE_11", t[t.AFTER_STAGE_12 = 160] = "AFTER_STAGE_12", t[t.AFTER_STAGE_13 = 161] = "AFTER_STAGE_13", t[t.AFTER_STAGE_14 = 162] = "AFTER_STAGE_14", t[t.AFTER_STAGE_15 = 163] = "AFTER_STAGE_15", t[t.AFTER_STAGE_16 = 164] = "AFTER_STAGE_16", t[t.AFTER_STAGE_17 = 165] = "AFTER_STAGE_17", t[t.AFTER_STAGE_18 = 166] = "AFTER_STAGE_18", t[t.AFTER_STAGE_19 = 167] = "AFTER_STAGE_19", t[t.AFTER_STAGE_20 = 168] = "AFTER_STAGE_20", t[t.AFTER_STAGE_21 = 169] = "AFTER_STAGE_21", t[t.AFTER_STAGE_22 = 170] = "AFTER_STAGE_22", t[t.AFTER_STAGE_23 = 171] = "AFTER_STAGE_23", t[t.AFTER_STAGE_24 = 172] = "AFTER_STAGE_24", t[t.AFTER_STAGE_25 = 173] = "AFTER_STAGE_25", t[t.AFTER_STAGE_26 = 174] = "AFTER_STAGE_26", t[t.AFTER_STAGE_27 = 175] = "AFTER_STAGE_27", t[t.AFTER_STAGE_28 = 176] = "AFTER_STAGE_28", t[t.AFTER_STAGE_29 = 177] = "AFTER_STAGE_29", t[t.AFTER_STAGE_30 = 178] = "AFTER_STAGE_30", t[t.AFTER_SPECIAL_STAGE_1 = 287] = "AFTER_SPECIAL_STAGE_1", t[t.AFTER_SPECIAL_STAGE_2 = 288] = "AFTER_SPECIAL_STAGE_2", t[t.AFTER_SPECIAL_STAGE_3 = 289] = "AFTER_SPECIAL_STAGE_3", t[t.AFTER_SPECIAL_STAGE_4 = 290] = "AFTER_SPECIAL_STAGE_4", t[t.AFTER_SPECIAL_STAGE_5 = 291] = "AFTER_SPECIAL_STAGE_5", t[t.AFTER_SPECIAL_STAGE_6 = 292] = "AFTER_SPECIAL_STAGE_6", t[t.AFTER_SPECIAL_STAGE_7 = 293] = "AFTER_SPECIAL_STAGE_7", t[t.AFTER_SPECIAL_STAGE_8 = 294] = "AFTER_SPECIAL_STAGE_8", t[t.AFTER_SPECIAL_STAGE_9 = 295] = "AFTER_SPECIAL_STAGE_9", t[t.AFTER_SPECIAL_STAGE_10 = 296] = "AFTER_SPECIAL_STAGE_10", t[t.AFTER_SPECIAL_STAGE_11 = 297] = "AFTER_SPECIAL_STAGE_11", t[t.AFTER_SPECIAL_STAGE_12 = 298] = "AFTER_SPECIAL_STAGE_12", t[t.AFTER_SPECIAL_STAGE_13 = 299] = "AFTER_SPECIAL_STAGE_13", t[t.AFTER_SPECIAL_STAGE_14 = 300] = "AFTER_SPECIAL_STAGE_14", t[t.AFTER_SPECIAL_STAGE_15 = 301] = "AFTER_SPECIAL_STAGE_15", t[t.AFTER_SPECIAL_STAGE_16 = 302] = "AFTER_SPECIAL_STAGE_16", t[t.AFTER_SPECIAL_STAGE_17 = 303] = "AFTER_SPECIAL_STAGE_17", t[t.AFTER_SPECIAL_STAGE_18 = 304] = "AFTER_SPECIAL_STAGE_18", t[t.AFTER_SPECIAL_STAGE_19 = 305] = "AFTER_SPECIAL_STAGE_19", t[t.AFTER_SPECIAL_STAGE_20 = 306] = "AFTER_SPECIAL_STAGE_20", t[t.AFTER_SPECIAL_STAGE_21 = 307] = "AFTER_SPECIAL_STAGE_21", t[t.AFTER_SPECIAL_STAGE_22 = 308] = "AFTER_SPECIAL_STAGE_22", t[t.AFTER_SPECIAL_STAGE_23 = 309] = "AFTER_SPECIAL_STAGE_23", t[t.AFTER_SPECIAL_STAGE_24 = 310] = "AFTER_SPECIAL_STAGE_24", t[t.AFTER_SPECIAL_STAGE_25 = 311] = "AFTER_SPECIAL_STAGE_25", t[t.AFTER_SPECIAL_STAGE_26 = 312] = "AFTER_SPECIAL_STAGE_26", t[t.AFTER_SPECIAL_STAGE_1_B = 313] = "AFTER_SPECIAL_STAGE_1_B", t[t.LUNCH = 333] = "LUNCH", t[t.TEA = 334] = "TEA", t[t.MEDICAL_TIMEOUT = 335] = "MEDICAL_TIMEOUT"
                }(_ || (_ = {}))
        },
        101: function(t, e, s) {
            t.exports = {
                recomSkelCont: "recomSkelCont___Zz5KbHH",
                recomSkelHead: "recomSkelHead___3KuQQx8",
                animationSkelet: "animationSkelet___UM3JxN-",
                recomSkelImage: "recomSkelImage___1lQx0v0",
                recomSkelText: "recomSkelText___1imTep4"
            }
        },
        109: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return E
            }));
            var _ = s(53);
            class E {
                constructor(t, e, s, _, E) {
                    this.eventId = t, this.lang = e, this.projectTypeId = s, _ && (this.tournamentId = _.tournament, this.tournamentStageId = _.tournamentStage), this.timezone = E
                }
                getGeoIpFeed() {
                    return "f_"
                }
                getSysFeed() {
                    return "sys_" + this.projectTypeId
                }
                getGameFeed() {
                    return `g_${this.projectTypeId}_${this.eventId}`
                }
                getSummaryTab() {
                    return `d_su_${this.eventId}_${this.lang}_${this.projectTypeId}`
                }
                getH2hTab() {
                    return `df_hh_${this.projectTypeId}_${this.eventId}`
                }
                getOddsTab() {
                    return `d_od_${this.eventId}_${this.lang}_${this.projectTypeId}_eu`
                }
                getOddsFeed() {
                    return `df_od_${this.projectTypeId}_${this.eventId}`
                }
                getLineupsTab() {
                    return `df_li_${this.projectTypeId}_${this.eventId}`
                }
                getPlayerStatsTab() {
                    return `d_ps_${this.eventId}_${this.lang}_${this.projectTypeId}`
                }
                getNewsTab() {
                    return `df_nf_${this.projectTypeId}_${this.eventId}`
                }
                getPhotoReportTab() {
                    return `d_pr_${this.eventId}_${this.lang}_${this.projectTypeId}`
                }
                getFallOfWicketsTab() {
                    return `d_fow_${this.eventId}_${this.lang}_${this.projectTypeId}`
                }
                getOversTab() {
                    return `d_ov_${this.eventId}_${this.lang}_${this.projectTypeId}`
                }
                getMatchHistoryFeed() {
                    return `df_mh_${this.projectTypeId}_${this.eventId}`
                }
                getCommentaryTab() {
                    return `d_ph_${this.eventId}_${this.lang}_${this.projectTypeId}`
                }
                getTournamentTableTab(t, e = []) {
                    return ["ss", this.projectTypeId, this.tournamentId, this.tournamentStageId, [t, _.a.createParams(e)].join("")].join("_")
                }
                getStandingsTabs() {
                    return `tx_${this.tournamentId}_${this.tournamentStageId}`
                }
                getCommonFeed() {
                    return `dc_${this.projectTypeId}_${this.eventId}`
                }
                getSummaryHorizontalFeed() {
                    return `df_sur_${this.projectTypeId}_${this.eventId}`
                }
                getSummaryVerticalFeed() {
                    return `df_sui_${this.projectTypeId}_${this.eventId}`
                }
                getPrematchOddsFeed(t = "") {
                    return `df_dos_${this.projectTypeId}_${this.eventId}_${t}`
                }
                getPrematchOddsLiveFeed(t) {
                    return `df_lod2_${t}_${this.eventId}`
                }
                getVideoHighlightFeed() {
                    return `df_hi_${this.projectTypeId}_${this.eventId}`
                }
                getStatisticsFeed() {
                    return `df_st_${this.projectTypeId}_${this.eventId}`
                }
                getScratchesFeed() {
                    return `df_scr_${this.projectTypeId}_${this.eventId}`
                }
                getPmxFeed(t) {
                    return `pmx_${this.projectTypeId}_${this.timezone.getHour()}_${t.join("_")}`
                }
            }
        },
        111: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return a
            }));
            var _ = s(18),
                E = s(72),
                i = s(2),
                r = s(22);
            class a extends _.a {
                startFeed() {
                    this.channels = new E.a
                }
                startRow() {
                    this.channelBuilder = new r.a
                }
                parse(t, e) {
                    switch (t) {
                        case i.a.TVINDEXES_BUNDLE_UUID:
                            this.channelBuilder.setBundleUuid(this.getString(e));
                            break;
                        case i.a.TVINDEXES_BUNDLE_NAME:
                            this.channelBuilder.setBundleName(this.getString(e));
                            break;
                        case i.a.TVINDEXES_BUNDLE_FOR_FREE:
                            this.channelBuilder.setIsFree(this.getBooleanValueOf(e));
                            break;
                        case i.a.TVINDEXES_BUNDLE_EXPIRATION_PERIOD:
                            this.channelBuilder.setExpirationPeriod(this.getString(e));
                            break;
                        case i.a.TVINDEXES_CHANNEL_ID:
                            this.channelBuilder.setId(this.getNumberValueOf(e));
                            break;
                        case i.a.TVINDEXES_BUNDLE_PRICE_CURRENCY_CODE:
                            this.channelBuilder.setPriceCurrencyCode(this.getString(e));
                            break;
                        case i.a.TVINDEXES_BUNDLE_PRICE_CURRENCY_VALUE:
                            this.channelBuilder.setPriceCurrencyValue(this.getString(e));
                            break;
                        case i.a.TVINDEXES_CHANNEL_NAME:
                            this.channelBuilder.setName(this.getString(e));
                            break;
                        case i.a.TVINDEXES_CHANNEL_IMAGE_BIG:
                            this.channelBuilder.setEncodedImageFilename(this.getString(e)), this.channels.add(this.channelBuilder.build())
                    }
                }
                getParsedModel() {
                    return this.channels
                }
            }
        },
        112: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return R
            }));
            var _ = s(18);
            class E {
                constructor(t, e) {
                    this.odds = t, this.oddsSettings = e
                }
                getOdds() {
                    return this.odds
                }
                getOddsSettings() {
                    return this.oddsSettings
                }
            }
            class i {
                setOdds(t) {
                    return this.odds = t, this
                }
                setOddsSettings(t) {
                    return this.oddsSettings = t, this
                }
                build() {
                    return new E(this.odds, this.oddsSettings)
                }
            }
            var r = s(63);
            class a {
                constructor(t, e, s, _, E, i) {
                    this.name = t, this.title = e, this.rowCount = s, this.selected = _, this.url = E, this.tabIdentification = i
                }
                getName() {
                    return this.name
                }
                getTitle() {
                    return this.title
                }
                getRowCount() {
                    return this.rowCount
                }
                getSelected() {
                    return this.selected
                }
                getUrl() {
                    return this.url
                }
                getTabIdentification() {
                    return this.tabIdentification
                }
                getClassName() {
                    return "tabs__tab"
                }
            }
            class n extends a {
                getClassName() {
                    return "subTabs__tab"
                }
            }
            class o {
                constructor() {
                    this.name = "", this.title = "", this.tabIdentification = "", this.rowCount = 0, this.selected = !1, this.url = ""
                }
                setName(t) {
                    return this.name = t, this
                }
                setTitle(t) {
                    return this.title = t, this
                }
                setTabIdentification(t) {
                    return this.tabIdentification = t, this
                }
                setRowCount(t) {
                    return this.rowCount = t, this
                }
                incrementRowCount() {
                    return this.rowCount++, this
                }
                setSelected(t) {
                    return this.selected = t, this
                }
                setUrl(t) {
                    return this.url = t, this
                }
                build() {
                    return new a(this.name, this.title, this.rowCount, this.selected, this.url, this.tabIdentification)
                }
            }
            class S extends o {
                build() {
                    return new n(this.name, this.title, this.rowCount, this.selected, this.url, this.tabIdentification)
                }
            }
            class I {
                constructor(t, e) {
                    this.header = t, this.rows = e
                }
                getHeader() {
                    return this.header
                }
                getRows() {
                    return this.rows
                }
            }
            class T {
                constructor() {
                    this.rows = []
                }
                setHeader(t) {
                    return this.header = t, this
                }
                addRow(t) {
                    return this.rows.push(t), this
                }
                build() {
                    return new I(this.header, this.rows)
                }
            }
            class A {
                constructor(t, e, s, _) {
                    this.handicap = t, this.label1 = e, this.label2 = s, this.label3 = _
                }
                getHandicap() {
                    return this.handicap
                }
                getLabel1() {
                    return this.label1
                }
                getLabel2() {
                    return this.label2
                }
                getLabel3() {
                    return this.label3
                }
            }
            class l {
                constructor() {
                    this.handicap = null, this.label1 = null, this.label2 = null, this.label3 = null
                }
                setHandicap(t) {
                    return this.handicap = t, this
                }
                setLabel1(t) {
                    return this.label1 = t, this
                }
                setLabel2(t) {
                    return this.label2 = t, this
                }
                setLabel3(t) {
                    return this.label3 = t, this
                }
                build() {
                    return new A(this.handicap, this.label1, this.label2, this.label3)
                }
            }
            class h {
                constructor(t, e, s, _, E, i, r, a, n, o, S, I) {
                    this.bookmakerId = t, this.bookmakerImageUrl = e, this.bookmakerName = s, this.bookmakerShowTextInsteadOfLogo = _, this.bookmakerIsPremium = E, this.hasLiveOdds = i, this.handicapValue = r, this.handicapTypeId = a, this.oddValue1 = n, this.oddValue2 = o, this.oddValue3 = S, this.oddsAvailable = I
                }
                getBookmakerId() {
                    return this.bookmakerId
                }
                getBookmakerImageUrl() {
                    return this.bookmakerImageUrl
                }
                getBookmakerName() {
                    return this.bookmakerName
                }
                getShowTextInsteadOfLogo() {
                    return this.bookmakerShowTextInsteadOfLogo
                }
                getBookmakerIsPremium() {
                    return this.bookmakerIsPremium
                }
                getHasLiveOdds() {
                    return this.hasLiveOdds
                }
                getHandicapValue() {
                    return this.handicapValue
                }
                getHandicapTypeId() {
                    return this.handicapTypeId
                }
                getOddValue1() {
                    return this.oddValue1
                }
                getOddValue2() {
                    return this.oddValue2
                }
                getOddValue3() {
                    return this.oddValue3
                }
                getOddsAvailable() {
                    return this.oddsAvailable
                }
            }
            class N {
                constructor() {
                    this.bookmakerId = -1, this.bookmakerImageUrl = "", this.bookmakerShowTextInsteadOfLogo = !1, this.bookmakerName = "", this.bookmakerIsPremium = !1, this.hasLiveOdds = !1, this.handicapValue = null, this.handicapTypeId = null, this.oddValue1 = null, this.oddValue2 = null, this.oddValue3 = null, this.oddsAvailable = !0
                }
                setBookmakerId(t) {
                    return this.bookmakerId = t, this
                }
                setBookmakerImageUrl(t) {
                    return this.bookmakerImageUrl = t, this
                }
                setShowTextInsteadOfLogo(t) {
                    return this.bookmakerShowTextInsteadOfLogo = t, this
                }
                setBookmakerName(t) {
                    return this.bookmakerName = t, this
                }
                setBookmakerIsPremium(t) {
                    return this.bookmakerIsPremium = t, this
                }
                setHasLiveOdds(t) {
                    return this.hasLiveOdds = t, this
                }
                setHandicapValue(t) {
                    return this.handicapValue = t, this
                }
                setHandicapTypeId(t) {
                    return this.handicapTypeId = t, this
                }
                setOddValue1(t) {
                    return this.oddValue1 = t, this
                }
                setOddValue2(t) {
                    return this.oddValue2 = t, this
                }
                setOddValue3(t) {
                    return this.oddValue3 = t, this
                }
                setOddsAvailable(t) {
                    return this.oddsAvailable = t, this
                }
                build() {
                    return new h(this.bookmakerId, this.bookmakerImageUrl, this.bookmakerName, this.bookmakerShowTextInsteadOfLogo, this.bookmakerIsPremium, this.hasLiveOdds, this.handicapValue, this.handicapTypeId, this.oddValue1, this.oddValue2, this.oddValue3, this.oddsAvailable)
                }
            }
            class D {
                constructor(t, e, s, _) {
                    this.allowHighlighting = t, this.showAllBookmakersInOddsComparison = e, this.showAllBookmakersInPrematch = s, this.showAllBookmakersInPrematchLive = _
                }
                getAllowHighlighting() {
                    return this.allowHighlighting
                }
                getShowAllBookmakersInOddsComparison() {
                    return this.showAllBookmakersInOddsComparison
                }
                getShowAllBookmakersInPrematch() {
                    return this.showAllBookmakersInPrematch
                }
                getShowAllBookmakersInPrematchLive() {
                    return this.showAllBookmakersInPrematchLive
                }
            }
            class c {
                constructor() {
                    this.allowHighlighting = !0, this.showAllBookmakersInOddsComparison = !0, this.showAllBookmakersInPrematch = !1, this.showAllBookmakersInPrematchLive = !1
                }
                setAllowHighlighting(t) {
                    return this.allowHighlighting = t, this
                }
                setShowAllBookmakersInOddsComparison(t) {
                    return this.showAllBookmakersInOddsComparison = t, this
                }
                setShowAllBookmakersInPrematch(t) {
                    return this.showAllBookmakersInPrematch = t, this
                }
                setShowAllBookmakersInPrematchLive(t) {
                    return this.showAllBookmakersInPrematchLive = t, this
                }
                build() {
                    return new D(this.allowHighlighting, this.showAllBookmakersInOddsComparison, this.showAllBookmakersInPrematch, this.showAllBookmakersInPrematchLive)
                }
            }
            var u = s(2),
                d = s(57);
            class R extends _.a {
                constructor() {
                    super(...arguments), this.tabBuilder = null, this.tabContent = null, this.subTabBuilder = null, this.subTabContent = null, this.table = null, this.tableHeader = null, this.tableRow = null, this.handicapValue = null, this.handicapTypeId = null, this.newRowStarted = !1
                }
                endLastTab() {
                    this.endLastSubTab(), this.tabBuilder && (this.tabsBuilder.addTab(this.tabBuilder.build()), this.tabBuilder = null), this.tabContent && (this.tabsBuilder.addSubTabOrContent(this.tabContent.build()), this.tabContent = null)
                }
                startNewTab() {
                    this.tabBuilder = new o, this.tabContent = new r.b
                }
                endLastSubTab() {
                    this.endLastTable(), this.tabContent && this.subTabContent && this.subTabBuilder && (this.tabContent.addSubTabOrContent(this.subTabContent).addTab(this.subTabBuilder.build()), this.subTabBuilder = null, this.subTabContent = null)
                }
                startNewSubTab() {
                    this.subTabBuilder = new S, this.subTabContent = []
                }
                endLastTable() {
                    this.endLastTableRow(), this.table && this.tableHeader && (this.table.setHeader(this.tableHeader.build()), this.tableHeader = null), this.subTabContent && this.table && (this.subTabContent.push(this.table.build()), this.table = null), this.handicapValue = null, this.handicapTypeId = null
                }
                startNewTable() {
                    this.table = new T, this.tableHeader = new l
                }
                endLastTableRow() {
                    this.table && this.tableRow && (this.table.addRow(this.tableRow.build()), this.tableRow = null)
                }
                startNewTableRow() {
                    this.subTabBuilder && this.subTabBuilder.incrementRowCount(), this.tableRow = (new N).setHandicapValue(this.handicapValue).setHandicapTypeId(this.handicapTypeId)
                }
                startFeed() {
                    this.tabsBuilder = new r.b, this.settingsBuilder = new c
                }
                startRow() {
                    this.newRowStarted = !0
                }
                parse(t, e) {
                    var s, _, E, i, r, a, n, o, S, I, T, A, l, h, N, D, c, d, R, O, L, g;
                    if (this.newRowStarted) {
                        switch (t) {
                            case u.a.ODDSINDEXES_BETTING_TYPE:
                            case u.a.ODDSINDEXES_BETTING_TYPE_URL:
                            case u.a.ODDSINDEXES_SELECTED_BETTING_TYPE:
                                this.endLastTab(), this.startNewTab();
                                break;
                            case u.a.ODDSINDEXES_ODDS_SCOPE:
                            case u.a.ODDSINDEXES_ODDS_SCOPE_URL:
                            case u.a.ODDSINDEXES_SELECTED_ODDS_SCOPE:
                                this.endLastSubTab(), this.startNewSubTab();
                                break;
                            case u.a.ODDSINDEXES_ODDS_GROUP_TITLE:
                            case u.a.ODDSINDEXES_ODDS_GROUP_VALUE:
                            case u.a.ODDSINDEXES_ODDS_LABEL_1:
                            case u.a.ODDSINDEXES_ODDS_LABEL_2:
                            case u.a.ODDSINDEXES_ODDS_LABEL_3:
                                this.endLastTable(), this.startNewTable();
                                break;
                            case u.a.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_ID:
                            case u.a.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_IMAGE_URL:
                            case u.a.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_SHOW_TEXT_NOT_LOGO:
                            case u.a.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_NAME:
                            case u.a.ODDSINDEXES_ODDS_1:
                            case u.a.ODDSINDEXES_ODDS_0:
                            case u.a.ODDSINDEXES_ODDS_2:
                            case u.a.ODDSINDEXES_ODDS_AVAILABLE:
                                this.endLastTableRow(), this.startNewTableRow()
                        }
                        this.newRowStarted = !1
                    }
                    switch (t) {
                        case u.a.ODDSINDEXES_BETTING_TYPE:
                            null === (s = this.tabBuilder) || void 0 === s || s.setName(this.getString(e)), null === (_ = this.tabBuilder) || void 0 === _ || _.setTitle(this.getString(e));
                            break;
                        case u.a.ODDSINDEXES_SELECTED_BETTING_TYPE:
                            null === (E = this.tabBuilder) || void 0 === E || E.setSelected(this.getBooleanValueOf(e));
                            break;
                        case u.a.ODDSINDEXES_BETTING_TYPE_URL:
                            null === (i = this.tabBuilder) || void 0 === i || i.setUrl(this.getString(e));
                            break;
                        case u.a.ODDSINDEXES_BETTING_TYPE_ID:
                            this.setTabTitleAndUrl(e);
                            break;
                        case u.a.ODDSINDEXES_ODDS_SCOPE:
                            null === (r = this.subTabBuilder) || void 0 === r || r.setName(this.getString(e)), null === (a = this.subTabBuilder) || void 0 === a || a.setTitle(this.getString(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_SCOPE_URL:
                            null === (n = this.subTabBuilder) || void 0 === n || n.setUrl(this.getString(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_SCOPE_ID:
                            this.setSubTabUrl(e);
                            break;
                        case u.a.ODDSINDEXES_SELECTED_ODDS_SCOPE:
                            null === (o = this.subTabBuilder) || void 0 === o || o.setSelected(this.getBooleanValueOf(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_GROUP_VALUE:
                            this.handicapValue = this.getString(e);
                            break;
                        case u.a.ODDSINDEXES_HANDICAP:
                            this.handicapTypeId = this.getNumberValueOf(e);
                            break;
                        case u.a.ODDSINDEXES_ODDS_GROUP_TITLE:
                            null === (S = this.tableHeader) || void 0 === S || S.setHandicap(this.getString(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_LABEL_1:
                            null === (I = this.tableHeader) || void 0 === I || I.setLabel1(this.getString(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_LABEL_2:
                            null === (T = this.tableHeader) || void 0 === T || T.setLabel2(this.getString(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_LABEL_3:
                            null === (A = this.tableHeader) || void 0 === A || A.setLabel3(this.getString(e));
                            break;
                        case u.a.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_ID:
                            null === (l = this.tableRow) || void 0 === l || l.setBookmakerId(this.getNumberValueOf(e));
                            break;
                        case u.a.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_IMAGE_URL:
                            null === (h = this.tableRow) || void 0 === h || h.setBookmakerImageUrl(this.getString(e));
                            break;
                        case u.a.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_SHOW_TEXT_NOT_LOGO:
                            null === (N = this.tableRow) || void 0 === N || N.setShowTextInsteadOfLogo(this.getBooleanValueOf(e));
                            break;
                        case u.a.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_NAME:
                            null === (D = this.tableRow) || void 0 === D || D.setBookmakerName(this.getString(e));
                            break;
                        case u.a.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_IS_PREMIUM:
                            null === (c = this.tableRow) || void 0 === c || c.setBookmakerIsPremium(this.getBooleanValueOf(e));
                            break;
                        case u.a.ODDSINDEXES_LIVE_ODDS_ACTIVE:
                            null === (d = this.tableRow) || void 0 === d || d.setHasLiveOdds(this.getBooleanValueOf(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_1:
                            null === (R = this.tableRow) || void 0 === R || R.setOddValue1(this.getArrowAndValue(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_0:
                            null === (O = this.tableRow) || void 0 === O || O.setOddValue2(this.getArrowAndValue(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_2:
                            null === (L = this.tableRow) || void 0 === L || L.setOddValue3(this.getArrowAndValue(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_AVAILABLE:
                            null === (g = this.tableRow) || void 0 === g || g.setOddsAvailable(this.getBooleanValueOf(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_SETTINGS_ALLOW_ODD_HIGHLIGHTING:
                            this.settingsBuilder.setAllowHighlighting(this.getBooleanValueOf(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_SETTINGS_SHOW_ALL_BOOKMAKERS_COMPARISON:
                            this.settingsBuilder.setShowAllBookmakersInOddsComparison(this.getBooleanValueOf(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_SETTINGS_SHOW_ALL_BOOKMAKERS_PREMATCH:
                            this.settingsBuilder.setShowAllBookmakersInPrematch(this.getBooleanValueOf(e));
                            break;
                        case u.a.ODDSINDEXES_ODDS_SETTINGS_SHOW_ALL_BOOKMAKERS_PREMATCH_LIVE:
                            this.settingsBuilder.setShowAllBookmakersInPrematchLive(this.getBooleanValueOf(e))
                    }
                }
                setTabTitleAndUrl(t) {}
                setSubTabUrl(t) {}
                getArrowAndValue(t) {
                    const e = /[u,d]/.exec(t),
                        s = e && e[0];
                    if (s) {
                        const [e, _] = t.split(/\[[u,d]\]/), E = this.getFloatValueOf(_), i = this.getFloatValueOf(e);
                        return new d.b(isNaN(E) ? _ : E, isNaN(i) ? e : i, s)
                    } {
                        const e = this.getFloatValueOf(t);
                        return new d.b(isNaN(e) ? t : e, null, s)
                    }
                }
                endFeed() {
                    this.endLastTab()
                }
                getParsedModel() {
                    return (new i).setOdds(this.tabsBuilder.build()).setOddsSettings(this.settingsBuilder.build()).build()
                }
            }
        },
        12: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })),
                function(t) {
                    t[t.HOME = 0] = "HOME", t[t.AWAY = 1] = "AWAY"
                }(_ || (_ = {}))
        },
        121: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })),
                function(t) {
                    t.SIDE = "side", t[t.TEAM = 1] = "TEAM", t[t.PLAYER = 2] = "PLAYER", t[t.HOME = 3] = "HOME", t[t.AWAY = 4] = "AWAY", t[t.PAIR_1 = 5] = "PAIR_1", t[t.PAIR_2 = 6] = "PAIR_2", t[t.PLAYER_1 = 7] = "PLAYER_1", t[t.PLAYER_2 = 8] = "PLAYER_2", t[t.TEAM_1 = 9] = "TEAM_1", t[t.TEAM_2 = 10] = "TEAM_2", t[t.GOALKEEPER = 12] = "GOALKEEPER", t[t.DEFENDER = 13] = "DEFENDER", t[t.MIDFIELDER = 14] = "MIDFIELDER", t[t.FORWARD = 15] = "FORWARD", t[t.CLUB = 16] = "CLUB", t[t.NATIONAL = 17] = "NATIONAL", t[t.COACH = 27] = "COACH", t[t.HORSE = 28] = "HORSE", t[t.DUMMY_PLAYER_2 = 100] = "DUMMY_PLAYER_2", t[t.DUMMY_PLAYER_3 = 101] = "DUMMY_PLAYER_3", t[t.DUMMY_PLAYER_4 = 102] = "DUMMY_PLAYER_4", t.HOME_SIDE = "home", t.AWAY_SIDE = "away"
                }(_ || (_ = {}))
        },
        124: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return E
            }));
            var _ = s(5);
            class E {
                getOutcome(t, e) {
                    return t.match(/o_1|o_AH1|o_ML1|o_OU1|o_winner|o_each_way/) ? "1" : t.match(/o_0/) ? "x" : t.match(/o_2|o_ML2|o_AH2|o_OU2|o_top_3|o_top_5/) ? "2" : t.match(/o_top_6/) ? "3" : t.match(/o_top_10/) ? e === _.a.GOLF ? "3" : "4" : t.match(/o_top_20/) ? "4" : null
                }
            }
        },
        129: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return S
            }));
            class _ {
                constructor(t) {
                    this._cells = t
                }
                getCells() {
                    return this._cells
                }
                getDataForTemplate() {
                    return this._cells.map(t => t.getDataForTemplate())
                }
            }
            class E {
                constructor() {
                    this._cells = []
                }
                addCell(t) {
                    return this._cells.push(t), this
                }
                build() {
                    return new _(this._cells)
                }
            }
            class i {
                constructor(t) {
                    this._cells = [], this._rows = [], this._maxRowSize = 1, t && t > 1 && (this._maxRowSize = t)
                }
                addCell(t) {
                    return this._cells.push(t), this
                }
                build() {
                    let t = 0,
                        e = new E;
                    for (const s of this._cells) e.addCell(s), t++, t >= this._maxRowSize && (this._rows.push(e.build()), e = new E, t = 0);
                    return t > 0 && this._rows.push(e.build()), this._rows
                }
            }
            class r {
                constructor(t, e, s, _, E, i, r, a, n, o, S, I) {
                    this._formatter = t, this._emptyCellChar = s, this._live = _, this._value = E, this._previousValue = i, this._active = r, this._movement = a, this._wrappedClasses = n, this._label = o, this._outputOddFormat = e, this._bookmakerId = S, this._handicap = I
                }
                getEmptyCellChar() {
                    return this._emptyCellChar
                }
                isLive() {
                    return this._live
                }
                getValue(t = !0) {
                    return t && this._value != this.getEmptyCellChar() ? (this._formatter.setOddsFormatByName(this._outputOddFormat), String(this._formatter.formatOdd(this._value))) : this._value
                }
                getPreviousValue(t = !0) {
                    return t && this._previousValue != this.getEmptyCellChar() ? (this._formatter.setOddsFormatByName(this._outputOddFormat), String(this._formatter.formatOdd(this._previousValue))) : this._previousValue
                }
                isActive() {
                    return this._active
                }
                getMovement() {
                    return this._movement
                }
                getWrappedClasses() {
                    return this._wrappedClasses
                }
                _formatToAlt(t = !0) {
                    let e = "";
                    return this.hasPreviousValue() && this.hasValue() && this.hasMovement() && (e = this.getPreviousValue(t) + "[" + this.getMovement().charAt(0) + "]" + this.getValue(t)), e
                }
                getAltText() {
                    return this._formatToAlt()
                }
                getContentClasses() {
                    const t = ["odds-wrap"];
                    return this.hasMovement() && this.hasValue() && t.push(this.getMovement()), this.isActive() || t.push("not-published"), t
                }
                _checkOddCellValue(t) {
                    return t !== this.getEmptyCellChar() && t.toString().length > 0
                }
                hasValue() {
                    return this._checkOddCellValue(this._value)
                }
                hasPreviousValue() {
                    return this._checkOddCellValue(this._previousValue)
                }
                hasMovement() {
                    return "" !== this._movement
                }
                getEuValue() {
                    const t = this._formatToAlt(!1);
                    return "" == t ? this.getValue(!1) : t
                }
                getLabel() {
                    return this._label
                }
                getBookmakerId() {
                    return this._bookmakerId
                }
                getHandicap() {
                    return this._handicap
                }
                getDataForTemplate() {
                    return {
                        alt_text: this.getAltText(),
                        content_class: this.getContentClasses().join(" "),
                        eu_value: this.getEuValue(),
                        odds_type: this.getLabel(),
                        hasValue: this.hasValue(),
                        value: this.getValue(),
                        wrapper_class: this.getWrappedClasses().join(" "),
                        bookmakerId: this.getBookmakerId(),
                        label: this.getLabel(),
                        handicap: this.getHandicap()
                    }
                }
            }
            class a {
                constructor(t) {
                    this._live = !1, this._active = !1, this._movement = "", this._wrappedClasses = [], this._label = "", this._emptyCellChar = "-", this._outputOddsFormat = "eu", this._formatter = t
                }
                setBookmakerId(t) {
                    return this._bookmakerId = t, this
                }
                setLive(t) {
                    return this._live = t, this
                }
                setValue(t) {
                    return this._value = t, this
                }
                setPreviousValue(t) {
                    return this._previousValue = t, this
                }
                setActive(t) {
                    return this._active = t, this
                }
                setMovement(t) {
                    return this._movement = t, this
                }
                setWrappedClasses(t) {
                    return this._wrappedClasses = t, this
                }
                addWrappedClass(t) {
                    return this._wrappedClasses.push(t), this
                }
                setLabel(t) {
                    return this._label = t, this
                }
                setEmptyCellChar(t) {
                    return this._emptyCellChar = t, this
                }
                setOutputOddFormat(t) {
                    return this._outputOddsFormat = t, this
                }
                setHandicap(t) {
                    return this._handicap = t, this
                }
                _prepare() {
                    void 0 === this._value && (this._value = this._emptyCellChar), void 0 === this._previousValue && (this._previousValue = this._emptyCellChar)
                }
                build() {
                    return this._prepare(), new r(this._formatter, this._outputOddsFormat, this._emptyCellChar, this._live, this._value, this._previousValue, this._active, this._movement, this._wrappedClasses, this._label, this._bookmakerId, this._handicap)
                }
            }
            var n = s(83);
            class o {
                constructor(t, e, s, _, E, i, r, a) {
                    this._bookmaker = t, this._rows = e, this._oddsSetup = s, this._handicap = _, this._bookmakerLinkHtml = E, this._bookmakerLinkData = i, this._clickable = r, this._gaTracking = a
                }
                getRows() {
                    return this._rows
                }
                getBookmaker() {
                    return this._bookmaker
                }
                getDataForTemplate() {
                    return {
                        bookmakerName: this.getBookmaker().getName(),
                        bookmakerId: this.getBookmaker().getId(),
                        tableType: this._oddsSetup.getTableType(),
                        countOfRows: this._rows.length,
                        defaultColumnWidth: this._oddsSetup.getDefaultColumnWidth(),
                        isBettingType_ASIAN_HANDICAP: this._oddsSetup.hasBettingTypeAsianHandicap(),
                        isNotBettingType_HOME_AWAY_DRAW_NO_BET: this._oddsSetup.isNotBettingTypeHomeAwayDrawNobet(),
                        isBettingType_TWP: this._oddsSetup.isBettingTypeTWP(),
                        oddsCells: this.getRows().map(t => t.getDataForTemplate()),
                        mainBookmakerLinkHtml: this.getBookmakerLinkHtml(),
                        mainBookmakerLinkData: this.getBookmakerLinkData(),
                        handicap: this._handicap,
                        isClickable: this.isClickable(),
                        GAeventTracking: this.isGATrackingEnabled()
                    }
                }
                getBookmakerLinkHtml() {
                    return this._bookmakerLinkHtml
                }
                getBookmakerLinkData() {
                    return this._bookmakerLinkData
                }
                isClickable() {
                    return this._clickable
                }
                isGATrackingEnabled() {
                    return this._gaTracking
                }
            }
            class S {
                constructor(t) {
                    this._movements = [], this._oddsActive = [], this._oddsValues = [], this._previousOddsValues = [], this._wrappedClasses = [], this._live = !1, this._bookmaker = new n.a(0, ""), this._bookmakerLinkHtml = "", this._clickable = !1, this._gaTracking = !1, this._outputOddFormat = "eu", this._imageUrl = "", this._liveInOfferActive = !1, this._liveInOfferName = "", this._showTextInsteadOfLogo = !1, this._bonusId = 0, this._handicap = 0, this._handicapType = null, this._formatter = t
                }
                setMovementsData(t) {
                    return this._movements = t, this
                }
                setOddsActiveData(t) {
                    return this._oddsActive = t, this
                }
                setOddsValuesData(t) {
                    return this._oddsValues = t, this
                }
                setPreviousOddsValuesData(t) {
                    return this._previousOddsValues = t, this
                }
                setWrappedClassesData(t) {
                    return this._wrappedClasses = t, this
                }
                setLive(t) {
                    return this._live = t, this
                }
                setBookmaker(t) {
                    return this._bookmaker = t, this
                }
                setOddsSetup(t) {
                    return this._oddsSetup = t, this
                }
                setBookmakerLinkHtml(t) {
                    return this._bookmakerLinkHtml = t, this
                }
                setClickable(t) {
                    return this._clickable = t, this
                }
                setGaTracking(t) {
                    return this._gaTracking = t, this
                }
                setOutputOddFormat(t) {
                    return this._outputOddFormat = t, this
                }
                setImageUrl(t) {
                    return this._imageUrl = t, this
                }
                setLiveInOfferActive(t) {
                    return this._liveInOfferActive = t, this
                }
                setLiveInOfferName(t) {
                    return this._liveInOfferName = t, this
                }
                setShowTextInsteadOfLogo(t) {
                    return this._showTextInsteadOfLogo = t, this
                }
                setBonusId(t) {
                    return this._bonusId = t, this
                }
                setHandicap(t) {
                    return this._handicap = t, this
                }
                setHandicapType(t) {
                    return this._handicapType = t, this
                }
                _composeHandicap() {
                    return {
                        type: this._handicapType,
                        value: this._handicap,
                        spread: this._oddsSetup.getSpreadName()
                    }
                }
                build() {
                    const t = new i(this._oddsSetup.getRowSize()),
                        e = this._composeHandicap();
                    for (const s in this._oddsValues) t.addCell(new a(this._formatter).setBookmakerId(this._bookmaker.getId()).setValue(this._oddsValues[s]).setPreviousValue(this._previousOddsValues[s]).setActive(this._oddsActive[s]).setMovement(this._movements[s]).addWrappedClass(this._wrappedClasses[s]).setLive(this._live).setLabel(this._oddsSetup.getOddsCellNameByIndex(parseInt(s))).setOutputOddFormat(this._outputOddFormat).setHandicap(e).build());
                    const s = {
                        imageUrl: this._imageUrl,
                        liveInOfferActive: this._liveInOfferActive,
                        liveInOfferName: this._liveInOfferName,
                        showTextInsteadOfLogo: this._showTextInsteadOfLogo,
                        bonusId: this._bonusId
                    };
                    return new o(this._bookmaker, t.build(), this._oddsSetup, e, this._bookmakerLinkHtml, s, this._clickable, this._gaTracking)
                }
            }
        },
        134: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return i
            }));
            var _ = s(109),
                E = s(60);
            class i {
                createConfig() {
                    return cjs.Api.config
                }
                createCjsConfig() {
                    return cjs.cfg
                }
                createEnviroment() {
                    return cjs.dic.get("util_enviroment")
                }
                createTrans() {
                    return cjs.dic.get("util_trans")
                }
                createDate() {
                    return cjs.dic.get("util_date")
                }
                createUrl() {
                    return cjs.dic.get("util_url")
                }
                createSport() {
                    return cjs.dic.get("util_sport")
                }
                createUtilPage() {
                    return cjs.dic.get("util_page")
                }
                createClientStorage() {
                    return cjs.dic.get("ClientStorage")
                }
                createString() {
                    return cjs.dic.get("util_string")
                }
                createApplication() {
                    return cjs.dic.get("Application")
                }
                createNavigation() {
                    return cjs.dic.get("list_navigation")
                }
                createDicProxy() {
                    return cjs.dic.get("DicProxy")
                }
                createFeedFetcher() {
                    return new E.a(cjs.Api.config.get("app", "feed_sign"), window.cjs.dic.get("Fetch_Proxy").fetch(), "")
                }
                createFeedNameComposer() {
                    return new _.a("", cjs.Api.config.get("app", "lang", "web"), cjs.Api.config.get("app", "project_type", "id"), null, window.cjs.Api.timezone)
                }
            }
        },
        137: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })), s.d(e, "b", (function() {
                    return E
                })),
                function(t) {
                    t.OVER = "over", t.OVER_SELF_PROMO = "over_self_promo", t.UNDER = "under", t.DETAIL = "detail", t.STANDINGS = "standings"
                }(_ || (_ = {}));
            class E {
                constructor(t, e) {
                    this._PARENT_ID_BOX_OVER_IFRAME = "box-over-content-a", this._SELECTOR_BOX_OVER_IFRAME = "#box-over-content-a .boxOverContent", this._SELECTOR_BOX_OVER_IFRAME_SELF_PROMO = "#box-over-content-b .boxOverContent", this._PARENT_ID_BOX_OVER_IFRAME_SELF_PROMO = "box-over-content-b", this._SELECTOR_BOX_UNDER_IFRAME = "#box-under-content-wrapper .boxOverContent", this._PARENT_ID_UNDER_IFRAME = "box-under-content-wrapper", this._PARENT_ID_BOX_DETAIL = "box-over-content-detail", this._SELECTOR_BOX_DETAIL = "#box-over-content-detail .boxOverContent", this._PARENT_ID_BOX_STANDINGS = "box-over-content-standings", this._SELECTOR_BOX_STANDINGS = "#box-over-content-standings .boxOverContent", this._DEFAULT_GEOIP = "default", this._IS_STICKY = "isSticky", this._IS_MOBILE_STICKY = "isMobileSticky", this._supportedGeoIPGroups = [], this._clientStorage = t, this._isMobile = e
                }
                _filterByGeoIP(t, e) {
                    const s = this._isGeoIpSupported(t);
                    if (t) {
                        const _ = this._hasSpecificBoxByGeoIP(t, e),
                            E = this._getSelector(e);
                        let i;
                        const r = document.querySelectorAll(E);
                        for (const e in r) {
                            i = r[e];
                            const E = this._getGeoIPFromBox(i),
                                a = this._showDefaultGeoIPBox(E, _) && !s;
                            i instanceof HTMLDivElement && E && !a && E !== t && i.remove()
                        }
                    }
                }
                setSupportedGeoIPGroups(t) {
                    return this._supportedGeoIPGroups = t, this
                }
                _showOneBoxByType(t) {
                    const e = this._getSelector(t);
                    let s = document.querySelectorAll(e);
                    s.forEach(t => {
                        const e = t.id;
                        t instanceof HTMLDivElement && this._isClosedByUser(e) && t.remove()
                    }), s = document.querySelectorAll(e);
                    const _ = document.getElementById(this._getSelector(t, !0));
                    if (s.length && _) {
                        const t = Math.floor(Math.random() * s.length);
                        s.forEach((e, s) => {
                            e instanceof HTMLDivElement && t !== s && e.remove()
                        });
                        const e = s[t];
                        if (e.classList.add("boxOverContent--active"), e.classList.contains(this._IS_STICKY) && !_.classList.contains(this._IS_STICKY) ? _.classList.add(this._IS_STICKY) : !e.classList.contains(this._IS_STICKY) && _.classList.contains(this._IS_STICKY) && _.classList.remove(this._IS_STICKY), e.classList.contains(this._IS_MOBILE_STICKY) && !_.classList.contains(this._IS_MOBILE_STICKY) ? _.classList.add(this._IS_MOBILE_STICKY) : !e.classList.contains(this._IS_MOBILE_STICKY) && _.classList.contains(this._IS_MOBILE_STICKY) && _.classList.remove(this._IS_MOBILE_STICKY), this._isMobile) {
                            const t = e.getElementsByTagName("a");
                            Array.from(t).forEach(t => {
                                const e = this._getMobileUrl(t);
                                e && t.setAttribute("href", e)
                            })
                        }
                    }
                }
                show(t, e) {
                    e.forEach(e => {
                        this._filterByGeoIP(t, e), this._showOneBoxByType(e)
                    })
                }
                closeBox(t, e) {
                    const s = document.getElementById(t);
                    s instanceof HTMLDivElement && (s.style.display = "none", this._clientStorage.store(this._getStorageKey(t), 0, 86400 * e))
                }
                _getStorageKey(t) {
                    return "close_" + t
                }
                _isClosedByUser(t) {
                    return "0" === this._clientStorage.get(this._getStorageKey(t))
                }
                _hasSpecificBoxByGeoIP(t, e) {
                    const s = this._getSelector(e);
                    let _;
                    const E = document.querySelectorAll(s);
                    for (const e in E) {
                        if (_ = E[e], this._getGeoIPFromBox(_) === t) return !0
                    }
                    return !1
                }
                _isGeoIpSupported(t) {
                    return this._supportedGeoIPGroups.includes(t || "")
                }
                _getSelector(t, e = !1) {
                    let s = "";
                    switch (t) {
                        case _.UNDER:
                            s = e ? this._PARENT_ID_UNDER_IFRAME : this._SELECTOR_BOX_UNDER_IFRAME;
                            break;
                        case _.OVER_SELF_PROMO:
                            s = e ? this._PARENT_ID_BOX_OVER_IFRAME_SELF_PROMO : this._SELECTOR_BOX_OVER_IFRAME_SELF_PROMO;
                            break;
                        case _.OVER:
                            s = e ? this._PARENT_ID_BOX_OVER_IFRAME : this._SELECTOR_BOX_OVER_IFRAME;
                            break;
                        case _.DETAIL:
                            s = e ? this._PARENT_ID_BOX_DETAIL : this._SELECTOR_BOX_DETAIL;
                            break;
                        case _.STANDINGS:
                            s = e ? this._PARENT_ID_BOX_STANDINGS : this._SELECTOR_BOX_STANDINGS
                    }
                    return s
                }
                _showDefaultGeoIPBox(t, e) {
                    return !e && t === this._DEFAULT_GEOIP
                }
                _getGeoIPFromBox(t) {
                    return t.dataset && t.dataset.hasOwnProperty("geoip") && t.dataset.geoip || ""
                }
                _getMobileUrl(t) {
                    return t.dataset && t.dataset.hasOwnProperty("mobileUrl") ? "" + t.dataset.mobileUrl : ""
                }
            }
        },
        141: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return E
            }));
            let _ = (() => {
                class t {
                    constructor(e, s, _, E, i, r, a, n, o) {
                        this._detailId = e, this._parentId = s, this._utilTrans = r, this._tabName = _ || this._utilTrans.translate(t.URL_MATCH_SUMMARY), this._urlPrefix = E || "", this._clientStorage = i, this._width = a, this._height = n, this._isIos = o
                    }
                    openWindow(t, e) {
                        this.prepareOpen(t, e);
                        const s = `hotkeys=no, resizable=no, toolbar=no, status=no, dependent=yes, scrollbars=1, width=${this._width}, height=${this._height}`,
                            _ = t.open(this._url, this.getTarget(), s);
                        return null == _ || _.closed || _.focus(), _
                    }
                    composeUrl(t) {
                        return `${this._urlPrefix}/${t}${this._detailId}/${this._parentId?"p/":""}#${this._tabName}`.replace(/\/\//, "/")
                    }
                    prepareOpen(e, s) {
                        this._url = s.origin + this.composeUrl(this._utilTrans.translate(t.URL_MATCH_DETAIL)), this._clientStorage.drop("LS_refresh_web")
                    }
                    getTarget() {
                        return this._isIos ? "_blank" : this._detailId
                    }
                    getUrl() {
                        return this._url
                    }
                }
                return t.URL_MATCH_DETAIL = "TRANS_URL_MATCH_DETAIL", t.URL_MATCH_SUMMARY = "TRANS_DETAIL_BOOKMARK_URL_IDENT_SUMMARY", t
            })();
            class E {
                constructor() {
                    this._tabName = "", this._isIos = !1
                }
                setWidth(t) {
                    return this._width = t, this
                }
                setHeight(t) {
                    return this._height = t, this
                }
                setDetailId(t) {
                    return this._detailId = t, this
                }
                setParentId(t) {
                    return this._parentId = t, this
                }
                setTabName(t) {
                    return this._tabName = t, this
                }
                setClientStorage(t) {
                    return this._clientStorage = t, this
                }
                setUtilTrans(t) {
                    return this._utilTrans = t, this
                }
                setUrlPrefix(t) {
                    return this._urlPrefix = t, this
                }
                setIsIos(t) {
                    return this._isIos = t, this
                }
                build() {
                    return new _(this._detailId, this._parentId, this._tabName, this._urlPrefix, this._clientStorage, this._utilTrans, this._width, this._height, this._isIos)
                }
            }
        },
        15: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })),
                function(t) {
                    t[t.SCHEDULED = 1] = "SCHEDULED", t[t.LIVE = 2] = "LIVE", t[t.PAUSED = 3] = "PAUSED", t[t.FINISHED = 4] = "FINISHED", t[t.CANCELED = 5] = "CANCELED", t[t.UNAVAILABLE = 6] = "UNAVAILABLE"
                }(_ || (_ = {}))
        },
        155: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return E
            }));
            class _ {
                constructor(t, e) {
                    this._title = t, this._color = e
                }
                getTitle() {
                    return this._title
                }
                getColor() {
                    return this._color
                }
            }
            let E = (() => {
                class t {
                    constructor(e, s) {
                        this._utilEnviroment = e, this._utilTrans = s, this._feedValue = "", this._translates = {}, this._colors = {}, this._translates[t.GENERAL_LEADER] = "TRANS_CYCLING_GENERAL_LEADER", this._translates[t.POINTS_LEADER] = "TRANS_CYCLING_POINTS_LEADER", this._translates[t.MOUNTAINS_LEADER] = "TRANS_CYCLING_MOUNTAINS_LEADER", this._translates[t.YOUTH_LEADER] = "TRANS_CYCLING_YOUTH_LEADER", this._translates[t.CURRENT_WORLD_CHAMPION] = "TRANS_CYCLING_CURRENT_WORLD_CHAMPION", this._translates[t.LAST_IN_RACE] = "TRANS_CYCLING_LAST_IN_RACE", this._colors[t.YELLOW_JERSEY] = "yellow", this._colors[t.GREEN_JERSEY] = "green", this._colors[t.RED_POLKA_DOT_JERSEY] = "red-polka-dot", this._colors[t.WHITE_JERSEY] = "white", this._colors[t.PINK_JERSEY] = "pink", this._colors[t.RED_JERSEY] = "red", this._colors[t.BLUE_POLKA_DOT_JERSEY] = "blue-polka-dot", this._colors[t.BLUE_JERSEY] = "blue", this._colors[t.BLACK_JERSEY] = "black", this._colors[t.OCHRE_JERSEY] = "ochre", this._colors[t.TURQUOISE_JERSEY] = "turquoise", this._colors[t.GOLD_JERSEY] = "gold", this._colors[t.SILVER_JERSEY] = "silver", this._colors[t.RAINBOW_JERSEY] = "rainbow"
                    }
                    setFeedValue(t) {
                        this._feedValue = t
                    }
                    getItems() {
                        if ("" == this._feedValue) return [];
                        const t = this._feedValue.split(";"),
                            e = [];
                        for (const s of t) {
                            const t = s.split(","),
                                E = parseInt(t[0] || ""),
                                i = parseInt(t[1] || "");
                            let r = "",
                                a = "";
                            E && (r = this._translates[E] || ""), i && (a = this._colors[i] || ""), r && a && e.push(new _(this._utilTrans.translate(r), a))
                        }
                        return e
                    }
                    getHandlerOnMouseEnter() {
                        return t => (this._utilEnviroment.getTooltipObject().show(t.target, t, !0, "live-table"), !0)
                    }
                    getHandlerOnMouseLeave() {
                        return t => (this._utilEnviroment.getTooltipObject().hide(t.target), !0)
                    }
                }
                return t.GENERAL_LEADER = 314, t.POINTS_LEADER = 315, t.MOUNTAINS_LEADER = 316, t.YOUTH_LEADER = 317, t.CURRENT_WORLD_CHAMPION = 318, t.LAST_IN_RACE = 319, t.YELLOW_JERSEY = 76, t.GREEN_JERSEY = 77, t.RED_POLKA_DOT_JERSEY = 78, t.WHITE_JERSEY = 79, t.PINK_JERSEY = 80, t.RED_JERSEY = 81, t.BLUE_POLKA_DOT_JERSEY = 82, t.BLUE_JERSEY = 83, t.BLACK_JERSEY = 84, t.OCHRE_JERSEY = 85, t.TURQUOISE_JERSEY = 86, t.GOLD_JERSEY = 87, t.SILVER_JERSEY = 88, t.RAINBOW_JERSEY = 89, t
            })()
        },
        156: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return E
            }));
            var _ = s(112);
            class E {
                constructor(t) {
                    this._loaderHandler = t
                }
                getBookmakerSettings() {
                    return new Promise(t => {
                        this._loaderHandler.get("bookmakerSettings").call(t)
                    })
                }
                getBroadcast() {
                    return new Promise(t => {
                        this._loaderHandler.get("broadcast").call(t)
                    })
                }
                getSoundPlayer() {
                    return new Promise(t => {
                        this._loaderHandler.get("soundPlayer").call(t)
                    })
                }
                executeGamePlanLoader() {
                    this._loaderHandler.get("gamePlanInDOM").fulfill((function(t) {
                        t()
                    }))
                }
                scrollToLastPosition() {
                    this._loaderHandler.get("util/scroll").call(() => {})
                }
                getDetailOddsDataProvider(t, e, s, _) {
                    return new Promise(E => {
                        this._loaderHandler.get("detail/odds/DataProvider").call({
                            oddsSetup: t,
                            feedContent: e,
                            bookmakersWithLiveOffer: s,
                            eventStageTypeId: _
                        }, E)
                    })
                }
                getOddsComparisonFeedParser() {
                    return new _.a
                }
                getRecombee() {
                    return new Promise(t => {
                        this._loaderHandler.get("recombee").call(t)
                    })
                }
            }
        },
        159: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return a
            })), s.d(e, "b", (function() {
                return n
            }));
            var _ = s(81),
                E = s(5),
                i = s(80),
                r = s(99);
            const a = Object.freeze({
                LINEUPS: "LI",
                STATISTICS: "ST",
                COMMENTARY: "LC",
                MATCH_HISTORY: "MH",
                MATCH_HISTORY_2: "MHN",
                PLAYER_STATISTICS: "PS",
                FALL_OF_WICKETS: "FOW",
                OVERS: "OV"
            });
            class n {
                constructor(t, e, s, _, E, i, r, a, n) {
                    this.userHasPaidTvStream = !1, this._feedIndex = {
                        "": "summary",
                        OD: "odds-comparison",
                        HI: "highlights",
                        PR: "photoreport",
                        HH: "head-2-head",
                        LI: "lineups",
                        ST: "statistics",
                        PS: "player-statistics",
                        FOW: "fall-of-wickets",
                        OV: "overs",
                        MH: "match-history",
                        MHN: "match-history",
                        LC: "commentary",
                        LT: "live-table",
                        TA: "standings",
                        DR: "draw",
                        NF: "newsfeed"
                    }, this.$ = t, this._utilConfig = e, this._utilEnvironment = s, this._utilPage = _, this._utilTrans = E, this._utilSport = i, this._utilDate = r, this._tabsConfig = a, this._clickableBookmaker = n, this._clickableBookmaker.setBookmakerGeoGroupsData(s.getBookmakerGeoGroups()), this._isTrackingEvent = e.get("app", "google_analytics", "event_tracking"), this._detailVersion = e.get("app", "detail", "version"), this._afterTabShowCallbacks = [], this._list = a.getList(), this._listSport = a.getSportList()
                }
                getHtml() {
                    const t = this._utilEnvironment.getFsDetail();
                    let e = [];
                    null != t.DX && (e = t.DX.split(","), e.length > 0 && "" !== e[0] && e.unshift(""));
                    const s = [],
                        _ = this._utilEnvironment.getSport();
                    if (s.push('<div id="detail-mainmenu-bookmark" class="ifmenu-wrapper" style="position: relative;">'), s.push(this._createRow(this._list, e)), s.push('</div><div class="color-spacer"></div>'), this._hasTwoLevels() && null != this._listSport[_]) {
                        const t = this._listSport[_].getTabItemByIndex(0),
                            E = null !== t ? t.getDisplayTab() : "";
                        E && (s.push('<div id="detail-before-submenu-bookmark">'), s.push(this._createContent(E)), s.push("</div>"));
                        const i = this._utilPage.isDetailParticipantPage() ? "detail-submenu-bookmark-golf" : "detail-submenu-bookmark";
                        s.push(`<div id="detail-submenu-bookmark" class="${i}" style="display: none;"><div class="spacer-block">&nbsp;</div><div class="ifmenu-wrapper">`), s.push(this._createRow(this._listSport[_].getTabItems(), e)), s.push("</div></div>")
                    }
                    return s.join("")
                }
                _createRow(t, e) {
                    let s, _, E = "";
                    const r = [];
                    r.push('<ul class="ifmenu">');
                    let a = !1,
                        n = 0;
                    const o = [],
                        S = this._getSummaryTrans(),
                        I = this._hasHighlights(),
                        T = this._clickableBookmaker.isClickable(this._utilEnvironment.getGlobalGeoIp(), this._utilEnvironment.getGeoIpIsoSubdivisionCode0());
                    for (s of t)
                        for (const t of e)
                            if (("HI" !== t || I || this.userHasPaidTvStream) && ("OD" !== t || T) && ("PS" !== t || window.event_stage_type_id !== i.a.SCHEDULED) && null != this._feedIndex[t] && s.getName() === this._feedIndex[t]) {
                                let t = s.getTranslationKey();
                                if ("object" == typeof t) {
                                    for (const e of t)
                                        if (E = this._utilTrans.translate(e), E) break
                                } else t || (t = S), E = this._utilTrans.translate(t);
                                o.push({
                                    id: s.getId(),
                                    class: s.getClass(),
                                    name: s.getName(),
                                    title: E,
                                    openStats: s.openStats(),
                                    eventTracking: s.getEventTracking(),
                                    isNewFeature: s.isNewFeature()
                                }), n++
                            } for (_ of o) {
                        _.isNewFeature && (a = !0);
                        const t = _.openStats && 2 !== this._detailVersion,
                            e = this._isTrackingEvent && null != _.eventTracking ? _.eventTracking : null,
                            s = 1 === n;
                        r.push(this._createTab(_.id, _.class, _.name, _.title, t, _.isNewFeature, e, s))
                    }
                    return r.push("</ul>"), a && r.unshift('<div class="spacer-block">&nbsp;</div>'), r.join("")
                }
                _createContent(t) {
                    const e = [];
                    return this.$("#tab-match-" + t).length || (e.push(`<div id="tab-match-${t}">`), e.push(`<div id="${t}-preload" class="preload-panel"><div class="preload"><span>Loading ...</span></div></div>`), e.push(`<div id="${t}-content"></div>`), e.push("</div>")), e.join("")
                }
                _hasHighlights() {
                    const t = this._utilEnvironment.getFsDetail();
                    if (null == t.HR) return !1;
                    const e = new r.a([...this._utilConfig.get("app", "video_highlights", "disabled_geoip"), ...this._utilEnvironment.getDisabledVideoHighlightGeoIps()], this._utilEnvironment.getGlobalGeoIp() || ""),
                        s = e.hasHighlight(t.HR),
                        _ = e.hasHighlightInterval(this._utilDate.getTimestamp(), this._utilConfig.get("app", "video_highlights", "enable_interval"), this._utilEnvironment.getGameUTime(), this._utilEnvironment.getGameUTimeEnd());
                    return s && _
                }
                _createTab(t, e, s, E, i, r, a, n) {
                    let o, S, I;
                    const T = this._utilEnvironment.getSportId(),
                        A = this._utilEnvironment.getParticipantEncodedIds(),
                        l = this._utilEnvironment.getTournamentStageEncodedId(),
                        h = this._utilEnvironment.getTournamentEncodedId(),
                        N = this._utilEnvironment.getEventEncodedId();
                    this.getSelectedTab() == t && (e += " selected");
                    const D = null != a ? ` e_t.track_click('${a.getId()}', '${a.getName()}'); ` : "";
                    if (i) {
                        let t = ["''"];
                        if ("object" == typeof A) {
                            t = [];
                            for (const e in A) t.push(`'${A[e]}'`)
                        }
                        I = `stats_open('${h}', '${l}', ${T}, ${_.b.DRAW_IDENT}, [${t.join(",")}], '${N}');`
                    } else I = `detail_tab('${s}');`;
                    n ? (S = '<span class="single-nav"', o = "</span>") : (S = "<a", o = "</a>");
                    let c = `<li id="li-match-${t}" class="${e}"><span>${S} href="#" id="a-match-${t}" onclick="${I} ${D}return false">${E}${o}`;
                    return r && (c += `<strong class="x3"><span>${this._utilTrans.translate("TRANS_NEW_FEATURE")}</span></strong>`), c += "</span></li>", c
                }
                setAfterShowCallback(t) {
                    return this._afterTabShowCallbacks.push(t)
                }
                show() {
                    const t = this.$("#detail-bookmarks"),
                        e = [],
                        s = this.$("#detail-submenu-bookmark").is(":hidden");
                    t.find("li.selected").each((t, s) => !!e.push(this.$(s).attr("id"))), this._moveToContainer(), t.empty(), t.append(this.getHtml()), this._moveFromContainer();
                    for (const t of e) this.$("#" + t).addClass("selected");
                    if (!s) {
                        const t = this.$("#detail-submenu-bookmark");
                        t.show(), t.find("li.selected").length || t.find("li:eq(0)").addClass("selected")
                    }
                    this._afterTabShowCallbacks.map(t => t())
                }
                hasTable(t) {
                    const e = this._utilEnvironment.getFsDetail();
                    let s = [];
                    null != e.DX && (s = e.DX.split(","));
                    const _ = [];
                    for (const t of s) null != this._feedIndex[t] && _.push(this._feedIndex[t]);
                    return -1 !== this.$.inArray(t, _)
                }
                setUserHasPaidTvStream(t) {
                    this.userHasPaidTvStream = t
                }
                _getSummaryTrans() {
                    const t = this._utilEnvironment.getSportId(),
                        e = this._utilEnvironment.getFsDetail();
                    return t === E.a.GOLF ? null != e.golf_duel_national && "1" === e.golf_duel_national ? "TRANS_DETAIL_BOOKMARK_MATCH_SUMMARY" : "TRANS_DETAIL_BOOKMARK_PLAYER_CARD" : this._hasTwoLevels() ? 1 === e.AW ? "TRANS_DETAIL_BOOKMARK_LIVE_CENTRE" : "TRANS_DETAIL_BOOKMARK_MATCH" : this._utilSport.isRacingSport(t) ? "TRANS_DETAIL_BOOKMARK_PLAYER_RESULTS" : "TRANS_DETAIL_BOOKMARK_MATCH_SUMMARY"
                }
                _hasTwoLevels() {
                    const t = this._utilEnvironment.getSportId(),
                        e = this._utilEnvironment.getFsDetail();
                    if (t === E.a.GOLF && this._utilPage.isDetailParticipantPage()) return !0;
                    const s = Object.values(a);
                    if (null != e.DX) {
                        const t = e.DX.split(",");
                        for (const e of s)
                            if (t.includes(e)) return !0
                    }
                    return !1
                }
                _moveToContainer() {
                    let t = this.$("#detail-submenu-bookmark-container");
                    t.length || (t = this.$('<div id="detail-submenu-bookmark-container" style="display: none;">'), this.$("#detail-bookmarks").before(t)), this.$("#detail-before-submenu-bookmark>*").appendTo(t)
                }
                _moveFromContainer() {
                    const t = this.$("#detail-before-submenu-bookmark");
                    t.length && this.$("#detail-submenu-bookmark-container>*").appendTo(t)
                }
                getSelectedTab() {
                    return window.detail_selected_tab ? new String(window.detail_selected_tab[0]).replace(/_/g, "-") : ""
                }
            }
        },
        16: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })), s.d(e, "b", (function() {
                    return E
                })),
                function(t) {
                    t[t.SCHEDULED = 1] = "SCHEDULED", t[t.LIVE = 2] = "LIVE", t[t.FINISHED = 3] = "FINISHED", t[t.POSTPONED = 4] = "POSTPONED", t[t.CANCELED = 5] = "CANCELED", t[t.EXTRA_TIME = 6] = "EXTRA_TIME", t[t.PENALTIES = 7] = "PENALTIES", t[t.RETIRED = 8] = "RETIRED", t[t.WALKOVER = 9] = "WALKOVER", t[t.AFTER_EXTRA_TIME = 10] = "AFTER_EXTRA_TIME", t[t.AFTER_PENALTIES = 11] = "AFTER_PENALTIES", t[t.FIRST_HALF = 12] = "FIRST_HALF", t[t.SECOND_HALF = 13] = "SECOND_HALF", t[t.FIRST_PERIOD = 14] = "FIRST_PERIOD", t[t.SECOND_PERIOD = 15] = "SECOND_PERIOD", t[t.THIRD_PERIOD = 16] = "THIRD_PERIOD", t[t.FIRST_SET = 17] = "FIRST_SET", t[t.SECOND_SET = 18] = "SECOND_SET", t[t.THIRD_SET = 19] = "THIRD_SET", t[t.FOURTH_SET = 20] = "FOURTH_SET", t[t.FIFTH_SET = 21] = "FIFTH_SET", t[t.FIRST_QUARTER = 22] = "FIRST_QUARTER", t[t.SECOND_QUARTER = 23] = "SECOND_QUARTER", t[t.THIRD_QUARTER = 24] = "THIRD_QUARTER", t[t.FOURTH_QUARTER = 25] = "FOURTH_QUARTER", t[t.FIRST_INNING = 26] = "FIRST_INNING", t[t.SECOND_INNING = 27] = "SECOND_INNING", t[t.THIRD_INNING = 28] = "THIRD_INNING", t[t.FOURTH_INNING = 29] = "FOURTH_INNING", t[t.FIFTH_INNING = 30] = "FIFTH_INNING", t[t.SIXTH_INNING = 31] = "SIXTH_INNING", t[t.SEVENTH_INNING = 32] = "SEVENTH_INNING", t[t.EIGHTH_INNING = 33] = "EIGHTH_INNING", t[t.NINTH_INNING = 34] = "NINTH_INNING", t[t.EXTRA_INNING = 35] = "EXTRA_INNING", t[t.INTERRUPTED = 36] = "INTERRUPTED", t[t.ABANDONED = 37] = "ABANDONED", t[t.HALF_TIME = 38] = "HALF_TIME", t[t.TIME_OUT = 39] = "TIME_OUT", t[t.FIRST_EXTRA_TIME = 40] = "FIRST_EXTRA_TIME", t[t.SECOND_EXTRA_TIME = 41] = "SECOND_EXTRA_TIME", t[t.PENDING = 42] = "PENDING", t[t.DELAYED = 43] = "DELAYED", t[t.SUSPENDED = 44] = "SUSPENDED", t[t.TO_FINISH = 45] = "TO_FINISH", t[t.PAUSE = 46] = "PAUSE", t[t.FIRST_SET_TIEBREAK = 47] = "FIRST_SET_TIEBREAK", t[t.SECOND_SET_TIEBREAK = 48] = "SECOND_SET_TIEBREAK", t[t.THIRD_SET_TIEBREAK = 49] = "THIRD_SET_TIEBREAK", t[t.FOURTH_SET_TIEBREAK = 50] = "FOURTH_SET_TIEBREAK", t[t.FIFTH_SET_TIEBREAK = 51] = "FIFTH_SET_TIEBREAK", t[t.GAME = 52] = "GAME", t[t.SECOND_PLACE = 53] = "SECOND_PLACE", t[t.AWARDED = 54] = "AWARDED", t[t.SIXTH_SET = 55] = "SIXTH_SET", t[t.SEVENTH_SET = 56] = "SEVENTH_SET", t[t.AFTER_DAY1 = 57] = "AFTER_DAY1", t[t.AFTER_DAY2 = 58] = "AFTER_DAY2", t[t.AFTER_DAY3 = 59] = "AFTER_DAY3", t[t.AFTER_DAY4 = 60] = "AFTER_DAY4", t[t.AFTER_DAY5 = 61] = "AFTER_DAY5", t[t.AFTER_DAY6 = 257] = "AFTER_DAY6", t[t.AFTER_DAY7 = 258] = "AFTER_DAY7", t[t.AFTER_DAY8 = 259] = "AFTER_DAY8", t[t.AFTER_DAY9 = 260] = "AFTER_DAY9", t[t.AFTER_DAY10 = 261] = "AFTER_DAY10", t[t.AFTER_ROUND1 = 62] = "AFTER_ROUND1", t[t.AFTER_ROUND2 = 63] = "AFTER_ROUND2", t[t.AFTER_ROUND3 = 64] = "AFTER_ROUND3", t[t.FIRST_ROUND = 65] = "FIRST_ROUND", t[t.SECOND_ROUND = 66] = "SECOND_ROUND", t[t.THIRD_ROUND = 67] = "THIRD_ROUND", t[t.FOURTH_ROUND = 68] = "FOURTH_ROUND", t[t.AFTER_EXTRA_INNING = 69] = "AFTER_EXTRA_INNING", t[t.PRACTICE = 70] = "PRACTICE", t[t.QUALIFICATION = 71] = "QUALIFICATION", t[t.WARM_UP = 72] = "WARM_UP", t[t.WARM_UP_2 = 234] = "WARM_UP_2", t[t.WARM_UP_1 = 235] = "WARM_UP_1", t[t.RACE = 73] = "RACE", t[t.MAIN = 74] = "MAIN", t[t.PLAY_OFFS = 75] = "PLAY_OFFS", t[t.PRACTICE_1 = 76] = "PRACTICE_1", t[t.PRACTICE_2 = 77] = "PRACTICE_2", t[t.PRACTICE_3 = 78] = "PRACTICE_3", t[t.PRACTICE_4 = 79] = "PRACTICE_4", t[t.PRACTICE_5 = 80] = "PRACTICE_5", t[t.PRACTICE_6 = 81] = "PRACTICE_6", t[t.PRACTICE_7 = 82] = "PRACTICE_7", t[t.PRACTICE_8 = 229] = "PRACTICE_8", t[t.PRACTICE_9 = 236] = "PRACTICE_9", t[t.QUALIFICATION_FIRST_STAGE = 83] = "QUALIFICATION_FIRST_STAGE", t[t.QUALIFICATION_SECOND_STAGE = 84] = "QUALIFICATION_SECOND_STAGE", t[t.QUALIFICATION_THIRD_STAGE = 85] = "QUALIFICATION_THIRD_STAGE", t[t.QUALIFICATION_1 = 86] = "QUALIFICATION_1", t[t.QUALIFICATION_2 = 87] = "QUALIFICATION_2", t[t.QUALIFICATION_3 = 88] = "QUALIFICATION_3", t[t.QUALIFICATION_4 = 243] = "QUALIFICATION_4", t[t.QUALIFICATION_5 = 244] = "QUALIFICATION_5", t[t.RACE_1 = 89] = "RACE_1", t[t.RACE_2 = 90] = "RACE_2", t[t.RACE_3 = 207] = "RACE_3", t[t.RACE_4 = 208] = "RACE_4", t[t.RACE_5 = 209] = "RACE_5", t[t.RACE_6 = 210] = "RACE_6", t[t.RACE_7 = 211] = "RACE_7", t[t.RACE_8 = 212] = "RACE_8", t[t.RACE_9 = 213] = "RACE_9", t[t.RACE_10 = 214] = "RACE_10", t[t.RACE_11 = 215] = "RACE_11", t[t.RACE_12 = 216] = "RACE_12", t[t.RACE_13 = 217] = "RACE_13", t[t.RACE_14 = 218] = "RACE_14", t[t.RACE_15 = 219] = "RACE_15", t[t.RACE_16 = 237] = "RACE_16", t[t.RACE_17 = 238] = "RACE_17", t[t.RACE_18 = 239] = "RACE_18", t[t.TESTING = 91] = "TESTING", t[t.SPECIAL_STAGE_1 = 92] = "SPECIAL_STAGE_1", t[t.SPECIAL_STAGE_2 = 93] = "SPECIAL_STAGE_2", t[t.SPECIAL_STAGE_3 = 94] = "SPECIAL_STAGE_3", t[t.SPECIAL_STAGE_4 = 95] = "SPECIAL_STAGE_4", t[t.SPECIAL_STAGE_5 = 96] = "SPECIAL_STAGE_5", t[t.SPECIAL_STAGE_6 = 97] = "SPECIAL_STAGE_6", t[t.SPECIAL_STAGE_7 = 99] = "SPECIAL_STAGE_7", t[t.SPECIAL_STAGE_8 = 100] = "SPECIAL_STAGE_8", t[t.SPECIAL_STAGE_9 = 101] = "SPECIAL_STAGE_9", t[t.SPECIAL_STAGE_10 = 102] = "SPECIAL_STAGE_10", t[t.SPECIAL_STAGE_11 = 103] = "SPECIAL_STAGE_11", t[t.SPECIAL_STAGE_12 = 104] = "SPECIAL_STAGE_12", t[t.SPECIAL_STAGE_13 = 105] = "SPECIAL_STAGE_13", t[t.SPECIAL_STAGE_14 = 106] = "SPECIAL_STAGE_14", t[t.SPECIAL_STAGE_15 = 107] = "SPECIAL_STAGE_15", t[t.SPECIAL_STAGE_16 = 108] = "SPECIAL_STAGE_16", t[t.SPECIAL_STAGE_17 = 109] = "SPECIAL_STAGE_17", t[t.SPECIAL_STAGE_18 = 110] = "SPECIAL_STAGE_18", t[t.SPECIAL_STAGE_19 = 111] = "SPECIAL_STAGE_19", t[t.SPECIAL_STAGE_20 = 112] = "SPECIAL_STAGE_20", t[t.SPECIAL_STAGE_21 = 113] = "SPECIAL_STAGE_21", t[t.SPECIAL_STAGE_22 = 114] = "SPECIAL_STAGE_22", t[t.SPECIAL_STAGE_23 = 115] = "SPECIAL_STAGE_23", t[t.SPECIAL_STAGE_24 = 116] = "SPECIAL_STAGE_24", t[t.SPECIAL_STAGE_25 = 117] = "SPECIAL_STAGE_25", t[t.SPECIAL_STAGE_26 = 118] = "SPECIAL_STAGE_26", t[t.HEAT_1 = 119] = "HEAT_1", t[t.HEAT_2 = 120] = "HEAT_2", t[t.HEAT_3 = 121] = "HEAT_3", t[t.HEAT_4 = 122] = "HEAT_4", t[t.HEAT_5 = 123] = "HEAT_5", t[t.HEAT_6 = 124] = "HEAT_6", t[t.HEAT_7 = 125] = "HEAT_7", t[t.HEAT_8 = 126] = "HEAT_8", t[t.HEAT_9 = 127] = "HEAT_9", t[t.HEAT_10 = 128] = "HEAT_10", t[t.HEAT_11 = 129] = "HEAT_11", t[t.HEAT_12 = 130] = "HEAT_12", t[t.HEAT_13 = 131] = "HEAT_13", t[t.HEAT_14 = 132] = "HEAT_14", t[t.HEAT_15 = 133] = "HEAT_15", t[t.HEAT_16 = 134] = "HEAT_16", t[t.HEAT_17 = 135] = "HEAT_17", t[t.HEAT_18 = 136] = "HEAT_18", t[t.HEAT_19 = 137] = "HEAT_19", t[t.HEAT_20 = 138] = "HEAT_20", t[t.HEAT_21 = 139] = "HEAT_21", t[t.HEAT_22 = 140] = "HEAT_22", t[t.HEAT_23 = 141] = "HEAT_23", t[t.HEAT_24 = 142] = "HEAT_24", t[t.HEAT_25 = 143] = "HEAT_25", t[t.TEST_DAY_1 = 144] = "TEST_DAY_1", t[t.TEST_DAY_2 = 145] = "TEST_DAY_2", t[t.TEST_DAY_3 = 146] = "TEST_DAY_3", t[t.TEST_DAY_4 = 147] = "TEST_DAY_4", t[t.TEST_DAY_5 = 148] = "TEST_DAY_5", t[t.AFTER_STAGE_1 = 149] = "AFTER_STAGE_1", t[t.AFTER_STAGE_2 = 150] = "AFTER_STAGE_2", t[t.AFTER_STAGE_3 = 151] = "AFTER_STAGE_3", t[t.AFTER_STAGE_4 = 152] = "AFTER_STAGE_4", t[t.AFTER_STAGE_5 = 153] = "AFTER_STAGE_5", t[t.AFTER_STAGE_6 = 154] = "AFTER_STAGE_6", t[t.AFTER_STAGE_7 = 155] = "AFTER_STAGE_7", t[t.AFTER_STAGE_8 = 156] = "AFTER_STAGE_8", t[t.AFTER_STAGE_9 = 157] = "AFTER_STAGE_9", t[t.AFTER_STAGE_10 = 158] = "AFTER_STAGE_10", t[t.AFTER_STAGE_11 = 159] = "AFTER_STAGE_11", t[t.AFTER_STAGE_12 = 160] = "AFTER_STAGE_12", t[t.AFTER_STAGE_13 = 161] = "AFTER_STAGE_13", t[t.AFTER_STAGE_14 = 162] = "AFTER_STAGE_14", t[t.AFTER_STAGE_15 = 163] = "AFTER_STAGE_15", t[t.AFTER_STAGE_16 = 164] = "AFTER_STAGE_16", t[t.AFTER_STAGE_17 = 165] = "AFTER_STAGE_17", t[t.AFTER_STAGE_18 = 166] = "AFTER_STAGE_18", t[t.AFTER_STAGE_19 = 167] = "AFTER_STAGE_19", t[t.AFTER_STAGE_20 = 168] = "AFTER_STAGE_20", t[t.AFTER_STAGE_21 = 169] = "AFTER_STAGE_21", t[t.AFTER_STAGE_22 = 170] = "AFTER_STAGE_22", t[t.AFTER_STAGE_23 = 171] = "AFTER_STAGE_23", t[t.AFTER_STAGE_24 = 172] = "AFTER_STAGE_24", t[t.AFTER_STAGE_25 = 173] = "AFTER_STAGE_25", t[t.AFTER_STAGE_26 = 174] = "AFTER_STAGE_26", t[t.AFTER_STAGE_27 = 175] = "AFTER_STAGE_27", t[t.AFTER_STAGE_28 = 176] = "AFTER_STAGE_28", t[t.AFTER_STAGE_29 = 177] = "AFTER_STAGE_29", t[t.AFTER_STAGE_30 = 178] = "AFTER_STAGE_30", t[t.STAGE_1 = 179] = "STAGE_1", t[t.STAGE_2 = 180] = "STAGE_2", t[t.STAGE_3 = 181] = "STAGE_3", t[t.STAGE_4 = 182] = "STAGE_4", t[t.STAGE_5 = 183] = "STAGE_5", t[t.STAGE_6 = 184] = "STAGE_6", t[t.STAGE_7 = 185] = "STAGE_7", t[t.STAGE_8 = 186] = "STAGE_8", t[t.STAGE_9 = 187] = "STAGE_9", t[t.STAGE_10 = 188] = "STAGE_10", t[t.STAGE_11 = 189] = "STAGE_11", t[t.STAGE_12 = 190] = "STAGE_12", t[t.STAGE_13 = 191] = "STAGE_13", t[t.STAGE_14 = 192] = "STAGE_14", t[t.STAGE_15 = 193] = "STAGE_15", t[t.STAGE_16 = 194] = "STAGE_16", t[t.STAGE_17 = 195] = "STAGE_17", t[t.STAGE_18 = 196] = "STAGE_18", t[t.STAGE_19 = 197] = "STAGE_19", t[t.STAGE_20 = 198] = "STAGE_20", t[t.STAGE_21 = 199] = "STAGE_21", t[t.STAGE_22 = 200] = "STAGE_22", t[t.STAGE_23 = 201] = "STAGE_23", t[t.STAGE_24 = 202] = "STAGE_24", t[t.STAGE_25 = 203] = "STAGE_25", t[t.SEMIFINAL = 251] = "SEMIFINAL", t[t.SEMIFINAL_1 = 204] = "SEMIFINAL_1", t[t.SEMIFINAL_2 = 205] = "SEMIFINAL_2", t[t.SEMIFINAL_3 = 253] = "SEMIFINAL_3", t[t.FINAL_ROUND = 206] = "FINAL_ROUND", t[t.FIFTH_ROUND = 220] = "FIFTH_ROUND", t[t.SIXTH_ROUND = 221] = "SIXTH_ROUND", t[t.SEVENTH_ROUND = 222] = "SEVENTH_ROUND", t[t.EIGHTH_ROUND = 223] = "EIGHTH_ROUND", t[t.NINTH_ROUND = 224] = "NINTH_ROUND", t[t.TENTH_ROUND = 225] = "TENTH_ROUND", t[t.ELEVENTH_ROUND = 226] = "ELEVENTH_ROUND", t[t.TWELFTH_ROUND = 227] = "TWELFTH_ROUND", t[t.AFTER_RACE_1 = 262] = "AFTER_RACE_1", t[t.AFTER_RACE_2 = 263] = "AFTER_RACE_2", t[t.AFTER_RACE_3 = 264] = "AFTER_RACE_3", t[t.AFTER_RACE_4 = 265] = "AFTER_RACE_4", t[t.CURRENT = 228] = "CURRENT", t[t.QUALIFICATION_1_FIRST_STAGE = 230] = "QUALIFICATION_1_FIRST_STAGE", t[t.QUALIFICATION_2_FIRST_STAGE = 231] = "QUALIFICATION_2_FIRST_STAGE", t[t.QUALIFICATION_1_SECOND_STAGE = 232] = "QUALIFICATION_1_SECOND_STAGE", t[t.QUALIFICATION_2_SECOND_STAGE = 233] = "QUALIFICATION_2_SECOND_STAGE", t[t.FULL_TIME = 242] = "FULL_TIME", t[t.QUARTER_FINAL_1 = 245] = "QUARTER_FINAL_1", t[t.QUARTER_FINAL_2 = 246] = "QUARTER_FINAL_2", t[t.QUARTER_FINAL_3 = 247] = "QUARTER_FINAL_3", t[t.QUARTER_FINAL_4 = 248] = "QUARTER_FINAL_4", t[t.QUARTER_FINAL_5 = 249] = "QUARTER_FINAL_5", t[t.QUARTER_FINAL_6 = 250] = "QUARTER_FINAL_6", t[t.QUARTER_FINAL = 252] = "QUARTER_FINAL", t[t.FINAL_B = 254] = "FINAL_B", t[t.SPECIAL_STAGE_1_B = 256] = "SPECIAL_STAGE_1_B", t[t.AFTER_QUALIFICATION = 255] = "AFTER_QUALIFICATION", t[t.AFTER_QUALIFICATION_1 = 266] = "AFTER_QUALIFICATION_1", t[t.AFTER_QUALIFICATION_2 = 267] = "AFTER_QUALIFICATION_2", t[t.AFTER_QUALIFICATION_3 = 268] = "AFTER_QUALIFICATION_3", t[t.AFTER_QUALIFICATION_4 = 269] = "AFTER_QUALIFICATION_4", t[t.AFTER_QUALIFICATION_5 = 270] = "AFTER_QUALIFICATION_5", t[t.AFTER_QUALIFICATION_FIRST_STAGE = 271] = "AFTER_QUALIFICATION_FIRST_STAGE", t[t.AFTER_QUALIFICATION_SECOND_STAGE = 272] = "AFTER_QUALIFICATION_SECOND_STAGE", t[t.AFTER_QUALIFICATION_THIRD_STAGE = 273] = "AFTER_QUALIFICATION_THIRD_STAGE", t[t.AFTER_QUALIFICATION_1_FIRST_STAGE = 274] = "AFTER_QUALIFICATION_1_FIRST_STAGE", t[t.AFTER_QUALIFICATION_1_SECOND_STAGE = 275] = "AFTER_QUALIFICATION_1_SECOND_STAGE", t[t.AFTER_QUALIFICATION_2_FIRST_STAGE = 276] = "AFTER_QUALIFICATION_2_FIRST_STAGE", t[t.AFTER_QUALIFICATION_2_SECOND_STAGE = 277] = "AFTER_QUALIFICATION_2_SECOND_STAGE", t[t.AFTER_PRACTICE_1 = 278] = "AFTER_PRACTICE_1", t[t.AFTER_PRACTICE_2 = 279] = "AFTER_PRACTICE_2", t[t.AFTER_PRACTICE_3 = 280] = "AFTER_PRACTICE_3", t[t.AFTER_PRACTICE_4 = 281] = "AFTER_PRACTICE_4", t[t.AFTER_PRACTICE_5 = 282] = "AFTER_PRACTICE_5", t[t.AFTER_PRACTICE_6 = 283] = "AFTER_PRACTICE_6", t[t.AFTER_PRACTICE_7 = 284] = "AFTER_PRACTICE_7", t[t.AFTER_PRACTICE_8 = 285] = "AFTER_PRACTICE_8", t[t.AFTER_PRACTICE_9 = 286] = "AFTER_PRACTICE_9", t[t.AFTER_SPECIAL_STAGE_1 = 287] = "AFTER_SPECIAL_STAGE_1", t[t.AFTER_SPECIAL_STAGE_2 = 288] = "AFTER_SPECIAL_STAGE_2", t[t.AFTER_SPECIAL_STAGE_3 = 289] = "AFTER_SPECIAL_STAGE_3", t[t.AFTER_SPECIAL_STAGE_4 = 290] = "AFTER_SPECIAL_STAGE_4", t[t.AFTER_SPECIAL_STAGE_5 = 291] = "AFTER_SPECIAL_STAGE_5", t[t.AFTER_SPECIAL_STAGE_6 = 292] = "AFTER_SPECIAL_STAGE_6", t[t.AFTER_SPECIAL_STAGE_7 = 293] = "AFTER_SPECIAL_STAGE_7", t[t.AFTER_SPECIAL_STAGE_8 = 294] = "AFTER_SPECIAL_STAGE_8", t[t.AFTER_SPECIAL_STAGE_9 = 295] = "AFTER_SPECIAL_STAGE_9", t[t.AFTER_SPECIAL_STAGE_10 = 296] = "AFTER_SPECIAL_STAGE_10", t[t.AFTER_SPECIAL_STAGE_11 = 297] = "AFTER_SPECIAL_STAGE_11", t[t.AFTER_SPECIAL_STAGE_12 = 298] = "AFTER_SPECIAL_STAGE_12", t[t.AFTER_SPECIAL_STAGE_13 = 299] = "AFTER_SPECIAL_STAGE_13", t[t.AFTER_SPECIAL_STAGE_14 = 300] = "AFTER_SPECIAL_STAGE_14", t[t.AFTER_SPECIAL_STAGE_15 = 301] = "AFTER_SPECIAL_STAGE_15", t[t.AFTER_SPECIAL_STAGE_16 = 302] = "AFTER_SPECIAL_STAGE_16", t[t.AFTER_SPECIAL_STAGE_17 = 303] = "AFTER_SPECIAL_STAGE_17", t[t.AFTER_SPECIAL_STAGE_18 = 304] = "AFTER_SPECIAL_STAGE_18", t[t.AFTER_SPECIAL_STAGE_19 = 305] = "AFTER_SPECIAL_STAGE_19", t[t.AFTER_SPECIAL_STAGE_20 = 306] = "AFTER_SPECIAL_STAGE_20", t[t.AFTER_SPECIAL_STAGE_21 = 307] = "AFTER_SPECIAL_STAGE_21", t[t.AFTER_SPECIAL_STAGE_22 = 308] = "AFTER_SPECIAL_STAGE_22", t[t.AFTER_SPECIAL_STAGE_23 = 309] = "AFTER_SPECIAL_STAGE_23", t[t.AFTER_SPECIAL_STAGE_24 = 310] = "AFTER_SPECIAL_STAGE_24", t[t.AFTER_SPECIAL_STAGE_25 = 311] = "AFTER_SPECIAL_STAGE_25", t[t.AFTER_SPECIAL_STAGE_26 = 312] = "AFTER_SPECIAL_STAGE_26", t[t.AFTER_SPECIAL_STAGE_1_B = 313] = "AFTER_SPECIAL_STAGE_1_B", t[t.AFTER_WARM_UP = 314] = "AFTER_WARM_UP", t[t.AFTER_WARM_UP_1 = 315] = "AFTER_WARM_UP_1", t[t.AFTER_WARM_UP_2 = 316] = "AFTER_WARM_UP_2", t[t.AFTER_HEAT_1 = 317] = "AFTER_HEAT_1", t[t.AFTER_HEAT_2 = 318] = "AFTER_HEAT_2", t[t.AFTER_HEAT_3 = 319] = "AFTER_HEAT_3", t[t.AFTER_HEAT_4 = 320] = "AFTER_HEAT_4", t[t.AFTER_HEAT_5 = 321] = "AFTER_HEAT_5", t[t.EIGHTH_SET = 324] = "EIGHTH_SET", t[t.NINTH_SET = 325] = "NINTH_SET", t[t.TENTH_SET = 326] = "TENTH_SET", t[t.ELEVENTH_SET = 327] = "ELEVENTH_SET", t[t.TWELFTH_SET = 328] = "TWELFTH_SET", t[t.THIRTEENTH_SET = 329] = "THIRTEENTH_SET", t[t.LUNCH = 333] = "LUNCH", t[t.TEA = 334] = "TEA", t[t.MEDICAL_TIMEOUT = 335] = "MEDICAL_TIMEOUT", t[t.FIRST_AND_SECOND_HALF = 9999] = "FIRST_AND_SECOND_HALF", t[t.OVERALL = 74] = "OVERALL"
                }(_ || (_ = {}));
            const E = [_.SCHEDULED, _.POSTPONED, _.CANCELED, _.RETIRED, _.WALKOVER, _.INTERRUPTED, _.ABANDONED, _.AFTER_DAY1, _.AFTER_DAY2, _.AFTER_DAY3, _.AFTER_DAY4, _.AFTER_DAY5, _.AFTER_DAY6, _.AFTER_DAY7, _.AFTER_DAY8, _.AFTER_DAY9, _.AFTER_DAY10]
        },
        160: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return E
            }));
            var _ = s(81);
            class E {
                constructor() {
                    this._eventId = "", this._urlPrefix = "", this._isIos = !1, this._highlightParticipants = null
                }
                setStatsTypeIdent(t) {
                    return this._statsTypeIdent = t, this
                }
                setTournamentId(t) {
                    return this._tournamentId = t, this
                }
                setTournamentStageId(t) {
                    return this._tournamentStageId = t, this
                }
                setEventId(t) {
                    return this._eventId = t, this
                }
                setUrlPrefix(t) {
                    return this._urlPrefix = t, this
                }
                setIsIos(t) {
                    return this._isIos = t, this
                }
                setUtilTrans(t) {
                    return this._utilTrans = t, this
                }
                setWidth(t) {
                    return this._width = t, this
                }
                setHeight(t) {
                    return this._height = t, this
                }
                setHighlightParticipants(t) {
                    return this._highlightParticipants = t, this
                }
                build() {
                    return new _.a(this._tournamentId, this._tournamentStageId, this._eventId, this._statsTypeIdent, this._urlPrefix, this._isIos, this._utilTrans, this._highlightParticipants, this._width, this._height)
                }
            }
        },
        162: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return E
            }));
            class _ {
                constructor(t, e, s, _, E, i, r, a) {
                    this._bettingTypeAsianHandicap = !1, this._bettingTypeTWP = !1, this._defaultColumnWidth = 0, this._emptyCellChar = "", this._spreadName = "", this._notBettingTypeHomeAwayDrawNobet = !1, this._oddsCellNames = [], this._tableType = "", this._live = !1, this._bettingTypeAsianHandicap = t, this._bettingTypeTWP = e, this._defaultColumnWidth = s, this._emptyCellChar = _, this._spreadName = E, this._notBettingTypeHomeAwayDrawNobet = i, this._oddsCellNames = r, this._tableType = a
                }
                hasBettingTypeAsianHandicap() {
                    return this._bettingTypeAsianHandicap
                }
                isBettingTypeTWP() {
                    return this._bettingTypeTWP
                }
                getDefaultColumnWidth() {
                    return this._defaultColumnWidth
                }
                getEmptyCellChar() {
                    return this._emptyCellChar
                }
                getSpreadName() {
                    return this._spreadName
                }
                isNotBettingTypeHomeAwayDrawNobet() {
                    return this._notBettingTypeHomeAwayDrawNobet
                }
                getOddsCellNames() {
                    return this._oddsCellNames
                }
                getOddsCellNameByIndex(t) {
                    let e = "";
                    return this._oddsCellNames[t] && (e = this._oddsCellNames[t].name), e
                }
                getTableType() {
                    let t = this._tableType;
                    return this._live && (t = "live-" + t), t
                }
                getRowSize() {
                    let t = Object.keys(this._oddsCellNames).length;
                    return t > 3 && (t = 2), t
                }
                setLive(t) {
                    return this._live = t, this
                }
            }
            class E {
                constructor() {
                    this._bettingTypeAsianHandicap = !1, this._bettingTypeTWP = !1, this._defaultColumnWidth = 0, this._emptyCellChar = "", this._spreadName = "", this._notBettingTypeHomeAwayDrawNobet = !1, this._oddsCellNames = [], this._tableType = ""
                }
                setBettingTypeAsianHandicap(t) {
                    return this._bettingTypeAsianHandicap = t, this
                }
                setBettingTypeTWP(t) {
                    return this._bettingTypeTWP = t, this
                }
                setDefaultColumnWidth(t) {
                    return this._defaultColumnWidth = t, this
                }
                setEmptyCellChar(t) {
                    return this._emptyCellChar = t, this
                }
                setNotBettingTypeHomeAwayDrawNobet(t) {
                    return this._notBettingTypeHomeAwayDrawNobet = t, this
                }
                setOddsCellNames(t) {
                    return this._oddsCellNames = t, this
                }
                setTableType(t) {
                    return this._tableType = t, this
                }
                createFromDataObject(t) {
                    return "object" == typeof t && t && (t.isBettingType_ASIAN_HANDICAP && this.setBettingTypeAsianHandicap(t.isBettingType_ASIAN_HANDICAP), t.isBettingType_TWP && this.setBettingTypeTWP(t.isBettingType_TWP), t.defaultColumnWidth && this.setDefaultColumnWidth(t.defaultColumnWidth), t.emptyCellChar && this.setEmptyCellChar(t.emptyCellChar), t.isNotBettingType_HOME_AWAY_DRAW_NO_BET && this.setNotBettingTypeHomeAwayDrawNobet(t.isNotBettingType_HOME_AWAY_DRAW_NO_BET), t.tableHeader && this.setOddsCellNames(t.tableHeader), t.tableType && this.setTableType(t.tableType)), this.build()
                }
                _prepare() {
                    if (this._bettingTypeAsianHandicap) {
                        const [t, ...e] = this._oddsCellNames;
                        this._spreadName = t.name, this._oddsCellNames = e
                    }
                }
                build() {
                    return this._prepare(), new _(this._bettingTypeAsianHandicap, this._bettingTypeTWP, this._defaultColumnWidth, this._emptyCellChar, this._spreadName, this._notBettingTypeHomeAwayDrawNobet, this._oddsCellNames, this._tableType)
                }
            }
        },
        164: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return m
            }));
            var _ = s(0),
                E = s.n(_);
            const i = E.a.createContext(null);

            function r() {
                const t = Object(_.useContext)(i);
                if (null === t) throw new Error("Environment context was not initialized.");
                return t
            }

            function a() {
                return r().getConfig()
            }
            var n = s(23),
                o = s(18);
            class S {
                constructor(t, e, s, _, E) {
                    this.id = t, this.logo = e, this.name = s, this.url = _, this.sportId = E
                }
                getId() {
                    return this.id
                }
                getName() {
                    return this.name
                }
                getLogo() {
                    return this.logo
                }
                getUrl() {
                    return this.url
                }
                getSportId() {
                    return this.sportId
                }
            }
            class I {
                constructor() {
                    this.id = "", this.name = "", this.logo = "", this.url = "", this.sportId = 0
                }
                setId(t) {
                    return this.id = t, this
                }
                setName(t) {
                    return this.name = t, this
                }
                setLogo(t) {
                    return this.logo = t, this
                }
                setUrl(t) {
                    return this.url = t, this
                }
                setSportId(t) {
                    return this.sportId = t, this
                }
                build() {
                    return new S(this.id, this.logo, this.name, this.url, this.sportId)
                }
            }
            class T {
                constructor(t) {
                    this.participants = t
                }
                findParticipant(t) {
                    var e;
                    return null !== (e = this.participants.filter(e => e.getId() === t)[0]) && void 0 !== e ? e : null
                }
                getParticipants() {
                    return this.participants
                }
            }
            var A = s(2);
            class l extends o.a {
                constructor() {
                    super(...arguments), this.participants = []
                }
                startFeed() {
                    this.participants = []
                }
                parse(t, e) {
                    switch (t) {
                        case A.a.DCAPIPARTICIPANTINDEXES_TEAM_INFO: {
                            const t = this.getStringArray(e);
                            this.participants.push((new I).setId(t[0]).setName(t[1]).setLogo(t[3]).setSportId(this.getNumberValueOf(t[4])).setUrl(t[6]).build());
                            break
                        }
                    }
                }
                getParsedModel() {
                    return new T(this.participants)
                }
            }
            var h = s(35),
                N = s.n(h),
                D = s(101),
                c = s.n(D);
            const u = () => _.createElement("div", {
                    className: N.a.recomCont
                }, _.createElement("div", {
                    className: c.a.recomSkelHead
                }), _.createElement("div", {
                    className: N.a.recomArea
                }, _.createElement(d, null), _.createElement(d, null), _.createElement(d, null), _.createElement(d, null), _.createElement(d, null), _.createElement(d, null), _.createElement(d, null))),
                d = () => _.createElement("div", {
                    className: N.a.recomHref
                }, _.createElement("div", {
                    className: c.a.recomSkelImage
                }), _.createElement("div", {
                    className: c.a.recomSkelText
                }));
            class R {
                constructor(t, e, s, _, E, i, r, a) {
                    this.trans = t, this.config = e, this.utilEnvironment = s, this.moduleLoader = _, this.feedNameComposer = E, this.feedFetcher = i, this.sport = r, this.url = a
                }
                getConfig() {
                    return this.config
                }
                getTrans() {
                    return this.trans
                }
                getUtilEnvironment() {
                    return this.utilEnvironment
                }
                getModuleLoader() {
                    return this.moduleLoader
                }
                getFeedFetcher() {
                    return this.feedFetcher
                }
                getFeedNameComposer() {
                    return this.feedNameComposer
                }
                getSport() {
                    return this.sport
                }
                getUrl() {
                    return this.url
                }
            }
            class O {
                constructor(t) {
                    this.utilFactory = t
                }
                setModuleLoader(t) {
                    return this.moduleLoader = t, this
                }
                build() {
                    return new R(this.utilFactory.createTrans(), this.utilFactory.createConfig(), this.utilFactory.createEnviroment(), this.moduleLoader, this.utilFactory.createFeedNameComposer(), this.utilFactory.createFeedFetcher(), this.utilFactory.createSport(), this.utilFactory.createUrl())
                }
            }
            var L = function(t, e, s, _) {
                return new(s || (s = Promise))((function(E, i) {
                    function r(t) {
                        try {
                            n(_.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function a(t) {
                        try {
                            n(_.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function n(t) {
                        var e;
                        t.done ? E(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(r, a)
                    }
                    n((_ = _.apply(t, e || [])).next())
                }))
            };
            let g, C = [];

            function m(t, e, s) {
                return E.a.createElement(i.Provider, {
                    value: new O(t).setModuleLoader(e).build()
                }, E.a.createElement(P, {
                    itemId: s
                }))
            }

            function P(t) {
                const e = r().getTrans(),
                    s = r().getModuleLoader(),
                    i = r().getFeedNameComposer(),
                    o = r().getFeedFetcher(),
                    S = a().get("app", "recombee", "enabled"),
                    I = a().get("app", "recombee", "scenario"),
                    [T, A] = Object(_.useState)(C),
                    [h, D] = Object(_.useState)(!1);
                if (Object(_.useEffect)(() => {
                        S && !T.length && s.getRecombee().then(e => L(this, void 0, void 0, (function*() {
                            if (g || (g = (yield e.getScenarioRecommendationsToItem(t.itemId, I)).map(t => t.id)), g.length) {
                                const t = i.getPmxFeed(g),
                                    e = new n.a(t, o, new l),
                                    s = yield e.fetch();
                                C = s.getParticipants(), C.length ? A(C) : D(!0)
                            } else D(!0)
                        })))
                    }, []), !S || h) return null;
                if (!T.length) return E.a.createElement(u, null);
                const c = T.map(t => E.a.createElement(p, {
                    key: "participantBox--" + t.getId(),
                    participant: t
                }));
                return E.a.createElement("div", {
                    id: "recomBox",
                    className: N.a.recomCont
                }, E.a.createElement("div", {
                    className: N.a.recomHeading
                }, e.translate("TRANS_SEARCH_MOST_POPULAR_SEARCHES"), ":"), E.a.createElement("div", {
                    className: N.a.recomArea
                }, c))
            }

            function p({
                participant: t
            }) {
                const e = r().getUtilEnvironment(),
                    s = e.getEventTrackingObject(),
                    _ = r().getSport(),
                    i = r().getUrl();
                return E.a.createElement("a", {
                    className: N.a.recomHref,
                    href: t.getUrl(),
                    onClick: () => {
                        null == s || s.track_click("click_recommending_box", t.getId(), void 0, void 0, void 0, _.getOriginalNameFromId(t.getSportId()))
                    }
                }, E.a.createElement("div", {
                    className: N.a.recomImage
                }, E.a.createElement("img", {
                    alt: t.getName(),
                    src: (a = t.getLogo(), ["women", "men", "team"].includes(a) ? i.getEmptyLogoByType(a) : e.getBaseImageDataUrl() + a)
                })), E.a.createElement("div", {
                    className: N.a.recomName
                }, t.getName()));
                var a
            }
        },
        165: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return S
            })), s.d(e, "b", (function() {
                return I
            }));
            class _ {
                constructor() {
                    this._formats = {}
                }
                addFormat(t) {
                    this._formats[t.getFormat()] = t
                }
                getFormats() {
                    return this._formats
                }
                getIndexOfFormat(t) {
                    return Object.keys(this._formats).indexOf(t)
                }
            }
            class E {
                constructor(t, e, s, _) {
                    this._index = t, this._format = e, this._name = s, this._title = _
                }
                getIndex() {
                    return this._index
                }
                getFormat() {
                    return this._format
                }
                getName() {
                    return this._name
                }
                getTitle() {
                    return this._title
                }
            }
            class i {
                constructor(t, e) {
                    this._utilTrans = t, this._spreadTrans = e.getSpreadTrans()
                }
                getMoneyLine() {
                    return this._utilTrans.translate("TRANS_ODDS_TYPE_HOME_AWAY")
                }
                getOverUnder() {
                    return this._utilTrans.translate("TRANS_ODDS_TYPE_OVER_UNDER")
                }
                getSpreadFull() {
                    return this._spreadTrans.full || ""
                }
                getSpreadShort() {
                    return this._spreadTrans.short || ""
                }
                getX() {
                    return this._utilTrans.translate("TRANS_ODDS_TYPE_0")
                }
                getEachWayFull(t) {
                    let e = this._utilTrans.translate("TRANS_ODDS_COMPARISON_EACH_WAY");
                    return parseInt(t) && (e += " (" + t + ")"), e
                }
                getEachWayShort() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_EACH_WAY_SHORT")
                }
                getWinnerFull() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_WINNER")
                }
                getWinnerShort() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_WINNER_SHORT")
                }
                getTop3Full() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_TOP_3")
                }
                getTop3Short() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_TOP_3_SHORT")
                }
                getTop5Full() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_TOP_5")
                }
                getTop5Short() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_TOP_5_SHORT")
                }
                getTop6Full() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_TOP_6")
                }
                getTop6Short() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_TOP_6_SHORT")
                }
                getTop10Full() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_TOP_10")
                }
                getTop10Short() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_TOP_10")
                }
                getTop20Full() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_TOP_20")
                }
                getTop20Short() {
                    return this._utilTrans.translate("TRANS_ODDS_COMPARISON_TOP_20_SHORT")
                }
                getOddsFormatSwitch() {
                    return this._utilTrans.translate("TRANS_ODDS_FORMAT_SWITCH")
                }
            }
            class r {
                constructor(t, e, s, _, E, i, r, a, n, o, S, I, T, A) {
                    this._isSet = !1, this._isOddRemoved = !1, this._html = t, this._class = e, this._alt = s, this._html && "-" != this._html && (this._isSet = !0), this._isOddRemoved = _, this._outcome = E, this._subCategory = a.getSubCategory(), this._geoIP = a.getGlobalGeoIp() || "", this._geoIPIsoSubdivisionCode = a.getGeoIpIsoSubdivisionCode0() || "", this._hasOddsBetslip = a.getHasOddsBetslip(), this._eventItem = i, this._utilConfig = r, this._utilEnviroment = a, this._utilSport = n, this._utilTrans = o, this._utilUrl = S, this._bookmakerSettings = I, this._application = T, this._helperClickableBookmaker = A, this._isClickable = this._helperClickableBookmaker.isClickable(a.getGlobalGeoIp(), a.getGeoIpIsoSubdivisionCode0())
                }
                getTitle() {
                    let t = "";
                    const e = this._utilConfig.get("app", "odds", "finished_matches_clickable"),
                        s = this._eventItem.hasPrematchBetslip(),
                        _ = this._eventItem.getMainBookmakerId(),
                        E = /([^\[]+)(\[[^\]]+\])(.*)/;
                    return this._isSet ? ((this._isClickable || !this._isClickable && E.test(this._alt)) && (t = this._alt), this._isClickable && s && (e || this._eventItem.isScheduled()) && !this._isOddRemoved && (t += t ? "[br]" : "", t += this._utilTrans.translate("TRANS_ODDS_ADD_TO_BOOKMAKER_BETSLIP", [this._bookmakerSettings.getBookmakerNameByGeoIpAndId(this._geoIP, this._geoIPIsoSubdivisionCode, _)])), _ && this._isClickable && (t = "[bl]" + t)) : 3 != this._subCategory || s || (t = this._utilTrans.translate("TRANS_ODDS_CLICK_TO_BET_MATCH", [this._bookmakerSettings.getBookmakerNameByGeoIpAndId(this._geoIP, this._geoIPIsoSubdivisionCode, _)])), t
                }
                getHandlerOnMouseEnter() {
                    return t => {
                        const e = t.target,
                            s = this.getTitle();
                        return s && (e.title = s, this._utilEnviroment.getTooltipObject().show(t.target, t, null, "live-table")), !0
                    }
                }
                getHandlerOnMouseLeave() {
                    return t => (this._utilEnviroment.getTooltipObject().hide(t.target), !0)
                }
                getHandlerOnClick() {
                    return t => {
                        var e, s, _;
                        t.stopPropagation();
                        const E = this._eventItem.getId(),
                            i = this._eventItem.getSportId(),
                            r = this._class,
                            a = {},
                            n = this._eventItem.getMainBookmakerId();
                        this._application.isExternalProject() && (a.externalProjectId = this._application.getExternalProjectId()), a.sport = i, a.from = "iframe";
                        let o = "";
                        if (this._isSet && this._isClickable) {
                            if (this._eventItem.hasPrematchBetslip() && this._eventItem.isScheduled()) {
                                const t = r.match(/OU|AH|ML/);
                                t && (o = t[0]);
                                const s = E.split(/_/)[2];
                                let _ = "";
                                this._utilEnviroment.isNoDuelTournamentByLeagueId(this._eventItem.getLeagueId()) ? ("horse-racing" === this._eventItem.getSportName() && (_ = this._eventItem.getLeague().getStageId()), a.match = this._eventItem.getLeague().getEventId(), a.participant = s + _) : a.match = s, a.from = "betslip-iframe", a.outcome = this._outcome || null, a.swap = this._eventItem.hasSwappedParticipants(), a.eventstagetype = this._eventItem.getStageType(), o && (a.bettype = o);
                                const i = this._utilUrl.createBookmakerLink(a, n);
                                return this._utilEnviroment.bookmakerOpen(i, n, !0), null === (e = this._utilEnviroment.getEventTrackingObject()) || void 0 === e || e.track_click("odds-iframe-click", "betslip-link"), !0
                            } {
                                const t = this._utilUrl.createBookmakerLink(a, n);
                                return this._utilEnviroment.bookmakerOpen(t, n, !1), null === (s = this._utilEnviroment.getEventTrackingObject()) || void 0 === s || s.track_click("odds-iframe-click", "bookmaker-link"), !0
                            }
                        }
                        if (3 != this._subCategory || this._hasOddsBetslip) return this._utilSport.hasDisabledDetail(this._eventItem.getSportId()) || (this._utilEnviroment.detailOpen(this._eventItem.getId()), null === (_ = this._utilEnviroment.getEventTrackingObject()) || void 0 === _ || _.track_click("odds-iframe-click", "detail")), !0; {
                            const t = this._utilUrl.createBookmakerLink(a, n);
                            return this._utilEnviroment.open(t), !0
                        }
                    }
                }
                getHtml() {
                    return this._html
                }
                getClass() {
                    return this._class
                }
                isSet() {
                    return this._isSet
                }
                getNotPublishedClass() {
                    return this._isOddRemoved ? "odds__odd--notPublished" : ""
                }
                getNotClickableClass() {
                    return this._isClickable ? "" : "no-odds"
                }
                getPrematchBetslipClass() {
                    return this._eventItem.hasPrematchBetslip() ? "odds__odd--betslip" : ""
                }
            }
            var a = s(124),
                n = s(16),
                o = s(121);
            class S {
                constructor(t, e, s, _, E, i, r, a, n, o, S, I) {
                    this.getSingleOddsInCurrentFormat = (t, e) => {
                        const s = e || this._utilEnviroment.getOddsFormatValue();
                        return this._oddsFormatter.setOddsFormatByName(s), this._oddsFormatter.formatOdd(t)
                    }, this.getSingleHandicapInRightFormat = (t, e) => (this._oddsFormatter.setHandicapFormatByName(this.getHandicapFormat(e)), this._oddsFormatter.formatHandicap(t)), this._$ = t, this._utilSport = e, this._utilConfig = s, this._utilEnviroment = _, this._utilTrans = E, this._utilUrl = i, this._bookmakerSettings = r, this._application = a, this._clientStorage = n, this._helperClickableBookmaker = o, this._oddsFormatter = S, this._sportOddsTypeList = I, this._createFormats()
                }
                getContent(t, e, s) {
                    const _ = this.isEventStageWithoutWinner(e.getStage());
                    let E;
                    const i = this.hasUsHandicap(e.getSportId());
                    switch (s) {
                        case o.a.HOME_SIDE:
                            E = this._utilEnviroment.getOddsContentValue(_, i, this.getSingleOddsInCurrentFormat, this.getSingleHandicapInRightFormat, t, e, null, "odds-bottom", null);
                            break;
                        case o.a.AWAY_SIDE:
                            E = this._utilEnviroment.getOddsContentValue(_, i, this.getSingleOddsInCurrentFormat, this.getSingleHandicapInRightFormat, t, e, null, "odds-top", null);
                            break;
                        default:
                            E = this._utilEnviroment.getOddsContentValue(_, i, this.getSingleOddsInCurrentFormat, this.getSingleHandicapInRightFormat, t, e, null, null, null)
                    }
                    const a = this._$(E),
                        n = a.html(),
                        S = a.attr("class"),
                        I = a.find("span").eq(0).attr("alt"),
                        T = a.find("span").eq(0).hasClass("not-published"),
                        A = this.getOutcome(S, e.getSportId()) || "";
                    return new r(n, S, I, T, A, e, this._utilConfig, this._utilEnviroment, this._utilSport, this._utilTrans, this._utilUrl, this._bookmakerSettings, this._application, this._helperClickableBookmaker)
                }
                getOutcome(t, e) {
                    return (new a.a).getOutcome(t, e)
                }
                isEventStageWithoutWinner(t) {
                    return n.b.includes(t)
                }
                getOddsHeaderTitle() {
                    return new i(this._utilTrans, this._utilEnviroment)
                }
                getOddsFormat() {
                    return this._utilEnviroment.getOddsFormatValue()
                }
                switchOddsFormat(t) {
                    this._clientStorage.store(I(this._utilConfig.get("app", "lang", "web")), t), this._utilEnviroment.setDefaultOddsFormat(t), cjs.Api.loader.get("react").call(t => t.forceRedrawTabContent(0))
                }
                getOddsFormats() {
                    return this._formats
                }
                _createFormats() {
                    this._formats = new _;
                    const t = this._utilEnviroment.getOddsFormatList();
                    let e = 0;
                    for (const s in t) {
                        const _ = t[s],
                            i = new E(e, s, _.name_iframe, _.name_title);
                        this._formats.addFormat(i), e++
                    }
                }
                _overrideBySport(t) {
                    const e = this._utilSport.isRacingSport(t),
                        s = this._utilSport.isGolf(t);
                    return e || s
                }
                isAhOverrideActive(t) {
                    return this._utilConfig.get("app", "odds", "ah_override") && !this._overrideBySport(t)
                }
                hasUsHandicap(t) {
                    return this._utilConfig.get("app", "odds", "us_handicap") && !this._overrideBySport(t)
                }
                getOddsTypeBySport(t) {
                    return this._sportOddsTypeList.hasOwnProperty(t) ? this._sportOddsTypeList[t] : ""
                }
                getHandicapFormat(t) {
                    return this.hasUsHandicap(t) ? "us" : "ha"
                }
            }

            function I(t) {
                return "fs_of_" + t
            }
        },
        167: function(t, e, s) {
            "use strict";
            var _, E;
            s.d(e, "a", (function() {
                    return a
                })),
                function(t) {
                    t.SORT_DIRECTION_ASC = "asc", t.SORT_DIRECTION_DESC = "desc", t.SORTERS = {
                        number: function(e, s) {
                            return this.getDirection() === t.SORT_DIRECTION_ASC ? e - s : s - e
                        },
                        string: function(e, s) {
                            if (e === s) return 0;
                            const _ = e.localeCompare(s);
                            return this.getDirection() === t.SORT_DIRECTION_ASC ? _ : -_
                        },
                        resultSum: function(e, s) {
                            return this.getDirection() === t.SORT_DIRECTION_ASC ? e - s : s - e
                        }
                    }, t.MAPPERS = {
                        number: function(t, e) {
                            "string" == typeof t && (t = document.querySelector(t));
                            const s = t.querySelectorAll(".table__cell").item(e),
                                _ = s ? s.innerText || s.textContent : null,
                                E = _ ? +_ : 0;
                            return isNaN(E) ? 0 : E
                        },
                        string: function(t, e) {
                            "string" == typeof t && (t = document.querySelector(t));
                            const s = t.querySelectorAll(".table__cell").item(e),
                                _ = s ? s.innerText || s.textContent : null;
                            return (_ || "").trim().toLowerCase()
                        },
                        resultSum: function(t, e) {
                            "string" == typeof t && (t = document.querySelector(t));
                            const s = t.querySelectorAll(".table__cell").item(e),
                                _ = s ? s.innerText || s.textContent : null,
                                E = _ ? _.split(":") : ["0", "0"];
                            let i;
                            return i = 2 === E.length ? parseInt(E[0]) - parseInt(E[1]) : parseInt(E[0]), isNaN(i) && (i = 0), i
                        }
                    }
                }(_ || (_ = {}));
            class i {
                constructor(t, e, s) {
                    this._sortColumn = t, this._rows = e, this._defaultSortOrderCb = s
                }
                sort() {
                    const t = this._sortColumn.getSortMethod(),
                        e = this._sortColumn.getThIndex();
                    if (!_.MAPPERS[t] || !_.SORTERS[t]) return;
                    const s = [],
                        E = [];
                    this._rows.forEach((s, i) => {
                        E.push([i, _.MAPPERS[t](s, e)])
                    });
                    const i = this;
                    E.sort((e, s) => {
                        let E = _.SORTERS[t].call(i._sortColumn, e[1], s[1]);
                        return !E && i._defaultSortOrderCb && (E = i._defaultSortOrderCb.call(i._sortColumn, i._rows[e[0]], i._rows[s[0]])), E
                    });
                    for (let t = 0, e = E.length; t < e; t++) {
                        const e = E[t],
                            _ = this._rows[e[0]];
                        s.push(_)
                    }
                    return s
                }
            }
            class r {
                constructor(t, e, s, _, E, i) {
                    this._tableId = t, this._theadIndex = e, this._thType = s, this._thIndex = _, this._sortMethod = E, this._direction = i, this._defaultDirection = i, this._isActive = !1
                }
                isActive() {
                    return this._isActive
                }
                setActive(t = !0) {
                    this._isActive = t
                }
                switchDirection() {
                    this._direction == _.SORT_DIRECTION_ASC ? this._direction = _.SORT_DIRECTION_DESC : this._direction = _.SORT_DIRECTION_ASC
                }
                getDirection() {
                    return this._direction
                }
                getType() {
                    return this._thType
                }
                getTheadIndex() {
                    return this._theadIndex
                }
                getThIndex() {
                    return this._thIndex
                }
                getSelector() {
                    return ("#" + this._tableId).replace(/\./g, "\\.") + " .table__header"
                }
                getSortMethod() {
                    return this._sortMethod
                }
                getDefaultDirection() {
                    return this._defaultDirection
                }
            }! function(t) {
                t.SORT_OPTS_INDEX_METHOD = 0, t.SORT_OPTS_INDEX_DIRECTION = 1, t.SORT_OPTS_INDEX_PRIORITY = 2
            }(E || (E = {}));
            class a {
                constructor(t) {
                    this._sortColumns = {}, this._doc = t, this.getListener = this.getListener.bind(this)
                }
                prepare(t, e, s = (() => 0)) {
                    this._contentWrapper = t, this._sortOpts = e, this._defaultOrderCb = s, this._bindArrowClick()
                }
                cleanup() {
                    this._contentWrapper && this._unbindArrowClick()
                }
                init(t, e = !1) {
                    if (null === t) return;
                    const s = t.getAttribute("id");
                    null !== s && t.querySelectorAll(".table__header").forEach(((t, s) => (_, E) => {
                        const i = t._getGroupId(s, E),
                            r = e || !t._sortColumns[i];
                        return _.querySelectorAll(".table__cell").forEach(((t, s, _) => (E, i) => !!t._addSortColumn(s, _, E, i, e))(t, s, E)), r && t._setDefaultSortColumn(i), !!t._sort(i)
                    })(this, s))
                }
                showHidden(t, e, s) {
                    t && (t = "#" + t + " ");
                    const _ = this._doc.querySelector(t + "#" + e + " .table__body");
                    if (!_) return;
                    const E = parseInt(_.dataset.visibleRows);
                    let i = _.querySelectorAll(".table__row.hidden:not(.filtered-out)");
                    s && (i = Array.prototype.slice.call(i, 0, s)), i.forEach(t => {
                        t.classList.remove("hidden")
                    }), E && (_.dataset.visibleRows = (E + i.length).toString()), this.toggleShowMore(_)
                }
                toggleShowMore(t) {
                    const e = t.querySelectorAll(".table__row.hidden").length,
                        s = t.querySelectorAll(".table__row.hidden.filtered-out").length,
                        _ = t.parentElement;
                    if (_) {
                        const t = _.querySelector(".table__foot--show_more_link");
                        t && t.classList.toggle("hidden", e - s == 0)
                    }
                }
                _addSortColumn(t, e, s, _, i) {
                    const a = s.dataset.type;
                    if (!this._sortOpts || !this._sortOpts[a]) return;
                    const n = this._getGroupId(t, e),
                        o = this._getColId(a, _);
                    if (i && (this._sortColumns[n] = {}), !this._sortColumns[n] || !this._sortColumns[n][o]) {
                        const s = this._sortOpts[a][E.SORT_OPTS_INDEX_METHOD],
                            i = this._sortOpts[a][E.SORT_OPTS_INDEX_DIRECTION];
                        this._sortColumns[n] || (this._sortColumns[n] = {}), this._sortColumns[n][o] = new r(t, e, a, _, s, i)
                    }
                    return s.classList.contains("gTableSort-switch") ? void 0 : this._wrapHeaderColumnContent(s)
                }
                _wrapHeaderColumnContent(t) {
                    return t.classList.add("gTableSort-switch"), t
                }
                _getGroupId(t, e) {
                    return t + "-" + e
                }
                _getColId(t, e) {
                    return t + "-" + e
                }
                _getActiveSortColumn(t) {
                    if (null != this._sortColumns[t])
                        for (const e in this._sortColumns[t]) {
                            const s = this._sortColumns[t][e];
                            if (s.isActive()) return s
                        }
                }
                _setSortColumn(t, e, s = !1) {
                    if (null == this._sortColumns[t]) return;
                    let _;
                    s && (_ = this._getActiveSortColumn(t));
                    for (const s in this._sortColumns[t]) {
                        const E = this._sortColumns[t][s];
                        s == e ? (E.setActive(!0), _ && _ == E && E.switchDirection()) : E.setActive(!1)
                    }
                }
                _setDefaultSortColumn(t) {
                    if (!this._sortColumns[t]) return;
                    let e, s = -9999;
                    for (const _ in this._sortColumns[t]) {
                        const i = this._sortColumns[t][_].getType(),
                            r = this._sortOpts && this._sortOpts[i] && this._sortOpts[i][E.SORT_OPTS_INDEX_PRIORITY] ? this._sortOpts[i][E.SORT_OPTS_INDEX_PRIORITY] : 0;
                        s < r && (e = _, s = r)
                    }
                    e && this._setSortColumn(t, e)
                }
                _sort(t) {
                    const e = this._getActiveSortColumn(t);
                    if (!e) return;
                    const s = this._doc.querySelectorAll(e.getSelector()).item(e.getTheadIndex());
                    if (!s) return;
                    const _ = s.nextElementSibling;
                    if (!_) return;
                    const E = e.getThIndex();
                    s.querySelectorAll(".table__cell").forEach(((t, e, s) => (t, _) => {
                        if (t.classList.remove("cell--sorted", "cell--reverseSorted"), _ === e) {
                            const e = "asc" == s.getDirection() ? "cell--sorted" : "cell--reverseSorted";
                            t.classList.add(e)
                        }
                    })(0, E, e));
                    const r = _.querySelectorAll(".table__row"),
                        a = new i(e, r, this._defaultOrderCb).sort();
                    return a ? (a.forEach(t => {
                        t.querySelectorAll(".table__cell").forEach((t, e) => {
                            e == E ? t.classList.add("cell--sorted") : t.classList.remove("cell--sorted")
                        })
                    }), r.forEach(t => {
                        const e = t.parentNode;
                        e && e.removeChild(t)
                    }), a.forEach(t => {
                        _.append(t)
                    }), _) : void 0
                }
                _bindArrowClick() {
                    this._contentWrapper.addEventListener("click", this.getListener)
                }
                _unbindArrowClick() {
                    this._contentWrapper.removeEventListener("click", this.getListener)
                }
                getListener(t) {
                    if (!t) return;
                    if (!t.target || !t.target.matches(".table__header .table__cell")) return;
                    const e = t.target,
                        s = e.dataset.type;
                    if (!s) return;
                    const _ = e.closest(".table"),
                        E = e.closest(".table__header");
                    if (!_ || !E) return;
                    const i = _.getAttribute("id"),
                        r = this._getNodeIndex(E, ".table__header", 2),
                        a = this._getNodeIndex(e),
                        n = this._getGroupId(i, r),
                        o = this._getColId(s, a);
                    return this._setSortColumn(n, o, !0), this._sort(n), t.preventDefault(), t.stopPropagation()
                }
                _getNodeIndex(t, e = "*", s = 1) {
                    let _ = t.parentElement;
                    if (_) {
                        for (let t = 1; t < s; t++) _ = _.parentElement || _;
                        const E = _.querySelectorAll(e);
                        for (let e = 0, s = E.length; e < s; e++)
                            if (E[e] == t) return e
                    }
                    return -1
                }
            }
        },
        171: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return n
            }));
            var _ = s(18),
                E = s(72),
                i = s(2),
                r = s(15);
            class a {
                constructor(t, e, s, _, E) {
                    this.id = t, this.defaultBundleUuid = e, this.streamTypeId = s, this.isPurchasable = _, this.isActive = E
                }
                getId() {
                    return this.id
                }
                getDefaultBundleUuid() {
                    return this.defaultBundleUuid
                }
                getSteamTypeId() {
                    return this.streamTypeId
                }
                getIsPurchasable() {
                    return this.isPurchasable
                }
                getIsActive() {
                    return this.isActive
                }
                isScheduled() {
                    return this.getSteamTypeId() == r.a.SCHEDULED
                }
                isLive() {
                    return this.getSteamTypeId() == r.a.LIVE
                }
                isPaused() {
                    return this.getSteamTypeId() == r.a.PAUSED
                }
                isFinished() {
                    return this.getSteamTypeId() == r.a.FINISHED
                }
                isCanceled() {
                    return this.getSteamTypeId() == r.a.CANCELED
                }
                isUnavailable() {
                    return this.getSteamTypeId() == r.a.UNAVAILABLE
                }
            }
            class n extends _.a {
                constructor() {
                    super(...arguments), this.channels = new E.a, this.bundleUuid = "", this.streamTypeIds = [], this.channelIds = [], this.purchasable = [], this.active = []
                }
                startRow() {
                    this.bundleUuid = "", this.streamTypeIds = [], this.channelIds = [], this.purchasable = []
                }
                endRow() {
                    this.channelIds.forEach((t, e) => {
                        this.channels.add(new a(t, this.bundleUuid, this.streamTypeIds[e], this.purchasable[e], this.active[e]))
                    })
                }
                parse(t, e) {
                    switch (t) {
                        case i.a.TVINDEXES_BUNDLE_UUID:
                            this.bundleUuid = this.getString(e);
                            break;
                        case i.a.TVINDEXES_CHANNELS_STREAM_TYPE_ID:
                            this.streamTypeIds.push(this.getNumberValueOf(e));
                            break;
                        case i.a.TVINDEXES_CHANNEL_ID:
                            this.channelIds.push(this.getNumberValueOf(e));
                            break;
                        case i.a.TVINDEXES_BUNDLE_IS_PURCHASABLE:
                            this.purchasable.push(this.getBooleanValueOf(e));
                            break;
                        case i.a.TVINDEXES_BUNDLE_IS_ACTIVE:
                            this.active.push(this.getBooleanValueOf(e));
                            break;
                        case "A1":
                            this.channels.setSignature(this.getString(e))
                    }
                }
                getParsedModel() {
                    return this.channels
                }
            }
        },
        172: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return n
            }));
            class _ {
                constructor(t, e) {
                    this._content = t, this._button = e
                }
                getButton() {
                    return this._button
                }
                getContent() {
                    return this._content
                }
                getDataForTemplate() {
                    return {
                        OH_1: this.getContent(),
                        OH_2: this.getButton()
                    }
                }
            }
            class E {
                constructor() {
                    this._textPairs = []
                }
                batchBuild(t) {
                    if (t) try {
                        const e = JSON.parse(t);
                        if (e && e.length > 0)
                            for (const t of e) {
                                let e = "",
                                    s = "";
                                t.OH_1 && "string" == typeof t.OH_1 && (e = t.OH_1), t.OH_2 && "string" == typeof t.OH_2 && (s = t.OH_2), this._textPairs.push(new _(e, s))
                            }
                    } catch (t) {}
                    return this._textPairs
                }
            }
            var i, r = s(8);
            ! function(t) {
                t.YES = "y", t.NO = "n"
            }(i || (i = {}));
            class a {
                constructor(t, e, s, _, E, i) {
                    this._bookmakerSetting = t, this._bookmakerId = e, this._url = s, this._eventStageTypeId = _, this._textPairs = E, this._gaTracking = i
                }
                getDataForTemplate() {
                    const t = [];
                    for (const e of this._textPairs) t.push(e.getDataForTemplate());
                    return {
                        liveBettingStripUrl: this._url,
                        liveBettingStripText: t,
                        GAeventTracking: this._gaTracking
                    }
                }
                isEnabled() {
                    const t = void 0 !== this._bookmakerSetting[this._bookmakerId] && this._bookmakerSetting[this._bookmakerId] == i.YES;
                    return this._eventStageTypeId === r.a.LIVE && t
                }
            }
            class n {
                constructor() {
                    this._url = "", this._eventStageTypeId = 0, this._rawTextJson = "", this._gaTracking = !1
                }
                setBookmakerSetting(t) {
                    return this._bookmakerSetting = t, this
                }
                setBookmakerId(t) {
                    return this._bookmakerId = t, this
                }
                setUrl(t) {
                    return this._url = t, this
                }
                setEventStageTypeId(t) {
                    return this._eventStageTypeId = t, this
                }
                setRawTextJson(t) {
                    return this._rawTextJson = t, this
                }
                setGaTracking(t) {
                    return this._gaTracking = t, this
                }
                build() {
                    return this._textPairs = (new E).batchBuild(this._rawTextJson), new a(this._bookmakerSetting, this._bookmakerId, this._url, this._eventStageTypeId, this._textPairs, this._gaTracking)
                }
            }
        },
        173: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return r
            }));
            var _ = s(2);
            class E {
                constructor(t, e, s, _, E, i, r, a) {
                    this._tvId = t, this._url = e, this._name = s, this._imageUrl = _, this._imageOffset = E, this._bookmakerId = i, this._text = r, this._isLiveStream = a
                }
                getTvId() {
                    return this._tvId
                }
                getUrl() {
                    return this._url
                }
                getName() {
                    return this._name
                }
                getImageUrl() {
                    return this._imageUrl
                }
                getImageOffset() {
                    return this._imageOffset
                }
                getBookmakerId() {
                    return this._bookmakerId
                }
                getText() {
                    return this._text
                }
                isLiveStream() {
                    return this._isLiveStream
                }
            }
            class i {
                constructor() {
                    this._tvId = 0, this._url = "", this._name = "", this._imageUrl = "", this._imageOffset = 0, this._bookmakerId = 0, this._text = "", this._isLiveStream = !1
                }
                createFromDataObject(t) {
                    return "object" == typeof t && t && (t.TVI && this.setTvId(parseInt(t.TVI)), t.BU && this.setUrl(t.BU), t.BN && this.setName(t.BN), t[_.a.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_NAME] && (this.setName(t[_.a.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_NAME]), this.setIsLiveStream(!0)), t.IU && this.setImageUrl(t.IU), t.IO && this.setImageOffset(t.IO), t.BI && this.setBookmakerId(parseInt(t.BI)), t.BT && this.setText(t.BT)), this.build()
                }
                build() {
                    return new E(this._tvId, this._url, this._name, this._imageUrl, this._imageOffset, this._bookmakerId, this._text, this._isLiveStream)
                }
                setTvId(t) {
                    return this._tvId = t, this
                }
                setUrl(t) {
                    return this._url = t, this
                }
                setName(t) {
                    return this._name = t, this
                }
                setImageUrl(t) {
                    return this._imageUrl = t, this
                }
                setImageOffset(t) {
                    return this._imageOffset = t, this
                }
                setBookmakerId(t) {
                    return this._bookmakerId = t, this
                }
                setText(t) {
                    return this._text = t, this
                }
                setIsLiveStream(t) {
                    return this._isLiveStream = t, this
                }
            }
            class r {
                constructor(t, e) {
                    this._tvBroadcasts = {}, this._streamingBroadcasts = {}, this._highlightProviders = {}, this._rawData = t, this._utilTrans = e, this._prepare()
                }
                _prepare() {
                    this._prepareItems(1, this._tvBroadcasts), this._prepareItems(2, this._streamingBroadcasts), this._prepareItems(_.a.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_INDEX, this._highlightProviders)
                }
                _prepareItems(t, e) {
                    this._rawData && this._rawData[t] && Object.keys(this._rawData[t]).forEach((s, _) => {
                        e[_] = (new i).createFromDataObject(this._rawData[t][s])
                    })
                }
                getTvBroadcasts() {
                    return this._tvBroadcasts
                }
                getStreamingBroadcasts() {
                    return this._streamingBroadcasts
                }
                getHighlightProviders() {
                    return this._highlightProviders
                }
                getTvBroadcastsDataForTemplate() {
                    const t = [],
                        e = this.getTvBroadcasts();
                    for (const s in e) t.push({
                        name: e[s].getName(),
                        url: e[s].getUrl()
                    });
                    return t
                }
                getStreamingBroadcastsDataForTemplate() {
                    const t = [];
                    return [this.getStreamingBroadcasts(), this.getHighlightProviders()].forEach(e => {
                        for (const s in e) t.push({
                            name: e[s].getName(),
                            url: e[s].getUrl(),
                            text: e[s].getText(),
                            isLiveStream: e[s].isLiveStream()
                        })
                    }), t
                }
                getDataForTemplate() {
                    return {
                        liveStreaming: this.getStreamingBroadcastsDataForTemplate(),
                        tvChannel: this.getTvBroadcastsDataForTemplate(),
                        title: this._utilTrans.translate("TRANS_DETAIL_BOOKMARK_TV_LIVE_STREAMING"),
                        titleLiveStreaming: this._utilTrans.translate("TRANS_LIVE_STREAMING"),
                        titleTvChannel: this._utilTrans.translate("TRANS_TV_CHANNEL")
                    }
                }
            }
        },
        174: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return i
            }));
            class _ {
                constructor(t, e, s, _, E, i, r, a, n, o, S) {
                    this._id = t, this._typeId = e, this._label = s, this._text = _, this._premiumStatusId = E, this._bookmakerId = i, this._bonusTextColor = r, this._bonusBackgroundColor = a, this._name = n, this._bookmakerLogoWithLink = o, this._url = S
                }
                getId() {
                    return this._id
                }
                getTypeId() {
                    return this._typeId
                }
                getLabel() {
                    return this._label
                }
                getText() {
                    return this._text
                }
                getPremiumStatusId() {
                    return this._premiumStatusId
                }
                getBookmakerId() {
                    return this._bookmakerId
                }
                getTextColor() {
                    return this._bonusTextColor
                }
                getBackgroundColor() {
                    return this._bonusBackgroundColor
                }
                getName() {
                    return this._name
                }
                getBookmakerLogoWithLink() {
                    return this._bookmakerLogoWithLink
                }
                getUrl() {
                    return this._url
                }
                getEscapedLabel() {
                    return this.getLabel().replace("'", "\\'")
                }
                getDataForTemplate() {
                    return {
                        url: this.getUrl(),
                        text: this.getText(),
                        label: this.getLabel(),
                        escapedLabel: this.getEscapedLabel(),
                        backgroundColor: this.getBackgroundColor(),
                        textColor: this.getTextColor()
                    }
                }
                hasBonusData() {
                    return !!this.getUrl()
                }
            }
            class E {
                constructor() {
                    this._id = 0, this._typeId = 1, this._label = "", this._text = "", this._premiumStatusId = 1, this._bookmakerId = 0, this._bonusTextColor = "", this._bonusBackgroundColor = "", this._name = "", this._bookmakerLogoWithLink = "", this._url = ""
                }
                createFromDataObject(t) {
                    return "object" == typeof t && t && (t.id && this.setId(parseInt(t.id)), t.type_id && this.setTypeId(parseInt(t.type_id)), t.label && this.setLabel(t.label), t.text && this.setText(t.text), t.premium_status_id && this.setPremiumStatusId(parseInt(t.premium_status_id)), t.bookmaker_id && this.setBookmakerId(parseInt(t.bookmaker_id)), t.bonus_text_color && this.setBonusTextColor(t.bonus_text_color), t.bonus_background_color && this.setBonusBackgroundColor(t.bonus_background_color), t.name && this.setName(t.name), t.bookmaker && this.setBookmakerLogoWithLink(t.bookmaker), t.url && this.setUrl(t.url)), this.build()
                }
                build() {
                    return new _(this._id, this._typeId, this._label, this._text, this._premiumStatusId, this._bookmakerId, this._bonusTextColor, this._bonusBackgroundColor, this._name, this._bookmakerLogoWithLink, this._url)
                }
                setId(t) {
                    return this._id = t, this
                }
                setTypeId(t) {
                    return this._typeId = t, this
                }
                setLabel(t) {
                    return this._label = t, this
                }
                setText(t) {
                    return this._text = t, this
                }
                setPremiumStatusId(t) {
                    return this._premiumStatusId = t, this
                }
                setBookmakerId(t) {
                    return this._bookmakerId = t, this
                }
                setBonusTextColor(t) {
                    return this._bonusTextColor = t, this
                }
                setBonusBackgroundColor(t) {
                    return this._bonusBackgroundColor = t, this
                }
                setName(t) {
                    return this._name = t, this
                }
                setBookmakerLogoWithLink(t) {
                    return this._bookmakerLogoWithLink = t, this
                }
                setUrl(t) {
                    return this._url = t, this
                }
            }
            class i {
                constructor(t, e, s, _, E) {
                    this._matchSummaryBonuses = [], this._matchSummaryLiveBonuses = [], this._oddsComparisonBonuses = [], this._rawData = t, this._detailBonusLimit = e, this._bookmakerIds = s, this._liveBookmakerIds = _, this._utilTrans = E, this._prepare()
                }
                _prepare() {
                    if (this._rawData && (this._rawData[1] && this._rawData[1].map(t => (new E).createFromDataObject(t)).forEach(this._separateToMatchBonuses.bind(this)), this._rawData[2])) {
                        const t = [];
                        this._rawData[2].map(t => (new E).createFromDataObject(t)).forEach(this._separateByPremiumStatusId(t)), this._fillFreeSlotsWithRandomNonPremiumBookmakers(t)
                    }
                }
                _separateToMatchBonuses(t) {
                    this._bookmakerIds.indexOf(t.getBookmakerId()) > -1 && this._matchSummaryBonuses.push(t), this._liveBookmakerIds.indexOf(t.getBookmakerId()) > -1 && this._matchSummaryLiveBonuses.push(t)
                }
                _separateByPremiumStatusId(t) {
                    return (e, s) => {
                        1 === e.getPremiumStatusId() && this._detailBonusLimit > s + 1 ? this._oddsComparisonBonuses.push(e) : t.push(e)
                    }
                }
                _fillFreeSlotsWithRandomNonPremiumBookmakers(t) {
                    const e = this._detailBonusLimit - this._oddsComparisonBonuses.length;
                    for (let s = 0; s < e && t.length > 0; s++) {
                        const e = Math.floor(Math.random() * t.length),
                            [s] = t.splice(e, 1);
                        this._oddsComparisonBonuses.push(s)
                    }
                }
                getMatchSummaryPrematchBonuses() {
                    return this._matchSummaryBonuses
                }
                getMatchSummaryLiveBonuses() {
                    return this._matchSummaryLiveBonuses
                }
                getOddsComparisonBonuses() {
                    return this._oddsComparisonBonuses
                }
                getMatchSummaryBonusByBookmakerId(t) {
                    return this._getMatchSummaryBonusByBookmakerIdFromStorage(t, this._matchSummaryBonuses)
                }
                getMatchSummaryLiveBonusByBookmakerId(t) {
                    return this._getMatchSummaryBonusByBookmakerIdFromStorage(t, this._matchSummaryLiveBonuses)
                }
                getOddsComparisonBonusByBookmakerId(t) {
                    return this._getMatchSummaryBonusByBookmakerIdFromStorage(t, this._oddsComparisonBonuses)
                }
                _getMatchSummaryBonusByBookmakerIdFromStorage(t, e) {
                    let s = (new E).build();
                    const _ = e.filter(e => e.getBookmakerId() === t);
                    return _[0] && (s = _[0]), s
                }
                hasBonusData() {
                    return this._matchSummaryBonuses.length > 0
                }
                hasLiveBonusData() {
                    return this._matchSummaryLiveBonuses.length > 0
                }
                getDataForTemplate() {
                    return {
                        title: this._utilTrans.translate("TRANS_DETAIL_BOOKMARK_BONUS_OFFERS"),
                        bookmakers: this.getOddsComparisonBonuses().map(t => ({
                            bookmaker: t.getBookmakerLogoWithLink(),
                            url: t.getUrl(),
                            text: t.getText(),
                            label: t.getLabel(),
                            escapedLabel: t.getEscapedLabel()
                        }))
                    }
                }
            }
        },
        18: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return E
            }));
            var _ = s(26);
            class E {
                constructor() {
                    this.properties = null, this.isArray = t => Array.isArray(t), this.isString = t => "string" == typeof t, this.isBoolean = t => "boolean" == typeof t, this.isNumber = t => "number" == typeof t, this.allowEmptyArrayOrCheckElements = (t, e) => {
                        const s = this.isArray(t);
                        return s && 0 === t.length || s && t.length > 0 && t.every(e)
                    }, this.isStringArray = t => this.allowEmptyArrayOrCheckElements(t, this.isString), this.isBooleanArray = t => this.allowEmptyArrayOrCheckElements(t, this.isBoolean), this.isNumberArray = t => this.allowEmptyArrayOrCheckElements(t, this.isNumber), this.getString = t => {
                        if (this.isString(t)) return t;
                        throw new Error(`GetString cannot parse ${t} of type ${typeof t}.`)
                    }, this.getStringArray = t => {
                        if (this.isStringArray(t)) return t;
                        if (this.isString(t)) return t.includes(_.a.DELIMITER_ARRAY) ? t.split(_.a.DELIMITER_ARRAY) : [t];
                        throw new Error(`GetStringArray cannot parse ${t} of type ${typeof t}.`)
                    }, this.getNumberValueOf = t => this.parseNumber(t, parseInt), this.getFloatValueOf = t => this.parseNumber(t, parseFloat), this.parseNumber = (t, e) => {
                        if (this.isNumber(t)) return t;
                        if (this.isString(t)) return e(this.getString(t));
                        throw new Error(`GetNumberValueOf cannot parse ${t} of type ${typeof t}.`)
                    }, this.getNumberValuesOf = t => {
                        if (this.isNumberArray(t)) return t;
                        if (this.isNumber(t)) return [t];
                        if (this.isStringArray(t)) return t.map(this.getNumberValueOf);
                        if (this.isString(t)) return this.getStringArray(t).map(this.getNumberValueOf);
                        throw new Error(`GetNumberValuesOf cannot parse ${t} of type ${typeof t}.`)
                    }, this.getBooleanValueOf = t => {
                        if (this.isBoolean(t)) return t;
                        if (this.isNumber(t)) return !!t;
                        if (this.isString(t)) return "true" === t || "1" === t;
                        throw new Error(`GetBooleanValueOf cannot parse ${t} of type ${typeof t}.`)
                    }, this.getBooleanValuesOf = t => {
                        if (this.isBooleanArray(t)) return t;
                        if (this.isNumberArray(t)) return t.map(this.getBooleanValueOf);
                        if (this.isStringArray(t)) return t.map(this.getBooleanValueOf);
                        if (this.isString(t)) return this.getStringArray(t).map(this.getBooleanValueOf);
                        throw new Error(`GetBooleanValuesOf cannot parse ${t} of type ${typeof t}.`)
                    }, this.getJsonValueOf = t => JSON.parse(this.getString(t))
                }
                setProperties(t) {
                    this.properties = t
                }
                startFeed() {}
                endFeed() {}
                startRow() {}
                endRow() {}
                parse(t, e) {}
            }
        },
        184: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return E
            }));
            class _ {
                constructor() {
                    this.KNOCKOUT = 91, this.TECHNICAL_KNOCKOUT = 92, this.POINTS = 93, this.PUNCHES = 94, this.UNANIMOUS = 96, this.SPLIT = 97, this.PUNCH = 98, this.GUILLOTINE_CHOKE = 99, this.FLYING_KNEE = 100, this.TRIANGLE_CHOKE = 101, this.ARM_TRIANGLE_CHOKE = 102, this.SUPLEX_AND_PUNCHES = 103, this.REAR_NAKED_CHOKE = 104, this.MAJORITY = 105, this.ARMBAR = 106, this.STRAIGHT_ARMBAR = 107, this.UPKICK = 108, this.BROKEN_EYE_SOCKET = 109, this.CORNER_STOPPAGE = 110, this.KNEE = 111, this.KIMURA = 112, this.ELBOW = 113, this.KEYLOCK = 114, this.ILLEGAL_DOWNWARD_ELBOWS = 115, this.INJURY = 116, this.BRABO_CHOKE = 117, this.HEAD_KICK = 118, this.KICK = 119, this.CUT = 120, this.DOCTOR_STOPPAGE = 121, this.SOCCER_KICKS = 122, this.NECK_CRANK = 123, this.KICK_AND_PUNCHES = 124, this.ELBOWS_AND_PUNCHES = 125, this.HEAD_KICK_AND_PUNCHES = 126, this.KICK_TO_THE_BODY = 127, this.JUDGING_ERROR = 128, this.ARMLOCK = 129, this.LEGLOCK = 130, this.HEEL_HOOK = 131, this.SHOULDER_CHOKE = 132, this.CALF_SLICER = 133, this.OVERTURNED_BY_CSAC = 134, this.ILLEGAL_KICK = 135, this.KNEE_TO_THE_BODY = 136, this.KNEE_AND_PUNCHES = 137, this.RETIREMENT = 138, this.NORTH_SOUTH_CHOKE = 139, this.ACHILLES_LOCK = 140, this.OMOPLATA = 141, this.SPINNING_HEEL_KICK = 142, this.FRONT_KICK_AND_PUNCHES = 143, this.FRONT_KICK = 144, this.KNEE_TO_THE_RIBS = 145, this.KNEEBAR = 146, this.STOMPS = 147, this.SUBMISSION = 148, this.JAPANESE_NECKTIE = 149, this.NO_CONTEST = 156, this.ANACONDA_CHOKE = 167, this.BODY_KICK_AND_PUNCHES = 168, this.CHOKE = 169, this.FLYING_KNEE_AND_PUNCHES = 171, this.SPLIT_DECISION = 172, this.MAJORITY_DECISION = 173, this.UNANIMOUS_DECISION = 174, this.SPLIT_DECISION_DRAW = 175, this.MAJORITY_DRAW = 176, this.TECHNICAL_DECISION = 177, this.DISQUALIFIED = 201
                }
                getIncidents() {
                    return {
                        [this.KNOCKOUT]: "TRANS_%s_RESULT_KO",
                        [this.TECHNICAL_KNOCKOUT]: "TRANS_%s_RESULT_TKO",
                        [this.POINTS]: "TRANS_%s_RESULT_POINTS",
                        [this.SUBMISSION]: "TRANS_%s_RESULT_SUBMISSION",
                        [this.NO_CONTEST]: "TRANS_%s_RESULT_NO_CONTEST",
                        [this.DISQUALIFIED]: "TRANS_%s_RESULT_DISQUALIFIED"
                    }
                }
                getIncidentsShort() {
                    return {
                        [this.KNOCKOUT]: "TRANS_%s_RESULT_SHORT_KO",
                        [this.TECHNICAL_KNOCKOUT]: "TRANS_%s_RESULT_SHORT_TKO",
                        [this.POINTS]: "TRANS_%s_RESULT_SHORT_POINTS",
                        [this.SUBMISSION]: "TRANS_%s_RESULT_SHORT_SUBMISSION",
                        [this.NO_CONTEST]: "TRANS_%s_RESULT_SHORT_NO_CONTEST",
                        [this.DISQUALIFIED]: "TRANS_%s_RESULT_SHORT_DISQUALIFIED"
                    }
                }
                getSubIncidents() {
                    return {
                        [this.PUNCHES]: "TRANS_%s_RESULT_PUNCHES",
                        [this.UNANIMOUS]: "TRANS_%s_RESULT_UNANIMOUS",
                        [this.SPLIT]: "TRANS_%s_RESULT_SPLIT",
                        [this.PUNCH]: "TRANS_%s_RESULT_PUNCH",
                        [this.GUILLOTINE_CHOKE]: "TRANS_%s_RESULT_GUILLOTINE_CHOKE",
                        [this.FLYING_KNEE]: "TRANS_%s_RESULT_FLYING_KNEE",
                        [this.TRIANGLE_CHOKE]: "TRANS_%s_RESULT_TRIANGLE_CHOKE",
                        [this.ARM_TRIANGLE_CHOKE]: "TRANS_%s_RESULT_ARM_TRIANGLE_CHOKE",
                        [this.SUPLEX_AND_PUNCHES]: "TRANS_%s_RESULT_SUPLEX_AND_PUNCHES",
                        [this.REAR_NAKED_CHOKE]: "TRANS_%s_RESULT_REAR_NAKED_CHOKE",
                        [this.MAJORITY]: "TRANS_%s_RESULT_MAJORITY",
                        [this.ARMBAR]: "TRANS_%s_RESULT_ARMBAR",
                        [this.STRAIGHT_ARMBAR]: "TRANS_%s_RESULT_STRAIGHT_ARMBAR",
                        [this.UPKICK]: "TRANS_%s_RESULT_UPKICK",
                        [this.BROKEN_EYE_SOCKET]: "TRANS_%s_RESULT_BROKEN_EYE_SOCKET",
                        [this.CORNER_STOPPAGE]: "TRANS_%s_RESULT_CORNER_STOPPAGE",
                        [this.KNEE]: "TRANS_%s_RESULT_KNEE",
                        [this.KIMURA]: "TRANS_%s_RESULT_KIMURA",
                        [this.ELBOW]: "TRANS_%s_RESULT_ELBOW",
                        [this.KEYLOCK]: "TRANS_%s_RESULT_KEYLOCK",
                        [this.ILLEGAL_DOWNWARD_ELBOWS]: "TRANS_%s_RESULT_ILLEGAL_DOWNWARD_ELBOWS",
                        [this.INJURY]: "TRANS_%s_RESULT_INJURY",
                        [this.BRABO_CHOKE]: "TRANS_%s_RESULT_BRABO_CHOKE",
                        [this.HEAD_KICK]: "TRANS_%s_RESULT_HEAD_KICK",
                        [this.KICK]: "TRANS_%s_RESULT_KICK",
                        [this.CUT]: "TRANS_%s_RESULT_CUT",
                        [this.DOCTOR_STOPPAGE]: "TRANS_%s_RESULT_DOCTOR_STOPPAGE",
                        [this.SOCCER_KICKS]: "TRANS_%s_RESULT_SOCCER_KICKS",
                        [this.NECK_CRANK]: "TRANS_%s_RESULT_NECK_CRANK",
                        [this.KICK_AND_PUNCHES]: "TRANS_%s_RESULT_KICK_AND_PUNCHES",
                        [this.ELBOWS_AND_PUNCHES]: "TRANS_%s_RESULT_ELBOWS_AND_PUNCHES",
                        [this.HEAD_KICK_AND_PUNCHES]: "TRANS_%s_RESULT_HEAD_KICK_AND_PUNCHES",
                        [this.KICK_TO_THE_BODY]: "TRANS_%s_RESULT_KICK_TO_THE_BODY",
                        [this.JUDGING_ERROR]: "TRANS_%s_RESULT_JUDGING_ERROR",
                        [this.ARMLOCK]: "TRANS_%s_RESULT_ARMLOCK",
                        [this.LEGLOCK]: "TRANS_%s_RESULT_LEGLOCK",
                        [this.HEEL_HOOK]: "TRANS_%s_RESULT_HEEL_HOOK",
                        [this.SHOULDER_CHOKE]: "TRANS_%s_RESULT_SHOULDER_CHOKE",
                        [this.CALF_SLICER]: "TRANS_%s_RESULT_CALF_SLICER",
                        [this.OVERTURNED_BY_CSAC]: "TRANS_%s_RESULT_OVERTURNED_BY_CSAC",
                        [this.ILLEGAL_KICK]: "TRANS_%s_RESULT_ILLEGAL_KICK",
                        [this.KNEE_TO_THE_BODY]: "TRANS_%s_RESULT_KNEE_TO_THE_BODY",
                        [this.KNEE_AND_PUNCHES]: "TRANS_%s_RESULT_KNEE_AND_PUNCHES",
                        [this.RETIREMENT]: "TRANS_%s_RESULT_RETIREMENT",
                        [this.NORTH_SOUTH_CHOKE]: "TRANS_%s_RESULT_NORTH_SOUTH_CHOKE",
                        [this.ACHILLES_LOCK]: "TRANS_%s_RESULT_ACHILLES_LOCK",
                        [this.OMOPLATA]: "TRANS_%s_RESULT_OMOPLATA",
                        [this.SPINNING_HEEL_KICK]: "TRANS_%s_RESULT_SPINNING_HEEL_KICK",
                        [this.FRONT_KICK_AND_PUNCHES]: "TRANS_%s_RESULT_FRONT_KICK_AND_PUNCHES",
                        [this.FRONT_KICK]: "TRANS_%s_RESULT_FRONT_KICK",
                        [this.KNEE_TO_THE_RIBS]: "TRANS_%s_RESULT_KNEE_TO_THE_RIBS",
                        [this.KNEEBAR]: "TRANS_%s_RESULT_KNEEBAR",
                        [this.STOMPS]: "TRANS_%s_RESULT_STOMPS",
                        [this.ANACONDA_CHOKE]: "TRANS_%s_RESULT_ANACONDA_CHOKE",
                        [this.CHOKE]: "TRANS_%s_RESULT_CHOKE",
                        [this.FLYING_KNEE_AND_PUNCHES]: "TRANS_%s_RESULT_FLYING_KNEE_AND_PUNCHES",
                        [this.BODY_KICK_AND_PUNCHES]: "TRANS_%s_RESULT_BODY_KICK_AND_PUNCHES",
                        [this.JAPANESE_NECKTIE]: "TRANS_%s_RESULT_JAPANESE_NECKTIE",
                        [this.SPLIT_DECISION]: "TRANS_%s_RESULT_SPLIT_DECISION",
                        [this.MAJORITY_DECISION]: "TRANS_%s_RESULT_MAJORITY_DECISION",
                        [this.UNANIMOUS_DECISION]: "TRANS_%s_RESULT_UNANIMOUS_DECISION",
                        [this.SPLIT_DECISION_DRAW]: "TRANS_%s_RESULT_SPLIT_DECISION_DRAW",
                        [this.MAJORITY_DRAW]: "TRANS_%s_RESULT_MAJORITY_DRAW",
                        [this.TECHNICAL_DECISION]: "TRANS_%s_RESULT_TECHNICAL_DECISION"
                    }
                }
            }
            class E {
                constructor(t, e) {
                    this._utilTrans = t, this._transKeyUtil = e;
                    const s = new _;
                    this._incidentTrans = s.getIncidents(), this._incidentShortTrans = s.getIncidentsShort(), this._subIncidentTrans = s.getSubIncidents()
                }
                formatResult(t, e) {
                    let s = "";
                    return t && (s += t), t && e && (s += " - "), e && (s += this._utilTrans.translate(this._transKeyUtil.getTransKey("TRANS_%s_ROUND")).replace("%s", String(e))), s
                }
                formatResultShort(t, e) {
                    let s = "";
                    return t && (s += t), t && e && (s += "/"), e && (s += e), s
                }
                getResult(t, e) {
                    return null != t && null != e && this._incidentTrans[t] ? this.formatResult(this._utilTrans.translate(this._transKeyUtil.getTransKey(this._incidentTrans[t])), e) : ""
                }
                getResultShort(t, e) {
                    return null != t && null != e && this._incidentShortTrans[t] ? this.formatResultShort(this._utilTrans.translate(this._transKeyUtil.getTransKey(this._incidentShortTrans[t])), e) : ""
                }
                getSubResult(t) {
                    return null != t && this._subIncidentTrans[t] ? this._utilTrans.translate(this._transKeyUtil.getTransKey(this._subIncidentTrans[t])) : ""
                }
                getTransDraw() {
                    return this._utilTrans.translate(this._transKeyUtil.getTransKey("TRANS_%s_DRAW"))
                }
            }
        },
        2: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return _
            }));
            let _ = (() => {
                class t {}
                return t.ADVERTINDEXES_WRAPPER = "\t\tvar banners;\n\t\tcjs.Api.loader.get('cjs').call(function(_cjs) {\n\t\t\t%s\n\t\t});\n", t.APPLINKSINDEXES_INDEX_EVENT_ID = "SAE", t.APPLINKSINDEXES_INDEX_SPORT_ID = "SAI", t.APPLINKSINDEXES_INDEX_TOURNAMENT_ID = "SAU", t.APPLINKSINDEXES_INDEX_TOURNAMENT_TEMPLATE_ID = "SAT", t.APPLINKSINDEXES_INDEX_VALID = "VVV", t.BALLBYBALLINDEXES_BALL_TYPE = "BBF", t.BALLBYBALLINDEXES_BALL_VALUE = "BBG", t.BALLBYBALLINDEXES_BOWLER_TO_BATSMAN_INFO = "BBE", t.BALLBYBALLINDEXES_NUMBER = "BBB", t.BALLBYBALLINDEXES_RUNS = "BBC", t.BALLBYBALLINDEXES_SCORE = "BBD", t.BALLBYBALLINDEXES_TAB_NAME = "BBA", t.COMMONINDEXES_ACTIVE_LIVE_ODDS = "CO", t.COMMONINDEXES_ACTIVE_LIVE_ODDS_BOOKMAKERS = "CQ", t.COMMONINDEXES_AVAILABLE_TABS = "DU", t.COMMONINDEXES_AVAILABLE_TABS_NEW = "DX", t.COMMONINDEXES_AWAY_3CHAR_NAME = "IZ", t.COMMONINDEXES_AWAY_CRICKET_DECLARED_FIRST_INNING = "EN", t.COMMONINDEXES_AWAY_CRICKET_DECLARED_SECOND_INNING = "EP", t.COMMONINDEXES_AWAY_CRICKET_FIRST_INNING = "EY", t.COMMONINDEXES_AWAY_CRICKET_OVERS_FIRST_INNING = "FB", t.COMMONINDEXES_AWAY_CRICKET_OVERS_SECOND_INNING = "EZ", t.COMMONINDEXES_AWAY_CRICKET_SECOND_INNING = "EV", t.COMMONINDEXES_AWAY_FIRST_OUTS = "ER", t.COMMONINDEXES_AWAY_FT_SCORE = "DH", t.COMMONINDEXES_AWAY_GAME_SCORE = "DQ", t.COMMONINDEXES_AWAY_LOGO = "ED", t.COMMONINDEXES_AWAY_NAME = "EB", t.COMMONINDEXES_AWAY_PARTICIPANT_RANK = "EL", t.COMMONINDEXES_AWAY_RUN_RATE = "ARR", t.COMMONINDEXES_AWAY_SCORE = "DF", t.COMMONINDEXES_AWAY_SECOND_OUTS = "EQ", t.COMMONINDEXES_AWAY_SET_SCORE = "DO", t.COMMONINDEXES_BETTING_TYPE = "DL", t.COMMONINDEXES_COL = "CO", t.COMMONINDEXES_COMMENT = "CO", t.COMMONINDEXES_CRICKET_SENTENCE = "FD", t.COMMONINDEXES_CURRENT_SERVICE_SIDE = "DR", t.COMMONINDEXES_EVENT_END_TIME = "DS", t.COMMONINDEXES_EVENT_GAME_TIME = "DI", t.COMMONINDEXES_EVENT_IMAGE = "DEI", t.COMMONINDEXES_EVENT_INFO = "DM", t.COMMONINDEXES_EVENT_STAGE_ID = "DB", t.COMMONINDEXES_EVENT_STAGE_START_TIME = "DD", t.COMMONINDEXES_EVENT_STAGE_TYPE_ID = "DA", t.COMMONINDEXES_EVENT_START_TIME = "DC", t.COMMONINDEXES_FLAG_ID = "EG", t.COMMONINDEXES_FT_WINNER = "AZ", t.COMMONINDEXES_GOLF_TOTAL_HOLES_PLAYED = "EJ", t.COMMONINDEXES_GROUP = "GR", t.COMMONINDEXES_HASHTAG = "DY", t.COMMONINDEXES_HEADER = "HD", t.COMMONINDEXES_HIGHLIGHTS_RESTRICTIONS = "HR", t.COMMONINDEXES_HOME_3CHAR_NAME = "IY", t.COMMONINDEXES_HOME_CRICKET_DECLARED_FIRST_INNING = "EM", t.COMMONINDEXES_HOME_CRICKET_DECLARED_SECOND_INNING = "EO", t.COMMONINDEXES_HOME_CRICKET_FIRST_INNING = "EW", t.COMMONINDEXES_HOME_CRICKET_OVERS_FIRST_INNING = "FA", t.COMMONINDEXES_HOME_CRICKET_OVERS_SECOND_INNING = "FC", t.COMMONINDEXES_HOME_CRICKET_SECOND_INNING = "ET", t.COMMONINDEXES_HOME_FIRST_OUTS = "EX", t.COMMONINDEXES_HOME_FT_SCORE = "DG", t.COMMONINDEXES_HOME_GAME_SCORE = "DP", t.COMMONINDEXES_HOME_LOGO = "EC", t.COMMONINDEXES_HOME_NAME = "EA", t.COMMONINDEXES_HOME_PARTICIPANT_RANK = "EK", t.COMMONINDEXES_HOME_RUN_RATE = "HRR", t.COMMONINDEXES_HOME_SCORE = "DE", t.COMMONINDEXES_HOME_SECOND_OUTS = "EU", t.COMMONINDEXES_HOME_SET_SCORE = "DN", t.COMMONINDEXES_IS_7_RUGBY = "EI", t.COMMONINDEXES_LAST_SCORE_UPDATE = "DK", t.COMMONINDEXES_MENU = "ME", t.COMMONINDEXES_RESULT_TYPE = "DT", t.COMMONINDEXES_ROOT = "RO", t.COMMONINDEXES_ROW = "RW", t.COMMONINDEXES_ROW_CURRENT = "RWC", t.COMMONINDEXES_ROW_NEWS_EVENT = "RNE", t.COMMONINDEXES_ROW_NEWS_ITEM = "RNI", t.COMMONINDEXES_ROW_NEWS_MORE = "RNM", t.COMMONINDEXES_ROW_POINTS = "RWP", t.COMMONINDEXES_ROW_SCORE = "RWS", t.COMMONINDEXES_SCORE = "SC", t.COMMONINDEXES_SPORT_ID = "DV", t.COMMONINDEXES_TAB = "TAB", t.COMMONINDEXES_TABLE = "TA", t.COMMONINDEXES_TAB_ID = "TI", t.COMMONINDEXES_TEXT = "TE", t.COMMONINDEXES_TEXT_SPEC = "TXS", t.COMMONINDEXES_TOURNAMENT_FULL_NAME = "EE", t.COMMONINDEXES_TOURNAMENT_STAGE_ID = "DW", t.COMMONINDEXES_TOURNAMENT_TEMPLATE_NAME = "EF", t.COMMONINDEXES_TOURNAMENT_TEMPLATE_URL = "EH", t.COMMONINDEXES_UNKNOWN = "", t.COMMONINDEXES_UNKNOWN_PROPERTY = "", t.COMMONINDEXES_VALUE = "VA", t.COMMONINDEXES_WINNER = "DJ", t.COMMONPARTICIPANTINDEXES_EVENT_PARTICIPANT_BIRTH_DATE = "PD", t.COMMONPARTICIPANTINDEXES_EVENT_PARTICIPANT_COUNTRY_ID = "CY", t.COMMONPARTICIPANTINDEXES_EVENT_PARTICIPANT_COUNTRY_NAME = "PC", t.COMMONPARTICIPANTINDEXES_EVENT_PARTICIPANT_RANKING = "PE", t.DCAPIPARTICIPANTINDEXES_TEAM_INFO = "PR", t.DCAPIPARTICIPANTINDEXES_TEAM_INFO_DELETED = "PRD", t.DETAILCOMMONTABSINDEXES_BROADCASTING = "TV", t.DETAILCOMMONTABSINDEXES_CURRENT_GAME_SUMMARY = "MHS", t.DETAILCOMMONTABSINDEXES_CURRENT_GAME_SUMMARY_NEW = "MHSN", t.DETAILCOMMONTABSINDEXES_DRAW = "DR", t.DETAILCOMMONTABSINDEXES_FALL_OF_WICKETS = "FOW", t.DETAILCOMMONTABSINDEXES_HEAD_TO_HEAD = "HH", t.DETAILCOMMONTABSINDEXES_HIGHLIGHTS = "HI", t.DETAILCOMMONTABSINDEXES_HIGHLIGHTS_HAS_ANY_AVAILABLE = "HIN", t.DETAILCOMMONTABSINDEXES_HIGHLIGHTS_HAS_OFFICIAL_AVAILABLE = "HIO", t.DETAILCOMMONTABSINDEXES_HIGHLIGHTS_HAS_TOP_AVAILABLE = "HIT", t.DETAILCOMMONTABSINDEXES_HIGHLIGHTS_HAS_TOP_OFFICIAL_AVAILABLE = "HITO", t.DETAILCOMMONTABSINDEXES_LINEUPS = "LI", t.DETAILCOMMONTABSINDEXES_LIVE_COMMENTS = "LC", t.DETAILCOMMONTABSINDEXES_LIVE_COMMENTS_NEW = "LCN", t.DETAILCOMMONTABSINDEXES_LIVE_TABLE = "LT", t.DETAILCOMMONTABSINDEXES_MATCH_COMMENTS = "MC", t.DETAILCOMMONTABSINDEXES_MATCH_HISTORY = "MH", t.DETAILCOMMONTABSINDEXES_MATCH_HISTORY_NEW = "MHN", t.DETAILCOMMONTABSINDEXES_NEWS_FEED = "NF", t.DETAILCOMMONTABSINDEXES_ODDS = "OD", t.DETAILCOMMONTABSINDEXES_OVERS = "OV", t.DETAILCOMMONTABSINDEXES_PHOTO_REPORT = "PR", t.DETAILCOMMONTABSINDEXES_PITCHERS = "PI", t.DETAILCOMMONTABSINDEXES_PLAYER_STATISTICS = "PS", t.DETAILCOMMONTABSINDEXES_PLAYER_STATISTICS_NEW = "PSN", t.DETAILCOMMONTABSINDEXES_SCRATCHES = "SCR", t.DETAILCOMMONTABSINDEXES_STANDINGS = "TA", t.DETAILCOMMONTABSINDEXES_STATISTICS = "ST", t.DETAILCOMMONTABSINDEXES_STATISTICS_NEW = "STN", t.DETAILCOMMONTABSINDEXES_TOP_SCORERS = "TS", t.DETAILHASHINDEXES_ALL_RESULTS_HASH = "CD", t.DETAILHASHINDEXES_COMMON_HASH = "CA", t.DETAILHASHINDEXES_DRAW_HASH = "CM", t.DETAILHASHINDEXES_FALL_OF_WICKETS_HASH = "FOW", t.DETAILHASHINDEXES_INCIDENT_STATISTICS_HASH = "CE", t.DETAILHASHINDEXES_LINEUP_HASH = "CG", t.DETAILHASHINDEXES_LIVE_ODDS_HASH = "CN", t.DETAILHASHINDEXES_MATCH_COMMENT_HASH = "CV", t.DETAILHASHINDEXES_MATCH_HIGHLIGHTS_HASH = "CL", t.DETAILHASHINDEXES_MATCH_HISTORY_HASH = "CJ", t.DETAILHASHINDEXES_MISSING_PLAYERS_HASH = "MP", t.DETAILHASHINDEXES_NEWSFEED_HASH = "NF", t.DETAILHASHINDEXES_NEW_COMMENT_HASH = "CU", t.DETAILHASHINDEXES_OVERS_HASH = "OV", t.DETAILHASHINDEXES_PITCHER_STATISTICS_HASH = "PI", t.DETAILHASHINDEXES_PLAYER_STATISTICS_HASH = "CZ", t.DETAILHASHINDEXES_PROPERTIES_HASH = "CH", t.DETAILHASHINDEXES_SETTINGS_HASH = "CS", t.DETAILHASHINDEXES_STANDINGS_HASH = "CI", t.DETAILHASHINDEXES_STATIC_COMMENT_HASH = "CF", t.DETAILHASHINDEXES_STATS_MATCH_HISTORY_HASH = "CJS", t.DETAILHASHINDEXES_STATS_STATISTICS_HASH = "CES", t.DETAILHASHINDEXES_STATS_STATISTICS_PREVIEW_HASH = "CEP", t.DETAILHASHINDEXES_TV_STREAM_HASH = "TVS", t.FALLOFWICKETSINDEXES_BALLS_AND_OVERS = "FOF", t.FALLOFWICKETSINDEXES_BATSMAN_COUNTRY_ID = "FOC", t.FALLOFWICKETSINDEXES_BATSMAN_NAME = "FOB", t.FALLOFWICKETSINDEXES_SCORE = "FOE", t.FALLOFWICKETSINDEXES_STATUS = "FOD", t.FALLOFWICKETSINDEXES_TAB_TITLE = "FOA", t.FEEDSEPARATORSINDEXES_CELL = "Â¬", t.FEEDSEPARATORSINDEXES_INDEX = "Ã·", t.FEEDSEPARATORSINDEXES_INNER_FEED_CELL = "â", t.FEEDSEPARATORSINDEXES_INNER_FEED_INDEX = "â", t.FEEDSEPARATORSINDEXES_INNER_FEED_ROW = "â¾", t.FEEDSEPARATORSINDEXES_ROW = "~", t.FSCORE_CODEBOOKINDEXES_CRICKET_SENTENCES_STR = "SH", t.FSCORE_CODEBOOKINDEXES_CRICKET_SENTENCE_PARTS_STR = "SI", t.FSCORE_DRAWINDEXES_AWAY_PARTICIPANT_ID = "EA", t.FSCORE_DRAWINDEXES_AWAY_ROUND_PARTICIPANT_ID = "AP", t.FSCORE_DRAWINDEXES_AWAY_ROUND_PARTICIPANT_INFO = "AI", t.FSCORE_DRAWINDEXES_AWAY_ROUND_PARTICIPANT_RESULT = "RT", t.FSCORE_DRAWINDEXES_HOME_PARTICIPANT_ID = "EH", t.FSCORE_DRAWINDEXES_HOME_ROUND_PARTICIPANT_ID = "HP", t.FSCORE_DRAWINDEXES_HOME_ROUND_PARTICIPANT_INFO = "HI", t.FSCORE_DRAWINDEXES_HOME_ROUND_PARTICIPANT_RESULT = "RE", t.FSCORE_DRAWINDEXES_IMAGE_PARTICIPANT_ID = "IPI", t.FSCORE_DRAWINDEXES_IMAGE_PARTICIPANT_URL = "IPU", t.FSCORE_DRAWINDEXES_IMAGE_URL = "DI", t.FSCORE_DRAWINDEXES_PARTICIPANTS = "PA", t.FSCORE_DRAWINDEXES_PARTICIPANTS_IDS = "PID", t.FSCORE_DRAWINDEXES_PARTICIPANTS_SHORT_NAMES = "PS", t.FSCORE_DRAWINDEXES_ROUNDS = "RN", t.FSCORE_DRAWINDEXES_ROUND_ADVANCING_PARTICIPANT = "AE", t.FSCORE_DRAWINDEXES_ROUND_EVENT_INFO = "RQ", t.FSCORE_DRAWINDEXES_ROUND_ID = "RI", t.FSCORE_DRAWINDEXES_ROUND_PAIR_MATCHES = "RK", t.FSCORE_DRAWINDEXES_ROUND_PARENT_ID = "RP", t.FSCORE_DRAWINDEXES_UPCOMING_DRAW_START_TIME = "US", t.FSCORE_GOLFPARTINDEXES_IS_GOLF_PLAY_OFF = "GP", t.FSCORE_GOLFPARTINDEXES_IS_GOLF_STABLEFORD = "ZT", t.FSCORE_GOLFPARTINDEXES_PAR = "ZQ", t.FSCORE_GOLFPARTINDEXES_PRIZE_MONEY = "ZP", t.FSCORE_HORSERACINGINDEXES_STAGE_START_TIME = "ZVR", t.FSCORE_HORSERACINGINDEXES_STAGE_TABS = "ZV", t.FSCORE_MEETINGINDEXES_MEETING_END = "MTE", t.FSCORE_MEETINGINDEXES_MEETING_ID = "MID", t.FSCORE_MEETINGINDEXES_MEETING_NAME = "MNM", t.FSCORE_MEETINGINDEXES_MEETING_START = "MTS", t.FSCORE_NODUELINDEXES_IS_DUEL = "ZW", t.FSCORE_NODUELINDEXES_NO_DUEL_EVENT_ID = "ZZ", t.FSCORE_NODUELINDEXES_STAGE_INFO = "ZN", t.FSCORE_NODUELSTAGEINDEXES_STAGE_IS_MAIN = "ZSM", t.FSCORE_NODUELSTAGEINDEXES_STAGE_STATUS_ID = "ZSS", t.FSCORE_NODUELSTAGEINDEXES_STAGE_STATUS_TYPE_ID = "ZST", t.FSCORE_ONCOURSETRACKINDEXES_EVENT_STAGE_ID = "OAA", t.FSCORE_ONCOURSETRACKINDEXES_VALUE = "OAB", t.FSCORE_PARTICIPANTINFOINDEXES_ACTUAL_TOURNAMENT_TOURNAMENT_ID = "TRB", t.FSCORE_PARTICIPANTINFOINDEXES_ACTUAL_TOURNAMENT_TOURNAMENT_STAGE_ID = "TRC", t.FSCORE_PARTICIPANTINFOINDEXES_ACTUAL_TOURNAMENT_TYPE = "TRA", t.FSCORE_PARTICIPANTINFOINDEXES_AVAILABLE_TABS = "TAB", t.FSCORE_PARTICIPANTINFOINDEXES_BIRTHDAY_TIME = "PAI", t.FSCORE_PARTICIPANTINFOINDEXES_COUNTRY_ID = "PAD", t.FSCORE_PARTICIPANTINFOINDEXES_COUNTRY_NAME = "PAM", t.FSCORE_PARTICIPANTINFOINDEXES_DEATH_TIME = "DEA", t.FSCORE_PARTICIPANTINFOINDEXES_GENDER_ID = "PAC", t.FSCORE_PARTICIPANTINFOINDEXES_ID = "PAA", t.FSCORE_PARTICIPANTINFOINDEXES_IMAGE_MOBILE_PATH = "PAF", t.FSCORE_PARTICIPANTINFOINDEXES_IMAGE_TABLE_PATH = "PAG", t.FSCORE_PARTICIPANTINFOINDEXES_LAYOUT = "PAL", t.FSCORE_PARTICIPANTINFOINDEXES_NAME = "PAH", t.FSCORE_PARTICIPANTINFOINDEXES_PARENT_NAME = "PAK", t.FSCORE_PARTICIPANTINFOINDEXES_PARTICIPANT_TYPE_ID = "PAJ", t.FSCORE_PARTICIPANTINFOINDEXES_PARTICIPANT_TYPE_NAME = "PAO", t.FSCORE_PARTICIPANTINFOINDEXES_RANK_TEXT = "PAN", t.FSCORE_PARTICIPANTINFOINDEXES_SHORT_NAME = "PAB", t.FSCORE_PARTICIPANTINFOINDEXES_SPORT_ID = "PAE", t.FSCORE_PARTICIPANTINFOINDEXES_TEAM_ID = "TID", t.FSCORE_PARTICIPANTINFOINDEXES_TEAM_IMAGE = "TIM", t.FSCORE_PARTICIPANTINFOINDEXES_TEAM_NAME = "TIN", t.FSCORE_PARTICIPANTINFOINDEXES_TEAM_PARTICIPANT_TYPE = "TPT", t.FSCORE_PITCHERINDEXES_PITCHER_LOSSES = "PIL", t.FSCORE_PITCHERINDEXES_PITCHER_NAME = "PIN", t.FSCORE_PITCHERINDEXES_PITCHER_TYPE = "PIT", t.FSCORE_PITCHERINDEXES_PITCHER_WINS = "PIW", t.FSCORE_STAGEINDEXES_BROADCASTS = "TA", t.FSCORE_TABLEDATAINDEXES_NODE_END = "TE", t.FSCORE_TABLEDATAINDEXES_NODE_ID = "ID", t.FSCORE_TABLEDATAINDEXES_NODE_START = "TS", t.FSCORE_TABLEDATAINDEXES_OPTIONAL_TYPE = "OPT", t.FSCORE_TABLEDATAINDEXES_PROPERTY_TYPE = "PT", t.FSCORE_TABLEDATAINDEXES_PROPERTY_VALUE = "PV", t.FSCORE_TOURNAMENTSTAGEINFOINDEXES_ACTIVE_DRAW_LEVEL = "OAK", t.FSCORE_TOURNAMENTSTAGEINFOINDEXES_COUNTRY_ID = "OAD", t.FSCORE_TOURNAMENTSTAGEINFOINDEXES_COUNTRY_NAME = "OAE", t.FSCORE_TOURNAMENTSTAGEINFOINDEXES_IMAGE_URL = "OAJ", t.FSCORE_TOURNAMENTSTAGEINFOINDEXES_LEAGUE_NAME = "OAF", t.FSCORE_TOURNAMENTSTAGEINFOINDEXES_SEASON_ID = "OAG", t.FSCORE_TOURNAMENTSTAGEINFOINDEXES_STANDINGS_TYPE = "OAC", t.FSCORE_TOURNAMENTSTAGEINFOINDEXES_TEMPLATE_ID = "OAH", t.FSCORE_TOURNAMENTSTAGEINFOINDEXES_TOURNAMENT_ID = "OAI", t.FULLFEEDINDEXES_AGE = "NN", t.FULLFEEDINDEXES_ANDROID_VERSION_STR = "VA", t.FULLFEEDINDEXES_APP_STORE_VERSION = "VJ", t.FULLFEEDINDEXES_AWAY_3CHAR_NAME = "WN", t.FULLFEEDINDEXES_AWAY_CRICKET_DECLARED_FIRST_INNING = "FE", t.FULLFEEDINDEXES_AWAY_CRICKET_DECLARED_SECOND_INNING = "FF", t.FULLFEEDINDEXES_AWAY_CRICKET_OVERS_FIRST_INNING = "DP", t.FULLFEEDINDEXES_AWAY_CRICKET_OVERS_SECOND_INNING = "DR", t.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_FIRST_INNING = "DL", t.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_SECOND_INNING = "DN", t.FULLFEEDINDEXES_AWAY_EVENT_PARTICIPANT_ID = "JB", t.FULLFEEDINDEXES_AWAY_PARTICIPANT_COUNTRY_ID = "CB", t.FULLFEEDINDEXES_AWAY_PARTICIPANT_IDS = "PY", t.FULLFEEDINDEXES_AWAY_PARTICIPANT_NAME = "AF", t.FULLFEEDINDEXES_AWAY_PARTICIPANT_NAME_URL = "WV", t.FULLFEEDINDEXES_AWAY_PARTICIPANT_TYPE = "APT", t.FULLFEEDINDEXES_AWAY_RESULT_TIEBREAK_1 = "DB", t.FULLFEEDINDEXES_AWAY_RESULT_TIEBREAK_2 = "DD", t.FULLFEEDINDEXES_AWAY_RESULT_TIEBREAK_3 = "DF", t.FULLFEEDINDEXES_AWAY_RESULT_TIEBREAK_4 = "DH", t.FULLFEEDINDEXES_AWAY_RESULT_TIEBREAK_5 = "DJ", t.FULLFEEDINDEXES_AWAY_SCORE_PART_PESAPALLO_FIRST_HALF = "BT", t.FULLFEEDINDEXES_AWAY_SCORE_PART_PESAPALLO_PENALTIES = "FB", t.FULLFEEDINDEXES_AWAY_SCORE_PART_PESAPALLO_SECOND_HALF = "BV", t.FULLFEEDINDEXES_AWAY_TEAM_LOGO = "OB", t.FULLFEEDINDEXES_AWAY_TENNIS_GAME = "WB", t.FULLFEEDINDEXES_BANNED_LEAGUES_STR = "VK", t.FULLFEEDINDEXES_BEST_OF_FRAMES = "WD", t.FULLFEEDINDEXES_BOOKMAKER_LIST_LIVE_IN_OFFER = "MW", t.FULLFEEDINDEXES_CATEGORY_CAPTION = "ZAF", t.FULLFEEDINDEXES_CRICKET_VISIBLE_RUN_RATE = "RW", t.FULLFEEDINDEXES_DATACORE_TRANSLATES = "DT", t.FULLFEEDINDEXES_EVENT_LIST_LAYOUT_TYPE = "ELT", t.FULLFEEDINDEXES_EVENT_STAGE_TIME = "CK", t.FULLFEEDINDEXES_EVENT_START_UTIME = "ADE", t.FULLFEEDINDEXES_EVENT_WITH_UPDATED_START = "QB", t.FULLFEEDINDEXES_EVENT_WITH_UPDATED_START_AND_END_TIME = "QC", t.FULLFEEDINDEXES_HAS_LIVE_BETTING = "AN", t.FULLFEEDINDEXES_HAS_MATCH_COMMENTS = "HMC", t.FULLFEEDINDEXES_HOME_3CHAR_NAME = "WM", t.FULLFEEDINDEXES_HOME_CRICKET_DECLARED_FIRST_INNING = "FC", t.FULLFEEDINDEXES_HOME_CRICKET_DECLARED_SECOND_INNING = "FD", t.FULLFEEDINDEXES_HOME_CRICKET_OVERS_FIRST_INNING = "DO", t.FULLFEEDINDEXES_HOME_CRICKET_OVERS_SECOND_INNING = "DQ", t.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_FIRST_INNING = "DK", t.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_SECOND_INNING = "DM", t.FULLFEEDINDEXES_HOME_EVENT_PARTICIPANT_ID = "JA", t.FULLFEEDINDEXES_HOME_PARTICIPANT_COUNTRY_ID = "CA", t.FULLFEEDINDEXES_HOME_PARTICIPANT_IDS = "PX", t.FULLFEEDINDEXES_HOME_PARTICIPANT_NAME = "AE", t.FULLFEEDINDEXES_HOME_PARTICIPANT_NAME_URL = "WU", t.FULLFEEDINDEXES_HOME_PARTICIPANT_TYPE = "HPT", t.FULLFEEDINDEXES_HOME_RESULT_TIEBREAK_1 = "DA", t.FULLFEEDINDEXES_HOME_RESULT_TIEBREAK_2 = "DC", t.FULLFEEDINDEXES_HOME_RESULT_TIEBREAK_3 = "DE", t.FULLFEEDINDEXES_HOME_RESULT_TIEBREAK_4 = "DG", t.FULLFEEDINDEXES_HOME_RESULT_TIEBREAK_5 = "DI", t.FULLFEEDINDEXES_HOME_SCORE_PART_PESAPALLO_FIRST_HALF = "BS", t.FULLFEEDINDEXES_HOME_SCORE_PART_PESAPALLO_PENALTIES = "FA", t.FULLFEEDINDEXES_HOME_SCORE_PART_PESAPALLO_SECOND_HALF = "BU", t.FULLFEEDINDEXES_HOME_TEAM_LOGO = "OA", t.FULLFEEDINDEXES_HOME_TENNIS_GAME = "WA", t.FULLFEEDINDEXES_IOS_VERSION_STR = "VI", t.FULLFEEDINDEXES_IS_NATIONAL_EVENT = "GN", t.FULLFEEDINDEXES_LEAGUE_CAPTION_PART_1 = "ZAA", t.FULLFEEDINDEXES_LEAGUE_CAPTION_PART_2 = "ZAB", t.FULLFEEDINDEXES_LEAGUE_CAPTION_PART_STAGE_NAME = "ZAE", t.FULLFEEDINDEXES_MOVED_EVENTS_ID = "QA", t.FULLFEEDINDEXES_NO_DUEL_REMOVED_PARTICIPANT = "QD", t.FULLFEEDINDEXES_ODDS_WINNING_OUTCOMES = "CS", t.FULLFEEDINDEXES_PARTICIPANT_COUNTRY = "CC", t.FULLFEEDINDEXES_PARTICIPANT_COUNTRY_IDS = "CY", t.FULLFEEDINDEXES_PAST_FUTURE_GAMES = "FG", t.FULLFEEDINDEXES_PAST_FUTURE_GAMES_NEW_PORTABLE = "FGN", t.FULLFEEDINDEXES_PLAYING_ON_SETS = "WL", t.FULLFEEDINDEXES_RANKING_LINK_ID = "ZRA", t.FULLFEEDINDEXES_RANKING_LINK_NAME = "ZRB", t.FULLFEEDINDEXES_SHOW_IN_MY_TEAMS_ON_PORTABLE = "ES", t.FULLFEEDINDEXES_SORT_PARTICIPANT = "CX", t.FULLFEEDINDEXES_STAGE_EVENT_STAGE_ID = "ZAD", t.FULLFEEDINDEXES_STAGE_SORT_KEY = "SX", t.FULLFEEDINDEXES_SWAPPED_PARTICIPANTS = "WE", t.FULLFEEDINDEXES_TEAM_3CHAR_NAME = "NB", t.FULLFEEDINDEXES_TEAM_NAME = "NA", t.FULLFEEDINDEXES_TOP_LEAGUES_STR = "SG", t.FULLFEEDINDEXES_TOURNAMENT_TEMPLATE_ACRONYM = "ZAC", t.FULLFEEDINDEXES_TOURNAMENT_TEMPLATE_ID = "ZEE", t.FULLFEEDINDEXES_TOURNAMENT_TEMPLATE_LOGO = "ZKL", t.FULLFEEDINDEXES_TOURNAMENT_TEMPLATE_NAME = "ZK", t.FULLFEEDINDEXES_TOURNAMENT_TEMPLATE_RAW_URL = "ZKU", t.FULLFEEDINDEXES_WINNER = "AS", t.GEORESTRICTIONSINDEXES_MESSAGE = "II", t.H2HINDEXES_AWAY_NAME = "KK", t.H2HINDEXES_COUNTRY_NAME = "KH", t.H2HINDEXES_CURRENT_RESULT = "KL", t.H2HINDEXES_DATA = "KO", t.H2HINDEXES_DATE = "KC", t.H2HINDEXES_ENCODED_ID = "KP", t.H2HINDEXES_EVENT_ACRONYM = "KI", t.H2HINDEXES_EVENT_NAME = "KF", t.H2HINDEXES_FLAG_ID = "KG", t.H2HINDEXES_FULLTIME_RESULT = "KM", t.H2HINDEXES_HEADER_NAME = "KB", t.H2HINDEXES_HOME_NAME = "KJ", t.H2HINDEXES_INCIDENT_RESULT = "KR", t.H2HINDEXES_SIDE_HIGHLIGHTED = "KS", t.H2HINDEXES_SURFACE_CODE = "KD", t.H2HINDEXES_SURFACE_NAME = "KE", t.H2HINDEXES_TAB_NAME = "KA", t.H2HINDEXES_WIN_OR_LOSE = "KN", t.HIGHLIGHTINDEXES_HIGHLIGHT_ENABLE_INTERVAL = "HEI", t.HIGHLIGHTINDEXES_HIGHLIGHT_FORCE_IFRAME = "HFI", t.HIGHLIGHTINDEXES_HIGHLIGHT_INCIDENT_TITLE = "HIN", t.HIGHLIGHTINDEXES_HIGHLIGHT_INCIDENT_TYPE = "HIT", t.HIGHLIGHTINDEXES_HIGHLIGHT_OPEN_IN_POPUP = "HPP", t.HIGHLIGHTINDEXES_HIGHLIGHT_RESTRICTION = "HRE", t.HIGHLIGHTINDEXES_HIGHLIGHT_RESULT = "HTR", t.HIGHLIGHTINDEXES_HIGHLIGHT_SUBTITLE1 = "HS1", t.HIGHLIGHTINDEXES_HIGHLIGHT_SUBTITLE2 = "HS2", t.HIGHLIGHTINDEXES_HIGHLIGHT_TIME = "HTM", t.HIGHLIGHTINDEXES_HIGHLIGHT_TITLE = "HTI", t.HIGHLIGHTINDEXES_HIGHLIGHT_URL = "HUR", t.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_ID = "HPI", t.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_INDEX = "HP", t.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_NAME = "HPN", t.LEAGUEINDEXES_CAPTION_SEASON_STAGE_ID = "ZU", t.LEAGUEINDEXES_COUNTRY_ID = "ZB", t.LEAGUEINDEXES_COUNTRY_NAME = "ZY", t.LEAGUEINDEXES_IS_SEVEN_RUGBY = "ZR", t.LEAGUEINDEXES_MEETING_ID = "QM", t.LEAGUEINDEXES_MEETING_NAME = "QMN", t.LEAGUEINDEXES_MEETING_TIME_END = "QME", t.LEAGUEINDEXES_MEETING_TIME_START = "QMS", t.LEAGUEINDEXES_RACE_TYPE = "ZM", t.LEAGUEINDEXES_SEASON_URL = "ZS", t.LEAGUEINDEXES_SORT_KEY = "ZX", t.LEAGUEINDEXES_SOURCE_TYPE = "ZF", t.LEAGUEINDEXES_STAGES_COUNT = "ZCC", t.LEAGUEINDEXES_STATS_TYPE = "ZG", t.LEAGUEINDEXES_SUPER_TEMPLATE_ID = "ZHS", t.LEAGUEINDEXES_TOURNAMENT_CATEGORY_ID = "TCI", t.LEAGUEINDEXES_TOURNAMENT_ID = "ZE", t.LEAGUEINDEXES_TOURNAMENT_ID_EVERYTIME = "ZEF", t.LEAGUEINDEXES_TOURNAMENT_STAGE_TYPE = "ZJ", t.LEAGUEINDEXES_TOURNAMENT_TEMPLATE_KEY = "ZH", t.LEAGUEINDEXES_TOURNAMENT_TEMPLATE_URL = "ZL", t.LEAGUEINDEXES_TOURNAMENT_TYPE = "ZD", t.LINEUPSINDEXES_FORMATION_LABEL = "LA", t.LINEUPSINDEXES_LINEUP_FORMATION = "LD", t.LINEUPSINDEXES_LINEUP_GROUP = "LB", t.LINEUPSINDEXES_LINEUP_GROUP_TYPE = "LGT", t.LINEUPSINDEXES_LINEUP_INCIDENT = "LII", t.LINEUPSINDEXES_LINEUP_INCIDENT_TOOLTIP = "LIT", t.LINEUPSINDEXES_LINEUP_INCIDENT_TYPE_NAME = "LIN", t.LINEUPSINDEXES_LINEUP_LINE = "LM", t.LINEUPSINDEXES_LINEUP_PARTICIPANT_COUNTRY_ID = "LO", t.LINEUPSINDEXES_LINEUP_PARTICIPANT_COUNTRY_NAME = "LQ", t.LINEUPSINDEXES_LINEUP_PARTICIPANT_ID = "LP", t.LINEUPSINDEXES_LINEUP_PARTICIPANT_NAME = "LI", t.LINEUPSINDEXES_LINEUP_PARTICIPANT_NUMBER = "LJ", t.LINEUPSINDEXES_LINEUP_PARTICIPANT_SPECIAL_POSITION_NAME = "LR", t.LINEUPSINDEXES_LINEUP_PARTICIPANT_SPECIAL_POSITION_NAME_TOOLTIP = "LS", t.LINEUPSINDEXES_LINEUP_PARTICIPANT_SURNAME = "LN", t.LINEUPSINDEXES_LINEUP_PLAYER_TYPE = "LG", t.LINEUPSINDEXES_LINEUP_POSITION_ID = "LK", t.LINEUPSINDEXES_LINEUP_POSITION_KEY = "LL", t.LINEUPSINDEXES_LINEUP_ROW_INDEX = "LH", t.LINEUPSINDEXES_LINEUP_SIDE = "LC", t.LIVECOMMENTSINDEXES_HIGHLIGHT_IMAGE_RESOLUTION = "MG", t.LIVECOMMENTSINDEXES_HIGHLIGHT_IMAGE_URL = "MH", t.LIVECOMMENTSINDEXES_HIGHLIGHT_PROVIDER_NOTE = "MJ", t.LIVECOMMENTSINDEXES_HTML_CLASS = "MC", t.LIVECOMMENTSINDEXES_IS_BOLD = "ME", t.LIVECOMMENTSINDEXES_IS_IMPORTANT_BY_HTML_CLASS = "MF", t.LIVECOMMENTSINDEXES_TAB_NAME = "MA", t.LIVECOMMENTSINDEXES_TEXT = "MD", t.LIVECOMMENTSINDEXES_TIME = "MB", t.LOCALIZEKEYINDEXES_BOOKMAKER = "BI", t.LOCALIZEKEYINDEXES_BOOKMAKER_BETTING_TYPE_FOR_SPORT = "TS", t.LOCALIZEKEYINDEXES_BOOKMAKER_ID = "ID", t.LOCALIZEKEYINDEXES_BOOKMAKER_NAME = "NA", t.LOCALIZEKEYINDEXES_EVENT = "EL", t.LOCALIZEKEYINDEXES_EVENT_BROADCAST = "EB", t.LOCALIZEKEYINDEXES_EVENT_HIGHLIGTS = "EH", t.LOCALIZEKEYINDEXES_EVENT_MEETING_NAME = "MNA", t.LOCALIZEKEYINDEXES_EVENT_PARTICIPANT_SORT = "PS", t.LOCALIZEKEYINDEXES_EVENT_SORT_KEY = "ES", t.LOCALIZEKEYINDEXES_EVENT_SWAPPED_PARTICIPANTS = "EW", t.LOCALIZEKEYINDEXES_EVENT_TOURNAMENT_COUNTRY_NAME = "TP", t.LOCALIZEKEYINDEXES_EVENT_TOURNAMENT_NAME = "TN", t.LOCALIZEKEYINDEXES_EVENT_TOURNAMENT_STAGE_CAPTION = "TC", t.LOCALIZEKEYINDEXES_EVENT_TOURNAMENT_STAGE_CAPTION_PART_1 = "TK", t.LOCALIZEKEYINDEXES_EVENT_TOURNAMENT_STAGE_CAPTION_PART_2 = "TL", t.LOCALIZEKEYINDEXES_EVENT_TOURNAMENT_URL = "TU", t.LOCALIZEKEYINDEXES_ODDS = "ODQ", t.LOCALIZEKEYINDEXES_ODDS_PART = "OP", t.LOCALIZEKEYINDEXES_ODDS_PART_ODDS = "OD", t.LOCALIZEKEYINDEXES_ODDS_PART_ODDS_BOOKMAKER_INFO = "ODI", t.LOCALIZEKEYINDEXES_PARTICIPANT = "PD", t.LOCALIZEKEYINDEXES_PARTICIPANT_EVENTS_CLASS_LOCALIZED_VAR = "LV", t.LOCALIZEKEYINDEXES_PARTICIPANT_NAME = "FN", t.LOCALIZEKEYINDEXES_PARTICIPANT_NAME_URL = "NU", t.LOCALIZEKEYINDEXES_PARTICIPANT_NAME_WITHOUT_COUNTRY = "FNWC", t.LOCALIZEKEYINDEXES_PARTICIPANT_PARENT_NAME = "PN", t.LOCALIZEKEYINDEXES_PARTICIPANT_PARENT_THREE_CHAR_NAME = "PSN", t.LOCALIZEKEYINDEXES_PARTICIPANT_SHORT_NAME = "SN", t.LOCALIZEKEYINDEXES_PARTICIPANT_SURNAME = "SUN", t.LOCALIZEKEYINDEXES_STAGE_EVENT = "SL", t.LOCALIZEKEYINDEXES_TV_ID = "TVI", t.MATCHCOUNTINDEXES_IS_MAJORITY_SPORT = "SM", t.MATCHCOUNTINDEXES_LIVE_MATCH_COUNT = "LC", t.MATCHCOUNTINDEXES_MATCH_COUNT = "EC", t.MATCHCOUNTINDEXES_SPORT_ID_FOR_EXTENDED_INFO = "SAA", t.MATCHCOUNTINDEXES_SPORT_SORT = "SAS", t.MATCHHISTORYINDEXES_AWAY_AHEAD = "HJ", t.MATCHHISTORYINDEXES_AWAY_SCORE = "HE", t.MATCHHISTORYINDEXES_AWAY_TIEBREAK_SCORE = "HF", t.MATCHHISTORYINDEXES_FIFTEENS_CONTENT = "HL", t.MATCHHISTORYINDEXES_FIFTEENS_CONTENT_CURRENT_GAME = "HO", t.MATCHHISTORYINDEXES_HEADER_NAME = "HB", t.MATCHHISTORYINDEXES_HOME_AHEAD = "HI", t.MATCHHISTORYINDEXES_HOME_SCORE = "HC", t.MATCHHISTORYINDEXES_HOME_TIEBREAK_SCORE = "HD", t.MATCHHISTORYINDEXES_LOST_SERVE = "HH", t.MATCHHISTORYINDEXES_SERVING = "HG", t.MATCHHISTORYINDEXES_SERVING_CURRENT_GAME = "HN", t.MATCHHISTORYINDEXES_TAB_NAME = "HA", t.MATCHHISTORYINDEXES_TIEBREAK_BALL_TYPE_ID_FOR_PLAYER = "HM", t.MATCHHISTORYINDEXES_WINNER = "HK", t.MATCHINFO_INDEXES_ATTENDANCE = "ATT", t.MATCHINFO_INDEXES_REFEREE_COUNTRY = "RCO", t.MATCHINFO_INDEXES_REFEREE_COUNTRY_CODE = "RCC", t.MATCHINFO_INDEXES_REFEREE_NAME = "REF", t.MATCHINFO_INDEXES_VENUE = "VEN", t.MENUINDEXES_COUNTRY_ID = "MC", t.MENUINDEXES_COUNTRY_URL = "ML", t.MENUINDEXES_TOURNAMENT_TEMPLATE_LEAGUE_KEY = "MT", t.MENUINDEXES_TOURNAMENT_TEMPLATE_NAME = "MN", t.MENUINDEXES_TOURNAMENT_TEMPLATE_SHORT_URL = "MV", t.MENUINDEXES_TOURNAMENT_TEMPLATE_URL = "MU", t.MYTEAMSEVENTSINDEXES_PARTICIPANT_ENCODED_ID = "PI", t.NEWSFEEDINDEXES_CATEGORY = "CAT", t.NEWSFEEDINDEXES_CATEGORY_ID = "CI", t.NEWSFEEDINDEXES_COLUMN_PARTICIPANT = "PLA", t.NEWSFEEDINDEXES_IMAGE_URL = "IU", t.NEWSFEEDINDEXES_LINK = "LI", t.NEWSFEEDINDEXES_NAME = "NA", t.NEWSFEEDINDEXES_PARTICIPANT_ID = "PID", t.NEWSFEEDINDEXES_PARTICIPANT_IMAGE = "PI", t.NEWSFEEDINDEXES_PARTICIPANT_IS_WINNER = "PW", t.NEWSFEEDINDEXES_PARTICIPANT_NAME = "PN", t.NEWSFEEDINDEXES_PARTICIPANT_SHORTNAME = "PSN", t.NEWSFEEDINDEXES_PARTICIPANT_SIDE = "PS", t.NEWSFEEDINDEXES_PARTICIPANT_TYPE = "PT", t.NEWSFEEDINDEXES_PEREX = "PE", t.NEWSFEEDINDEXES_PUBLISHED = "PU", t.NEWSFEEDINDEXES_TITLE = "TL", t.NEWSFEEDPORTABLEINDEXES_AWAY_SCORE = "AS", t.NEWSFEEDPORTABLEINDEXES_CATEGORY = "CAT", t.NEWSFEEDPORTABLEINDEXES_EVENT_STAGE_ID = "ESI", t.NEWSFEEDPORTABLEINDEXES_EVENT_START = "ES", t.NEWSFEEDPORTABLEINDEXES_FEED_TYPE_ID = "FTI", t.NEWSFEEDPORTABLEINDEXES_FINAL_SCORE = "FS", t.NEWSFEEDPORTABLEINDEXES_HOME_SCORE = "HS", t.NEWSFEEDPORTABLEINDEXES_ID = "ID", t.NEWSFEEDPORTABLEINDEXES_IMAGE_VARIANT_ID = "IVI", t.NEWSFEEDPORTABLEINDEXES_IMAGE_VARIANT_URL = "IVU", t.NEWSFEEDPORTABLEINDEXES_LINK = "LINK", t.NEWSFEEDPORTABLEINDEXES_PROVIDER_NAME = "PNAME", t.NEWSFEEDPORTABLEINDEXES_PUBLISHED = "PUB", t.NEWSFEEDPORTABLEINDEXES_TITLE = "TITLE", t.ODDSINDEXES_BETTING_TYPE = "OA", t.ODDSINDEXES_BETTING_TYPE_ID = "OAI", t.ODDSINDEXES_BETTING_TYPE_URL = "OAU", t.ODDSINDEXES_BONUS_TEXTS_LONG = "MY", t.ODDSINDEXES_BONUS_TEXTS_SHORT = "MZ", t.ODDSINDEXES_BOOKMAKER_ID = "ODA", t.ODDSINDEXES_DETAIL_BETTING_TYPE = "SB", t.ODDSINDEXES_DETAIL_BONUS = "MO", t.ODDSINDEXES_DETAIL_BONUS_LIMIT = "OO", t.ODDSINDEXES_DETAIL_BOOKMAKER_ID = "SC", t.ODDSINDEXES_DETAIL_BOOKMAKER_NAME = "SD", t.ODDSINDEXES_DETAIL_BROADCASTS = "AL", t.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_ID = "OE", t.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_IMAGE_URL = "OPI", t.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_IS_PREMIUM = "BIP", t.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_NAME = "OD", t.ODDSINDEXES_DETAIL_FEED_BOOKMAKER_SHOW_TEXT_NOT_LOGO = "OPN", t.ODDSINDEXES_EACH_WAY_HANDICAP = "XI", t.ODDSINDEXES_HANDICAP = "XH", t.ODDSINDEXES_HAS_ODDS_COMPARISON = "AY", t.ODDSINDEXES_INACTIVE_ODDS = "XX", t.ODDSINDEXES_INFO_BOOKMAKER_BETTING_TYPE = "AAB", t.ODDSINDEXES_INFO_BOOKMAKER_ID = "AAA", t.ODDSINDEXES_INFO_BOOKMAKER_NAME = "AAD", t.ODDSINDEXES_LIVE_BETTING_STRIP_TEXT = "OH", t.ODDSINDEXES_LIVE_BETTING_STRIP_URL = "OG", t.ODDSINDEXES_LIVE_HANDICAP_TYPE = "OHT", t.ODDSINDEXES_LIVE_HANDICAP_VALUE = "OHV", t.ODDSINDEXES_LIVE_IN_OFFER_BOOKMAKER_ID = "ODE", t.ODDSINDEXES_LIVE_IN_OFFER_STATUS = "ODF", t.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_BONUS_ID = "OOB", t.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_ID = "OQ", t.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_IMAGE_URL = "OPI", t.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_LINK_HTML = "ON", t.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_LIVE_IN_OFFER_ACTIVE = "OOA", t.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_LIVE_IN_OFFER_NAME = "OON", t.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_SHOW_TEXT_NOT_LOGO = "ONN", t.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_URL = "OP", t.ODDSINDEXES_LIVE_ODDS_ACTIVE = "OK", t.ODDSINDEXES_LIVE_ODDS_BETSLIP = "OR", t.ODDSINDEXES_LIVE_ODDS_MOVEMENTS = "OL", t.ODDSINDEXES_LIVE_ODDS_PREVIOUS_VALUES = "OJ", t.ODDSINDEXES_LIVE_ODDS_VALUES = "OI", t.ODDSINDEXES_LIVE_ODDS_WRAPPER_CLASSES = "OM", t.ODDSINDEXES_MAIN_BOOKMAKER_ID = "MX", t.ODDSINDEXES_ODDS_0 = "XB", t.ODDSINDEXES_ODDS_02 = "XE", t.ODDSINDEXES_ODDS_02_PREVIOUS = "YE", t.ODDSINDEXES_ODDS_0_PREVIOUS = "YB", t.ODDSINDEXES_ODDS_1 = "XA", t.ODDSINDEXES_ODDS_10 = "XD", t.ODDSINDEXES_ODDS_10_PREVIOUS = "YD", t.ODDSINDEXES_ODDS_1_PREVIOUS = "YA", t.ODDSINDEXES_ODDS_2 = "XC", t.ODDSINDEXES_ODDS_2_PREVIOUS = "YC", t.ODDSINDEXES_ODDS_AH1 = "XF", t.ODDSINDEXES_ODDS_AH1_PREVIOUS = "YF", t.ODDSINDEXES_ODDS_AH2 = "XG", t.ODDSINDEXES_ODDS_AH2_PREVIOUS = "YG", t.ODDSINDEXES_ODDS_AVAILABLE = "OG", t.ODDSINDEXES_ODDS_EACH_WAY = "XB", t.ODDSINDEXES_ODDS_EACH_WAY_PREVIOUS = "YB", t.ODDSINDEXES_ODDS_GROUP_TITLE = "OCT", t.ODDSINDEXES_ODDS_GROUP_VALUE = "OC", t.ODDSINDEXES_ODDS_LABEL_1 = "LX", t.ODDSINDEXES_ODDS_LABEL_2 = "LY", t.ODDSINDEXES_ODDS_LABEL_3 = "LZ", t.ODDSINDEXES_ODDS_ML1 = "XL", t.ODDSINDEXES_ODDS_ML1_PREVIOUS = "YL", t.ODDSINDEXES_ODDS_ML2 = "XM", t.ODDSINDEXES_ODDS_ML2_PREVIOUS = "YM", t.ODDSINDEXES_ODDS_OU1 = "XI", t.ODDSINDEXES_ODDS_OU1_PREVIOUS = "YI", t.ODDSINDEXES_ODDS_OU2 = "XJ", t.ODDSINDEXES_ODDS_OU2_PREVIOUS = "YJ", t.ODDSINDEXES_ODDS_SCOPE = "OB", t.ODDSINDEXES_ODDS_SCOPE_ID = "OBI", t.ODDSINDEXES_ODDS_SCOPE_URL = "OBU", t.ODDSINDEXES_ODDS_SETTINGS_ALLOW_ODD_HIGHLIGHTING = "AOH", t.ODDSINDEXES_ODDS_SETTINGS_SHOW_ALL_BOOKMAKERS_COMPARISON = "SAC", t.ODDSINDEXES_ODDS_SETTINGS_SHOW_ALL_BOOKMAKERS_PREMATCH = "SAP", t.ODDSINDEXES_ODDS_SETTINGS_SHOW_ALL_BOOKMAKERS_PREMATCH_LIVE = "SAL", t.ODDSINDEXES_ODDS_TOP_10 = "XC", t.ODDSINDEXES_ODDS_TOP_10_PREVIOUS = "YC", t.ODDSINDEXES_ODDS_TOP_20 = "XN", t.ODDSINDEXES_ODDS_TOP_20_PREVIOUS = "YN", t.ODDSINDEXES_ODDS_TOP_3 = "XO", t.ODDSINDEXES_ODDS_TOP_3_PREVIOUS = "YO", t.ODDSINDEXES_ODDS_TOP_5 = "XB", t.ODDSINDEXES_ODDS_TOP_5_PREVIOUS = "YB", t.ODDSINDEXES_ODDS_TOP_6 = "XP", t.ODDSINDEXES_ODDS_TOP_6_PREVIOUS = "YP", t.ODDSINDEXES_ODDS_TO_WIN = "XA", t.ODDSINDEXES_ODDS_TO_WIN_PREVIOUS = "YA", t.ODDSINDEXES_ODDS_WINNER = "XA", t.ODDSINDEXES_ODDS_WINNER_PREVIOUS = "YA", t.ODDSINDEXES_OUTCOME_CHANGE = "ODD", t.ODDSINDEXES_OUTCOME_IS_AVAILABLE = "ODC", t.ODDSINDEXES_OUTCOME_VALUE = "ODB", t.ODDSINDEXES_OVER_UNDER_HANDICAP = "XK", t.ODDSINDEXES_PREMATCH_HANDICAP_TYPE = "MHT", t.ODDSINDEXES_PREMATCH_HANDICAP_VALUE = "MHV", t.ODDSINDEXES_PREMATCH_MAIN_BOOKMAKER_BONUS_ID = "MOB", t.ODDSINDEXES_PREMATCH_MAIN_BOOKMAKER_IMAGE_URL = "MPI", t.ODDSINDEXES_PREMATCH_MAIN_BOOKMAKER_LINK_HTML = "MN", t.ODDSINDEXES_PREMATCH_MAIN_BOOKMAKER_LIVE_IN_OFFER_ACTIVE = "MOA", t.ODDSINDEXES_PREMATCH_MAIN_BOOKMAKER_LIVE_IN_OFFER_NAME = "MON", t.ODDSINDEXES_PREMATCH_MAIN_BOOKMAKER_SHOW_TEXT_NOT_LOGO = "MNN", t.ODDSINDEXES_PREMATCH_MAIN_BOOKMAKER_URL = "MP", t.ODDSINDEXES_PREMATCH_ODDS_ACTIVE = "MK", t.ODDSINDEXES_PREMATCH_ODDS_BETSLIP = "MG", t.ODDSINDEXES_PREMATCH_ODDS_MOVEMENTS = "ML", t.ODDSINDEXES_PREMATCH_ODDS_PREVIOUS_VALUES = "MJ", t.ODDSINDEXES_PREMATCH_ODDS_VALUES = "MI", t.ODDSINDEXES_PREMATCH_ODDS_WRAPPER_CLASSES = "MM", t.ODDSINDEXES_SELECTED_BETTING_TYPE = "SOA", t.ODDSINDEXES_SELECTED_ODDS_SCOPE = "SOB", t.ODDSINDEXES_TEXT_BEHIND_ODDS = "OF", t.ONCOURSETRACKINDEXES_EVENT_STAGE_ID = "OAA", t.ONCOURSETRACKINDEXES_VALUE = "OAB", t.PARTICIPANTEVENTLISTINDEXES_END_TIME = "YY", t.PARTICIPANTEVENTLISTINDEXES_MYTEAMS_ID = "YW", t.PARTICIPANTEVENTLISTINDEXES_STAGE_ID = "YZ", t.PARTICIPANTEVENTLISTINDEXES_START_TIME = "YX", t.PLAYERPROFILEINDEXES_EVENT_ID = "EID", t.PLAYERPROFILEINDEXES_EVENT_START_TIME = "ES", t.PLAYERPROFILEINDEXES_IMAGE_ID = "IH", t.PLAYERPROFILEINDEXES_SCORE = "SH", t.PLAYERPROFILEINDEXES_SCORE_FT = "SFH", t.PLAYERPROFILEINDEXES_SEASON_LABEL = "PAC", t.PLAYERPROFILEINDEXES_TAB_ID = "PAA", t.PLAYERPROFILEINDEXES_TAB_LABEL = "PAB", t.PLAYERPROFILEINDEXES_TAB_TYPE = "PAP", t.PLAYERPROFILEINDEXES_TEAM_ID = "PAQ", t.PLAYERPROFILEINDEXES_TEAM_ID_AWAY = "PAO", t.PLAYERPROFILEINDEXES_TEAM_ID_HOME = "PAN", t.PLAYERPROFILEINDEXES_TEAM_IMAGE_URL = "PAE", t.PLAYERPROFILEINDEXES_TEAM_NAME = "PAD", t.PLAYERPROFILEINDEXES_TEAM_TRANSFER_FROM_ID = "PAL", t.PLAYERPROFILEINDEXES_TEAM_TRANSFER_TO_ID = "PAM", t.PLAYERPROFILEINDEXES_TOURNAMENT_FLAG_ID = "PAG", t.PLAYERPROFILEINDEXES_TOURNAMENT_NAME = "PAF", t.PLAYERPROFILEINDEXES_TRANSFER_REASON = "PAJ", t.PLAYERPROFILEINDEXES_TRANSFER_YEAR = "PAK", t.PLAYERPROFILEINDEXES_VALUE = "PAI", t.PLAYERPROFILEINDEXES_VALUE_TYPE = "PAH", t.PLAYERPROFILEINDEXES_WINNER = "WIN", t.PLAYERPROFILEINDEXES_WINNER_FT = "WF", t.PLAYERPROFILEINDEXES_WINNER_ICON_SUFFIX = "WIS", t.PLAYERSTATSINDEXES_HEADER_ROW = "PB", t.PLAYERSTATSINDEXES_ROW = "PC", t.PLAYERSTATSINDEXES_ROW_FORMAT = "PD", t.PLAYERSTATSINDEXES_ROW_ICON = "PE", t.PLAYERSTATSINDEXES_ROW_STATUS = "PS", t.PLAYERSTATSINDEXES_TAB_LABEL = "PA", t.PORTABLECONFIGINDEXES_DATA_FOR_FEED = "CD", t.PORTABLECONFIGINDEXES_MAX_SDK_VERSION = "CSA", t.PORTABLECONFIGINDEXES_MAX_VERSION = "CA", t.PORTABLECONFIGINDEXES_MIN_SDK_VERSION = "CSI", t.PORTABLECONFIGINDEXES_MIN_VERSION = "CI", t.PORTABLECONFIGINDEXES_PACKAGE = "CP", t.PORTABLECONFIGINDEXES_TYPE = "CT", t.RANKINGINDEXES_RANKING_NAME = "RAN", t.RANKINGINDEXES_RANKING_STATS_TABLE = "RST", t.RANKINGSFEEDINDEXES_DATE = "RRC", t.RANKINGSFEEDINDEXES_NAME = "RRN", t.RANKINGSFEEDINDEXES_PARTICIPANT_ID = "RPI", t.RANKINGSFEEDINDEXES_PARTICIPANT_IMAGE = "RRI", t.RANKINGSFEEDINDEXES_PARTICIPANT_NAME = "RRP", t.RANKINGSFEEDINDEXES_PARTICIPANT_TYPE_ID = "RPT", t.RANKINGSFEEDINDEXES_RANK = "RRR", t.RANKINGSFEEDINDEXES_RESULT = "RRL", t.RANKINGSFEEDINDEXES_RESULT_LABEL = "RRB", t.RANKINGSFEEDINDEXES_TITLE = "RRT", t.RESULTSINDEXES_ROW_EVENT_PARTICIPANT_ID = "RAC", t.RESULTSINDEXES_ROW_EVENT_PARTICIPANT_ID_END = "RAD", t.RESULTSINDEXES_ROW_VALUE = "RAB", t.RESULTSINDEXES_ROW_VALUE_TYPE_ID = "RAA", t.RESULTSINDEXES_ROW_VALUE_UPDATED = "RAU", t.SEASONLISTINDEXES_NAME = "THN", t.SEASONLISTINDEXES_STATS_TYPE = "THT", t.SEASONLISTINDEXES_TOURNAMENT_ID = "THI", t.SEASONLISTINDEXES_TOURNAMENT_STAGE_ID = "THS", t.SHAREDINDEXES_ALTER_EVENT_STAGE_TYPE_ID = "DZ", t.SHAREDINDEXES_AUDIO_COMMENTS = "QQ", t.SHAREDINDEXES_AWAY_CRICKET_RUN_RATE = "RV", t.SHAREDINDEXES_AWAY_CURRENT_RESULT = "AH", t.SHAREDINDEXES_AWAY_DRAW_PARTICIPANT_WINNER = "BZ", t.SHAREDINDEXES_AWAY_ERRORS = "WI", t.SHAREDINDEXES_AWAY_FULL_TIME_RESULT = "AU", t.SHAREDINDEXES_AWAY_GOAL_UNDER_REVIEW = "GRB", t.SHAREDINDEXES_AWAY_HITS = "WG", t.SHAREDINDEXES_AWAY_MARTIAL_ARTS_FINISHED = "IB", t.SHAREDINDEXES_AWAY_MARTIAL_ARTS_FINISHED_ROUND = "ID", t.SHAREDINDEXES_AWAY_MARTIAL_ARTS_FINISHED_SUB = "IF", t.SHAREDINDEXES_AWAY_PITCHER = "WP", t.SHAREDINDEXES_AWAY_RED_CARD_COUNT = "AK", t.SHAREDINDEXES_AWAY_RESULT_PERIOD_1 = "BB", t.SHAREDINDEXES_AWAY_RESULT_PERIOD_2 = "BD", t.SHAREDINDEXES_AWAY_RESULT_PERIOD_3 = "BF", t.SHAREDINDEXES_AWAY_RESULT_PERIOD_4 = "BH", t.SHAREDINDEXES_AWAY_RESULT_PERIOD_5 = "BJ", t.SHAREDINDEXES_AWAY_RESULT_PERIOD_6 = "BL", t.SHAREDINDEXES_AWAY_RESULT_PERIOD_7 = "BN", t.SHAREDINDEXES_AWAY_RESULT_PERIOD_8 = "BP", t.SHAREDINDEXES_AWAY_RESULT_PERIOD_9 = "BR", t.SHAREDINDEXES_AWAY_RESULT_PERIOD_X = "BT", t.SHAREDINDEXES_BLOCKED_GEOIP_STREAMING = "BGS", t.SHAREDINDEXES_CRICKET_BATSMAN = "WJ", t.SHAREDINDEXES_CRICKET_BOWLER = "WK", t.SHAREDINDEXES_CRICKET_LIVE_SENTENCE = "LS", t.SHAREDINDEXES_CRICKET_RECENT_OVERS = "WQ", t.SHAREDINDEXES_CRICKET_SENTENCE = "AQ", t.SHAREDINDEXES_CRICKET_TYPE = "WX", t.SHAREDINDEXES_CURRENT_DISTANCE = "NJ", t.SHAREDINDEXES_CURRENT_LAP = "NJL", t.SHAREDINDEXES_DISTANCE = "NK", t.SHAREDINDEXES_EVENT_ID = "AA", t.SHAREDINDEXES_EVENT_ROUND_NAME = "ER", t.SHAREDINDEXES_EVENT_ROUND_NUMBER = "ERN", t.SHAREDINDEXES_EVENT_STAGE_ID = "AC", t.SHAREDINDEXES_EVENT_STAGE_TYPE_FROM_EVENT_STAGE_ID = "CR", t.SHAREDINDEXES_EVENT_STAGE_TYPE_ID = "AB", t.SHAREDINDEXES_FEED_SIGNATURE = "A1", t.SHAREDINDEXES_FINAL_SCORE = "DX", t.SHAREDINDEXES_GAME_TIME = "BX", t.SHAREDINDEXES_GAP = "NG", t.SHAREDINDEXES_GOLF_FINAL_RESULT = "GR", t.SHAREDINDEXES_GOLF_HOLE_RESULT = "GH", t.SHAREDINDEXES_GOLF_PAR_TODAY = "GI", t.SHAREDINDEXES_GOLF_TOTAL_HOLES_PLAYED = "GS", t.SHAREDINDEXES_GRID = "NE", t.SHAREDINDEXES_HAS_LINEUPS = "AX", t.SHAREDINDEXES_HAS_LIVE_CENTRE = "AW", t.SHAREDINDEXES_HIGHLIGHTS = "AV", t.SHAREDINDEXES_HOME_CRICKET_RUN_RATE = "RU", t.SHAREDINDEXES_HOME_CURRENT_RESULT = "AG", t.SHAREDINDEXES_HOME_DRAW_PARTICIPANT_WINNER = "BY", t.SHAREDINDEXES_HOME_ERRORS = "WH", t.SHAREDINDEXES_HOME_FULL_TIME_RESULT = "AT", t.SHAREDINDEXES_HOME_GOAL_UNDER_REVIEW = "GRA", t.SHAREDINDEXES_HOME_HITS = "WF", t.SHAREDINDEXES_HOME_MARTIAL_ARTS_FINISHED = "IA", t.SHAREDINDEXES_HOME_MARTIAL_ARTS_FINISHED_ROUND = "IC", t.SHAREDINDEXES_HOME_MARTIAL_ARTS_FINISHED_SUB = "IE", t.SHAREDINDEXES_HOME_PITCHER = "WO", t.SHAREDINDEXES_HOME_RED_CARD_COUNT = "AJ", t.SHAREDINDEXES_HOME_RESULT_PERIOD_1 = "BA", t.SHAREDINDEXES_HOME_RESULT_PERIOD_2 = "BC", t.SHAREDINDEXES_HOME_RESULT_PERIOD_3 = "BE", t.SHAREDINDEXES_HOME_RESULT_PERIOD_4 = "BG", t.SHAREDINDEXES_HOME_RESULT_PERIOD_5 = "BI", t.SHAREDINDEXES_HOME_RESULT_PERIOD_6 = "BK", t.SHAREDINDEXES_HOME_RESULT_PERIOD_7 = "BM", t.SHAREDINDEXES_HOME_RESULT_PERIOD_8 = "BO", t.SHAREDINDEXES_HOME_RESULT_PERIOD_9 = "BQ", t.SHAREDINDEXES_HOME_RESULT_PERIOD_X = "BS", t.SHAREDINDEXES_LAPS = "NC", t.SHAREDINDEXES_LAPS_DISTANCE = "NH", t.SHAREDINDEXES_LIVE = "AI", t.SHAREDINDEXES_MATCH_END_UTIME = "AP", t.SHAREDINDEXES_MATCH_START_UTIME = "AD", t.SHAREDINDEXES_ON_TRACK = "WZ", t.SHAREDINDEXES_PARTICIPANT_CYCLING_JERSEY = "WY", t.SHAREDINDEXES_PARTICIPANT_STATUS = "WT", t.SHAREDINDEXES_PARTICIPANT_STATUS_SUBTYPE = "VX", t.SHAREDINDEXES_PERIOD_START_UTIME = "AO", t.SHAREDINDEXES_PITSTOPS = "NF", t.SHAREDINDEXES_RANK = "WS", t.SHAREDINDEXES_RANK_TIED = "WW", t.SHAREDINDEXES_REFRESH_UTIME = "A2", t.SHAREDINDEXES_SERVICE = "WC", t.SHAREDINDEXES_SOURCE_TYPE_OF_GAME = "BW", t.SHAREDINDEXES_SPORT_ID = "SA", t.SHAREDINDEXES_STARTING_PRICE = "NM", t.SHAREDINDEXES_STATS_SORT_KEY = "NI", t.SHAREDINDEXES_TIME = "ND", t.SHAREDINDEXES_TOTAL_RESULT = "BI", t.SHAREDINDEXES_TOURNAMENT_NAME = "ZA", t.SHAREDINDEXES_TOURNAMENT_STAGE_ID = "ZC", t.SHAREDINDEXES_UPCOMING_DRAW_ID = "UD", t.SHAREDINDEXES_UPDATE_LOCAL_FEED_UPDATED_TIME = "UL", t.SHAREDINDEXES_WEIGHT = "NL", t.STANDINGSINDEXES_AGAINST_PERCENTAGE = "TAP", t.STANDINGSINDEXES_COUNTRY = "TC", t.STANDINGSINDEXES_COUNTRY_ID = "TB", t.STANDINGSINDEXES_COUNTRY_TYPE = "TT", t.STANDINGSINDEXES_COUNTRY_TYPE_ID = "TA", t.STANDINGSINDEXES_CRICKET_LIVE_TABLE_NET_RUN_RATE = "LG", t.STANDINGSINDEXES_CRICKET_LIVE_TABLE_WINS_WITH_ABANDONED = "LM", t.STANDINGSINDEXES_CRICKET_NET_RUN_RATE = "TG", t.STANDINGSINDEXES_CRICKET_RUNS = "TGR", t.STANDINGSINDEXES_CRICKET_WINS_WITH_ABANDONED = "TM", t.STANDINGSINDEXES_DRAWS = "TDR", t.STANDINGSINDEXES_DYNAMIC_COLUMNS_DATA = "DCD", t.STANDINGSINDEXES_DYNAMIC_COLUMNS_DATA_LIVE = "DCDL", t.STANDINGSINDEXES_DYNAMIC_COLUMNS_LEGEND = "DCL", t.STANDINGSINDEXES_DYNAMIC_COLUMNS_SIZES = "DCS", t.STANDINGSINDEXES_EXTENDED_TYPE = "ETN", t.STANDINGSINDEXES_EXTENDED_TYPE_ID = "ETI", t.STANDINGSINDEXES_EXTRA_INFO_RANK_LEGEND = "TV", t.STANDINGSINDEXES_EXTRA_INFO_TEXT = "TQ", t.STANDINGSINDEXES_GOALS = "TG", t.STANDINGSINDEXES_GOALS_PER_MATCH = "TGM", t.STANDINGSINDEXES_HAS_SPACE_AFTER_EXTRA_INFO = "TX", t.STANDINGSINDEXES_HTFT_DRAW_DRAW = "HDD", t.STANDINGSINDEXES_HTFT_DRAW_LOSS = "HDL", t.STANDINGSINDEXES_HTFT_DRAW_WIN = "HDW", t.STANDINGSINDEXES_HTFT_LOSS_DRAW = "HLD", t.STANDINGSINDEXES_HTFT_LOSS_LOSS = "HLL", t.STANDINGSINDEXES_HTFT_LOSS_WIN = "HLW", t.STANDINGSINDEXES_HTFT_WIN_DRAW = "HWD", t.STANDINGSINDEXES_HTFT_WIN_LOSS = "HWL", t.STANDINGSINDEXES_HTFT_WIN_WIN = "HWW", t.STANDINGSINDEXES_INFO_TEXT = "TIT", t.STANDINGSINDEXES_LAST_MATCH_AWAY_PARTICIPANT_ID_ENCODED = "LMA", t.STANDINGSINDEXES_LAST_MATCH_AWAY_URL = "LMB", t.STANDINGSINDEXES_LAST_MATCH_EVENT_ID_ENCODED = "LME", t.STANDINGSINDEXES_LAST_MATCH_HOME_PARTICIPANT_ID_ENCODED = "LMH", t.STANDINGSINDEXES_LAST_MATCH_HOME_URL = "LMI", t.STANDINGSINDEXES_LAST_MATCH_LINK = "LML", t.STANDINGSINDEXES_LAST_MATCH_SYMBOL = "LMS", t.STANDINGSINDEXES_LAST_MATCH_TITLE = "LMT", t.STANDINGSINDEXES_LAST_MATCH_TYPE = "LMU", t.STANDINGSINDEXES_LIVE_TABLE_GOALS = "LG", t.STANDINGSINDEXES_LIVE_TABLE_LIVE_EVENT_ID = "LE", t.STANDINGSINDEXES_LIVE_TABLE_MATCHES = "LM", t.STANDINGSINDEXES_LIVE_TABLE_PCT_OR_POINTS = "LC", t.STANDINGSINDEXES_LIVE_TABLE_POSITION_CHANGE = "LK", t.STANDINGSINDEXES_LIVE_TABLE_SCORE = "LS", t.STANDINGSINDEXES_LOSSES = "TL", t.STANDINGSINDEXES_LOSSES_IN_OVERTIME = "TLO", t.STANDINGSINDEXES_LOSSES_REGULAR = "TLR", t.STANDINGSINDEXES_MAIN_MENU_TRANS = "TZ", t.STANDINGSINDEXES_MATCHES = "TM", t.STANDINGSINDEXES_NO_RESULT_MATCHES = "NRM", t.STANDINGSINDEXES_OVERALL_LEGEND = "TO", t.STANDINGSINDEXES_OVERALL_LEGEND_STATIC = "TOS", t.STANDINGSINDEXES_OVER_UNDER_OVER = "OUO", t.STANDINGSINDEXES_OVER_UNDER_UNDER = "OUU", t.STANDINGSINDEXES_PARTICIPANTS_IMAGE_MAP_URL = "TZI", t.STANDINGSINDEXES_PARTICIPANTS_IMAGE_OFFSET = "IM", t.STANDINGSINDEXES_PARTICIPANT_IDS = "TI", t.STANDINGSINDEXES_PARTICIPANT_NAMES = "TN", t.STANDINGSINDEXES_PCT = "PC", t.STANDINGSINDEXES_PESAPALLO_0_POINT_MATCHES = "TPD", t.STANDINGSINDEXES_PESAPALLO_1_POINT_MATCHES = "TPC", t.STANDINGSINDEXES_PESAPALLO_2_POINT_MATCHES = "TPB", t.STANDINGSINDEXES_PESAPALLO_3_POINT_MATCHES = "TPA", t.STANDINGSINDEXES_PESAPALLO_GOALS_FOR_AGAINST_DIFF = "TPF", t.STANDINGSINDEXES_PESAPALLO_POINTS_PER_EVENT = "TPP", t.STANDINGSINDEXES_POINTS = "TP", t.STANDINGSINDEXES_RANK = "TR", t.STANDINGSINDEXES_RANK_CLASS = "TU", t.STANDINGSINDEXES_RANK_COLOR = "TUC", t.STANDINGSINDEXES_ROUND_TYPE = "TE", t.STANDINGSINDEXES_ROUND_TYPE_ID = "TD", t.STANDINGSINDEXES_SELECTED_PARTICIPANT = "TS", t.STANDINGSINDEXES_SUB_MENU_TRANS = "TZS", t.STANDINGSINDEXES_WINS = "TW", t.STANDINGSINDEXES_WINS_IN_OVERTIME = "TWO", t.STANDINGSINDEXES_WINS_REGULAR = "TWR", t.STANDINGSLISTINDEXES_CATEGORY_ID = "TF", t.STANDINGSLISTINDEXES_COUNTRY = "TB", t.STANDINGSLISTINDEXES_COUNTRY_ID = "TC", t.STANDINGSLISTINDEXES_SEASON_ID = "TT", t.STANDINGSLISTINDEXES_STAGE = "TS", t.STANDINGSLISTINDEXES_TOP_LEAGUE_KEY = "TG", t.STANDINGSLISTINDEXES_TOURNAMENT_ID = "TD", t.STANDINGSLISTINDEXES_TOURNAMENT_NAME = "TA", t.STANDINGSLISTINDEXES_TOURNAMENT_TEMPLATE_ID = "TE", t.STANDINGSSIGNSINDEXES_AWAY_TABLE_HASH = "STA", t.STANDINGSSIGNSINDEXES_DRAW_HASH = "SD", t.STANDINGSSIGNSINDEXES_FORM_TABLE_HASH = "STF", t.STANDINGSSIGNSINDEXES_HOME_TABLE_HASH = "STH", t.STANDINGSSIGNSINDEXES_LIVE_TABLE_HASH = "SL", t.STANDINGSSIGNSINDEXES_TABLE_HASH = "ST", t.STANDINGSSIGNSINDEXES_TABS = "TB", t.STANDINGSSIGNSINDEXES_TOP_SCORERS_HASH = "SS", t.STANDINGSTABSINDEXES_ADVANCED_HASH = "SD", t.STANDINGSTABSINDEXES_AVAILABLE_TABLES = "TB", t.STANDINGSTABSINDEXES_AWAY_FORM_HASH = "SI", t.STANDINGSTABSINDEXES_AWAY_HALF_TIME_FULL_TIME_HASH = "SO", t.STANDINGSTABSINDEXES_AWAY_HASH = "SC", t.STANDINGSTABSINDEXES_AWAY_OVER_UNDER_HASH = "SL", t.STANDINGSTABSINDEXES_HOME_FORM_HASH = "SH", t.STANDINGSTABSINDEXES_HOME_HALF_TIME_FULL_TIME_HASH = "SN", t.STANDINGSTABSINDEXES_HOME_HASH = "SB", t.STANDINGSTABSINDEXES_HOME_OVER_UNDER_HASH = "SK", t.STANDINGSTABSINDEXES_OVERALL_FORM_HASH = "SE", t.STANDINGSTABSINDEXES_OVERALL_HALF_TIME_FULL_TIME_HASH = "SM", t.STANDINGSTABSINDEXES_OVERALL_HASH = "SA", t.STANDINGSTABSINDEXES_OVERALL_LIVE_HASH = "ST", t.STANDINGSTABSINDEXES_OVERALL_OVER_UNDER_HASH = "SF", t.STANDINGSTABSINDEXES_STREAKS_HASH = "SG", t.STANDINGSTABSINDEXES_TOP_SCORERS_HASH = "SJ", t.STATISTICSINDEXES_AWAY_VALUE = "SI", t.STATISTICSINDEXES_GROUP_LABEL = "SF", t.STATISTICSINDEXES_HOME_VALUE = "SH", t.STATISTICSINDEXES_NAME = "SG", t.STATISTICSINDEXES_TAB_LABEL = "SE", t.STATSINDEXES_ASSISTS = "AS", t.STATSINDEXES_BALL_NUMBER = "BN", t.STATSINDEXES_BALL_TYPE = "BT", t.STATSINDEXES_BALL_VALUE = "BV", t.STATSINDEXES_IS_ADDITIONAL = "AL", t.STATSINDEXES_IS_CHANGED = "CH", t.STATSINDEXES_OVER_SENTENCE = "OS", t.STATSINDEXES_PARTICIPANT_TYPE = "PT", t.STATSINDEXES_POINTS = "PT", t.STATSINDEXES_SCORE = "SC", t.STATSINDEXES_SERVICE_LOST_PARTICIPANT_TYPE = "SLPT", t.STATSINDEXES_SERVICE_PARTICIPANT_TYPE = "SPT", t.SUMMARYINDEXES_AWAY_RESULT = "IH", t.SUMMARYINDEXES_BATSMAN = "SIA", t.SUMMARYINDEXES_BEST_OF_FRAMES = "DY", t.SUMMARYINDEXES_BOWLER = "SIB", t.SUMMARYINDEXES_BROADCASTS = "TA", t.SUMMARYINDEXES_BROADCASTS_BOOKMAKERS = "TVB", t.SUMMARYINDEXES_BROADCASTS_TV = "TVT", t.SUMMARYINDEXES_EVENT_STAGE_STATUS_TYPE_ID = "STT", t.SUMMARYINDEXES_FIFTH_SET = "RG", t.SUMMARYINDEXES_FIRST_SET = "RC", t.SUMMARYINDEXES_FOURTH_SET = "RF", t.SUMMARYINDEXES_HOME_RESULT = "IG", t.SUMMARYINDEXES_INCIDENT_ADDED_TIME = "ID", t.SUMMARYINDEXES_INCIDENT_ADDED_TIME_NEW = "IDX", t.SUMMARYINDEXES_INCIDENT_ID = "III", t.SUMMARYINDEXES_INCIDENT_ID_NEW = "IIIX", t.SUMMARYINDEXES_INCIDENT_PLAYER_ID = "IM", t.SUMMARYINDEXES_INCIDENT_PLAYER_ID_NEW = "IMX", t.SUMMARYINDEXES_INCIDENT_PLAYER_NAME = "IF", t.SUMMARYINDEXES_INCIDENT_PLAYER_NAME_NEW = "IFX", t.SUMMARYINDEXES_INCIDENT_SIDE = "IA", t.SUMMARYINDEXES_INCIDENT_SIDE_NEW = "IAX", t.SUMMARYINDEXES_INCIDENT_SUBTYPE = "IJ", t.SUMMARYINDEXES_INCIDENT_SUBTYPE_NAME = "IL", t.SUMMARYINDEXES_INCIDENT_SUBTYPE_NAME_NEW = "ILX", t.SUMMARYINDEXES_INCIDENT_SUBTYPE_NEW = "IJX", t.SUMMARYINDEXES_INCIDENT_TIME = "IB", t.SUMMARYINDEXES_INCIDENT_TIME_NEW = "IBX", t.SUMMARYINDEXES_INCIDENT_TIME_SEC = "IC", t.SUMMARYINDEXES_INCIDENT_TIME_SEC_NEW = "ICX", t.SUMMARYINDEXES_INCIDENT_TYPE = "IE", t.SUMMARYINDEXES_INCIDENT_TYPE_NAME = "IK", t.SUMMARYINDEXES_INCIDENT_TYPE_NAME_NEW = "IKX", t.SUMMARYINDEXES_INCIDENT_TYPE_NEW = "IEX", t.SUMMARYINDEXES_IS_MAIN_STAGE = "RM", t.SUMMARYINDEXES_MATCH_INFO_TYPE = "MIT", t.SUMMARYINDEXES_MATCH_INFO_VALUE = "MIV", t.SUMMARYINDEXES_MATCH_OVERALL_TIME = "RB", t.SUMMARYINDEXES_RECENT_OVERS = "SIC", t.SUMMARYINDEXES_SCRATCH_CATEGORY = "SPC", t.SUMMARYINDEXES_SCRATCH_LABEL = "SPE", t.SUMMARYINDEXES_SCRATCH_PLAYER_COUNTRY_ID = "SPF", t.SUMMARYINDEXES_SCRATCH_PLAYER_COUNTRY_NAME = "SPG", t.SUMMARYINDEXES_SCRATCH_PLAYER_ID = "SPI", t.SUMMARYINDEXES_SCRATCH_PLAYER_IS_UNSURE = "SPU", t.SUMMARYINDEXES_SCRATCH_PLAYER_NAME = "SPN", t.SUMMARYINDEXES_SCRATCH_PLAYER_TEAM = "SPT", t.SUMMARYINDEXES_SCRATCH_PLAYER_UNSURE_LABEL = "SPD", t.SUMMARYINDEXES_SECOND_SET = "RD", t.SUMMARYINDEXES_STAGE_IS_CANCELLED = "RX", t.SUMMARYINDEXES_STAGE_TEXT = "RN", t.SUMMARYINDEXES_TEAM_MEMBER_COUNTRY_ID = "TMC", t.SUMMARYINDEXES_TEAM_MEMBER_ID = "TMI", t.SUMMARYINDEXES_TEAM_MEMBER_NAME = "TMN", t.SUMMARYINDEXES_TEAM_MEMBER_SIDE = "TMS", t.SUMMARYINDEXES_THIRD_SET = "RE", t.SUMMARYPARTICIPANTINDEXES_CYCLING_JERSEY_TRANSLATE = "RK", t.SUMMARYPARTICIPANTINDEXES_CYCLING_JERSEY_TYPE = "RJ", t.SUMMARYPARTICIPANTINDEXES_GOLF_AWAY_RESULT = "RA", t.SUMMARYPARTICIPANTINDEXES_GOLF_HOLE_DATA = "RR", t.SUMMARYPARTICIPANTINDEXES_GOLF_HOME_RESULT = "RH", t.SUMMARYPARTICIPANTINDEXES_GOLF_ROUND_NAME = "RL", t.SUMMARYPARTICIPANTINDEXES_RACING_GAP = "RO", t.SUMMARYPARTICIPANTINDEXES_RACING_IS_LIVE = "RI", t.SUMMARYPARTICIPANTINDEXES_RACING_RANK = "RP", t.SUMMARYPARTICIPANTINDEXES_RACING_STATUS_SHORT_NAME = "RS", t.SUMMARYPARTICIPANTINDEXES_RACING_TIME = "RT", t.SUMMARYPARTICIPANTINDEXES_STAGE_ID = "RY", t.TEAMSQUADINDEXES_FLAG_ID = "FI", t.TEAMSQUADINDEXES_GROUP_NAME = "GN", t.TEAMSQUADINDEXES_GROUP_PLAYER_TYPE = "GT", t.TEAMSQUADINDEXES_PLAYER_COUNTRY_ID = "PC", t.TEAMSQUADINDEXES_PLAYER_ID = "PI", t.TEAMSQUADINDEXES_PLAYER_JERSEY_NUM = "PJ", t.TEAMSQUADINDEXES_PLAYER_NAME = "PN", t.TEAMSQUADINDEXES_PLAYER_TYPE_ID = "TI", t.TOPSCORERSINDEXES_ACTIVE_PLAYER = "UB", t.TOPSCORERSINDEXES_ASISTS_SECOND = "UL", t.TOPSCORERSINDEXES_ASSISTS = "UK", t.TOPSCORERSINDEXES_GOALS = "UJ", t.TOPSCORERSINDEXES_LEGEND = "UM", t.TOPSCORERSINDEXES_MENU_TRANS = "TZ", t.TOPSCORERSINDEXES_PLAYER_COUNTRY_ID = "UC", t.TOPSCORERSINDEXES_PLAYER_ID = "UP", t.TOPSCORERSINDEXES_PLAYER_NAME = "UF", t.TOPSCORERSINDEXES_PLAYER_POSITION_NAME = "UPN", t.TOPSCORERSINDEXES_PLAYER_POSITION_ORDER = "UPO", t.TOPSCORERSINDEXES_PLAYER_TEAM_ID = "UT", t.TOPSCORERSINDEXES_PLAYER_TYPE_ID = "UH", t.TOPSCORERSINDEXES_POINTS = "UI", t.TOPSCORERSINDEXES_RANK = "UA", t.TOPSCORERSINDEXES_TEAM_NAME = "UU", t.TOURNAMENTSTAGEEVENTSINDEXES_NUMBER_OF_PAGES = "PW", t.TRANSFERSINDEXES_AFFECTED_TEAM = "TEAT", t.TRANSFERSINDEXES_COUNTRY_NAME = "CRNA", t.TRANSFERSINDEXES_DATE = "DATE", t.TRANSFERSINDEXES_PARTICIPANT_ICON = "PI", t.TRANSFERSINDEXES_PLAYER_URL = "PURL", t.TRANSFERSINDEXES_PROPERTY_ID = "PID", t.TRANSFERSINDEXES_TEAM_URL = "TURL", t.TRANSFERSINDEXES_TRANSFER_DIRECTION = "TD", t.TRANSFERSINDEXES_TRANSFER_TYPE = "TT", t.TVINDEXES_BUNDLE_APPLE_PRODUCT_ID = "TAP", t.TVINDEXES_BUNDLE_EXPIRATION_PERIOD = "TBD", t.TVINDEXES_BUNDLE_FOR_FREE = "TFB", t.TVINDEXES_BUNDLE_IS_ACTIVE = "TIA", t.TVINDEXES_BUNDLE_IS_PURCHASABLE = "TIP", t.TVINDEXES_BUNDLE_NAME = "TBN", t.TVINDEXES_BUNDLE_PRICE_CURRENCY_CODE = "TCC", t.TVINDEXES_BUNDLE_PRICE_CURRENCY_VALUE = "TCV", t.TVINDEXES_BUNDLE_UUID = "TUI", t.TVINDEXES_CHANNELS_STREAM_TYPE_ID = "CST", t.TVINDEXES_CHANNEL_ID = "CIT", t.TVINDEXES_CHANNEL_IMAGE_BIG = "CIB", t.TVINDEXES_CHANNEL_IMAGE_SMALL = "CIS", t.TVINDEXES_CHANNEL_NAME = "CNT", t.TVINDEXES_END_POINTER = "TIE", t.UPCOMINGDRAWINDEXES_UPCOMING_DRAW_IS_FINAL = "UF", t.UPCOMINGDRAWINDEXES_UPCOMING_DRAW_LEVEL = "UL", t.UPCOMINGDRAWINDEXES_UPCOMING_DRAW_ROUND_NAME = "UN", t.UPDATEINDEXES_AWAY_GOAL_DISALLOWED = "GDB", t.UPDATEINDEXES_AWAY_GOLF_PAR_DIFF = "PG", t.UPDATEINDEXES_AWAY_PENALTY_MISSED = "ED", t.UPDATEINDEXES_AWAY_PENALTY_SHOT = "EB", t.UPDATEINDEXES_AWAY_SCORES_CHANGED = "SCB", t.UPDATEINDEXES_HAS_LIVE_TABLE = "ZO", t.UPDATEINDEXES_HOME_GOAL_DISALLOWED = "GDA", t.UPDATEINDEXES_HOME_GOLF_PAR_DIFF = "PF", t.UPDATEINDEXES_HOME_PENALTY_MISSED = "EC", t.UPDATEINDEXES_HOME_PENALTY_SHOT = "EA", t.UPDATEINDEXES_HOME_SCORES_CHANGED = "SCA", t.UPDATEINDEXES_IS_IN_TIEBREAK_TO_10 = "ZI", t.UPDATEINDEXES_PERIOD_UPDATE_UTIME = "AR", t.UPDATELOCALINDEXES_EVENT_ID = "AA", t.UPDATELOCALINDEXES_HAS_TV_OR_LIVESTREAMING = "AL", t.UPDATELOCALINDEXES_INFO_NOTICE = "AM", t.UPDATELOCALINDEXES_SPORT_ID = "SA", t
            })()
        },
        207: function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return _
            })), s.d(e, "a", (function() {
                return E
            }));
            const _ = 15;
            class E {
                constructor(t, e, s, E) {
                    this._isConnected = !1, this._connectedServer = "", this._reconnectTime = _, this._domain = t, this._domainAliases = e, this._port = s, this._protocol = E ? "https://" : "http://"
                }
                getDomain() {
                    return this._domain
                }
                getDomainAliases() {
                    return this._domainAliases
                }
                getPort() {
                    return this._port
                }
                getProtocol() {
                    return this._protocol
                }
                getServers() {
                    const t = [],
                        e = this._domainAliases.replace(/[ ]/g, "").split(",").filter(t => "" !== t);
                    for (const s of e) {
                        const [e, _ = "100"] = s.split(":");
                        t.push(`${_} ${this._protocol}${e}.${this._domain}:${this._port}`)
                    }
                    return t
                }
                getReconnectTime() {
                    return this._reconnectTime
                }
                setReconnectTime(t) {
                    this._reconnectTime = t > 600 ? 600 : t
                }
                connect() {
                    this._isConnected = !0
                }
                disconnect() {
                    this._isConnected = !1
                }
                isConnected() {
                    return this._isConnected
                }
                getConnectedServer() {
                    return this._connectedServer
                }
                setConnectedServer(t) {
                    this._connectedServer = t
                }
            }
        },
        208: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return _
            }));
            class _ {
                constructor(t) {
                    this.CHANNELS_STORAGE_KEY = "lstv_channels", this.CHANNELS_UPDATED_STORAGE_KEY = "lstv_channels_updated", this.storage = t
                }
                setChannels(t, e) {
                    this.storage.setItem(this.CHANNELS_STORAGE_KEY, JSON.stringify(t)), this.storage.setItem(this.CHANNELS_UPDATED_STORAGE_KEY, e.toString())
                }
                getChannels() {
                    var t;
                    return JSON.parse(null !== (t = this.storage.getItem(this.CHANNELS_STORAGE_KEY)) && void 0 !== t ? t : "")
                }
                isSyncNeeded() {
                    return this.isEmpty() || this.isOutdated()
                }
                isEmpty() {
                    return !this.storage.getItem(this.CHANNELS_STORAGE_KEY)
                }
                isOutdated() {
                    const t = Number(this.storage.getItem(this.CHANNELS_UPDATED_STORAGE_KEY));
                    return new Date(Date.now() - 36e5).getTime() > t
                }
            }
        },
        22: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return i
            }));
            var _ = s(15);
            class E {
                constructor(t, e, s, _, E, i, r, a, n, o, S, I, T, A) {
                    this.id = t, this.name = e, this.bundleUuid = s, this.bundleName = _, this.isFree = E, this.priceCurrencyCode = i, this.priceCurrencyValue = r, this.isPaid = a, this.expirationDate = n, this.expirationPeriod = o, this.encodedImageFilename = S, this.streamTypeId = I, this.isPurchasable = T, this.isActive = A
                }
                getId() {
                    return this.id
                }
                getName() {
                    return this.name
                }
                getBundleUuid() {
                    return this.bundleUuid
                }
                getBundleName() {
                    return this.bundleName
                }
                getIsFree() {
                    return this.isFree
                }
                getExpirationDate() {
                    return this.expirationDate
                }
                getExpirationPeriod() {
                    return this.expirationPeriod
                }
                getPriceCurrencyCode() {
                    return this.priceCurrencyCode
                }
                getPriceCurrencyValue() {
                    return this.priceCurrencyValue
                }
                getPrice() {
                    return "%s %s".replace(/%s/, this.getPriceCurrencyValue()).replace(/%s/, this.getPriceCurrencyCode()).trim()
                }
                getIsPaid() {
                    return this.isPaid
                }
                getEncodedImageFilename() {
                    return this.encodedImageFilename
                }
                getSteamTypeId() {
                    return this.streamTypeId
                }
                getIsPurchasable() {
                    return this.isPurchasable
                }
                getIsActive() {
                    return this.isActive
                }
                isScheduled() {
                    return this.getSteamTypeId() == _.a.SCHEDULED
                }
                isLive() {
                    return this.getSteamTypeId() == _.a.LIVE
                }
                isPaused() {
                    return this.getSteamTypeId() == _.a.PAUSED
                }
                isFinished() {
                    return this.getSteamTypeId() == _.a.FINISHED
                }
                isCanceled() {
                    return this.getSteamTypeId() == _.a.CANCELED
                }
                isUnavailable() {
                    return this.getSteamTypeId() == _.a.UNAVAILABLE
                }
            }
            class i {
                constructor(t = null) {
                    this.id = 0, this.name = "", this.bundleUuid = "", this.bundleName = "", this.isFree = !1, this.priceCurrencyCode = "", this.priceCurrencyValue = "", this.isPaid = !1, this.expirationDate = "", this.expirationPeriod = "", this.encodedImageFilename = "", this.streamTypeId = 0, this.isPurchasable = !1, this.isActive = !1, t && this.setId(t.getId()).setName(t.getName()).setBundleUuid(t.getBundleUuid()).setBundleName(t.getBundleName()).setIsFree(t.getIsFree()).setPriceCurrencyCode(t.getPriceCurrencyCode()).setPriceCurrencyValue(t.getPriceCurrencyValue()).setIsPaid(t.getIsPaid()).setExpirationDate(t.getExpirationDate()).setExpirationPeriod(t.getExpirationPeriod()).setEncodedImageFilename(t.getEncodedImageFilename()).setStreamTypeId(t.getSteamTypeId()).setIsPurchasable(t.getIsPurchasable()).setIsActive(t.getIsActive())
                }
                setId(t) {
                    return this.id = t, this
                }
                setName(t) {
                    return this.name = t, this
                }
                setBundleUuid(t) {
                    return this.bundleUuid = t, this
                }
                setBundleName(t) {
                    return this.bundleName = t, this
                }
                setIsFree(t) {
                    return this.isFree = t, this
                }
                setPriceCurrencyCode(t) {
                    return this.priceCurrencyCode = t, this
                }
                setPriceCurrencyValue(t) {
                    return this.priceCurrencyValue = t, this
                }
                setIsPaid(t) {
                    return this.isPaid = t, this
                }
                setExpirationDate(t) {
                    return this.expirationDate = t, this
                }
                setExpirationPeriod(t) {
                    return this.expirationPeriod = t, this
                }
                setEncodedImageFilename(t) {
                    return this.encodedImageFilename = t, this
                }
                setStreamTypeId(t) {
                    return this.streamTypeId = t, this
                }
                setIsPurchasable(t) {
                    return this.isPurchasable = t, this
                }
                setIsActive(t) {
                    return this.isActive = t, this
                }
                build() {
                    return new E(this.id, this.name, this.bundleUuid, this.bundleName, this.isFree, this.priceCurrencyCode, this.priceCurrencyValue, this.isPaid, this.expirationDate, this.expirationPeriod, this.encodedImageFilename, this.streamTypeId, this.isPurchasable, this.isActive)
                }
            }
        },
        23: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return E
            }));
            var _ = s(26);
            class E {
                constructor(t, e, s) {
                    this.parseData = t => new Promise(e => {
                        _.a.parse(this.parser, t.getBody(), t.getProperties()), e(this.parser.getParsedModel())
                    }), this.feed = t, this.fetcher = e, this.parser = s
                }
                fetch(t) {
                    return this.fetcher.fetch(this.feed, t).then(this.parseData)
                }
            }
        },
        233: function(t, e) {
            var s;
            ! function(t) {
                t.Bundle = "bundle", t.OneBundle30 = "one_bundle_30"
            }(s || (s = {})), cjs.Api.loader.get("cjs").call(t => {
                ((t, e, s) => {
                    let _, E;
                    t.fulfill((t, i) => {
                        e.call(e => {
                            var r, a, n, o;
                            const S = e.getBundles();
                            let I = 0;
                            S && (I = S.length), t.event_tv_start_order_from_event ? _ = t.event_tv_start_order_from_event : _ && (t.event_tv_start_order_from_event = _), t.event_tv_start_play_from_event ? E = t.event_tv_start_play_from_event : E && (t.event_tv_start_play_from_event = E), t.event_id = null !== (r = null === cjs || void 0 === cjs ? void 0 : cjs.eventId) && void 0 !== r && r, t.user_has_registered_card = null !== (n = null === (a = e.getUsersCard()) || void 0 === a ? void 0 : a.type) && void 0 !== n && n, t.user_tv_number_of_bundles = I, t.tv_action_sec_from_event_start = "game_utime" in window && window.game_utime ? Math.round((new Date).getTime() / 1e3) - window.game_utime : void 0, t.tv_order_code = null !== (o = e.getTransactionId(null === cjs || void 0 === cjs ? void 0 : cjs.eventId)) && void 0 !== o ? o : void 0, s.push(t), i && i()
                        })
                    })
                })(t.Api.loader.get("modules/eventTracking/lstv"), t.Api.loader.get("tv/dataManager"), window.dataLayer = window.dataLayer || [])
            })
        },
        252: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return _
            }));
            class _ {
                getTransKey(t) {
                    return t.replace("%s", "BOXING")
                }
            }
        },
        258: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return E
            }));
            class _ {
                constructor(t) {
                    this._url = t
                }
                getUrl() {
                    return this._url
                }
            }
            class E {
                constructor(t) {
                    this._bookmakerLogos = t
                }
                resolve(t) {
                    if (this._bookmakerLogos && t in this._bookmakerLogos.urls) {
                        const e = this._bookmakerLogos.urls[t];
                        return new _(e)
                    }
                    return null
                }
            }
        },
        26: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return _
            }));
            let _ = (() => {
                class t {
                    static parse(t, e, s) {
                        s && t.setProperties(s), t.startFeed(), e.split(this.DELIMITER_ROW).filter(this.filterEmptyStrings).forEach(e => this.parseRow(t, e)), t.endFeed()
                    }
                    static parseRow(t, e) {
                        t.startRow(), e.split(this.DELIMITER_CELL).filter(this.filterEmptyStrings).forEach(e => this.parseCell(t, e)), t.endRow()
                    }
                    static parseCell(t, e) {
                        const [s, _] = e.split(this.DELIMITER_VALUE);
                        t.parse(s, this.parseValue(_))
                    }
                    static parseValue(t) {
                        return void 0 === t ? "" : t.includes(this.DELIMITER_ARRAY) ? t.split(this.DELIMITER_ARRAY) : t
                    }
                    static filterEmptyStrings(t) {
                        return !!t
                    }
                }
                return t.DELIMITER_ROW = "~", t.DELIMITER_CELL = "Â¬", t.DELIMITER_VALUE = "Ã·", t.DELIMITER_ARRAY = "|", t
            })()
        },
        303: function(t, e, s) {
            "use strict";
            (function(t) {
                s.d(e, "a", (function() {
                    return E
                }));
                var _ = s(207);
                class E {
                    constructor(t, e, s, _, E) {
                        this._logger = t, this._push = e, this._connection = s, this._fallback = _, this._updater = E
                    }
                    get() {
                        return e => {
                            switch (e.type) {
                                case "NOTIFY_SERVER_UP":
                                    this._logger.log("NOTIFY: Server Up"), this._connection.connect(), this._fallback.stop(), this._updater.refreshDataIfNeeded(), this._logger.log(`Connected to server: ${this._push.getConnectedServer()}.${this._connection.getDomain()}`), this._connection.setReconnectTime(_.b);
                                    break;
                                case "NOTIFY_SERVER_DOWN": {
                                    this._logger.log("NOTIFY: Server Down"), this._push.disconnect(!1), this._connection.setReconnectTime(2 * this._connection.getReconnectTime());
                                    const e = Math.floor(Math.random() * this._connection.getReconnectTime() + 1);
                                    this._logger.log(`Try reconnect to a Push server in ${e} seconds.`);
                                    const s = t.setTimeout(() => this._push.reconnect(), 1e3 * e);
                                    this._fallback.setReconnectCheckerProcess(s), this._updater.refreshDataIfNeeded(), this._fallback.start();
                                    break
                                }
                                case "NOTIFY_DATA_RESYNC": {
                                    this._logger.log("NOTIFY: Data Loss");
                                    const t = this._logger.getErrorReporter();
                                    t && t("NOTIFY: Data Loss", null, !0);
                                    break
                                }
                                case "NOTIFY_UNSUPPORTED_BROWSER":
                                    this._logger.log("NOTIFY: Unsupported Browser"), this._connection.disconnect();
                                    break;
                                default:
                                    this._logger.log("NOTIFY: Unknown status")
                            }
                        }
                    }
                }
            }).call(this, s(95))
        },
        304: function(t, e, s) {
            "use strict";
            (function(t) {
                s.d(e, "a", (function() {
                    return _
                }));
                class _ {
                    constructor(t, e, s = 10) {
                        this._isRunning = !1, this._isScheduled = !1, this._logger = t, e && (this._fallbackFunction = e), this._delay = s
                    }
                    getDelay() {
                        return this._delay
                    }
                    setReconnectCheckerProcess(t) {
                        this._reconnectCheckerProcess = t
                    }
                    setFallbackCheckerProcess(t) {
                        this._fallbackCheckerProcess = t
                    }
                    start() {
                        return !(!this._fallbackFunction || this._isRunning) && (this._logger.log("Starting fallback function"), this._isRunning = !0, this._fallbackFunction("start"), !0)
                    }
                    stop() {
                        return !(!this._fallbackFunction || !this._isRunning) && (this._logger.log("Stopping fallback function"), this._isRunning = !1, this._fallbackFunction("stop"), t.clearTimeout(this._reconnectCheckerProcess), !0)
                    }
                    stopScheduled() {
                        this._isScheduled && (this._fallbackFunction("stop"), t.clearTimeout(this._fallbackCheckerProcess), this._isScheduled = !1)
                    }
                    schedule(e) {
                        e = e < 0 ? 1 : e, this.clearFallbackChecker(), this._fallbackCheckerProcess = t.setTimeout(() => this.start(), 1e3 * e), this._isScheduled = !0
                    }
                    clearFallbackChecker() {
                        t.clearTimeout(this._fallbackCheckerProcess)
                    }
                }
            }).call(this, s(95))
        },
        35: function(t, e, s) {
            t.exports = {
                recomCont: "recomCont___1C5rsoZ",
                recomHeading: "recomHeading___3MRrGkP",
                recomArea: "recomArea___MaK6E-l",
                recomHref: "recomHref___3JhPU-j",
                recomImage: "recomImage___16tt1L3",
                recomName: "recomName___7otrFie"
            }
        },
        38: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return _
            }));
            class _ {
                constructor(t) {
                    this.LS_PRIVATE_DATA_KEY = "lsid_privateData", this.LS_SECURITY_HASH_KEY = "lsid_hash", this.LS_ID = "lsid_id", this.LS_EMAIL = "lsid_email", this.LS_PAYMENT_STATUS_CODE = "payment_status_code", this.LS_PURCHASED_EVENT = "purchased_event", this.LS_APPLE = "apple", this.LS_TRANSACTIONS = "transactions", this.storage = t
                }
                getPrivateData() {
                    const t = this.storage.getItem(this.LS_PRIVATE_DATA_KEY);
                    return t ? JSON.parse(t) : null
                }
                getBundles() {
                    var t;
                    const e = this.getPrivateData();
                    return (null === (t = null == e ? void 0 : e.lstv) || void 0 === t ? void 0 : t.bundles) ? e.lstv.bundles.filter(t => new Date <= new Date(t.expirationDate)) : null
                }
                getUsersCard() {
                    var t;
                    const e = this.getPrivateData();
                    return (null === (t = null == e ? void 0 : e.lstv) || void 0 === t ? void 0 : t.card) ? e.lstv.card : null
                }
                getSecurityHash() {
                    return this.storage.getItem(this.LS_SECURITY_HASH_KEY)
                }
                getCustomerId() {
                    return this.storage.getItem(this.LS_ID)
                }
                getCustomerEmail() {
                    return this.storage.getItem(this.LS_EMAIL)
                }
                getPaymentStatusCode() {
                    return this.storage.getItem(this.LS_PAYMENT_STATUS_CODE)
                }
                getPurchasedEvent() {
                    return this.storage.getItem(this.LS_PURCHASED_EVENT)
                }
                getAppleResponseData() {
                    return this.storage.getItem(this.LS_APPLE)
                }
                removePaymentStatusCode() {
                    this.storage.removeItem(this.LS_PAYMENT_STATUS_CODE)
                }
                removePurchasedEvent() {
                    this.storage.removeItem(this.LS_PURCHASED_EVENT)
                }
                removeAppleResponseData() {
                    this.storage.removeItem(this.LS_APPLE)
                }
                storePurchasedEvent(t) {
                    this.storage.setItem(this.LS_PURCHASED_EVENT, t)
                }
                storePaymentStatusCode(t) {
                    this.storage.setItem(this.LS_PAYMENT_STATUS_CODE, t)
                }
                getTransactionId(t) {
                    var e;
                    const s = this.storage.getItem(this.LS_TRANSACTIONS);
                    if (!s) return null;
                    const _ = JSON.parse(s).find(e => e.eventId === t);
                    return null !== (e = null == _ ? void 0 : _.transactionId) && void 0 !== e ? e : null
                }
                storeTransactionId(t, e, s) {
                    if (this.getTransactionId(t)) return;
                    const _ = this.storage.getItem(this.LS_TRANSACTIONS),
                        E = JSON.parse(null != _ ? _ : "[]");
                    E.push({
                        eventId: t,
                        transactionId: e,
                        expiration: s
                    }), this.storage.setItem(this.LS_TRANSACTIONS, JSON.stringify(E))
                }
                removeTransactionId(t) {
                    const e = this.storage.getItem(this.LS_TRANSACTIONS);
                    if (!e) return;
                    const s = JSON.parse(e);
                    this.storage.setItem(this.LS_TRANSACTIONS, JSON.stringify(s.filter(e => e.eventId !== t)))
                }
                removeExpiredTransactions() {
                    const t = this.storage.getItem(this.LS_TRANSACTIONS);
                    if (!t) return;
                    const e = JSON.parse(t),
                        s = (new Date).getTime(),
                        _ = e.filter(t => t.expiration > s);
                    this.storage.setItem(this.LS_TRANSACTIONS, JSON.stringify(_))
                }
                deleteCard() {
                    var t;
                    const e = this.getPrivateData();
                    return !!(null === (t = null == e ? void 0 : e.lstv) || void 0 === t ? void 0 : t.card) && (delete e.lstv.card, this.storage.setItem(this.LS_PRIVATE_DATA_KEY, JSON.stringify(e)), !0)
                }
            }
        },
        415: function(t, e, s) {
            s(476), s(460), s(416), s(462), s(465), s(468), s(469), s(470), s(471), s(459), s(472), s(417), s(233), s(418), s(461), s(473), s(419), s(474), s(457), s(475), s(489), s(420), s(477), s(467), s(478), s(466), s(456), s(479), s(421), s(422), s(480), s(481), s(482), s(423), s(463), s(424), s(483), s(484), s(485), s(425), s(486), s(487), s(426), t.exports = s(427)
        },
        416: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(137);
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s) => {
                    const E = t.Api.loader.get("boxContentManager"),
                        i = new _.b(e, s);
                    E.fulfill(t => {
                        t(i)
                    })
                })(t.dic.get("clientStorage"), t.dic.get("util_browser").isMobile())
            })
        },
        417: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(159);
            cjs.Api.loader.get("cjs").call(t => {
                t.dic.exists("Detail_Tabs_Config") && ((e, s, E, i, r, a, n, o, S) => {
                    t.Api.detailTabs = new _.b(e, s, E, i, r, a, n, o, S)
                })(t.dic.get("$"), t.Api.config, t.dic.get("util_enviroment"), t.dic.get("util_page"), t.dic.get("util_trans"), t.dic.get("util_sport"), t.dic.get("util_date"), t.dic.get("Detail_Tabs_Config"), t.dic.get("Helper_ClickableBookmaker"))
            })
        },
        418: function(t, e, s) {
            "use strict";
            cjs.Api.loader.get("cjs").call(t => {
                var e, s, _;
                e = t.Api.loader.get("modules/eventTracking/search"), s = t.Api.config.get("app", "google_analytics", "event_tracking"), _ = window.dataLayer = window.dataLayer || [], s && e.fulfill(() => {
                    let t = !1;
                    window.onkeyup = e => {
                        "Control" == e.key && (t = !1)
                    }, window.onkeydown = e => {
                        t = "Control" == e.key, (t || e.ctrlKey || e.metaKey) && "f" == e.key && _.push({
                            event: "search"
                        })
                    }
                })
            })
        },
        419: function(t, e, s) {
            "use strict";
            s.r(e);
            var _, E = s(184),
                i = s(252);
            _ = cjs.dic.get("util_trans"), cjs.Api.helperBoxing = new E.a(_, new i.a)
        },
        420: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(165),
                E = s(98);
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s, i, r, a, n, o, S, I, T) => {
                    const A = t.Api.loader.get("oddsManager");
                    t.Api.loader.get("bookmakerSettings").call((function(t) {
                        const l = new _.a(e, s, i, r, a, n, t, o, S, I, new E.a, T);
                        A.fulfill(t => {
                            t(l)
                        })
                    }))
                })(jQuery, t.dic.get("util_sport"), t.Api.config, t.dic.get("util_enviroment"), t.dic.get("util_trans"), t.dic.get("util_url"), t.dic.get("application"), t.dic.get("clientStorage"), t.dic.get("Helper_ClickableBookmaker"), t.Api.constantsManager.getSportOddsTypeList())
            })
        },
        421: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(49);
            cjs.Api.loader.get("cjs").call(t => {
                ((t, e) => {
                    const s = t.get("tableMobile");
                    s.fulfill(() => {
                        "grid" === e.get(_.e) && Object(_.c)();
                        const t = Object(_.f)();
                        Object(_.d)(t)
                    }), t.get("tableMobile/checkLocalDisplay").fulfill(() => {
                        const t = "grid" === e.get(_.e);
                        Object(_.b)(t)
                    }), t.get("tableMobile/changeDisplayTable").fulfill(t => {
                        Object(_.a)(t, e, () => s.call(() => {}))
                    })
                })(t.Api.loader, t.dic.get("client_storage"))
            })
        },
        422: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(167);
            cjs.Api.loader.get("cjs").call(t => {
                var e, s;
                e = document, s = t.Api.loader, $(() => {
                    let t;
                    s.get("tableSort").fulfill((s, E) => {
                        !s.reinit && t || (t = new _.a(e)), E(t)
                    })
                })
            })
        },
        423: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(38);
            (t => {
                const e = cjs.Api.loader.get("tv/dataManager"),
                    s = new _.a(t);
                e.fulfill(t => {
                    t(s)
                })
            })(window.localStorage)
        },
        424: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(38);
            (t => {
                cjs.Api.loader.get("tv/transactions").fulfill(() => {
                    new _.a(t.localStorage).removeExpiredTransactions()
                })
            })(window)
        },
        425: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(54);
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s, E) => {
                    let i = e.body.classList.contains(_.e);
                    const r = () => {
                            e.body.classList.toggle(_.e, i), E.store(_.b, i ? _.c : _.d)
                        },
                        a = t => {
                            const E = () => {
                                s.history.replaceState("", e.title, s.location.pathname + s.location.search)
                            };
                            if (t.startsWith("#theme-")) {
                                switch (t.substring(7)) {
                                    case _.d:
                                        i = !1, r(), E();
                                        break;
                                    case _.c:
                                        i = !0, r(), E()
                                }
                            }
                        };
                    s.addEventListener("hashchange", () => {
                        a(s.location.hash)
                    }, !1), a(s.originalHash || s.location.hash), t.Api.loader.get("util/darkMode").fulfill(t => {
                        t.addEventListener("click", () => {
                            i = !i, r()
                        })
                    })
                })(document, window, t.dic.get("clientStorage"))
            })
        },
        426: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(160);
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s, E, i, r) => {
                    t.Api.loader.get("util/stats/opener").fulfill(t => {
                        (new _.a).setTournamentId(t.tournamentId).setTournamentStageId(t.tournamentStageId).setEventId(t.eventId).setStatsTypeIdent(t.statsTypeIdent).setHighlightParticipants(t.highlightParticipants).setUtilTrans(E).setIsIos(i.isIos()).setUrlPrefix(r.get("app", "url_prefix") || "").setWidth(r.get("app", "detail", "window_size", "width")).setHeight(r.get("app", "detail", "window_size", "height")).build().openWindow(e, s, i.isMobile())
                    })
                })(window, location, t.dic.get("util_trans"), t.dic.get("util_browser"), t.Api.config)
            })
        },
        427: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(99);
            cjs.Api.loader.get("cjs").call(t => {
                t.Api.loader.get("geoIpResolver").call(e => {
                    (s => {
                        const E = new _.a(s.get("app", "video_highlights", "disabled_geoip"), e);
                        t.Api.loader.get("videoHighlightRestriction").fulfill(t => {
                            t(E)
                        })
                    })(t.Api.config)
                })
            })
        },
        44: function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return _
            })), s.d(e, "a", (function() {
                return E
            }));
            class _ {
                getProperties() {}
            }
            class E {
                constructor(t, e, s) {
                    this.domain = location.origin, this.pathPrefix = "/x/feed/", this.feedSignature = t, this.fetchFunction = e, this.urlPrefix = s
                }
                getUrl(t) {
                    return this.domain + this.urlPrefix + this.pathPrefix + t
                }
                fetch(t, e) {
                    const s = {
                        "x-fsign": this.feedSignature
                    };
                    return this.fetchFunction.then(_ => _(this.getUrl(t), Object.assign(Object.assign({}, e), {
                        headers: Object.assign(Object.assign({}, e && e.headers || {}), s)
                    })).then(t => this.resolveFetchedData(t)))
                }
            }
        },
        456: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(207);
            let E = (() => {
                class t {
                    constructor(t) {
                        this._additionalInfo = "", this._methodClass = "", this._title = "", this._elementId = t
                    }
                    update(e = t.METHOD_UNKNOWN, s = "") {
                        const _ = document.getElementById(this._elementId),
                            E = _ ? _.getElementsByTagName("span") : null,
                            i = (null == E ? void 0 : E.length) && E[0].getAttribute("class") || "";
                        !_ || i === e && this._additionalInfo == s || (this._method = e, this._additionalInfo = s, _.innerHTML = "", _.appendChild(this._getSpan()))
                    }
                    _getSpan() {
                        this._prepareAttributes();
                        const t = document.createElement("span");
                        return t.classList.add("" + this._methodClass), t.title = "" + this._title, t
                    }
                    _prepareAttributes() {
                        switch (this._method) {
                            case t.METHOD_AJAX:
                                this._methodClass = "ajax", this._title = `SyncA (${this._additionalInfo})`;
                                break;
                            case t.METHOD_PUSH:
                                this._methodClass = "push", this._title = `SyncP (${this._additionalInfo})`;
                                break;
                            default:
                                this._method = t.METHOD_UNKNOWN, this._methodClass = "nosync", this._title = "Sync Offline"
                        }
                    }
                }
                return t.METHOD_UNKNOWN = "off", t.METHOD_AJAX = "ajax", t.METHOD_PUSH = "push", t
            })();
            class i {
                constructor(t, e, s, _, E, i, r, a, n, o) {
                    this.METHOD_AJAX = "ajax", this.METHOD_PUSH = "push", this._debugMode = !1, this._logMessages = !1, this._messages = [], this._namespace = "", this._connection = t, this._isEnabled = e, this._utilDate = i.getUtilDate(), this._pushLibrary = s, this._namespace = _, this._projectId = E, this._dataProvider = i, this._subscriber = i.getSubscriber(this._namespace, n, s), this._actionResolver = a, this._fallback = r, this._logger = n, this._updater = o, this._statusHandlerModule = i.getStatusHandler(this._logger, this, this._connection, this._fallback, this._updater), this._messageHandlerModule = i.getMessageHandler(this._logger, this, a, o, this._namespace), this._logger.log(`Object created using domain: ${this._connection.getDomain()} and domain aliases: ${this._connection.getDomainAliases()}`), this._logger.log("Registering fallback function")
                }
                isDebugMode() {
                    return this._debugMode
                }
                setDebugMode(t) {
                    this._debugMode = t, this._logger.setDebugMode(t)
                }
                isEnabledLogMessages() {
                    return this._logMessages
                }
                enableLogMessages(t) {
                    this._logMessages = t
                }
                getNamespace() {
                    return this._namespace
                }
                setNamespace(t) {
                    this._namespace = t, this._logger.log("Setting namespace to: " + t)
                }
                enable(t) {
                    this._isEnabled = t
                }
                getProjectId() {
                    return this._projectId
                }
                isConnected() {
                    return this._connection.isConnected()
                }
                connect(t = 0) {
                    if ([0, -1].includes(t) && !this._connection.isConnected()) {
                        if (this.scheduleFallback(this._fallback.getDelay()), !this._isEnabled) return this._connection.disconnect(), void this._logger.log("Push disabled by configuration, reverting to AJAX");
                        this._logger.log("Connecting to a server using day_delta: " + t), this._logger.log("Configuring server list: " + this._connection.getServers()), this._pushLibrary.setServers(this.getServers()), this._pushLibrary.setMessageHandler(this._messageHandlerModule.get()), this._pushLibrary.setStatusHandler(this._statusHandlerModule.get()), this._pushLibrary.connect(), this._connection.connect()
                    }
                }
                disconnect(t = !0) {
                    if (this._connection.isConnected()) try {
                        this._pushLibrary.disconnect(), this._connection.setConnectedServer(""), this._connection.disconnect(), t && (this._logger.log("Stopping fallback mechanism"), this.stopFallback(), this._fallback.clearFallbackChecker()), this._logger.log("Disconnected from the server")
                    } catch (t) {}
                }
                reconnect(t = 0) {
                    this._logger.log("Trying reconnect to a server"), this.connect(t)
                }
                getConnection() {
                    return this._connection
                }
                getServers() {
                    return this._connection.getServers()
                }
                setSubscriptionInfo(t) {
                    this._subscriber.setSubscriptionInfo(t)
                }
                getSubscriptionInfo() {
                    return this._subscriber.getSubscriptionInfo()
                }
                subscribe(t) {
                    return this._subscriber.subscribe(t, this.isConnected())
                }
                updateSubscription(t) {
                    return this._subscriber.update(t, this.isConnected())
                }
                getConnectedServer() {
                    let t = this._connection.getConnectedServer();
                    return this._connection.isConnected() ? (t || (t = this._pushLibrary.getInfo().split("\n")[4].split("//")[1].split(".")[0], this._connection.setConnectedServer(t)), t) : ""
                }
                getMessages() {
                    return this._messages
                }
                startFallback() {
                    this._fallback.start()
                }
                scheduleFallback(t) {
                    this._fallback.schedule(t)
                }
                stopFallback() {
                    this._fallback.stop()
                }
                stopScheduledFallback() {
                    this._fallback.stopScheduled()
                }
                saveLog(t) {
                    try {
                        const e = this._messages.join("\n"),
                            s = escape("[escaped]" + e);
                        if (t.setAttribute("href", "data:application/octet-stream," + s), window.Blob && window.URL) {
                            const s = new window.Blob([e]),
                                _ = `pushMessagesLog[${this._utilDate.timestamp2date("y-m-d_H-i-s")}](${window.location})`;
                            t.setAttribute("hidden", ""), t.setAttribute("href", window.URL.createObjectURL(s)), t.setAttribute("download", _)
                        }
                    } catch (t) {}
                }
            }
            var r = s(303);
            class a {
                constructor(t, e) {
                    this._subject = t, this._content = e
                }
                getSubject() {
                    return this._subject
                }
                getContent() {
                    return this._content
                }
            }
            class n {
                constructor(t, e, s, _, E, i) {
                    this._logger = t, this._push = e, this._dataProvider = s, this._actionResolver = _, this._updater = E, this._namespace = i
                }
                get() {
                    return t => {
                        try {
                            const e = t.subject || "";
                            let s = t.content || "";
                            if (e) {
                                this._logger.log("Got new message: " + t.subject);
                                const _ = this._push.getMessages(),
                                    E = e.substr(this._namespace.length),
                                    i = this._getMessageKey(E),
                                    r = this._actionResolver.resolve(i, this._push);
                                let n = `${(new Date).getTime()}  ${e}  [${s}]`;
                                s && s.match(/^c\_\_/) && (s = this._dataProvider.getJsxCompressor().decompress(s.replace(/^c\_\_/, ""))), this._push.isEnabledLogMessages() && (n += ` [${s}] [${this._push.getConnectedServer()}]`, _.push(n)), r && r.execute(new a(e, s)), this._logger.log(`\t${E} -> ${s}`)
                            }
                        } catch (e) {
                            const s = this._logger.getErrorReporter();
                            s && s("Push response error " + JSON.stringify(t))
                        }
                        this._updater.setLastUpdateUTime(this._dataProvider.getUtilDate().getTimestamp())
                    }
                }
                _getMessageKey(t) {
                    const [e, s] = t.split("_");
                    return s ? e + "_" : "" + e
                }
            }
            class o {
                constructor(t, e, s) {
                    this._subscribeItems = [], this._subscriptionInfo = [], this._namespace = t, this._logger = e, this._pushLibrary = s
                }
                subscribe(t, e = !0) {
                    const s = [];
                    for (const e of t) {
                        const t = this._namespace + e; - 1 == this._subscribeItems.indexOf(t) && (s.push(e), this._subscribeItems.push(t))
                    }
                    if (s.length && (this._logger.log("Subscribing subjects: " + s.toString()), this._logger.log(`Total subscribed subjects: ${this._subscribeItems.length}, values: ${this._subscribeItems.toString()}`), e)) {
                        const t = this._subscribeItems.slice(0);
                        for (; t.length;) this._pushLibrary.subscribeWithHistory(t.splice(0, 20), 60)
                    }
                    return this._subscribeItems.length
                }
                unsubscribe(t, e = !0) {
                    const s = [];
                    for (const e of t) {
                        const t = this._namespace + e;
                        if (-1 != this._subscribeItems.indexOf(t)) {
                            s.push(t);
                            const e = this._subscribeItems.indexOf(t);
                            this._subscribeItems.splice(e, 1)
                        }
                    }
                    if (s.length && (this._logger.log("Unsubscribing subjects: " + t.toString()), this._logger.log(`Total subscribed subjects: ${this._subscribeItems.length}, values: ${this._subscribeItems.toString()}`), e))
                        for (; s.length;) {
                            const t = s.splice(0, 20);
                            this._pushLibrary.unsubscribe(t)
                        }
                    return this._subscribeItems.length
                }
                resubscribe(t, e) {
                    return e && this._subscribeItems.length && (this._pushLibrary.subscribeWithHistory(this._subscribeItems, t), this._logger.log(`Total subscribed subjects: ${this._subscribeItems.length}, values: ${this._subscribeItems.toString()}`)), this._subscribeItems.length
                }
                update(t, e = !0) {
                    const s = [],
                        _ = [];
                    for (const e of t) - 1 == this._subscribeItems.indexOf(e) && s.push(e);
                    for (const e of this._subscribeItems) {
                        const s = e.substr(this._namespace.length); - 1 == t.indexOf(s) && _.push(s)
                    }
                    return this.subscribe(s, e), this.unsubscribe(_, e), this._subscribeItems.length
                }
                getItems() {
                    return this._subscribeItems
                }
                getSubscriptionInfo() {
                    return this._subscriptionInfo
                }
                setSubscriptionInfo(t) {
                    this._subscriptionInfo = t
                }
            }
            class S {
                constructor(t, e, s, _, E, i, r) {
                    this._utilEnvironment = t, this._utilDate = e, this._jsxCompressor = s, this._notificationBuilder = _, this._notificationMyGames = E, this._indicator = i, this._requestBenchmark = r || null
                }
                getUtilEnvironment() {
                    return this._utilEnvironment
                }
                getUtilDate() {
                    return this._utilDate
                }
                getJsxCompressor() {
                    return this._jsxCompressor
                }
                getNotificationBuilder() {
                    return this._notificationBuilder
                }
                getNotificationMyGames() {
                    return this._notificationMyGames
                }
                getIndicator() {
                    return this._indicator
                }
                getRequestBenchmark() {
                    return this._requestBenchmark
                }
                getStatusHandler(t, e, s, _, E) {
                    return new r.a(t, e, s, _, E)
                }
                getMessageHandler(t, e, s, _, E) {
                    return new n(t, e, this, s, _, E)
                }
                getSubscriber(t, e, s) {
                    return new o(t, e, s)
                }
            }
            var I = s(304);
            class T {
                constructor(t, e) {
                    this._push = e, this._utilEnvironment = t.getUtilEnvironment(), this._utilDate = t.getUtilDate(), this._indicator = t.getIndicator(), this._notificationMyGames = t.getNotificationMyGames(), this._notificationBuilder = t.getNotificationBuilder(), this._requestBenchmark = t.getRequestBenchmark()
                }
            }
            class A extends T {
                execute(t) {
                    let e = -1;
                    const [s, _] = t.getContent().split(":");
                    "utime" === s && _ && (e = Math.abs(this._utilDate.getTimestamp() - parseInt(_)));
                    const i = -1 !== e && e < 30,
                        r = i ? 30 : Math.floor(11 * Math.random());
                    i && (this._push.stopFallback(), this._indicator.update(E.METHOD_PUSH, `${this._push.getConnectedServer()}:${this._push.getConnection().getPort()}`)), this._push.scheduleFallback(r)
                }
            }
            class l extends T {
                execute(t) {
                    const [e, s] = t.getContent().split(":");
                    if (e && s) switch (e) {
                        case "utime":
                            this._utilDate.setServerTimestamp(parseInt(s));
                            break;
                        case "sst":
                            this._utilEnvironment.setServiceStatus(s, !0);
                            break;
                        case "fcr":
                            this._utilEnvironment.checkStaticSerial(s);
                            break;
                        case "mlp":
                            this._utilEnvironment.setAjaxSyncMultiplier(s);
                            break;
                        case "dmo": {
                            const t = s.split(",");
                            for (const e of t) {
                                const [t, s] = e.split("|"), _ = parseInt(t, 10), E = this._push.getProjectId();
                                ("all" === t || _ === E && "a" === s) && (this._push.disconnect(), this._push.scheduleFallback(2 * Math.floor(11 * Math.random())), this._indicator.update("off"))
                            }
                            break
                        }
                        case "ben": {
                            const t = this._requestBenchmark;
                            t && t.changeRequestRate(parseInt(s));
                            break
                        }
                    }
                }
            }
            class h extends T {
                execute(t) {
                    const e = this._utilEnvironment.parse(t.getContent(), !0, !1, "update");
                    this._utilEnvironment.getFsUpdate().update("update"), e || this._utilEnvironment.refreshIframe()
                }
            }
            class N extends T {
                execute(t) {
                    this._utilEnvironment.responseGameHandler(t.getContent(), !1)
                }
            }
            class D extends T {
                execute(t) {
                    const e = this._notificationBuilder.get(t.getContent(), this._push, t.getSubject());
                    this._notificationMyGames.addNotification(e)
                }
            }
            class c extends T {
                execute(t) {
                    const e = t.getContent();
                    if (e) try {
                        this._utilEnvironment.getLsLoginClient().tryDataAutosync(JSON.parse(e))
                    } catch (t) {}
                }
            }
            class u extends T {
                execute(t) {
                    this._utilEnvironment.updateDetailLiveOdds(t.getContent())
                }
            }
            class d {
                constructor(t) {
                    this._dataProvider = t
                }
                resolve(t, e) {
                    switch (t) {
                        case "service":
                            return new A(this._dataProvider, e);
                        case "sys_":
                            return new l(this._dataProvider, e);
                        case "u_":
                        case "ul_":
                            return new h(this._dataProvider, e);
                        case "g_":
                            return new N(this._dataProvider, e);
                        case "games_":
                            return new D(this._dataProvider, e);
                        case "lsid_":
                            return new c(this._dataProvider, e);
                        case "lod2_":
                            return new u(this._dataProvider, e)
                    }
                    return null
                }
            }
            class R {
                constructor(t, e = (() => {}), s) {
                    this._ident = "", this._debugMode = !1, "" !== t && (this._ident = t + ": "), this._logFunction = e, this._errorReporter = s || null
                }
                getErrorReporter() {
                    return this._errorReporter
                }
                setErrorReporter(t) {
                    t && (this._errorReporter = t)
                }
                setDebugMode(t) {
                    this._debugMode = t
                }
                log(t) {
                    this._debugMode && this._logFunction(`${this._ident}${t}`)
                }
            }
            class O {
                constructor(t, e = null) {
                    this._logger = t, this._updaterFunction = e
                }
                refreshDataIfNeeded() {
                    this._logger.log("Refresh data if needed"), this._updaterFunction && this._updaterFunction.lastSyncUtimeIsTooOld() && (this._logger.log("Last sync utime is too old"), this._updaterFunction.lastSyncUtimeCanBeHandledByRepairFeed() || (this._logger.log("Last sync utime can be handled by repair feed"), this._updaterFunction.doc_resume(!0)))
                }
                setLastUpdateUTime(t) {
                    this._updaterFunction && this._updaterFunction.setLastSyncUtime(t)
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s, r, a, n) => {
                    n.addEventListener("DOMContentLoaded", () => {
                        t.Api.loader.get("benchmark").call({
                            sportId: s.getSportId()
                        }, n => {
                            const o = new E("sync-indicator");
                            t.Api.loader.get("synchronizationPush").fulfill((E, T) => {
                                const A = new _.a(E.domain, E.aliases, E.port, E.sslEnabled),
                                    l = new S(s, e, E.jsxCompressor, r, a, o, n || null),
                                    h = new R("Push", clog, t.AjaxJqObject.prototype.errorReporter),
                                    N = new I.a(h, E.fallbackMethod, E.fallbackDelay),
                                    D = new d(l),
                                    c = new O(h, s.getUpdater()),
                                    u = new i(A, E.enabled, E.migPush, E.namespace, E.projectId, l, N, D, h, c);
                                T(u);
                                t.Api.loader.get("synchronizationPushInstance").fulfill(t => {
                                    t(u)
                                })
                            }), t.Api.loader.get("syncIndicator").fulfill(t => {
                                t(o)
                            })
                        })
                    })
                })(t.dic.get("util_date"), t.dic.get("util_enviroment"), t.dic.get("NotificationBuilder"), t.dic.get("Notification_MyGames"), document)
            })
        },
        457: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s, _, E, i, r, a) {
                    this._dataEventHolderProxy = t, this._utilEnvironment = e, this._coreUpdateGetter = s, this._validator = _, this._duration = E, this._timerManager = i, this._correction = r, this._containerFiller = a
                }
                highlight(t) {
                    if (this._validator.isValid(t)) {
                        const e = this._getEventItem(t);
                        if (!e) return;
                        const s = this._utilEnvironment.isNoDuelTournamentByLeagueId(e.getLeagueId());
                        if (!this._validator.isValidEvent(e, s)) return;
                        for (const t of this._validator.getFilteredFeedIndexes(this._validator.getChangedFeedIndexes(e.getId(), e.getSportId()))) {
                            if (!this._validator.isValidFeedIndex(e, t)) return;
                            const _ = this._coreUpdateGetter().did_property_decrease(e.getId(), t),
                                E = this._correction.isCorrection(t, _, s);
                            this._processHighlightActions(e, t, s, E, _)
                        }
                    }
                }
                _processHighlightActions(t, e, s, _, E) {
                    this._resolveCleanUpIndexes(t, e, _, E, s), this._containerFiller.remove(t, e, s), this._setTimer(t, e, s, this._duration.get(e, _, t.getSportId(), t.isPlayingOnSets())), this._containerFiller.fill(t, e, _, s)
                }
                _resolveCleanUpIndexes(t, e, s, _, E) {
                    if (!s) {
                        const s = t.getOriginalId();
                        for (const i of this._validator.getCleanUpFeedIndexes(e, _)) clearTimeout(this._timerManager.getTimeoutId(s, i)), this._timerManager.removeTimeoutId(s, i), this._containerFiller.remove(t, i, E)
                    }
                }
                _setTimer(t, e, s, _) {
                    const E = t.getOriginalId(),
                        i = setTimeout(() => {
                            this._timerManager.removeTimeoutId(E, e), this._containerFiller.remove(t, e, s)
                        }, 1e3 * _);
                    clearTimeout(this._timerManager.getTimeoutId(E, e)), this._timerManager.setTimeoutId(E, e, i)
                }
                _getEventItem(t) {
                    const e = this._dataEventHolderProxy.findEventHolderByEventId(t);
                    return e ? e.getEvent(t) : null
                }
            }
            var E = s(2),
                i = s(5);
            class r {
                constructor(t, e, s, _, E, i) {
                    this._dataEventHolderProxy = t, this._utilNavigation = e, this._coreUpdateGetter = s, this._config = _, this._change = E, this._message = i
                }
                isValid(t) {
                    return this._eventExists(t)
                }
                isValidEvent(t, e) {
                    return !(t.hasFinalResultOnly() || !this._isValidTournament(e))
                }
                isValidFeedIndex(t, e) {
                    const s = String(t.getValue(e, "")),
                        _ = t.isFinished(),
                        E = t.getSportId();
                    return !!("" !== s && this._isValidGameChange(e, E, _) && this._isValidWicket(e, E, s) && this._isValidGoalDisallowed(e, s, t.getId()))
                }
                _isValidGoalDisallowed(t, e, s) {
                    if ([E.a.UPDATEINDEXES_HOME_GOAL_DISALLOWED, E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED].includes(t)) {
                        const _ = this._coreUpdateGetter().get_property_history(s, t) ? String(this._coreUpdateGetter().get_property_history(s, t)) : "";
                        if (parseInt(e) === parseInt(_) && e.length < _.length) return !1
                    }
                    return !0
                }
                getChangedFeedIndexes(t, e) {
                    const s = [];
                    for (const _ of [...new Set([...this._change.getFeedIndexesBySport(e), ...this._message.getFeedIndexesBySport(e)])]) this._coreUpdateGetter().did_property_changed(t, _) && s.push(_);
                    return s
                }
                getFilteredFeedIndexes(t) {
                    return t = this._filterByMutuallyExclusiveFeedIndexes(t, [E.a.UPDATEINDEXES_HOME_GOAL_DISALLOWED, E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.UPDATEINDEXES_HOME_SCORES_CHANGED, E.a.UPDATEINDEXES_HOME_PENALTY_SHOT, E.a.UPDATEINDEXES_HOME_PENALTY_MISSED]), t = this._filterByMutuallyExclusiveFeedIndexes(t, [E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED, E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.UPDATEINDEXES_AWAY_SCORES_CHANGED, E.a.UPDATEINDEXES_AWAY_PENALTY_SHOT, E.a.UPDATEINDEXES_AWAY_PENALTY_MISSED])
                }
                getCleanUpFeedIndexes(t, e) {
                    if ([E.a.UPDATEINDEXES_HOME_SCORES_CHANGED, E.a.UPDATEINDEXES_AWAY_SCORES_CHANGED].includes(t) && e) return [];
                    switch (t) {
                        case E.a.UPDATEINDEXES_HOME_GOAL_DISALLOWED:
                            return [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.UPDATEINDEXES_HOME_SCORES_CHANGED];
                        case E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED:
                            return [E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.UPDATEINDEXES_AWAY_SCORES_CHANGED];
                        case E.a.SHAREDINDEXES_HOME_CURRENT_RESULT:
                            return [E.a.UPDATEINDEXES_HOME_PENALTY_SHOT, E.a.UPDATEINDEXES_HOME_PENALTY_MISSED, E.a.UPDATEINDEXES_HOME_SCORES_CHANGED, E.a.UPDATEINDEXES_HOME_GOAL_DISALLOWED];
                        case E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT:
                            return [E.a.UPDATEINDEXES_AWAY_PENALTY_SHOT, E.a.UPDATEINDEXES_AWAY_PENALTY_MISSED, E.a.UPDATEINDEXES_AWAY_SCORES_CHANGED, E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED];
                        case E.a.UPDATEINDEXES_HOME_PENALTY_SHOT:
                            return [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.UPDATEINDEXES_HOME_PENALTY_MISSED];
                        case E.a.UPDATEINDEXES_AWAY_PENALTY_SHOT:
                            return [E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.UPDATEINDEXES_AWAY_PENALTY_MISSED];
                        case E.a.UPDATEINDEXES_HOME_PENALTY_MISSED:
                            return [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.UPDATEINDEXES_HOME_PENALTY_SHOT];
                        case E.a.UPDATEINDEXES_AWAY_PENALTY_MISSED:
                            return [E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.UPDATEINDEXES_AWAY_PENALTY_SHOT];
                        case E.a.UPDATEINDEXES_HOME_SCORES_CHANGED:
                            return [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.UPDATEINDEXES_HOME_GOAL_DISALLOWED];
                        case E.a.UPDATEINDEXES_AWAY_SCORES_CHANGED:
                            return [E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED];
                        default:
                            return []
                    }
                }
                _isValidTournament(t) {
                    return t || !this._utilNavigation.isOddsPrematch() && !this._utilNavigation.isOddsLive()
                }
                _isValidGameChange(t, e, s) {
                    if ([E.a.FULLFEEDINDEXES_HOME_TENNIS_GAME, E.a.FULLFEEDINDEXES_AWAY_TENNIS_GAME].includes(t)) {
                        return e === i.a.TENNIS && this._config.get("app", "advanced_tennis", "enable") && this._config.get("app", "advanced_tennis", "point_by_point") && !s
                    }
                    return !0
                }
                _isValidWicket(t, e, s) {
                    return ![E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_FIRST_INNING, E.a.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_FIRST_INNING, E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_SECOND_INNING, E.a.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_SECOND_INNING].includes(t) || e === i.a.CRICKET && "0" !== s
                }
                _eventExists(t) {
                    return this._dataEventHolderProxy.getHolder().hasEvent(t)
                }
                _filterByMutuallyExclusiveFeedIndexes(t, e) {
                    for (const s of e)
                        if (-1 !== t.indexOf(s)) return t.filter(t => -1 === e.indexOf(t) || t === s);
                    return t
                }
            }
            var a = s(7);
            class n {
                constructor(t, e) {
                    this._config = t, this._statsResultsIndexGenerator = e
                }
                get(t, e, s, _) {
                    if (e) return this._config.get("ajax", "correction_duration_time") || 0;
                    let i = this._config.get("ajax", "goal_duration_time") || 0;
                    return [E.a.UPDATEINDEXES_HOME_PENALTY_SHOT, E.a.UPDATEINDEXES_AWAY_PENALTY_SHOT, E.a.UPDATEINDEXES_HOME_PENALTY_MISSED, E.a.UPDATEINDEXES_AWAY_PENALTY_MISSED].includes(t) ? i = this._config.get("ajax", "penalty_duration_time") || 0 : [E.a.UPDATEINDEXES_HOME_GOAL_DISALLOWED, E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED].includes(t) ? i = this._config.get("ajax", "correction_duration_time") || 0 : [E.a.FULLFEEDINDEXES_HOME_TENNIS_GAME, E.a.FULLFEEDINDEXES_AWAY_TENNIS_GAME].includes(t) ? i = this._config.get("ajax", "goal_duration_time") / 3 || 0 : [E.a.UPDATEINDEXES_HOME_SCORES_CHANGED, E.a.UPDATEINDEXES_AWAY_SCORES_CHANGED].includes(t) && (i = this._config.get("ajax", "scores_changed_duration_time") || 0), i = this.getCorrectedResultPeriodDurationTime(s, t, i), i = this.getDartsCorrectedDurationTime(s, _, t, i), i
                }
                getCorrectedResultPeriodDurationTime(t, e, s) {
                    return [i.a.TABLE_TENNIS, i.a.VOLLEYBALL, i.a.BEACH_VOLLEYBALL].includes(t) && [E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_1, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_2, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_3, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_4, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_5, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_6, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_7, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_1, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_2, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_3, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_4, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_5, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_6, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_7].includes(e) && (s = 15), s
                }
                getDartsCorrectedDurationTime(t, e, s, _) {
                    if (t !== i.a.DARTS) return _;
                    if ([this._statsResultsIndexGenerator.get(a.a.IS_PLAYING, !0), this._statsResultsIndexGenerator.get(a.a.IS_PLAYING, !1), this._statsResultsIndexGenerator.get(a.a.CURRENT_POINTS, !0), this._statsResultsIndexGenerator.get(a.a.CURRENT_POINTS, !1)].includes(s)) _ = 5;
                    else {
                        const t = [this._statsResultsIndexGenerator.get(a.a.RESULT, !0), this._statsResultsIndexGenerator.get(a.a.RESULT, !1)].includes(s),
                            i = [this._statsResultsIndexGenerator.get(a.a.CURRENT_LEG_RESULT, !0), this._statsResultsIndexGenerator.get(a.a.CURRENT_LEG_RESULT, !1)].includes(s),
                            r = [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT].includes(s) && !e;
                        (t && !e || i || r) && (_ = 15)
                    }
                    return _
                }
            }
            class o {
                constructor() {
                    this._timeouts = {}
                }
                getTimeoutId(t) {
                    return this._timeouts[t] || {}
                }
                setTimeoutId(t, e) {
                    this._timeouts[t] = e
                }
                removeTimeoutId(t) {
                    delete this._timeouts[t]
                }
                getCountOfTimeouts() {
                    return Object.keys(this._timeouts).length
                }
            }
            class S {
                constructor() {
                    this._eventTimeouts = {}
                }
                getTimeoutId(t, e) {
                    return this._eventTimeouts[t] ? this._eventTimeouts[t].getTimeoutId(e) : {}
                }
                setTimeoutId(t, e, s) {
                    this._eventTimeouts[t] || (this._eventTimeouts[t] = new o), this._eventTimeouts[t].setTimeoutId(e, s)
                }
                removeTimeoutId(t, e) {
                    this._eventTimeouts[t] && (this._eventTimeouts[t].removeTimeoutId(e), 0 === this._eventTimeouts[t].getCountOfTimeouts() && delete this._eventTimeouts[t])
                }
            }
            class I {
                constructor(t, e, s) {
                    this._statsResultsIndexGenerator = t, this._utilSport = e, this._coreUpdateGetter = s
                }
                isShifted(t, e, s) {
                    const _ = s.getSportId(),
                        r = s.isParticipantLive() || s.wasParticipantLive();
                    if (t == E.a.SHAREDINDEXES_RANK) {
                        const t = this._coreUpdateGetter().did_property_changed(s.getId(), E.a.SHAREDINDEXES_GOLF_HOLE_RESULT),
                            a = this._coreUpdateGetter().did_property_changed(s.getId(), E.a.SHAREDINDEXES_TOTAL_RESULT),
                            n = t || a,
                            o = this._coreUpdateGetter().did_property_changed(s.getId(), E.a.SHAREDINDEXES_TIME);
                        if (!(_ != i.a.GOLF || n && r)) return !0;
                        if (this._utilSport.isRacingSport(_) && e && (!o || !r)) return !0
                    } else if (t == this._statsResultsIndexGenerator.get(a.a.RANK)) {
                        const t = this._coreUpdateGetter().did_property_changed(s.getId(), this._statsResultsIndexGenerator.get(a.a.POINTS)),
                            e = r && this._coreUpdateGetter().did_property_changed(s.getId(), this._statsResultsIndexGenerator.get(a.a.TIME));
                        if (!(_ != i.a.WINTER_SPORTS_SKI_JUMPING || t && r)) return !0;
                        if (this._utilSport.inGroup(_, i.a.WINTER_SPORTS) && (!e || !r)) return !0
                    }
                    return !1
                }
            }
            class T {
                constructor(t) {
                    this._statsResultsIndexGenerator = t
                }
                isCorrection(t, e, s) {
                    return e && !s && !this._isFeedIndexWhichCanDecrease(t)
                }
                _isFeedIndexWhichCanDecrease(t) {
                    return [this._statsResultsIndexGenerator.get(a.a.IS_PLAYING, !0), this._statsResultsIndexGenerator.get(a.a.IS_PLAYING, !1), this._statsResultsIndexGenerator.get(a.a.CURRENT_LEG_RESULT, !0), this._statsResultsIndexGenerator.get(a.a.CURRENT_LEG_RESULT, !1), this._statsResultsIndexGenerator.get(a.a.CURRENT_POINTS, !0), this._statsResultsIndexGenerator.get(a.a.CURRENT_POINTS, !1), E.a.UPDATEINDEXES_HOME_SCORES_CHANGED, E.a.UPDATEINDEXES_AWAY_SCORES_CHANGED].includes(t)
                }
            }
            class A {
                constructor(t, e, s, _, E) {
                    this._highlighterContainer = t, this._loader = e, this._change = s, this._message = _, this._rank = E
                }
                fill(t, e, s, _) {
                    const E = t.getSportId(),
                        i = t.getOriginalId();
                    if (-1 !== this._message.getFeedIndexesBySport(E).indexOf(e)) {
                        const _ = String(t.getValue(e, "")),
                            r = this._message.getTranslatedMessage(e, _, E, s);
                        r && this._highlighterContainer.setMessage(i, this._message.getSide(e), e, r)
                    }
                    for (const s of this._change.getChangedFeedIndexes(e, E, t.isPlayingOnSets(), this._rank.isShifted(e, _, t))) this._highlighterContainer.set(i, s);
                    this._loader.get("react").call(e => e.reloadEvent(t.getId()))
                }
                remove(t, e, s) {
                    const _ = t.getSportId(),
                        E = t.getOriginalId();
                    let i = !1; - 1 !== this._message.getFeedIndexesBySport(_).indexOf(e) && (this._highlighterContainer.removeMessage(E, this._message.getSide(e), e), i = !0);
                    for (const s of this._change.getChangedFeedIndexes(e, _, t.isPlayingOnSets())) {
                        const t = this._highlighterContainer.remove(E, s);
                        i || (i = t)
                    }
                    i && this._loader.get("react").call(e => e.reloadEvent(t.getId()))
                }
            }
            var l;
            ! function(t) {
                t[t.POWERPLAY_GOAL = 1] = "POWERPLAY_GOAL", t[t.SHORTHANDED_GOAL = 2] = "SHORTHANDED_GOAL", t[t.EMPTY_NET_GOAL = 3] = "EMPTY_NET_GOAL", t[t.SLASHING = 4] = "SLASHING", t[t.BOARDING = 5] = "BOARDING", t[t.BUTT_ENDING = 6] = "BUTT_ENDING", t[t.CROSS_CHECKING = 7] = "CROSS_CHECKING", t[t.DELAY_OF_GAME = 8] = "DELAY_OF_GAME", t[t.ELBOWING = 9] = "ELBOWING", t[t.FIGHTING = 10] = "FIGHTING", t[t.HIGH_STICKING = 11] = "HIGH_STICKING", t[t.HOLDING = 12] = "HOLDING", t[t.HOLDING_THE_STICK = 13] = "HOLDING_THE_STICK", t[t.HOOKING = 14] = "HOOKING", t[t.ILLEGAL_EQUIPMENT = 15] = "ILLEGAL_EQUIPMENT", t[t.INSTIGATOR_PENALTY = 16] = "INSTIGATOR_PENALTY", t[t.INTERFERENCE = 17] = "INTERFERENCE", t[t.ROUGHING = 18] = "ROUGHING", t[t.KNEEING = 19] = "KNEEING", t[t.TOO_MANY_MEN_ON_THE_ICE = 20] = "TOO_MANY_MEN_ON_THE_ICE", t[t.TRIPPING = 21] = "TRIPPING", t[t.UNSPORTSMANLIKE_CONDUCT = 22] = "UNSPORTSMANLIKE_CONDUCT", t[t.CHARGING = 23] = "CHARGING", t[t.CHECKING_FROM_BEHIND = 24] = "CHECKING_FROM_BEHIND", t[t.HEAD_BUTTING = 25] = "HEAD_BUTTING", t[t.ILLEGAL_CHECK_TO_THE_HEAD = 26] = "ILLEGAL_CHECK_TO_THE_HEAD", t[t.LEAVING_THE_PLAYERS_BENCH = 28] = "LEAVING_THE_PLAYERS_BENCH", t[t.SPEARING = 29] = "SPEARING", t[t.ABUSE_OF_OFFICIALS = 30] = "ABUSE_OF_OFFICIALS", t[t.SERIOUS_FOUL = 66] = "SERIOUS_FOUL", t[t.FOUL = 67] = "FOUL", t[t.HANDLING = 68] = "HANDLING", t[t.DIVING = 69] = "DIVING", t[t.CLIPPING = 70] = "CLIPPING", t[t.THROWING_THE_STICK = 71] = "THROWING_THE_STICK", t[t.IMPEDING = 72] = "IMPEDING", t[t.TEAM_INCIDENT = 74] = "TEAM_INCIDENT", t[t.PLAYERS_BENCH_PENALTY = 90] = "PLAYERS_BENCH_PENALTY", t[t.MATCH_PENALTY = 95] = "MATCH_PENALTY", t[t.LEAVING_GOAL_CREASE = 170] = "LEAVING_GOAL_CREASE", t[t.SLEW_FOOTING = 196] = "SLEW_FOOTING", t[t.UNSUCCESSFUL_CHALLENGE = 198] = "UNSUCCESSFUL_CHALLENGE", t[t.FACEOFF_VIOLATION = 199] = "FACEOFF_VIOLATION", t[t.LATE_HIT = 200] = "LATE_HIT", t[t.YELLOW_JERSEY = 76] = "YELLOW_JERSEY", t[t.GREEN_JERSEY = 77] = "GREEN_JERSEY", t[t.RED_POLKA_DOT_JERSEY = 78] = "RED_POLKA_DOT_JERSEY", t[t.WHITE_JERSEY = 79] = "WHITE_JERSEY", t[t.PINK_JERSEY = 80] = "PINK_JERSEY", t[t.RED_JERSEY = 81] = "RED_JERSEY", t[t.BLUE_POLKA_DOT_JERSEY = 82] = "BLUE_POLKA_DOT_JERSEY", t[t.BLUE_JERSEY = 83] = "BLUE_JERSEY", t[t.BLACK_JERSEY = 84] = "BLACK_JERSEY", t[t.OCHRE_JERSEY = 85] = "OCHRE_JERSEY", t[t.TURQUOISE_JERSEY = 86] = "TURQUOISE_JERSEY", t[t.GOLD_JERSEY = 87] = "GOLD_JERSEY", t[t.SILVER_JERSEY = 88] = "SILVER_JERSEY", t[t.RAINBOW_JERSEY = 89] = "RAINBOW_JERSEY", t[t.KNOCKOUT = 91] = "KNOCKOUT", t[t.TECHNICAL_KNOCKOUT = 92] = "TECHNICAL_KNOCKOUT", t[t.POINTS = 93] = "POINTS", t[t.SUBMISSION = 148] = "SUBMISSION", t[t.NO_CONTEST = 156] = "NO_CONTEST", t[t.DISQUALIFIED = 201] = "DISQUALIFIED", t[t.PUNCHES = 94] = "PUNCHES", t[t.UNANIMOUS = 96] = "UNANIMOUS", t[t.SPLIT = 97] = "SPLIT", t[t.PUNCH = 98] = "PUNCH", t[t.GUILLOTINE_CHOKE = 99] = "GUILLOTINE_CHOKE", t[t.FLYING_KNEE = 100] = "FLYING_KNEE", t[t.TRIANGLE_CHOKE = 101] = "TRIANGLE_CHOKE", t[t.ARM_TRIANGLE_CHOKE = 102] = "ARM_TRIANGLE_CHOKE", t[t.SUPLEX_AND_PUNCHES = 103] = "SUPLEX_AND_PUNCHES", t[t.REAR_NAKED_CHOKE = 104] = "REAR_NAKED_CHOKE", t[t.MAJORITY = 105] = "MAJORITY", t[t.ARMBAR = 106] = "ARMBAR", t[t.STRAIGHT_ARMBAR = 107] = "STRAIGHT_ARMBAR", t[t.UPKICK = 108] = "UPKICK", t[t.BROKEN_EYE_SOCKET = 109] = "BROKEN_EYE_SOCKET", t[t.CORNER_STOPPAGE = 110] = "CORNER_STOPPAGE", t[t.KNEE = 111] = "KNEE", t[t.KIMURA = 112] = "KIMURA", t[t.ELBOW = 113] = "ELBOW", t[t.KEYLOCK = 114] = "KEYLOCK", t[t.ILLEGAL_DOWNWARD_ELBOWS = 115] = "ILLEGAL_DOWNWARD_ELBOWS", t[t.INJURY = 116] = "INJURY", t[t.BRABO_CHOKE = 117] = "BRABO_CHOKE", t[t.HEAD_KICK = 118] = "HEAD_KICK", t[t.KICK = 119] = "KICK", t[t.CUT = 120] = "CUT", t[t.DOCTOR_STOPPAGE = 121] = "DOCTOR_STOPPAGE", t[t.SOCCER_KICKS = 122] = "SOCCER_KICKS", t[t.NECK_CRANK = 123] = "NECK_CRANK", t[t.KICK_AND_PUNCHES = 124] = "KICK_AND_PUNCHES", t[t.ELBOWS_AND_PUNCHES = 125] = "ELBOWS_AND_PUNCHES", t[t.HEAD_KICK_AND_PUNCHES = 126] = "HEAD_KICK_AND_PUNCHES", t[t.KICK_TO_THE_BODY = 127] = "KICK_TO_THE_BODY", t[t.JUDGING_ERROR = 128] = "JUDGING_ERROR", t[t.ARMLOCK = 129] = "ARMLOCK", t[t.LEGLOCK = 130] = "LEGLOCK", t[t.HEEL_HOOK = 131] = "HEEL_HOOK", t[t.SHOULDER_CHOKE = 132] = "SHOULDER_CHOKE", t[t.CALF_SLICER = 133] = "CALF_SLICER", t[t.OVERTURNED_BY_CSAC = 134] = "OVERTURNED_BY_CSAC", t[t.ILLEGAL_KICK = 135] = "ILLEGAL_KICK", t[t.KNEE_TO_THE_BODY = 136] = "KNEE_TO_THE_BODY", t[t.KNEE_AND_PUNCHES = 137] = "KNEE_AND_PUNCHES", t[t.RETIREMENT = 138] = "RETIREMENT", t[t.NORTH_SOUTH_CHOKE = 139] = "NORTH_SOUTH_CHOKE", t[t.ACHILLES_LOCK = 140] = "ACHILLES_LOCK", t[t.OMOPLATA = 141] = "OMOPLATA", t[t.SPINNING_HEEL_KICK = 142] = "SPINNING_HEEL_KICK", t[t.FRONT_KICK_AND_PUNCHES = 143] = "FRONT_KICK_AND_PUNCHES", t[t.FRONT_KICK = 144] = "FRONT_KICK", t[t.KNEE_TO_THE_RIBS = 145] = "KNEE_TO_THE_RIBS", t[t.KNEEBAR = 146] = "KNEEBAR", t[t.STOMPS = 147] = "STOMPS", t[t.JAPANESE_NECKTIE = 149] = "JAPANESE_NECKTIE", t[t.ANACONDA_CHOKE = 167] = "ANACONDA_CHOKE", t[t.BODY_KICK_AND_PUNCHES = 168] = "BODY_KICK_AND_PUNCHES", t[t.CHOKE = 169] = "CHOKE", t[t.FLYING_KNEE_AND_PUNCHES = 171] = "FLYING_KNEE_AND_PUNCHES", t[t.SPLIT_DECISION = 172] = "SPLIT_DECISION", t[t.MAJORITY_DECISION = 173] = "MAJORITY_DECISION", t[t.UNANIMOUS_DECISION = 174] = "UNANIMOUS_DECISION", t[t.SPLIT_DECISION_DRAW = 175] = "SPLIT_DECISION_DRAW", t[t.MAJORITY_DRAW = 176] = "MAJORITY_DRAW", t[t.TECHNICAL_DECISION = 177] = "TECHNICAL_DECISION", t[t.OFFSIDE = 180] = "OFFSIDE", t[t.VIDEO_REVIEW = 181] = "VIDEO_REVIEW", t[t.COACHS_CHALLENGE = 182] = "COACHS_CHALLENGE", t[t.VIDEO_REVIEW_FOUL = 221] = "VIDEO_REVIEW_FOUL", t[t.VIDEO_REVIEW_OFFSIDE = 222] = "VIDEO_REVIEW_OFFSIDE", t[t.VIDEO_REVIEW_HANDBALL = 223] = "VIDEO_REVIEW_HANDBALL", t[t.PASS = 158] = "PASS", t[t.RUN = 159] = "RUN", t[t.TURNOVER = 160] = "TURNOVER", t[t.RETURN = 178] = "RETURN", t[t.BOWLING = 183] = "BOWLING", t[t.BATTING = 184] = "BATTING", t[t.BOWLED = 185] = "BOWLED", t[t.CAUGHT = 186] = "CAUGHT", t[t.HANDLED_THE_BALL = 187] = "HANDLED_THE_BALL", t[t.HIT_THE_BALL_TWICE = 188] = "HIT_THE_BALL_TWICE", t[t.HIT_WICKET = 189] = "HIT_WICKET", t[t.LEG_BEFORE_WICKET = 190] = "LEG_BEFORE_WICKET", t[t.OBSTRUCTING_THE_FIELD = 191] = "OBSTRUCTING_THE_FIELD", t[t.RUN_OUT = 192] = "RUN_OUT", t[t.STUMPED = 193] = "STUMPED", t[t.TIMED_OUT = 194] = "TIMED_OUT", t[t.RETIRED_OUT = 195] = "RETIRED_OUT", t[t.RETIRED_HURT = 197] = "RETIRED_HURT"
            }(l || (l = {}));
            var h = s(12);
            class N {
                constructor(t, e, s) {
                    this._utilTrans = t, this._utilString = e, this._helperScoresChanged = s
                }
                getFeedIndexesBySport(t) {
                    switch (t) {
                        case i.a.SOCCER:
                            return [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.UPDATEINDEXES_HOME_PENALTY_SHOT, E.a.UPDATEINDEXES_AWAY_PENALTY_SHOT, E.a.UPDATEINDEXES_HOME_PENALTY_MISSED, E.a.UPDATEINDEXES_AWAY_PENALTY_MISSED, E.a.UPDATEINDEXES_HOME_SCORES_CHANGED, E.a.UPDATEINDEXES_AWAY_SCORES_CHANGED, E.a.UPDATEINDEXES_HOME_GOAL_DISALLOWED, E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED];
                        case i.a.TENNIS:
                            return [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.UPDATEINDEXES_HOME_GOAL_DISALLOWED, E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED];
                        case i.a.HOCKEY:
                            return [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.UPDATEINDEXES_HOME_PENALTY_SHOT, E.a.UPDATEINDEXES_AWAY_PENALTY_SHOT, E.a.UPDATEINDEXES_HOME_PENALTY_MISSED, E.a.UPDATEINDEXES_AWAY_PENALTY_MISSED, E.a.UPDATEINDEXES_HOME_SCORES_CHANGED, E.a.UPDATEINDEXES_AWAY_SCORES_CHANGED, E.a.UPDATEINDEXES_HOME_GOAL_DISALLOWED, E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED];
                        case i.a.FUTSAL:
                            return [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.UPDATEINDEXES_HOME_GOAL_DISALLOWED, E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED];
                        case i.a.CRICKET:
                            return [E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_FIRST_INNING, E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_SECOND_INNING, E.a.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_FIRST_INNING, E.a.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_SECOND_INNING];
                        case i.a.GOLF:
                            return [E.a.UPDATEINDEXES_HOME_GOLF_PAR_DIFF, E.a.UPDATEINDEXES_AWAY_GOLF_PAR_DIFF];
                        default:
                            return []
                    }
                }
                getTranslatedMessage(t, e, s, _) {
                    if (_) return this._utilTrans.translate("TRANS_UPDATE_CORRECTION");
                    if ([E.a.UPDATEINDEXES_HOME_GOAL_DISALLOWED, E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED].includes(t)) return this.getCorrectionTranslatedMessage(e, !1, s);
                    if ([E.a.UPDATEINDEXES_HOME_PENALTY_SHOT, E.a.UPDATEINDEXES_AWAY_PENALTY_SHOT].includes(t)) switch (s) {
                        case i.a.SOCCER:
                            return this._utilTrans.translate("TRANS_SOCCER_MATCH_SCORER_TYPE_PEN");
                        case i.a.HOCKEY:
                            return this._utilTrans.translate("TRANS_HOCKEY_MATCH_SCORER_TYPE_PEN");
                        default:
                            return ""
                    } else if ([E.a.UPDATEINDEXES_HOME_PENALTY_MISSED, E.a.UPDATEINDEXES_AWAY_PENALTY_MISSED].includes(t)) switch (s) {
                        case i.a.SOCCER:
                            return this._utilTrans.translate("TRANS_SOCCER_MATCH_SCORER_TYPE_PEN_MISS");
                        case i.a.HOCKEY:
                            return this._utilTrans.translate("TRANS_HOCKEY_MATCH_SCORER_TYPE_PEN_MISSED");
                        default:
                            return ""
                    } else {
                        if ([E.a.UPDATEINDEXES_HOME_SCORES_CHANGED, E.a.UPDATEINDEXES_AWAY_SCORES_CHANGED].includes(t)) return "0" === e ? "" : this._helperScoresChanged.getHighlightHtml(this._utilTrans.translate("TRANS_BIG_CHANCE"));
                        if ([E.a.UPDATEINDEXES_HOME_GOLF_PAR_DIFF, E.a.UPDATEINDEXES_AWAY_GOLF_PAR_DIFF].includes(t)) return this._getParTranslatedMessage(e);
                        if ([E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_FIRST_INNING, E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_SECOND_INNING, E.a.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_FIRST_INNING, E.a.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_SECOND_INNING].includes(t)) return this._utilTrans.translate("TRANS_CRICKET_WICKET")
                    }
                    switch (s) {
                        case i.a.SOCCER:
                            return this._utilTrans.translate("TRANS_SOCCER_GOAL");
                        case i.a.TENNIS:
                            return this._utilTrans.translate("TRANS_TENNIS_SET");
                        case i.a.HOCKEY:
                            return this._utilTrans.translate("TRANS_HOCKEY_GOAL");
                        case i.a.FUTSAL:
                            return this._utilTrans.translate("TRANS_FUTSAL_GOAL");
                        default:
                            return ""
                    }
                }
                getSide(t) {
                    return [E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.UPDATEINDEXES_AWAY_GOLF_PAR_DIFF, E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_FIRST_INNING, E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_SECOND_INNING, E.a.UPDATEINDEXES_AWAY_SCORES_CHANGED, E.a.UPDATEINDEXES_AWAY_GOAL_DISALLOWED, E.a.UPDATEINDEXES_AWAY_PENALTY_SHOT, E.a.UPDATEINDEXES_AWAY_PENALTY_MISSED].includes(t) ? h.a.AWAY : h.a.HOME
                }
                _getParTranslatedMessage(t) {
                    if (!t.split("|")[0]) return "";
                    const e = parseInt(t.split("|")[0]),
                        s = e < 0;
                    switch (Math.min(Math.abs(e), 3)) {
                        case 3:
                            return s ? this._utilTrans.translate("TRANS_HOLE_RESULT_TRIPLE_PLUS_BOGEY") : this._utilTrans.translate("TRANS_HOLE_RESULT_DOUBLE_EAGLE");
                        case 2:
                            return s ? this._utilTrans.translate("TRANS_HOLE_RESULT_DOUBLE_BOGEY") : this._utilTrans.translate("TRANS_HOLE_RESULT_EAGLE");
                        case 1:
                            return s ? this._utilTrans.translate("TRANS_HOLE_RESULT_BOGEY") : this._utilTrans.translate("TRANS_HOLE_RESULT_BIRDIE");
                        default:
                            return this._utilTrans.translate("TRANS_HOLE_RESULT_PAR")
                    }
                }
                getCorrectionTranslatedMessage(t, e, s) {
                    let _ = "";
                    switch (parseInt(t.split("|")[1]) || 0) {
                        case l.FOUL:
                            _ = this._utilTrans.translate("TRANS_CORRECTION_FOUL");
                            break;
                        case l.HANDLING:
                            _ = this._utilTrans.translate("TRANS_CORRECTION_HANDBALL");
                            break;
                        case l.OFFSIDE:
                            _ = this._utilTrans.translate("TRANS_CORRECTION_OFFSIDE");
                            break;
                        case l.VIDEO_REVIEW:
                            s === i.a.SOCCER ? (e = !0, _ = this._utilTrans.translate("TRANS_CORRECTION_VAR")) : _ = this._utilTrans.translate("TRANS_CORRECTION_VIDEO_REVIEW");
                            break;
                        case l.COACHS_CHALLENGE:
                            _ = this._utilTrans.translate("TRANS_CORRECTION_COACHS_CHALLENGE");
                            break;
                        case l.VIDEO_REVIEW_FOUL:
                            e = !0, _ = this._utilTrans.translate("TRANS_NOTIFICATION_MESSAGE_CORRECTION_INCIDENT_VIDEO_REVIEW_FOUL");
                            break;
                        case l.VIDEO_REVIEW_OFFSIDE:
                            e = !0, _ = this._utilTrans.translate("TRANS_NOTIFICATION_MESSAGE_CORRECTION_INCIDENT_VIDEO_REVIEW_OFFSIDE");
                            break;
                        case l.VIDEO_REVIEW_HANDBALL:
                            e = !0, _ = this._utilTrans.translate("TRANS_NOTIFICATION_MESSAGE_CORRECTION_INCIDENT_VIDEO_REVIEW_HANDBALL")
                    }
                    return _ ? e ? this._utilString.toUpperFirstChar(_) : this._utilTrans.translate("TRANS_UPDATE_CORRECTION") + " - " + _ : ""
                }
            }
            class D {
                constructor(t) {
                    this._statsResultsIndexGenerator = t
                }
                getFeedIndexesBySport(t) {
                    switch (t) {
                        case i.a.SOCCER:
                            return [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.SHAREDINDEXES_EVENT_STAGE_ID];
                        case i.a.HOCKEY:
                            return [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.SHAREDINDEXES_EVENT_STAGE_ID, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_1, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_2, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_3, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_4, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_5, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_1, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_2, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_3, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_4, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_5];
                        case i.a.CRICKET:
                            return [E.a.SHAREDINDEXES_EVENT_STAGE_ID, E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_FIRST_INNING, E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_SECOND_INNING, E.a.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_FIRST_INNING, E.a.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_SECOND_INNING, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_1, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_2, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_1, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_2];
                        case i.a.GOLF:
                            return [E.a.SHAREDINDEXES_RANK, E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.SHAREDINDEXES_GOLF_HOLE_RESULT, E.a.SHAREDINDEXES_GOLF_PAR_TODAY];
                        default:
                            return [E.a.SHAREDINDEXES_HOME_CURRENT_RESULT, E.a.SHAREDINDEXES_AWAY_CURRENT_RESULT, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_1, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_2, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_3, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_4, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_5, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_6, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_7, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_8, E.a.SHAREDINDEXES_HOME_RESULT_PERIOD_9, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_1, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_2, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_3, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_4, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_5, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_6, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_7, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_8, E.a.SHAREDINDEXES_AWAY_RESULT_PERIOD_9, E.a.FULLFEEDINDEXES_HOME_SCORE_PART_PESAPALLO_FIRST_HALF, E.a.FULLFEEDINDEXES_AWAY_SCORE_PART_PESAPALLO_FIRST_HALF, E.a.FULLFEEDINDEXES_HOME_SCORE_PART_PESAPALLO_SECOND_HALF, E.a.FULLFEEDINDEXES_AWAY_SCORE_PART_PESAPALLO_SECOND_HALF, E.a.FULLFEEDINDEXES_HOME_SCORE_PART_PESAPALLO_PENALTIES, E.a.FULLFEEDINDEXES_AWAY_SCORE_PART_PESAPALLO_PENALTIES, E.a.SHAREDINDEXES_HOME_HITS, E.a.SHAREDINDEXES_AWAY_HITS, E.a.SHAREDINDEXES_HOME_ERRORS, E.a.SHAREDINDEXES_AWAY_ERRORS, E.a.SHAREDINDEXES_EVENT_STAGE_ID, E.a.FULLFEEDINDEXES_HOME_TENNIS_GAME, E.a.FULLFEEDINDEXES_AWAY_TENNIS_GAME, E.a.SHAREDINDEXES_RANK, E.a.SHAREDINDEXES_GOLF_FINAL_RESULT, E.a.SHAREDINDEXES_GOLF_HOLE_RESULT, E.a.SHAREDINDEXES_LAPS, E.a.SHAREDINDEXES_TIME, E.a.SHAREDINDEXES_GRID, E.a.SHAREDINDEXES_PITSTOPS, E.a.SHAREDINDEXES_GAP, E.a.SHAREDINDEXES_CURRENT_DISTANCE, E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_FIRST_INNING, E.a.FULLFEEDINDEXES_HOME_CRICKET_WICKETS_SECOND_INNING, E.a.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_FIRST_INNING, E.a.FULLFEEDINDEXES_AWAY_CRICKET_WICKETS_SECOND_INNING, this._statsResultsIndexGenerator.get(a.a.RANK), this._statsResultsIndexGenerator.get(a.a.POINTS), this._statsResultsIndexGenerator.get(a.a.JUMP_COUNT), this._statsResultsIndexGenerator.get(a.a.JUMP_ROUND_1), this._statsResultsIndexGenerator.get(a.a.JUMP_ROUND_2), this._statsResultsIndexGenerator.get(a.a.TIME), this._statsResultsIndexGenerator.get(a.a.GAP), this._statsResultsIndexGenerator.get(a.a.STOP_REASON), this._statsResultsIndexGenerator.get(a.a.PENALTY_LAP), this._statsResultsIndexGenerator.get(a.a.MISSED_SHOT), this._statsResultsIndexGenerator.get(a.a.POINTS_ROUND_1), this._statsResultsIndexGenerator.get(a.a.POINTS_ROUND_2), this._statsResultsIndexGenerator.get(a.a.TIME_ROUND_1), this._statsResultsIndexGenerator.get(a.a.TIME_ROUND_2), this._statsResultsIndexGenerator.get(a.a.STOP_REASON_ROUND_1), this._statsResultsIndexGenerator.get(a.a.STOP_REASON_ROUND_2), this._statsResultsIndexGenerator.get(a.a.RIDES), this._statsResultsIndexGenerator.get(a.a.WINS), this._statsResultsIndexGenerator.get(a.a.CURRENT_POINTS, !0), this._statsResultsIndexGenerator.get(a.a.CURRENT_POINTS, !1), this._statsResultsIndexGenerator.get(a.a.CURRENT_LEG_RESULT, !0), this._statsResultsIndexGenerator.get(a.a.CURRENT_LEG_RESULT, !1), this._statsResultsIndexGenerator.get(a.a.RESULT, !0), this._statsResultsIndexGenerator.get(a.a.RESULT, !1)]
                    }
                }
                getChangedFeedIndexes(t, e, s, _) {
                    const r = [];
                    if (-1 !== [E.a.SHAREDINDEXES_RANK, this._statsResultsIndexGenerator.get(a.a.RANK), this._statsResultsIndexGenerator.get(a.a.STOP_REASON)].indexOf(t)) !0 === _ || !1 === _ ? r.push(this._statsResultsIndexGenerator.get(a.a.RANK, !_)) : (r.push(this._statsResultsIndexGenerator.get(a.a.RANK, !0)), r.push(this._statsResultsIndexGenerator.get(a.a.RANK, !1)));
                    else if (e !== i.a.DARTS || s || -1 === [this._statsResultsIndexGenerator.get(a.a.RESULT, !0), this._statsResultsIndexGenerator.get(a.a.RESULT, !1)].indexOf(t)) r.push(t);
                    else {
                        const e = t === this._statsResultsIndexGenerator.get(a.a.RESULT, !0);
                        r.push(this._statsResultsIndexGenerator.get(a.a.CURRENT_LEG_RESULT, e)), r.push(E.a.SHAREDINDEXES_EVENT_STAGE_ID)
                    }
                    return r
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s, E, i, a, o, l, h, c, u, d) => {
                    const R = new _(e, s, d, new r(e, o, d, u, new D(l), new N(E, i, c)), new n(u, l), new S, new T(l), new A(h, cjs.Api.loader, new D(l), new N(E, i, c), new I(l, a, d)));
                    t.Api.loader.get("highlighter").fulfill(t => {
                        t(R)
                    })
                })(t.dic.get("dataEventHolderProxy"), t.dic.get("util_enviroment"), t.dic.get("util_trans"), t.dic.get("util_string"), t.dic.get("util_sport"), t.dic.get("list_navigation"), t.Api.statsResultsIndexGenerator, t.Api.highlighterContainer, t.dic.get("Helper_ScoresChanged"), t.Api.config, () => window.fs_update)
            })
        },
        459: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(174),
                E = s(173),
                i = s(172),
                r = s(129),
                a = s(83),
                n = s(2);
            class o {
                constructor(t, e, s, _, E, i, r, a, n) {
                    this._bookmakersWithLiveOffer = {}, this._helperClickableBookmaker = t, this._utilConfig = e, this._utilEnviroment = s, this._formatter = _, this._utilTrans = E, this._oddsSetup = i, this._feedData = r, this._bookmakersWithLiveOffer = a, this._eventStageTypeId = n
                }
                hasBetslip(t, e) {
                    let s = !1;
                    return s = t ? 1 === this._feedData.getNumberFromJsonIndex(n.a.ODDSINDEXES_LIVE_ODDS_BETSLIP, e) : 1 === this._feedData.getNumberFromJsonIndex(n.a.ODDSINDEXES_PREMATCH_ODDS_BETSLIP, e), s
                }
                getMainLiveOddsBookmakerId() {
                    return this._feedData.getNumberFromIndex(n.a.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_ID)
                }
                getDetailBonusLimit() {
                    return this._feedData.getNumberFromIndex(n.a.ODDSINDEXES_DETAIL_BONUS_LIMIT)
                }
                getDetailPrematchBonusMatchSummary(t) {
                    return this._getDetailBonus().getMatchSummaryBonusByBookmakerId(t)
                }
                getDetailLiveBonusMatchSummary(t) {
                    return this._getDetailBonus().getMatchSummaryLiveBonusByBookmakerId(t)
                }
                getDetailBonusOddsComparison() {
                    return this._getDetailBonus()
                }
                _getDetailBonus() {
                    if (!this._bookmakerBonuses) {
                        const t = this._feedData.getArrayFromIndex(n.a.ODDSINDEXES_MAIN_BOOKMAKER_ID),
                            e = this._feedData.getArrayFromIndex(n.a.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_ID);
                        this._bookmakerBonuses = new _.a(this._feedData.getObjectFromJson(n.a.ODDSINDEXES_DETAIL_BONUS), this._feedData.getNumberFromIndex(n.a.ODDSINDEXES_DETAIL_BONUS_LIMIT), t.map(t => parseInt(t)), e.map(t => parseInt(t)), this._utilTrans)
                    }
                    return this._bookmakerBonuses
                }
                getTvBroadcasts() {
                    return this.getBroadcasts().getTvBroadcasts()
                }
                getStreamingBroadcasts() {
                    return this.getBroadcasts().getStreamingBroadcasts()
                }
                getBroadcasts() {
                    return this._broadcasts || (this._broadcasts = new E.a(this._feedData.getObjectFromJson(n.a.ODDSINDEXES_DETAIL_BROADCASTS), this._utilTrans)), this._broadcasts
                }
                getBettingStrip() {
                    const t = this._feedData.getDataFromIndex(n.a.ODDSINDEXES_LIVE_BETTING_STRIP_URL),
                        e = this._feedData.getDataFromIndex(n.a.ODDSINDEXES_LIVE_BETTING_STRIP_TEXT);
                    return (new i.a).setBookmakerSetting(this._bookmakersWithLiveOffer).setBookmakerId(this.getMainLiveOddsBookmakerId()).setUrl(t).setEventStageTypeId(this._eventStageTypeId).setRawTextJson(e).setGaTracking(this.isGATrackingEnabled()).build()
                }
                getBookmakerPrematchOdds(t) {
                    const e = this._feedData.getArrayObjectFromJsonIndex(n.a.ODDSINDEXES_PREMATCH_ODDS_VALUES, String(t)),
                        s = this._feedData.getArrayObjectFromJsonIndex(n.a.ODDSINDEXES_PREMATCH_ODDS_PREVIOUS_VALUES, String(t)),
                        _ = this._feedData.getArrayObjectFromJsonIndex(n.a.ODDSINDEXES_PREMATCH_ODDS_ACTIVE, String(t)).map(t => "1" === t),
                        E = this._feedData.getArrayObjectFromJsonIndex(n.a.ODDSINDEXES_PREMATCH_ODDS_MOVEMENTS, String(t)),
                        i = this._feedData.getArrayObjectFromJsonIndex(n.a.ODDSINDEXES_PREMATCH_ODDS_WRAPPER_CLASSES, String(t)),
                        o = this._feedData.getStringFromJsonIndex(n.a.ODDSINDEXES_PREMATCH_MAIN_BOOKMAKER_LINK_HTML, String(t));
                    let S = this._feedData.getFloatFromJsonIndex(n.a.ODDSINDEXES_PREMATCH_HANDICAP_VALUE, String(t), NaN);
                    isNaN(S) && (S = this._feedData.getStringFromJsonIndex(n.a.ODDSINDEXES_PREMATCH_HANDICAP_VALUE, String(t)));
                    const I = this._feedData.getNumberFromJsonIndex(n.a.ODDSINDEXES_PREMATCH_HANDICAP_TYPE, String(t)) || null;
                    return new r.a(this._formatter).setBookmaker(new a.a(t, this._getMainBookmakerName(t))).setOddsValuesData(e).setPreviousOddsValuesData(s).setOddsActiveData(_).setMovementsData(E).setWrappedClassesData(i).setBookmakerLinkHtml(o).setOddsSetup(this._oddsSetup).setClickable(this._isClickable()).setGaTracking(this.isGATrackingEnabled()).setOutputOddFormat(this._utilEnviroment.getOddsFormat()()).setHandicap(S).setHandicapType(I).build()
                }
                getBookmakerLiveOdds(t) {
                    const e = this._feedData.getArrayObjectFromJsonIndex(n.a.ODDSINDEXES_LIVE_ODDS_VALUES, String(t)),
                        s = this._feedData.getArrayObjectFromJsonIndex(n.a.ODDSINDEXES_LIVE_ODDS_PREVIOUS_VALUES, String(t)),
                        _ = this._feedData.getArrayObjectFromJsonIndex(n.a.ODDSINDEXES_LIVE_ODDS_ACTIVE, String(t)).map(t => "1" === t),
                        E = this._feedData.getArrayObjectFromJsonIndex(n.a.ODDSINDEXES_LIVE_ODDS_MOVEMENTS, String(t)),
                        i = this._feedData.getArrayObjectFromJsonIndex(n.a.ODDSINDEXES_LIVE_ODDS_WRAPPER_CLASSES, String(t)),
                        o = this._feedData.getStringFromJsonIndex(n.a.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_LINK_HTML, String(t));
                    let S = this._feedData.getFloatFromJsonIndex(n.a.ODDSINDEXES_LIVE_HANDICAP_VALUE, String(t), NaN);
                    isNaN(S) && (S = this._feedData.getStringFromJsonIndex(n.a.ODDSINDEXES_LIVE_HANDICAP_VALUE, String(t)));
                    const I = this._feedData.getNumberFromJsonIndex(n.a.ODDSINDEXES_LIVE_HANDICAP_TYPE, String(t)) || null;
                    return new r.a(this._formatter).setBookmaker(new a.a(t, this._getMainBookmakerName(t))).setOddsValuesData(e).setPreviousOddsValuesData(s).setOddsActiveData(_).setMovementsData(E).setWrappedClassesData(i).setBookmakerLinkHtml(o).setLive(!0).setOddsSetup(this._oddsSetup.setLive(!0)).setClickable(this._isClickable()).setGaTracking(this.isGATrackingEnabled()).setOutputOddFormat(this._utilEnviroment.getOddsFormat()()).setHandicap(S).setHandicapType(I).build()
                }
                hasPrematchValues() {
                    if (this.getPrematchBookmakerIds().length > 1) return !0;
                    for (const t of this.getPrematchBookmakerIds())
                        if (this.bookmakerHasValues(this.getBookmakerPrematchOdds(t))) return !0;
                    return !1
                }
                bookmakerHasValues(t) {
                    for (const e of t.getRows())
                        for (const t of e.getCells())
                            if (t.hasValue() || t.hasPreviousValue()) return !0;
                    return !1
                }
                getPrematchBookmakerIds() {
                    return this._feedData.getArrayNumbersFromIndex(n.a.ODDSINDEXES_MAIN_BOOKMAKER_ID)
                }
                getLiveBookmakerIds() {
                    return this._feedData.getArrayNumbersFromIndex(n.a.ODDSINDEXES_LIVE_MAIN_BOOKMAKER_ID)
                }
                getPrematchBookmakers() {
                    return this.getPrematchBookmakerIds().map(t => this.getBookmakerPrematchOdds(t))
                }
                getLiveBookmakers() {
                    return this.getLiveBookmakerIds().map(t => this.getBookmakerLiveOdds(t))
                }
                _isClickable() {
                    return void 0 === this._clickable && (this._clickable = this._helperClickableBookmaker.isClickable(this._utilEnviroment.getGlobalGeoIp(), this._utilEnviroment.getGeoIpIsoSubdivisionCode0())), this._clickable
                }
                isGATrackingEnabled() {
                    return void 0 === this._gaTracking && (this._gaTracking = !!this._utilConfig.get("app", "google_analytics", "event_tracking")), this._gaTracking
                }
                getLiveInOfferClass() {
                    let t = "live-offer2";
                    return this._utilConfig.get("app", "odds", "betting_light_version") && (t = "live-offer-nobet"), t
                }
                getEventStageTypeId() {
                    return this._eventStageTypeId
                }
                setEventStageTypeId(t) {
                    this._eventStageTypeId = t
                }
                hasBonusDataForPrematchBookmakers() {
                    for (const t of this.getPrematchBookmakerIds())
                        if (this.getDetailPrematchBonusMatchSummary(t).hasBonusData()) return !0;
                    return !1
                }
                hasBonusDataForLiveBookmakers() {
                    for (const t of this.getPrematchBookmakerIds())
                        if (this.getDetailLiveBonusMatchSummary(t).hasBonusData()) return !0;
                    return !1
                }
                getRotationTime() {
                    return parseInt(this._utilConfig.get("app", "detail_live_betting_strip", "rotation_time")) || 0
                }
                _getMainBookmakerName(t) {
                    const e = this._utilEnviroment.getBookmakersData();
                    if (e.default)
                        for (const s of e.default)
                            if (parseInt(s.main_bookmaker_id) == t) return s.name;
                    return ""
                }
            }
            class S {
                constructor(t, e) {
                    this._feedParser = t, this._rawData = e, this._parse()
                }
                _parse() {
                    this._parsedData = this._feedParser.parse(this._rawData).data[0]
                }
                getDataFromIndex(t) {
                    let e = "";
                    return this._parsedData[t] && this._parsedData[t][0] && (e = this._parsedData[t][0]), e
                }
                parseNumberWithProvidedParser(t, e, s = 0) {
                    const _ = this.getDataFromIndex(e);
                    let E = s;
                    return _ && (E = t(_)), isNaN(E) && (E = s), E
                }
                getNumberFromIndex(t, e = 0) {
                    return this.parseNumberWithProvidedParser(parseInt, t, e)
                }
                getFloatFromIndex(t, e = 0) {
                    return this.parseNumberWithProvidedParser(parseFloat, t, e)
                }
                getArrayFromIndex(t) {
                    const e = this.getDataFromIndex(t);
                    let s = [];
                    return e && "" !== e && (s = e.split("|")), s
                }
                getArrayNumbersFromIndex(t, e = 0) {
                    const s = this.getDataFromIndex(t);
                    let _ = [];
                    const E = [];
                    s && "" !== s && (_ = s.split("|"));
                    for (const t of _) {
                        let s = parseFloat(t);
                        isNaN(s) && (s = e), E.push(s)
                    }
                    return E
                }
                getObjectFromJson(t) {
                    const e = this.getDataFromIndex(t);
                    let s = {};
                    if (e && "" !== e) try {
                        s = JSON.parse(e)
                    } catch (t) {
                        s = {}
                    }
                    return s
                }
                getRawDataFromJsonIndex(t, e) {
                    const s = this.getObjectFromJson(t);
                    let _ = "";
                    return s && s[e] && (_ = String(s[e])), _
                }
                getArrayObjectFromJsonIndex(t, e) {
                    const s = this.getObjectFromJson(t);
                    let _ = [];
                    return s && s[e] && ("object" != typeof s[e] ? _.push(String(s[e])) : _ = s[e].map(String)), _
                }
                parseNumberFromJsonIndexWithProvidedParser(t, e, s, _ = 0) {
                    const E = this.getObjectFromJson(e);
                    let i = _;
                    return E && void 0 !== E[s] && (i = t(E[s])), isNaN(i) && (i = _), i
                }
                getNumberFromJsonIndex(t, e, s = 0) {
                    return this.parseNumberFromJsonIndexWithProvidedParser(parseInt, t, e, s)
                }
                getFloatFromJsonIndex(t, e, s = 0) {
                    return this.parseNumberFromJsonIndexWithProvidedParser(parseFloat, t, e, s)
                }
                getStringFromJsonIndex(t, e) {
                    const s = this.getObjectFromJson(t);
                    let _ = "";
                    return s && s[e] && (_ = String(s[e])), _
                }
                getArrayFromJsonIndex(t, e) {
                    const s = this.getObjectFromJson(t);
                    let _ = [];
                    return s && s[e] && "" !== s[e] && (_ = s[e].split("|")), _
                }
            }
            var I = s(162);
            class T {
                constructor() {
                    this._callbacks = []
                }
                addCallback(t) {
                    this._callbacks.push(t)
                }
                runCallbacks() {
                    this._callbacks.forEach(t => {
                        t()
                    }), this._callbacks = []
                }
            }
            class A {
                constructor(t) {
                    this._rotationTime = t
                }
                runRotation() {
                    clearInterval(this._intervalId), this.rotate(), this._intervalId = window.setInterval(() => this.rotate(), this._rotationTime)
                }
                rotate() {
                    const t = document.querySelectorAll(".live-betting-strip > div");
                    if (t.length > 1) {
                        const e = t[0],
                            s = t[1];
                        this._moveElementToLastPosition(e), e.classList.add("hidden"), s.classList.remove("hidden")
                    }
                }
                _moveElementToLastPosition(t) {
                    t.parentElement.appendChild(t)
                }
            }
            var l, h = s(80);
            ! function(t) {
                t.LIVE = "live", t.PREMATCH = "prematch"
            }(l || (l = {}));
            class N {
                constructor(t, e) {
                    this._activeTab = "", this._tabs = {}, this._visible = !1, this._dataProvider = t, this._htmlRenderer = e, this._callbacks = new T, this._rotator = new A(this._dataProvider.getRotationTime())
                }
                switchLiveOfferState() {
                    const t = this._dataProvider.getLiveInOfferClass(),
                        e = this._dataProvider.getEventStageTypeId();
                    if (e === h.a.FINISHED) {
                        let e;
                        const s = document.getElementsByClassName(t);
                        for (const t in s) e = s[t], e.style && (e.style.display = "none")
                    } else if (e === h.a.LIVE) {
                        const e = document.getElementsByClassName("live-offer1");
                        for (const s in e) e[s].classList && (e[s].classList.add(t), e[s].classList.remove("live-offer1"))
                    }
                }
                hasActivePrematchTab() {
                    return this._activeTab === l.PREMATCH
                }
                _hideOddsTabContent(t) {
                    const e = document.getElementById("tab-" + t + "-odds");
                    e && e.style && (e.style.display = "none")
                }
                _hideOddsTab(t) {
                    const e = document.getElementById("odds-tab-" + t);
                    e && e.style && (e.style.display = "none"), delete this._tabs[t], this.showOdds()
                }
                _showOddsTabContent(t) {
                    const e = document.getElementById("tab-" + t + "-odds");
                    e && e.style && (e.style.display = "block")
                }
                switchTab(t) {
                    t === l.LIVE && "" === this._htmlRenderer.getFirstBookmakerLiveOdds() || (this._activeTab = t, this.displayOddsTab(t))
                }
                displayOddsTab(t) {
                    const e = this._getWrapperElement();
                    if (e) {
                        let s;
                        const _ = e.querySelectorAll(".ifmenu .selected");
                        for (const t in _) s = _[t], s.classList && s.classList.remove("selected");
                        if (e.classList) {
                            for (; e.classList.length > 0;) e.classList.remove(e.classList[0]);
                            e.classList.add(t)
                        }
                    }
                    const s = document.getElementById("odds-tab-" + t);
                    s && (s.classList && s.classList.add("selected"), s.style && (s.style.display = "block"), t === l.PREMATCH ? this._hideOddsTabContent(l.LIVE) : this._hideOddsTabContent(l.PREMATCH), this._tabs[t] = !0, this._showOddsTabContent(t), this.showOdds())
                }
                displayOddsTabs() {
                    this._hasPrematchOdds() && this.displayOddsTab(l.PREMATCH)
                }
                _hasPrematchOdds() {
                    return this._dataProvider.hasPrematchValues()
                }
                _getSelectedTab() {
                    return window.detail_selected_tab[0]
                }
                _areOddsEnabledForTab(t) {
                    return ["summary", "match_history", "lineups", "player_statistics", "fall_of_wickets", "overs", "head_2_head", "statistics", "commentary"].indexOf(t) > -1
                }
                showOdds() {
                    this._areOddsEnabledForTab(this._getSelectedTab()) && Object.keys(this._tabs).length ? this._setDisplayToOddsWrapper("block") : this.hideOdds()
                }
                hideOdds() {
                    this._setDisplayToOddsWrapper("none")
                }
                _setDisplayToOddsWrapper(t) {
                    const e = this._getWrapperElement();
                    e && e.style && (e.style.display = t)
                }
                _getWrapperElement() {
                    return document.getElementById("odds-main-wrapper")
                }
                removeLiveOddsTab() {
                    this._isVisible() && (this._hideOddsTab(l.LIVE), this._hasPrematchOdds() ? this.switchTab(l.PREMATCH) : this.hideOdds())
                }
                static _getSpacer() {
                    return '<div class="spacer-block">&nbsp;</div>'
                }
                renderBettingStrip() {
                    const t = document.getElementById("live-betting-strip");
                    t && (t.innerHTML = this._htmlRenderer.getBettingStrip())
                }
                renderBroadcast() {
                    const t = document.getElementById("broadcast");
                    t && (t.innerHTML = this._htmlRenderer.getBroadcasts())
                }
                renderLiveOdds() {
                    const t = document.getElementById("live-odds-content");
                    if (t) {
                        const e = this._htmlRenderer.getFirstBookmakerLiveOdds();
                        t.innerHTML = e, !this._dataProvider.hasBonusDataForLiveBookmakers() && e && (t.innerHTML += N._getSpacer())
                    }
                }
                renderLiveOddsBonus() {
                    const t = document.getElementById("detail-bonus-match-summary-content-live");
                    t && (t.innerHTML = this._htmlRenderer.getFirstBookmakerLiveBonus())
                }
                renderOddsComparisonBonus() {
                    const t = document.getElementById("detail-bonus-odds-comparison-content");
                    t && (t.innerHTML = this._htmlRenderer.getBookmakerOddsComparisonBonus())
                }
                renderPrematchOdds() {
                    if (this._dataProvider.hasPrematchValues()) {
                        const t = document.getElementById("prematch-odds-content");
                        t && (t.innerHTML = this._htmlRenderer.getAllBookmakerPrematchOdds(), this._dataProvider.hasBonusDataForPrematchBookmakers() || (t.innerHTML += N._getSpacer()))
                    }
                }
                renderPrematchOddsBonus() {
                    const t = document.getElementById("detail-bonus-match-summary-content-prematch");
                    t && (t.innerHTML = this._htmlRenderer.getAllBookmakerPrematchBonuses())
                }
                show() {
                    this._isVisible() || (this.renderBettingStrip(), this.renderPrematchOdds(), this.renderLiveOdds(), this.renderLiveOddsBonus(), this.renderPrematchOddsBonus(), this.renderOddsComparisonBonus(), this.renderBroadcast(), this.displayOddsTabs(), this.switchLiveOfferState(), this._rotator.runRotation(), this._setVisible(!0), this._callbacks.runCallbacks())
                }
                addCallback(t) {
                    this._isVisible() ? t() : this._callbacks.addCallback(t)
                }
                getDataProvider() {
                    return this._dataProvider
                }
                _isVisible() {
                    return this._visible
                }
                _setVisible(t) {
                    this._visible = t
                }
            }
            class D {
                constructor(t, e, s) {
                    this._dataProvider = t, this._htmlTemplate = e, this._utilEnviroment = s
                }
                getBettingStrip() {
                    let t = "";
                    const e = this._dataProvider.getBettingStrip();
                    return e.isEnabled() && (t = this._htmlTemplate.render(this._utilEnviroment.getHtmlTemplate().TPL_ODDS_LIVE_BETTING_STRIP, e.getDataForTemplate())), t
                }
                _getBookmakerOdds(t) {
                    const e = t.getDataForTemplate();
                    return 0 === e.countOfRows ? "" : this._htmlTemplate.render(this._utilEnviroment.getHtmlTemplate().TPL_ODDS_ODDS_CONTENT, e)
                }
                getBookmakerLiveOdds(t) {
                    return this._getBookmakerOdds(this._dataProvider.getBookmakerLiveOdds(t))
                }
                getBookmakerPrematchBonus(t) {
                    const e = this._dataProvider.getDetailPrematchBonusMatchSummary(t).getDataForTemplate();
                    return this._htmlTemplate.render(this._utilEnviroment.getHtmlTemplate().TPL_ODDS_DETAIL_BONUS_MATCH_SUMMARY_CONTENT, e)
                }
                getBookmakerLiveBonus(t) {
                    const e = this._dataProvider.getDetailLiveBonusMatchSummary(t).getDataForTemplate();
                    return this._htmlTemplate.render(this._utilEnviroment.getHtmlTemplate().TPL_ODDS_DETAIL_BONUS_MATCH_SUMMARY_CONTENT, e)
                }
                getAllBookmakerPrematchBonuses() {
                    const t = [];
                    for (const e of this._dataProvider.getPrematchBookmakerIds()) this._dataProvider.getDetailPrematchBonusMatchSummary(e).hasBonusData() && t.push(this.getBookmakerPrematchBonus(e));
                    return t.join("\n")
                }
                getAllBookmakerLiveBonuses() {
                    const t = [];
                    for (const e of this._dataProvider.getLiveBookmakerIds()) this._dataProvider.getDetailLiveBonusMatchSummary(e).hasBonusData() && t.push(this.getBookmakerLiveBonus(e));
                    return t.join("\n")
                }
                getFirstBookmakerLiveBonus() {
                    const t = this._dataProvider.getLiveBookmakerIds().shift();
                    return t ? this.getBookmakerLiveBonus(t) : ""
                }
                getBookmakerPrematchOdds(t) {
                    return this._getBookmakerOdds(this._dataProvider.getBookmakerPrematchOdds(t))
                }
                getAllBookmakerPrematchOdds() {
                    const t = [];
                    for (const e of this._dataProvider.getPrematchBookmakerIds()) t.push(this.getBookmakerPrematchOdds(e));
                    return t.join("\n")
                }
                getAllBookmakerLiveOdds() {
                    const t = [];
                    for (const e of this._dataProvider.getLiveBookmakerIds()) t.push(this.getBookmakerLiveOdds(e));
                    return t.join("\n")
                }
                getFirstBookmakerLiveOdds() {
                    const t = this._dataProvider.getLiveBookmakerIds().shift();
                    return t ? this.getBookmakerLiveOdds(t) : ""
                }
                getBroadcasts() {
                    const t = this._dataProvider.getBroadcasts().getDataForTemplate();
                    return 0 === t.liveStreaming.length && 0 === t.tvChannel.length ? "" : this._htmlTemplate.render(this._utilEnviroment.getHtmlTemplate().TPL_BROADCAST_BROADCAST, t)
                }
                getBookmakerOddsComparisonBonus() {
                    const t = this._dataProvider.getDetailBonusOddsComparison().getDataForTemplate();
                    return 0 === t.bookmakers.length ? "" : this._htmlTemplate.render(this._utilEnviroment.getHtmlTemplate().TPL_ODDS_DETAIL_BONUS_ODDS_COMPARISON_CONTENT, t)
                }
            }
            var c = s(98);
            cjs.Api.loader.get("cjs").call(t => {
                var e, s, _, E, i;
                e = t.dic.get("Helper_ClickableBookmaker"), s = t.Api.config, _ = t.dic.get("util_enviroment"), E = t.dic.get("util_trans"), i = t.dic.get("Feed_Parser"), t.Api.loader.get("detail/odds/DataProvider").fulfill((r, a) => {
                    const n = new S(i, r.feedContent),
                        I = new c.a,
                        T = new o(e, s, _, I, E, r.oddsSetup, n, r.bookmakersWithLiveOffer, r.eventStageTypeId);
                    t.Api.loader.get("detail/odds/DataProviderInstance").fulfill(t => {
                        t(T)
                    }), a(T)
                })
            }), cjs.Api.loader.get("cjs").call(t => {
                var e, s;
                e = t.dic.get("util_enviroment"), s = t.dic.get("HtmlTemplate"), t.Api.loader.get("detail/odds/HtmlDomController").fulfill((_, E) => {
                    const i = (new I.a).createFromDataObject(_.oddsSetupRawData);
                    t.Api.loader.get("detail/odds/DataProvider").call({
                        oddsSetup: i,
                        feedContent: _.feedContent,
                        bookmakersWithLiveOffer: _.bookmakersWithLiveOffer,
                        eventStageTypeId: _.eventStageTypeId
                    }, _ => {
                        const i = new D(_, s, e),
                            r = new N(_, i);
                        t.Api.loader.get("detail/odds/HtmlDomControllerInstance").fulfill(e => {
                            t.Api.loader.get("detail/odds/DataProviderInstance").call(t => {
                                e(r)
                            })
                        }), E(r)
                    })
                })
            })
        },
        460: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e) {
                    this._id = t, this._name = e
                }
                getId() {
                    return this._id
                }
                getName() {
                    return this._name
                }
            }
            let E = (() => {
                class t {
                    constructor(t, e) {
                        this._bookmakers = [], this._bookmakerLogoToTextForMatchSummary = 0, this._geoIp = t, this._geoIpIsoSubdivisionCode = e
                    }
                    getGeoIp() {
                        return this._geoIp
                    }
                    getGeoIpIsoSubdivisionCode() {
                        return this._geoIpIsoSubdivisionCode
                    }
                    addBookmaker(t) {
                        this._bookmakers.push(t)
                    }
                    getBookmaker(t) {
                        let e = null;
                        return this._bookmakers.forEach((s, _) => {
                            s.getId() === t && (e = s)
                        }), e
                    }
                    getBookmakers() {
                        return this._bookmakers
                    }
                    getGeoIpWithSubdivision() {
                        let e = this._geoIp;
                        return this._geoIp ? this._geoIpIsoSubdivisionCode && (e = this._geoIp + ":" + this._geoIpIsoSubdivisionCode) : e = t.DEFAULT_GEOIP, e
                    }
                    setBookmakerLogoToTextForMatchSummary(t) {
                        this._bookmakerLogoToTextForMatchSummary = t
                    }
                    hasBookmakerLogoToTextForMatchSummary() {
                        return this._bookmakerLogoToTextForMatchSummary
                    }
                }
                return t.DEFAULT_GEOIP = "default", t.DEFAULT_GEOIP_SUBDIVISION_CODE = "", t
            })();
            class i {
                constructor(t, e) {
                    this._width = t, this._height = e
                }
                getHeight() {
                    return this._height
                }
                getWidth() {
                    return this._width
                }
            }
            class r {
                constructor(t, e) {
                    this._geoIpCountryCode = t, this._geoIpIsoSubdivisionCode = e
                }
                getGeoIpCountryCode() {
                    return this._geoIpCountryCode
                }
                getGeoIpIsoSubdivisionCode() {
                    return this._geoIpIsoSubdivisionCode
                }
            }
            class a {
                split(t) {
                    let e, s;
                    return [e, s] = t.split(":"), e || (e = ""), s || (s = ""), new r(e, s)
                }
            }
            var n = s(258);
            class o {
                constructor(t, e, s, _, E = {}) {
                    this._data = {}, this._availableData = {}, this._utilConfig = t, this._utilTrans = e, this._utilEnviroment = s, this._clickableBookmakerModule = _, this._inputData = E, this._prepareInputData()
                }
                _prepareBookmakersData() {
                    const t = new a;
                    let e = {};
                    this._inputData.hasOwnProperty("bookmakersData") && (e = this._inputData.bookmakersData), Object.keys(e).forEach(s => {
                        const i = t.split(s),
                            r = new E(i.getGeoIpCountryCode(), i.getGeoIpIsoSubdivisionCode());
                        e[s].forEach(t => {
                            t.hasOwnProperty("main_bookmaker_id") && t.hasOwnProperty("name") && r.addBookmaker(new _(parseInt(t.main_bookmaker_id), t.name))
                        }), this._data[r.getGeoIpWithSubdivision()] = r
                    })
                }
                _prepareAvailableBookmakersData() {
                    const t = new a;
                    let e = {};
                    this._inputData.hasOwnProperty("availableBookmakers") && (e = this._inputData.availableBookmakers), Object.keys(e).forEach(s => {
                        const i = t.split(s),
                            r = new E(i.getGeoIpCountryCode(), i.getGeoIpIsoSubdivisionCode());
                        e[s].forEach(t => {
                            r.addBookmaker(new _(parseInt(t), ""))
                        }), this._availableData[r.getGeoIpWithSubdivision()] = r
                    })
                }
                _prepareGeoGroupsData() {
                    let t = {};
                    const e = new a;
                    let s;
                    this._inputData.hasOwnProperty("geoGroups") && (t = this._inputData.geoGroups, Object.keys(t).forEach(_ => {
                        s = e.split(_);
                        const E = this._getGeoGroup(s.getGeoIpCountryCode(), s.getGeoIpIsoSubdivisionCode());
                        E && t[_].logo_to_text_match_summary && E.setBookmakerLogoToTextForMatchSummary(parseInt(t[_].logo_to_text_match_summary))
                    })), this._clickableBookmakerModule.setBookmakerGeoGroupsData(t)
                }
                getMainBookmakerIds(t = E.DEFAULT_GEOIP, e = E.DEFAULT_GEOIP_SUBDIVISION_CODE) {
                    const s = this._getGeoGroup(t, e);
                    return s ? this._getBookmakerIdsFromGeoGroup(s) : []
                }
                getMainBookmakerNames(t = E.DEFAULT_GEOIP, e = E.DEFAULT_GEOIP_SUBDIVISION_CODE) {
                    const s = this._getGeoGroup(t, e);
                    return s ? this._getBookmakerNamesFromGeoGroup(s) : []
                }
                getBetslipWindow(t) {
                    const e = this._utilConfig.get("app", "odds", "betslip_window_size");
                    if (e[t] && e[t].match("^([0-9]+)x([0-9]+)$")) {
                        const s = e[t].split("x");
                        return new i(parseInt(s[0]), parseInt(s[1]))
                    }
                    return new i(0, 0)
                }
                getTabTitle() {
                    return this._utilTrans.translate("TRANS_BOOKMARK_ODDS") || ""
                }
                getLogo(t) {
                    return new n.a(this._utilEnviroment.getBookmakerLogos()).resolve(t)
                }
                getBookmakerNameByGeoIpAndId(t = E.DEFAULT_GEOIP, e = E.DEFAULT_GEOIP_SUBDIVISION_CODE, s) {
                    const _ = this._getGeoGroup(t, e);
                    if (_) {
                        const t = _.getBookmaker(s);
                        if (t) return t.getName()
                    }
                    return ""
                }
                getAvailableBookmakerIdsByGeoIp(t = E.DEFAULT_GEOIP, e = E.DEFAULT_GEOIP_SUBDIVISION_CODE, s) {
                    if (!this._clickableBookmakerModule.isClickable(t, e) || this._utilConfig.get("app", "odds", "betting_light_version")) return [];
                    const _ = this._getGeoGroupAvailable(t, e);
                    let i = [];
                    _ && (i = this._getBookmakerIdsFromGeoGroup(_));
                    const r = this.getDisabledBookmakerIdsByGeoIp(s, t, e);
                    return a = r, i.filter(t => a.indexOf(t) < 0);
                    var a
                }
                getDisabledBookmakerIdsByGeoIp(t, e = E.DEFAULT_GEOIP, s = E.DEFAULT_GEOIP_SUBDIVISION_CODE) {
                    const _ = new E(e, s).getGeoIpWithSubdivision();
                    let i = [];
                    return t && t[_] && _ !== e ? i = t[_] : t && t[e] && (i = t[e]), i
                }
                showBookmakerLogoMatchSummary(t = E.DEFAULT_GEOIP, e = E.DEFAULT_GEOIP_SUBDIVISION_CODE) {
                    const s = this._getGeoGroup(t, e);
                    return s ? s.hasBookmakerLogoToTextForMatchSummary() : 0
                }
                _prepareInputData() {
                    this._prepareBookmakersData(), this._prepareAvailableBookmakersData(), this._prepareGeoGroupsData()
                }
                _getGeoGroup(t, e) {
                    const s = new E(t, e).getGeoIpWithSubdivision();
                    return this._data[s] && s != t ? this._data[s] : this._data[t] ? this._data[t] : this._data[E.DEFAULT_GEOIP] ? this._data[E.DEFAULT_GEOIP] : null
                }
                _getGeoGroupAvailable(t, e) {
                    const s = new E(t, e).getGeoIpWithSubdivision();
                    return this._availableData[s] && s !== t ? this._availableData[s] : this._availableData[t] ? this._availableData[t] : this._availableData[E.DEFAULT_GEOIP] ? this._availableData[E.DEFAULT_GEOIP] : null
                }
                _getBookmakerIdsFromGeoGroup(t) {
                    const e = [];
                    return t.getBookmakers().forEach(t => {
                        e.push(t.getId())
                    }), e
                }
                _getBookmakerNamesFromGeoGroup(t) {
                    const e = [];
                    return t.getBookmakers().forEach(t => {
                        e.push(t.getName())
                    }), e
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s, _, E, i) => {
                    e.addEventListener("DOMContentLoaded", () => {
                        t.Api.loader.get("bookmakersData").call((function(e) {
                            const r = new o(s, _, E, i, e);
                            t.Api.loader.get("bookmakerSettings").fulfill(t => {
                                t(r)
                            })
                        }))
                    })
                })(document, cjs.Api.config, cjs.dic.get("util_trans"), cjs.dic.get("util_enviroment"), cjs.dic.get("Helper_ClickableBookmaker"))
            })
        },
        461: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e) {
                    this._past = null, this._future = null, this._past = t, this._future = e
                }
                getPast() {
                    return this._past
                }
                getFuture() {
                    return this._future
                }
                getPastTimestamp() {
                    let t = -1;
                    return this._past && (t = this._past.timestamp), t
                }
                getPastDayOffset() {
                    let t = null;
                    return this._past && (t = this._past.dayOffset), t
                }
                getFutureTimestamp() {
                    let t = -1;
                    return this._future && (t = this._future.timestamp), t
                }
                getFutureDayOffset() {
                    let t = null;
                    return this._future && (t = this._future.dayOffset), t
                }
                hasPast() {
                    return !!this._past
                }
                hasFuture() {
                    return !!this._future
                }
            }
            class E {
                constructor(t, e) {
                    this.dayOffset = t, this.timestamp = e
                }
            }
            class i {
                parse(t) {
                    return t && 2 === t.length ? new _(i._parseSetting(t[0]), i._parseSetting(t[1])) : new _(null, null)
                }
                static _parseSetting(t) {
                    if (t.match(/(\-?[0-9]+):([0-9]+)/)) {
                        const e = t.split(":");
                        return new E(parseInt(e[0]), parseInt(e[1]))
                    }
                    return null
                }
            }
            class r {
                getFormatter() {
                    return new a
                }
            }
            class a {
                replaceTextPast(t, e, s, _) {
                    let E = "";
                    return E += '<div class="nmf__button nmf__button--pointer" onclick="' + _ + '" >', E += '<div class="nmf__arrow nmf__arrow--past"></div>', E += '<div class="nmf__timeline nmf__timeline--past">' + t.replace(e, s) + "</div>", E += "</div>", E
                }
                replaceTextNoPast(t) {
                    let e = "";
                    return e += '<div class="nmf__button">', e += '<div class="nmf__timeline nmf__timeline--past">' + t + "</div>", e += "</div>", e
                }
                replaceTextFuture(t, e, s, _) {
                    let E = "";
                    return E += '<div class="nmf__button nmf__button--pointer" onclick="' + _ + '" >', E += '<div class="nmf__timeline nmf__timeline--future">' + t.replace(e, s) + "</div>", E += '<div class="nmf__arrow nmf__arrow--future"></div>', E += "</div>", E
                }
                replaceTextNoFuture(t) {
                    let e = "";
                    return e += '<div class="nmf__button">', e += '<div class="nmf__timeline nmf__timeline--future">' + t + "</div>", e += "</div>", e
                }
                wrap(t) {
                    return "" != t && (t = '<div class="nmf__timelines">' + t + "</div>"), t
                }
                getSeparator(t = "", e = "") {
                    return t && e ? '<div class="nmf__separator"><div class="nmf__line"></div></div>' : ""
                }
                getBeforeElement() {
                    return ""
                }
            }
            var n = s(9),
                o = s(5);
            class S {
                constructor(t, e, s, _, E) {
                    this.utilEnviroment = t, this.utilString = e, this.utilTrans = s, this.utilSport = _, this.utilDate = E, this._formater = (new r).getFormatter(), this._calendarRange = parseInt(this.utilEnviroment.getCalendarConfig().range)
                }
                _getGmtOffset() {
                    return this.utilEnviroment.getGmtOffset()()
                }
                _getTransKeyPart() {
                    let t = "";
                    return this._sportId == o.a.GOLF ? t = "TOURNAMENT" : this.utilSport.isRacingSport(this._sportId) ? (t = "RACE", this._sportId == o.a.HORSE_RACING ? t = "HORSE_RACE" : this.utilSport.inGroup(this._sportId, o.a.WINTER_SPORTS) && (t = "WINTER_SPORTS_RACE")) : t = "MATCH", t
                }
                get(t, e, s = n.a.TAB_ID_ALL, _ = "") {
                    if (this._sportId = t, this._settings = (new i).parse(e), "tournament" == _ || "country" == _) return "";
                    let E = "";
                    const r = this._getPast(s),
                        a = this._getFuture(s);
                    return (r || a) && (E = this._formater.wrap(r + this._formater.getSeparator(r, a) + a)), E
                }
                _getPast(t) {
                    let e, s = "";
                    const _ = this._getTransKeyPart();
                    if (t == n.a.TAB_ID_ALL)
                        if (this._settings.hasPast()) {
                            e = this._settings.getPastTimestamp();
                            const t = this.utilTrans.translate("TRANS_" + _ + "_LIST_NOT_FOUND_PLAN_PAST_GAME");
                            s += this._formater.getBeforeElement() + this._getReplacedTextWithTimePast(e, t)
                        } else {
                            const t = this.utilTrans.translate("TRANS_" + _ + "_LIST_NOT_FOUND_PLAN_NO_PAST_GAME");
                            s += this._formater.getBeforeElement() + this._getReplacedTextWithCalendarRangePast(t)
                        } return s
                }
                _getFuture(t) {
                    let e, s = "";
                    const _ = this._getTransKeyPart();
                    if (t == n.a.TAB_ID_ALL)
                        if (this._settings.hasFuture()) {
                            e = this._settings.getFutureTimestamp();
                            const t = this.utilTrans.translate("TRANS_" + _ + "_LIST_NOT_FOUND_PLAN_NEXT_GAME");
                            s += this._formater.getBeforeElement() + this._getReplacedTextWithTimeFuture(e, t)
                        } else {
                            const t = this.utilTrans.translate("TRANS_" + _ + "_LIST_NOT_FOUND_PLAN_NO_NEXT_GAME");
                            s += this._formater.getBeforeElement() + this._getReplacedTextWithCalendarRangeFuture(t)
                        } return s
                }
                _getOnClickCalendarDate(t) {
                    return this.utilEnviroment.getMatchDay(t)
                }
                _getLinkText(t) {
                    return this.utilDate.timestamp2date(this.utilEnviroment.getFullDateFormat(), t, this._getGmtOffset())
                }
                _getOnClickAction(t) {
                    return "set_calendar_date_for_nmf(" + this._getOnClickCalendarDate(t) + "); return false;"
                }
                _getReplacedTextWithTimePast(t, e) {
                    const s = this._getOnClickAction(t),
                        _ = this._getLinkText(t);
                    return this._formater.replaceTextPast(e, "[time]", _, s)
                }
                _getReplacedTextWithTimeFuture(t, e) {
                    const s = this._getOnClickAction(t),
                        _ = this._getLinkText(t);
                    return this._formater.replaceTextFuture(e, "[time]", _, s)
                }
                _getReplacedTextWithCalendarRangePast(t) {
                    return -this._getCurrentCalendarDay() == this._calendarRange ? "" : this._formater.replaceTextNoPast(t.replace("%s", (this._calendarRange + this._getCurrentCalendarDay()).toString()))
                }
                _getReplacedTextWithCalendarRangeFuture(t) {
                    return this._getCurrentCalendarDay() == this._calendarRange ? "" : this._formater.replaceTextNoFuture(t.replace("%s", (this._calendarRange - this._getCurrentCalendarDay()).toString()))
                }
                _getCurrentCalendarDay() {
                    return window.sudate || 0
                }
            }((t, e, s, _, E) => {
                const i = new S(t, e, s, _, E);
                cjs.Api.loader.get("gamePlan").fulfill(t => {
                    t(i)
                })
            })(cjs.dic.get("util_enviroment"), cjs.dic.get("util_string"), cjs.dic.get("util_trans"), cjs.dic.get("util_sport"), cjs.dic.get("util_date"))
        },
        462: function(t, e, s) {
            "use strict";
            var _;
            s.r(e),
                function(t) {
                    t[t.TV = 1] = "TV", t[t.BOOKMAKER = 2] = "BOOKMAKER", t[t.WWW = 3] = "WWW"
                }(_ || (_ = {}));
            var E = s(2);
            class i {
                constructor() {
                    this.id = 0, this.name = "", this.url = "", this.imageUrl = "", this.imageOffset = 0, this.type = ""
                }
                setId(t) {
                    return this.id = t, this
                }
                setName(t) {
                    return this.name = t, this
                }
                setUrl(t) {
                    return this.url = t, this
                }
                setImageUrl(t) {
                    return this.imageUrl = t, this
                }
                setImageOffset(t) {
                    return this.imageOffset = t, this
                }
                setType(t) {
                    return this.type = t, this
                }
                build() {
                    return new r(this.id, this.name, this.url, this.imageUrl, this.imageOffset, this.type)
                }
            }
            class r {
                constructor(t, e, s, _, E, i) {
                    this.id = t, this.name = e, this.url = s, this.imageUrl = _, this.imageOffset = E, this.type = i
                }
                getId() {
                    return this.id
                }
                getImageOffset() {
                    return this.imageOffset
                }
                getImageUrl() {
                    return this.imageUrl
                }
                getName() {
                    return this.name
                }
                getUrl() {
                    return this.url
                }
                getType() {
                    return this.type
                }
            }
            class a {
                constructor(t) {
                    this.formatter = t
                }
                getFormattedData(t, e, s, _) {
                    return this.formatter.format(this.getData(t, e, s, _))
                }
                getData(t, e, s, _) {
                    return [...this.filterTVChannels(t, s), ...this.filterHighlightProviders(t, _), ...this.filterBookmakerBroadcasts(t, e), ...this.filterWebsites(t)]
                }
                filterHighlightProviders(t, e) {
                    var s;
                    return (null === (s = t[E.a.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_INDEX]) || void 0 === s ? void 0 : s.length) ? t[E.a.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_INDEX].map(t => (new i).setId(t[E.a.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_ID]).setName(t[E.a.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_NAME]).setUrl(e.getId()).setImageUrl("/res/_fs/images/2_others/live_stream.svg").setType(E.a.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_INDEX).build()) : []
                }
                filterTVChannels(t, e) {
                    const s = [];
                    if (t.hasOwnProperty(_.TV)) {
                        const E = t[_.TV];
                        Object.keys(E).forEach(t => {
                            const r = E[parseInt(t)];
                            e.includes(parseInt(r.TVI)) && s.push((new i).setId(parseInt(r.TVI)).setName(r.BN).setUrl(r.BU).setType(_.TV).build())
                        })
                    }
                    return s
                }
                filterBookmakerBroadcasts(t, e) {
                    const s = [];
                    if (t.hasOwnProperty(_.BOOKMAKER)) {
                        const E = t[_.BOOKMAKER];
                        Object.keys(E).forEach(t => {
                            const r = E[parseInt(t)];
                            e.includes(parseInt(r.BI)) && s.push((new i).setId(parseInt(r.BI)).setName(r.BN).setUrl(r.BU).setImageUrl(r.IU).setImageOffset(parseInt(r.IO)).setType(_.BOOKMAKER).build())
                        })
                    }
                    return s
                }
                filterWebsites(t) {
                    const e = [];
                    if (t.hasOwnProperty(_.WWW)) {
                        const s = t[_.WWW];
                        Object.keys(s).forEach(t => {
                            const E = s[parseInt(t)];
                            e.push((new i).setName(E.name).setUrl(E.url).setType(_.WWW).build())
                        })
                    }
                    return e
                }
            }
            class n {
                constructor(t, e, s, _) {
                    this.globalGeoIp = t, this.geoIpSubdivisionCode0 = e, this.bookmakerGeoGroups = s, this.transLiveStreaming = _
                }
                format(t) {
                    const e = t.map(t => t.getType()).filter((t, e, s) => s.indexOf(t) === e).length,
                        s = document.createElement("span");
                    let i;
                    return t.forEach(t => {
                        !i && t.getType() === _.BOOKMAKER && e > 1 && (i = document.createElement("span"), i.classList.add("tooltip-broadcast"), i.textContent = "----------", s.append(i));
                        const r = this.getNameByChannelType(t.getName(), t.getType());
                        this.showLogoByGeoIp() || t.getType() === E.a.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_INDEX ? this.appendBroadcastWithLogo(s, t.getName(), t.getUrl(), t.getImageUrl(), r, t.getType()) : this.appendBroadcastWithoutLogo(s, t.getName(), t.getUrl(), r)
                    }), this.decodeHtml(s.innerHTML)
                }
                getNameByChannelType(t, e) {
                    switch (e) {
                        case _.BOOKMAKER:
                            return this.transLiveStreaming;
                        case _.WWW:
                            return t + " " + this.transLiveStreaming;
                        default:
                            return t
                    }
                }
                showLogoByGeoIp() {
                    const t = this.getGeoIpWithSubdivision();
                    return this.bookmakerGeoGroups[t] && this.bookmakerGeoGroups[t].logo_to_text_match_summary ? "1" !== this.bookmakerGeoGroups[t].logo_to_text_match_summary : !this.bookmakerGeoGroups.default || "1" !== this.bookmakerGeoGroups.default.logo_to_text_match_summary
                }
                getGeoIpWithSubdivision() {
                    return this.globalGeoIp ? this.geoIpSubdivisionCode0 ? `${this.globalGeoIp}:${this.geoIpSubdivisionCode0}` : this.globalGeoIp : "default"
                }
                getUrlLink(t, e, s) {
                    const _ = document.createElement("a");
                    return _.title = e, _.textContent = s instanceof HTMLSpanElement ? s.outerHTML : s, t && (/^g_[0-9]{1,2}_[a-zA-Z0-9]{8}$/.test(t) ? _.setAttribute("onclick", "return cjs.Api.loader.get('detail/opener').call('" + t + "', 'video');") : (_.setAttribute("href", t), _.setAttribute("target", "_blank"))), _
                }
                appendBroadcastWithLogo(t, e, s, _, E, i) {
                    const r = document.createElement("span");
                    if (r.classList.add(this.createLogoClass(_, i)), _) {
                        const t = document.createElement("span");
                        t.classList.add("detail-blogos"), t.setAttribute("style", `background: transparent url(${_}) no-repeat`), r.append(this.getUrlLink(s, e, t))
                    }
                    r.append(s ? this.getUrlLink(s, e, E) : e), t.append(r)
                }
                appendBroadcastWithoutLogo(t, e, s, _) {
                    const E = e !== _,
                        i = document.createElement("span");
                    i.classList.add("tooltip-broadcast"), s ? (E && (t.append(this.getUrlLink(s, e, e)), t.append(" ")), t.append(this.getUrlLink(s, e, _))) : E && t.append(e + " "), t.append(i)
                }
                decodeHtml(t) {
                    const e = document.createElement("textarea");
                    return e.innerHTML = t, e.value
                }
                createLogoClass(t, e) {
                    return t ? e === E.a.HIGHLIGHTPROVIDERINDEXES_HIGHLIGHT_PROVIDER_INDEX ? "tooltip-live-stream" : "tooltip-logo" : "tooltip-broadcast"
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s) => {
                    e.addEventListener("DOMContentLoaded", () => {
                        t.Api.loader.get("geoIpResolver").call((e, _) => {
                            const E = new a(new n(e || "", _ || "", t.bookmakerGeoGroups || {}, s.translate("TRANS_LIVE_STREAMING") || ""));
                            t.Api.loader.get("broadcast").fulfill(t => {
                                t(E)
                            })
                        })
                    })
                })(document, t.dic.get("util_trans"))
            })
        },
        463: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s) {
                    this.window = t, this.url = e, this.windowFeatures = s
                }
                open() {
                    const t = this.window.open(this.url.getUrl(), "tvChannel-" + this.url.getParamId(), this.windowFeatures.get());
                    return null == t || t.focus(), t
                }
            }
            class E {
                constructor(t, e, s) {
                    this.location = t, this.windowType = e, this.paramId = s
                }
                getUrl() {
                    return `${this.location.origin}/stream/${this.windowType}/${this.paramId}/#`
                }
                getParamId() {
                    return this.paramId
                }
            }
            class i {
                constructor() {
                    this.windowFeatures = [], this.add("width", "850").add("height", "600").add("scrollbars", "0").add("resizable", "0").add("toolbar", "0").add("scrollbar", "0")
                }
                add(t, e) {
                    const s = [t, e];
                    return this.windowFeatures = [s].concat(this.windowFeatures), this
                }
                get() {
                    const t = [];
                    return this.windowFeatures.map(e => {
                        t.push(`${e[0]}=${e[1]}`)
                    }), t.reverse().join(", ")
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s) => {
                    t.Api.loader.get("tv/streamOpener").fulfill((t, r) => {
                        new _(e, new E(s, t, r), new i).open()
                    })
                })(window, location)
            })
        },
        465: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = function(t, e) {
                var s = {};
                for (var _ in t) Object.prototype.hasOwnProperty.call(t, _) && e.indexOf(_) < 0 && (s[_] = t[_]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var E = 0;
                    for (_ = Object.getOwnPropertySymbols(t); E < _.length; E++) e.indexOf(_[E]) < 0 && Object.prototype.propertyIsEnumerable.call(t, _[E]) && (s[_[E]] = t[_[E]])
                }
                return s
            };
            class E {
                constructor(t, e, s, _, E, i, r) {
                    this._timeoutInMs = 2e4, this._htmlContent = t, this._timeouts = s, this._contentBuffer = e, this._part = i, this._sortingProps = _, this._utilEnviroment = r, this._sliderProps = E
                }
                addTimeout(t, e) {
                    const s = setTimeout(() => {
                        document.querySelectorAll(e).forEach(t => t.classList.remove("highlighted")), this.clearElementTimeout(t)
                    }, this.getTimeoutInMs());
                    this._timeouts = Object.assign(Object.assign({}, this._timeouts), {
                        [t]: s
                    })
                }
                clearElementTimeout(t) {
                    if (-1 != Object.keys(this._timeouts).indexOf(t)) {
                        clearTimeout(this._timeouts[t]);
                        const e = this._timeouts,
                            s = t,
                            E = (e[s], _(e, ["symbol" == typeof s ? s : s + ""]));
                        this._timeouts = E
                    }
                }
                setPart(t) {
                    this._part != t && (this._contentBuffer = {}), this._part = t
                }
                setContentBuffer(t) {
                    this._contentBuffer = t
                }
                setSortingProp(t) {
                    this._sortingProps = Object.assign(Object.assign({}, t), this._sortingProps)
                }
                setSliderProp(t) {
                    this._sliderProps = Object.assign(Object.assign({}, t), this._sliderProps)
                }
                setHtmlContent(t) {
                    this._htmlContent = t
                }
                getContentBuffer() {
                    return this._contentBuffer
                }
                getHtmlContent() {
                    return this._htmlContent
                }
                getTimeouts() {
                    return this._timeouts
                }
                getTimeoutInMs() {
                    return this._timeoutInMs
                }
                getUtilEnviroment() {
                    return this._utilEnviroment
                }
                getSortingProps() {
                    return this._sortingProps
                }
                getSliderProps() {
                    return this._sliderProps
                }
                setProps(t) {
                    this._sortingProps = {}, this._sliderProps = {}, this._processSetSliderProps(t), this._processSetSortingProps(t)
                }
                _processSetSliderProps(t) {
                    let e = 0;
                    t.querySelectorAll(".player-statistics:not(.ts-table)").forEach(t => {
                        const s = t.getAttribute("style"),
                            _ = t.parentElement;
                        if (null != s && null != _ && !_.classList.contains("ts-table-fixed-columns-wrap")) {
                            const t = E._extractMarginLeftStyleValue(s);
                            this.setSliderProp({
                                [e]: t
                            }), e += 1
                        }
                    })
                }
                _processSetSortingProps(t) {
                    let e = 0;
                    t.querySelectorAll(".player-statistics.sortable").forEach(t => {
                        t.querySelectorAll(".sortable-col").forEach(t => {
                            if (!t.classList.contains("ts-hidden-fixed-column")) {
                                const s = t.querySelector("a");
                                null != s && (s.classList.contains("active-up") && this.setSortingProp({
                                    [e]: "asc"
                                }), s.classList.contains("active-down") && this.setSortingProp({
                                    [e]: "desc"
                                })), e += 1
                            }
                        })
                    })
                }
                static _extractMarginLeftStyleValue(t) {
                    const e = t.match(/margin\-left:\s+(\-?\d+)/);
                    return null != e ? Number(e[1]) : 0
                }
                highlightData() {
                    return this
                }
            }
            class i {
                constructor() {
                    this._htmlContent = "", this._part = "", this._timeouts = {}, this._contentBuffer = {}, this._sortingProps = {}, this._sliderProps = {}
                }
                setHtmlContent(t) {
                    return this._htmlContent = t, this
                }
                setPart(t) {
                    return this._part = t, this
                }
                setTimeouts(t) {
                    return this._timeouts = t, this
                }
                setContentBuffer(t) {
                    return this._contentBuffer = t, this
                }
                setSortingProps(t) {
                    return this._sortingProps = t, this
                }
                setSliderProps(t) {
                    return this._sliderProps = t, this
                }
                setUtilEnviroment(t) {
                    return this._utilEnviroment = t, this
                }
                build() {
                    return new r(this._htmlContent, this._contentBuffer, this._timeouts, this._sortingProps, this._sliderProps, this._part, this._utilEnviroment)
                }
            }
            class r extends E {
                constructor() {
                    super(...arguments), this.COUNT_OF_STATS = 23
                }
                highlightData() {
                    const t = new DOMParser,
                        e = this.getTimeouts();
                    if (Object.keys(this.getContentBuffer()).length) {
                        this.setHtmlContent('<div id="player-statistics-content">' + this.getHtmlContent() + "</div>");
                        const s = t.parseFromString(this.getHtmlContent(), "text/html");
                        s.querySelectorAll("tbody>tr [data-key]").forEach(t => {
                            const s = t.dataset.key || "",
                                _ = this.getContentBuffer()[s] || "-",
                                E = t.textContent || "-";
                            _.trim() != E.trim() && (this.clearElementTimeout(s), this.addTimeout(s, 'tbody>tr [data-key="' + s + '"]'), t.classList.add("highlighted")), null != e[s] && t.classList.add("highlighted")
                        });
                        const _ = s.getElementById("player-statistics-content");
                        null != _ && this.setHtmlContent(_.innerHTML), this.setContentBuffer(this._transformArrayAsContentBuffer(Array.prototype.slice.call(s.querySelectorAll("tbody>tr [data-key]"))))
                    } else this.setContentBuffer(this._transformArrayAsContentBuffer(Array.prototype.slice.call(t.parseFromString(this.getHtmlContent(), "text/html").querySelectorAll("tbody>tr [data-key]"))));
                    return this
                }
                triggerSorting(t) {
                    const e = this.getSortingProps();
                    Object.keys(e).length ? Object.keys(e).forEach(t => {
                        const s = Number(t),
                            _ = s < this.COUNT_OF_STATS ? s : s % this.COUNT_OF_STATS,
                            E = "asc" !== e[s] ? 1 : 2;
                        for (let t = 1; t <= E; t++) this._reSortTable(s, _)
                    }) : t.querySelectorAll("th.sortable-default-col a.sortheader").forEach(t => {
                        this.getUtilEnviroment().reSortDetailTable(t, 2)
                    })
                }
                adjustTableSlider(t, e) {
                    const s = this.getSliderProps();
                    t in s && e.setLeft(s[t])
                }
                _reSortTable(t, e) {
                    this.getUtilEnviroment().reSortDetailTable(document.querySelectorAll(".sortable-col")[t].firstChild, e)
                }
                _transformArrayAsContentBuffer(t) {
                    return t.reduce((t, e) => Object.assign(Object.assign({}, t), {
                        [String(e.dataset.key)]: e.textContent || ""
                    }), {})
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                (e => {
                    const s = (new i).setUtilEnviroment(e).build();
                    t.Api.loader.get("basketballCellHighlighter").fulfill(t => {
                        t(s)
                    })
                })(t.dic.get("util_enviroment"))
            })
        },
        466: function(t, e, s) {
            "use strict";
            var _;
            s.r(e),
                function(t) {
                    t.finished = "finished", t.correction = "correction", t.scoreIncremented = "score-incremented", t.tennisGame = "tennis-game"
                }(_ || (_ = {}));
            class E {
                constructor(t, e, s, _, E, i) {
                    this._soundManagerLoaded = !1, this._silencePath = "_fs/%s/silence.%s", this._storageKey = "livesport_disable_sounds", this._iDeviceLoadSoundManagerDelay = 2500, this._iDeviceLoopInterval = 1e3, this._remainingPlays = {}, this._initializing = !1, this._postponedPlays = [], this._gameSoundsPlayed = {}, this._iQueue = [], this._isILoopRunning = !1, this._soundManager = t, this._baseUrlGetter = e, this._clientStorage = s, this._soundPlayResolver = E, this._soundSportConfig = i, this._isSafari = this._getIsSafari(_), this._isIDevice = this._getisIDevice(_) || this._isSafari, this._disabled = this._isIDevice || "1" == this._clientStorage.get(this._storageKey), this._initialSounds = {
                        commonCheers: "_fs/%s/common-cheers.%s",
                        commonCorrection: "_fs/%s/common-correction.%s",
                        commonEndOfGame: "_fs/%s/common-end-of-game.%s",
                        soccerCardRed: "_fs/%s/soccer-card-red.%s",
                        tennisGame: "_fs/%s/tennis-game.%s",
                        tennisGameSet: "_fs/%s/tennis-game-set.%s",
                        tennisGameSetMatch: "_fs/%s/tennis-game-set-match.%s"
                    }, this._isIDevice && setTimeout(() => {
                        this._loadSoundManager()
                    }, this._iDeviceLoadSoundManagerDelay)
                }
                isEnabled() {
                    return !this._disabled
                }
                isDisabled() {
                    return this._disabled
                }
                toggle() {
                    this._disabled = !this._disabled, this._disabled && this._soundManagerLoaded && this._soundManager.stopAll();
                    const t = this._disabled ? "1" : "0";
                    this._clientStorage.store(this._storageKey, t), this._isIDevice && (this._disabled || this._isILoopRunning || this._startILoop())
                }
                play(t, e, s = !1, _ = !1) {
                    if (this._disabled) return !1;
                    if (_) {
                        if (!this._soundPlayResolver.isSoundPlayAllowedFromNotification(t, _)) return !1
                    } else if (!this._soundPlayResolver.isSoundPlayAllowed(t)) return !1;
                    if (!this._soundTypeCanBePlayedBasedOnHistory(t, e)) return !1;
                    if (!this._soundManagerLoaded && (this._postponedPlays.push({
                            eventId: t,
                            soundType: e
                        }), !this._initializing)) return this._initializing = !0, this._loadSoundManager(() => {
                        for (this._initializing = !1; this._postponedPlays.length > 0;) {
                            const {
                                eventId: t,
                                soundType: e
                            } = this._postponedPlays.shift();
                            this.play(t, e, s, _)
                        }
                    }), !1;
                    const E = _ || this._soundPlayResolver.getSportIdentForEvent(t),
                        i = this._getSoundIdFromConfig(E, e);
                    return !!i && (i in this._sounds && (this._isIDevice && !s ? (this._iQueue.push([t, e, !0, _]), !0) : (this._gameSoundsPlayed[t].push(e), this._remainingPlays[i] += 1, this._playNext(i))))
                }
                _getSoundIdFromConfig(t, e) {
                    return this._soundSportConfig[t] && this._soundSportConfig[t][e] ? this._soundSportConfig[t][e] : null
                }
                gameUpdateFinished(t) {
                    delete this._gameSoundsPlayed[t]
                }
                _playNext(t, e = !1) {
                    const s = this._remainingPlays[t];
                    return 0 != s && (1 != s && !e || (this._sounds[t].play(), !0))
                }
                _loadSoundManager(t) {
                    this._soundManagerLoaded = !0, this._soundManager.audioFormats && (this._soundManager.audioFormats.mp3.required = !1), this._soundManager.setup({
                        url: this._baseUrlGetter() + "/res/sound/soundmanager2",
                        debugMode: !1,
                        preferFlash: !1,
                        onready: () => {
                            const e = () => {
                                    const t = this;
                                    return function() {
                                        t._remainingPlays[this.id] -= 1, t._playNext(this.id, !0)
                                    }
                                },
                                s = this._soundManager.canPlayMIME("audio/ogg") ? "ogg" : "mp3";
                            this._sounds = Object.keys(this._initialSounds).reduce((t, _) => {
                                this._remainingPlays[_] = 0;
                                const E = this._initialSounds[_];
                                return t[_] = this._soundManager.createSound({
                                    id: _,
                                    url: ("/res/sound/" + E).replace(/%s/g, s),
                                    onfinish: e()
                                }), t
                            }, {}), this._isIDevice && (this._silenceSound = this._soundManager.createSound({
                                id: "silence",
                                url: ("/res/sound/" + this._silencePath).replace(/%s/g, s)
                            })), t && t()
                        }
                    })
                }
                _soundTypeCanBePlayedBasedOnHistory(t, e) {
                    t in this._gameSoundsPlayed || (this._gameSoundsPlayed[t] = []);
                    const s = this._gameSoundsPlayed[t];
                    switch (e) {
                        case _.scoreIncremented:
                            return !s.includes(_.finished);
                        case _.tennisGame:
                            return ![_.finished, _.scoreIncremented].every(t => s.includes(t))
                    }
                    return !0
                }
                _getIsSafari(t) {
                    const e = t.match(/(safari)/i),
                        s = t.match(/chrome/i),
                        _ = null != e && e.length > 0,
                        E = null != s && s.length > 0;
                    return _ && !E
                }
                _getisIDevice(t) {
                    const e = t.match(/(iPod|iPhone|iPad)/i);
                    return null != e && e.length > 0
                }
                _startILoop() {
                    this._isILoopRunning = !0, this._silenceSound.play(), setInterval(() => {
                        let t;
                        for (; t = this._iQueue.shift();) this.play.apply(this, t)
                    }, this._iDeviceLoopInterval)
                }
            }
            class i {
                constructor(t, e, s, _, E, i) {
                    this._categoryGetter = t, this._currentSportGetter = e, this._dataEventHolderProxyHolder = s, this._myGames = _, this._myTeamsGetter = E, this._myLeagues = i
                }
                getSportIdentForEvent(t) {
                    return this._dataEventHolderProxyHolder.getHolder().getItem(t).getSportName()
                }
                isSoundPlayAllowed(t) {
                    if (!this._isLiveOrMyGames()) return !1;
                    if (!this._dataEventHolderProxyHolder.getHolder().hasEvent(t)) return !1;
                    if (this._isInMyGamesButEventIdIsNot(t)) return !1;
                    const e = this._dataEventHolderProxyHolder.getHolder().getItem(t).getLeague();
                    return !this._gameIsFromSecondaryLeagueWhichIsNotTopLeague(e)
                }
                _gameIsFromSecondaryLeagueWhichIsNotTopLeague(t) {
                    return t.isSecondary() && !this._myLeagues.isTop(t.getId())
                }
                _isInMyGamesButEventIdIsNot(t) {
                    return this._isMyGamesTab() && !this._eventIsInMyGamesOrMyTeams(t)
                }
                _isLiveOrMyGames() {
                    return this._isLiveTab() || this._isMyGamesTab()
                }
                isSoundPlayAllowedFromNotification(t, e) {
                    return !(this._isMyGamesTab() || this._isLiveTab() && e == this._currentSportGetter())
                }
                _isLiveTab() {
                    return 1 == this._categoryGetter()
                }
                _isMyGamesTab() {
                    return 5 == this._categoryGetter()
                }
                _eventIsInMyGamesOrMyTeams(t) {
                    let e = !1;
                    const s = this._myTeamsGetter();
                    return s && (e = s.eventExists(t)), this._myGames.check(t) || e
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s, _, r, a, n) => {
                    const o = new i(e.getCategory, e.getSport, a, e.getMyGamesObject(), (function() {
                            return t.dic.exists("myTeams") ? t.dic.get("myTeams") : null
                        }), e.getMyLeaguesObject()),
                        S = new E(s, e.getBaseUrl, _, e.getUserAgent(), o, r);
                    t.Api.loader.get("soundPlayer").fulfill(t => {
                        t(S)
                    })
                })(t.dic.get("util_enviroment"), window.soundManager, t.dic.get("client_storage"), t.Api.constantsManager.getSoundSportConfig(), t.dic.get("dataEventHolderProxy"))
            })
        },
        467: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(30),
                E = s.n(_),
                i = s(164),
                r = s(134),
                a = s(156),
                n = function(t, e, s, _) {
                    return new(s || (s = Promise))((function(E, i) {
                        function r(t) {
                            try {
                                n(_.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                n(_.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function n(t) {
                            var e;
                            t.done ? E(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                t(e)
                            }))).then(r, a)
                        }
                        n((_ = _.apply(t, e || [])).next())
                    }))
                };
            class o {
                constructor(t, e, s) {
                    this.userId = "", this.apiClient = t, this.storage = e, this.userIdGetter = s
                }
                profileView(t) {
                    const e = this.apiClient.createAddDetailView(this.getUserId(), t);
                    this.apiClient.getApiClient().send(e)
                }
                addMyTeams(t) {
                    const e = this.apiClient.createAddBookmark(this.getUserId(), t);
                    this.apiClient.getApiClient().send(e)
                }
                getRecommendationsToUser() {
                    return n(this, void 0, void 0, (function*() {
                        const t = this.apiClient.createRecommendItemsToUser(this.getUserId(), 7);
                        return (yield this.apiClient.getApiClient().send(t)).recomms
                    }))
                }
                getScenarioRecommendationsToItem(t, e) {
                    return n(this, void 0, void 0, (function*() {
                        const s = this.apiClient.createScenarioRecommendItemsToItem(t, this.getUserId(), 7, e);
                        return (yield this.apiClient.getApiClient().send(s)).recomms
                    }))
                }
                showRecomBox(t, e) {
                    t && E.a.render(Object(i.a)(new r.a, new a.a(window.cjs.Api.loader), e), t)
                }
                getUserId() {
                    return this.userId || (this.userId = this.userIdGetter(this.storage)), this.userId
                }
            }
            var S = t => {
                let e = t.get("rc_userid");
                return e || (e = function() {
                    function t() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    }
                    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
                }(), t.store("rc_userid", e)), e
            };
            cjs.Api.loader.get("cjs").call(t => {
                var e, _, E, i;
                e = t.Api.loader.get("recombee"), _ = t.Api.loader.get("myTeams"), E = t.clientStorage, i = S, t.Api.config.get("app", "recombee", "enabled") && Promise.all([s.e(84), s.e(48)]).then(s.bind(null, 550)).then(({
                    default: s
                }) => {
                    const r = new o(new s(t.Api.config.get("app", "recombee", "database_id"), t.Api.config.get("app", "recombee", "public_token")), E, i);
                    e.fulfill(t => {
                        t(r)
                    }), _.call(t => {
                        t.registerCallback("add", t => {
                            const e = t.split("_")[1];
                            r.addMyTeams(e)
                        })
                    })
                })
            })
        },
        468: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(10);
            class E {
                constructor(t, e, s) {
                    this._currentTimestamp = t, this._reversedSportTime = e, this._gameTime = s
                }
                getTime(t) {
                    if (!t.isLive()) return null;
                    if (t.getGameTime() > 0 && this._gameTime.isLive(t.getStage())) {
                        if (this._gameTime.showStageInfo(t)) return null;
                        const e = t.getGameTime(),
                            s = this._reversedSportTime.getTime(e, t.getSportId(), t.getStage(), t.getDataStageTime());
                        return s < 0 ? null : s
                    }
                    if ("soccer" == t.getSportName()) {
                        const e = {
                                [_.a.FIRST_HALF]: {
                                    start: 0,
                                    break: 0
                                },
                                [_.a.SECOND_HALF]: {
                                    start: 45,
                                    break: 15
                                },
                                [_.a.EXTRATIME]: {
                                    start: 90,
                                    break: 30
                                }
                            },
                            s = t.getStage();
                        if (s in e) return this._computeGameTimeForStageWithBreaks(t, e[s].start, e[s].break)
                    }
                    if ("bandy" == t.getSportName()) {
                        const e = {
                                [_.a.FIRST_HALF]: {
                                    start: 0,
                                    break: 0
                                },
                                [_.a.SECOND_HALF]: {
                                    start: 45,
                                    break: 15
                                }
                            },
                            s = t.getStage();
                        if (s in e) return this._computeGameTimeForStageWithBreaks(t, e[s].start, e[s].break)
                    }
                    if ("rugby-union" == t.getSportName() || "rugby-league" == t.getSportName()) {
                        let e;
                        e = E._is7Rugby(t) ? {
                            [_.a.FIRST_HALF]: {
                                start: 0,
                                break: 0
                            },
                            [_.a.SECOND_HALF]: {
                                start: 7,
                                break: 2
                            }
                        } : {
                            [_.a.FIRST_HALF]: {
                                start: 0,
                                break: 0
                            },
                            [_.a.SECOND_HALF]: {
                                start: 40,
                                break: 10
                            }
                        };
                        const s = t.getStage();
                        if (s in e) return this._computeGameTimeForStageWithBreaks(t, e[s].start, e[s].break)
                    }
                    if ("aussie-rules" == t.getSportName()) {
                        const e = {
                                [_.a.FIRST_QRT]: {
                                    start: 0,
                                    break: 0
                                },
                                [_.a.SECOND_QRT]: {
                                    start: 0,
                                    break: 15
                                },
                                [_.a.THIRD_QRT]: {
                                    start: 0,
                                    break: 15
                                },
                                [_.a.FOURTH_QRT]: {
                                    start: 0,
                                    break: 15
                                },
                                [_.a.EXTRATIME]: {
                                    start: 0,
                                    break: 15
                                }
                            },
                            s = t.getStage();
                        if (s in e) return this._computeGameTimeForStageWithBreaks(t, e[s].start, e[s].break)
                    }
                    return null
                }
                _computeGameTime(t) {
                    const e = (this._currentTimestamp - t) / 60;
                    return e < 0 ? 0 : e
                }
                _computeGameTimeFromStartTime(t, e = 0, s = 0) {
                    let _ = this._computeGameTime(t);
                    return _ -= s, _ < e ? e : _
                }
                _computeGameTimeForStageWithBreaks(t, e, s) {
                    if (0 != t.getStageStartUTime()) {
                        return e + this._computeGameTime(t.getStageStartUTime()) + 1
                    }
                    return this._computeGameTimeFromStartTime(t.getStartUTime(), e, s)
                }
                static _is7Rugby(t) {
                    try {
                        return 1 == t.getLeague().getIs7Rugby()
                    } catch (t) {
                        return !1
                    }
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                var e, s, _, i;
                e = t.dic.get("util_date"), s = t.dic.get("dataEventHolderProxy"), _ = t.dic.get("Helper_ReversedSportTime"), i = t.dic.get("Helper_GameTime"), t.Api.loader.get("counterTime").fulfill((t, r) => {
                    const a = s.getHolder();
                    if (a.hasEvent(t)) {
                        const s = a.getItem(t),
                            n = e.getTimestamp();
                        r(new E(n, _, i).getTime(s))
                    } else r(null)
                })
            })
        },
        469: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s) {
                    this._$ = t, this._utilEnviroment = e, this._cyclingJerseys = s
                }
                getHtml(t) {
                    this._cyclingJerseys.setFeedValue(t);
                    const e = this._cyclingJerseys.getItems();
                    if (0 == e.length) return "";
                    const s = [];
                    s.push('<span class="icon-cycling-jersey-group">');
                    for (const t of e) s.push('<span class="icon icon-cycling-jersey icon-cycling-jersey-' + t.getColor() + '" title="' + t.getTitle() + '"></span>');
                    return s.push("</span>"), s.join("")
                }
                delegateTooltips() {
                    const t = this._utilEnviroment.getTooltipObject;
                    this._$(".fs-table, #detail").delegate(".icon-cycling-jersey", "mouseenter", e => {
                        t().show(e.currentTarget, e)
                    }), this._$(".fs-table, #detail").delegate(".icon-cycling-jersey", "mouseleave", e => {
                        t().hide(e.currentTarget)
                    })
                }
            }
            var E = s(155);
            cjs.Api.loader.get("cjs").call(t => {
                const e = cjs.dic.get("util_enviroment");
                ((t, e, s) => {
                    const E = new _(t, e, s);
                    cjs.Api.loader.get("cyclingJerseys").fulfill(t => {
                        t(E)
                    })
                })(jQuery, t.dic.get("util_enviroment"), new E.a(e, t.dic.get("util_trans")))
            })
        },
        470: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s, _) {
                    this._logoDetailWrapper = t, this._windowCloseLinkWrapper = e, this._isMobile = _, this._utilTrans = s
                }
                setReferrer(t) {
                    return this._referrer = t, this
                }
                setLocationPathname(t) {
                    return this._locationPathname = t, this
                }
                getReferrer() {
                    return this._referrer
                }
                getLocationPathname() {
                    return this._locationPathname
                }
                render() {
                    return !!this._eligibleToRender() && (this._hideWindowCloseLink(), this._printIcon(), !0)
                }
                _eligibleToRender() {
                    return this._isMobile && !!this._referrer
                }
                _getIcon() {
                    return `<button class="brand__back" onclick="cjs.Api.loader.get('detail/backButton').call(function(_backButton) {_backButton.goBack(window)})">${this._utilTrans.translate("TRANS_USER_BUTTON_BACK")}</button>`
                }
                _printIcon() {
                    const t = this._logoDetailWrapper.innerHTML;
                    this._logoDetailWrapper.innerHTML = t + this._getIcon()
                }
                _hideWindowCloseLink() {
                    this._windowCloseLinkWrapper.remove()
                }
                goBack(t) {
                    return !!this._referrer && (t.close(), !0)
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s) => {
                    const E = document.querySelector(".brand"),
                        i = document.getElementById("winclose");
                    if (null != E && null != i) {
                        const r = new _(E, i, e, s.isMobile());
                        t.Api.loader.get("detail/backButton").fulfill(t => {
                            t(r)
                        })
                    }
                })(t.dic.get("util_trans"), t.dic.get("util_browser"))
            })
        },
        471: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s) {
                    this._gmtOffset = t, this._isUsTimeFormat = e, this._timestamp2dateGetter = s
                }
                format(t) {
                    const e = t.getElementById("golfHoleStartTime");
                    if (e) {
                        const s = e.closest("td");
                        if (s) {
                            const _ = e.innerHTML;
                            _ && (s.innerHTML = this._timestamp2dateGetter(this._isUsTimeFormat ? "h:i A" : "H:i", parseInt(_), this._gmtOffset), s.classList.add("hole-start-time"), this._removeParTodayContent(t))
                        }
                        e.remove()
                    }
                }
                _removeParTodayContent(t) {
                    const e = t.getElementsByClassName("parToday").item(0);
                    e && (e.innerHTML = "")
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s, E, i) => {
                    e.addEventListener("DOMContentLoaded", () => {
                        t.Api.loader.get("detail/golfStartTimeFormatter").fulfill(() => {
                            new _(s.getGmtOffset(), E.get("app", "US_time_format") || !1, i.timestamp2date).format(e)
                        })
                    })
                })(document, t.Api.timezone, t.Api.config, t.dic.get("util_date"))
            })
        },
        472: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(141);
            class E {
                constructor(t, e, s, _, E) {
                    this.eventId = t, this.parentId = s.isNoDuelTournamentByLeagueId(_.getEventValue(t, "labl_id")) ? E.getLeagueValue(_.getEventValue(t, "labl_id"), s.getFeedIndexes().FSCORE_NODUELINDEXES_NO_DUEL_EVENT_ID) : "", this.eventHolder = _.findEventHolderByEventId(t), this.detailId = this._getDetailId(e)
                }
                getParentId() {
                    return this.parentId
                }
                getDetailId() {
                    return this.detailId
                }
                _getDetailId(t) {
                    return t && this.eventHolder ? this.eventHolder.getEvent(this.eventId).getDetailId() : this._getDetailIdFromEventId()
                }
                _getDetailIdFromEventId() {
                    const t = this.eventId.split(/_/);
                    return t.length >= 3 ? t[2].substr(0, 8) : ""
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s, i, r, a, n, o, S, I) => {
                    t.Api.loader.get("detail/opener").fulfill((t, T, A = !0) => {
                        const l = new E(t, A, i, e, a);
                        (new _.a).setDetailId(l.getDetailId()).setParentId(l.getParentId()).setTabName(T).setUrlPrefix(n.get("app", "url_prefix") || "").setClientStorage(s).setUtilTrans(r).setWidth(n.get("app", "detail", "window_size", "width")).setHeight(n.get("app", "detail", "window_size", "height")).setIsIos(o.isIos()).build().openWindow(S, I)
                    }), t.Api.loader.get("detail/opener/eventId").fulfill((t, e) => {
                        (new _.a).setDetailId(t).setParentId("").setTabName(e).setUrlPrefix(n.get("app", "url_prefix") || "").setClientStorage(s).setUtilTrans(r).setWidth(n.get("app", "detail", "window_size", "width")).setHeight(n.get("app", "detail", "window_size", "height")).setIsIos(o.isIos()).build().openWindow(S, I)
                    })
                })(t.dic.get("dataEventHolderProxy"), t.dic.get("client_storage"), t.dic.get("util_enviroment"), t.dic.get("util_trans"), t.dic.get("dataLeague"), t.Api.config, t.dic.get("util_browser"), window, location)
            })
        },
        473: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e) {
                    this._isLoading = !1, this._callbacks = [], this._config = t, this._environment = e
                }
                resolve(t, e) {
                    if (null != e && this._callbacks.push(e), !this._hasLoadedGeoIP()) return this._loadGeoIp(t);
                    this._runCallbacks()
                }
                getFeedUrl(t) {
                    return `${t.origin}/${this._config.get("cache","feed_x")}/feed/f_`
                }
                getFullFeedCallback(t, e, s, _, E) {
                    const i = this._environment.getUpdater();
                    null != i && null != i.response_full && i.response_full(t, e, s, _, E), this._runCallbacks()
                }
                _runCallbacks() {
                    let t;
                    for (; t = this._callbacks.shift();) t(this._environment.getGlobalGeoIp(), this._environment.getGeoIpIsoSubdivisionCode0())
                }
                _hasLoadedGeoIP() {
                    return !!this._environment.getGlobalGeoIp()
                }
                _loadGeoIp(t) {
                    if (this._isLoading) return;
                    this._isLoading = !0;
                    t.update({}, null, {
                        "X-GeoIP": 1,
                        "X-ClientIP": 1
                    })
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                t.dic.get("DicProxy").onReady(() => {
                    ((e, s, E) => {
                        const i = new _(e, s),
                            r = s.createAjaxFeedObject(i.getFeedUrl(E), i.getFullFeedCallback.bind(i), "headers_hit");
                        t.Api.loader.get("geoIpResolver").fulfill(t => {
                            i.resolve(r, t)
                        })
                    })(t.Api.config, t.dic.get("util_enviroment"), window.location)
                })
            })
        },
        474: function(t, e, s) {
            "use strict";
            s.r(e);
            var _, E = s(184);
            class i {
                getTransKey(t) {
                    return t.replace("%s", "MMA")
                }
            }
            _ = cjs.dic.get("util_trans"), cjs.Api.helperMma = new E.a(_, new i)
        },
        475: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s, _) {
                    this._globalGeoIp = t, this._config = e, this._utilString = s, this._clientStorage = _
                }
                redirect() {
                    if (this._isAllowedGeoIpRedirection()) {
                        this._clientStorage.store("geoip_autoredirect", "1");
                        const t = this._config.geoIpToUrlPartList[this._globalGeoIp] || this._config.geoIpDefaultUrlPart;
                        this._isEmptyPathname() && t && this._redirectToUrlPart(t)
                    }
                    if (this._isAllowedLangComboRedirection()) {
                        const t = this._clientStorage.get("lang_combo_autoredirect") || "",
                            e = this._getLanguageFromPathname();
                        e && e !== t ? this._clientStorage.store("lang_combo_autoredirect", e) : t && this._isEmptyPathname() && this._redirectToUrlPart(t)
                    }
                }
                storeNewLanguage(t) {
                    const e = this._getLanguageByLangComboProjectList(t);
                    e && "--" !== e ? this._clientStorage.store("lang_combo_autoredirect", e) : this._clientStorage.drop("lang_combo_autoredirect")
                }
                _getLanguageFromPathname() {
                    const t = this._utilString.trim(window.location.pathname, "/").split("/");
                    return 1 === t.length ? this._getLanguageByLangComboProjectList(t[0] || "") : ""
                }
                _getLanguageByLangComboProjectList(t) {
                    return this._config.langComboProjectList[t] ? t : ""
                }
                _isEmptyPathname() {
                    return "" === this._utilString.ltrim(window.location.pathname, "/")
                }
                _redirectToUrlPart(t) {
                    this._clientStorage.store_in_session("LS_refresh_count", 0, 60), window.location.pathname = "/" + t + "/"
                }
                _isAllowedGeoIpRedirection() {
                    const t = "1" === this._clientStorage.get("geoip_autoredirect");
                    return this._config.geoIpIsAllowed && !t && this._isDriverAvailable()
                }
                _isAllowedLangComboRedirection() {
                    return this._config.langComboIsAllowed && this._isDriverAvailable()
                }
                _isDriverAvailable() {
                    return this._clientStorage.isDriverAvailable("locStorage") || this._clientStorage.isDriverAvailable("ieUserData") || this._clientStorage.isDriverAvailable("localCookie")
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                var e, s, E;
                e = t.Api.config, s = t.dic.get("util_string"), E = t.dic.get("client_storage"), t.Api.loader.get("geoIpResolver").call(i => {
                    const r = new _(i || "", {
                        geoIpIsAllowed: !1 !== e.get("app", "js_redirect"),
                        geoIpToUrlPartList: e.get("app", "js_redirect", "geoip_to_urlpart") || {},
                        geoIpDefaultUrlPart: e.get("app", "js_redirect", "urlpart") || "",
                        langComboIsAllowed: e.get("app", "lang_combo", "js_redirect") || !1,
                        langComboProjectList: e.get("app", "lang_combo", "project_list") || {}
                    }, s, E);
                    t.Api.loader.get("localizationRedirector").fulfill(t => {
                        t(r)
                    })
                })
            })
        },
        476: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e) {
                    this._sportId = 0, this._requestRate = 0, this._pendingRequest = !1, this._sportId = t, this._feedRequest = e
                }
                init(t, e) {
                    e > 0 && (t !== this._sportId || e !== this._requestRate) && (this._requestRate = e, this._sportId = t, clearInterval(this._timerId), this._pendingRequest = !1, this._timerId = setInterval(() => this._makeRequest(), this._requestRate))
                }
                changeRequestRate(t) {
                    this.init(this._sportId, t)
                }
                _makeRequest() {
                    this._pendingRequest || (this._pendingRequest = this._feedRequest.execute("update", this._sportId, () => this._pendingRequest = !1, {
                        benchmarkRequest: 1
                    }, () => this._pendingRequest = !1))
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                var e;
                e = t.dic.get("util_enviroment"), document.addEventListener("DOMContentLoaded", () => {
                    t.Api.loader.get("benchmark").fulfill((t, s) => {
                        s(new _(t.sportId, e.getFeedRequestObject()))
                    })
                })
            })
        },
        477: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e) {
                    this._INFO_BOX_HTML_ID_SKELETON = "modal-dialog-project-moved-", this._projectMovedConfig = t, this._geoIP = e
                }
                show() {
                    for (const t in this._projectMovedConfig)
                        if (this._geoIP === t) {
                            const t = document.getElementById(`${this._INFO_BOX_HTML_ID_SKELETON}${this._geoIP}`);
                            if (t) {
                                let e;
                                const s = t.querySelectorAll("img[data-lazyloadimage]");
                                for (const t in s) e = s[t], e instanceof HTMLImageElement && e.setAttribute("src", e.dataset.lazyloadimage);
                                t.classList.add("modal-dialog-project-moved--active")
                            }
                        }
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                var e;
                e = t.Api.config.get("app", "project_moved"), t.Api.loader.get("geoIpResolver").call(s => {
                    const E = new _(e, s || "");
                    t.Api.loader.get("projectMoved").fulfill(t => {
                        t(E)
                    })
                })
            })
        },
        478: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s, _, E) {
                    this._utilConfig = t, this._utilEnvironment = e, this._utilTrans = s, this._minScrollHeight = _, this._elementId = E, this._init()
                }
                _init() {
                    const t = document.getElementsByClassName("container").item(0);
                    if (t) {
                        const e = this;
                        t.appendChild(this.getHtmlElement()), window.addEventListener("scroll", this.getHandlerOnScroll()), window.addEventListener("touchmove", this.getHandlerOnScroll()), document.querySelectorAll("a[href='#top']").forEach((function(t) {
                            t.addEventListener("click", e.getHandlerOnClick())
                        }))
                    }
                }
                getTitle() {
                    return this._utilTrans.translate("TRANS_FOOTER_TOP_ARROW") || ""
                }
                getHtmlElement() {
                    if (!this._scrollTopHtmlElement) {
                        const t = document.createElement("span");
                        t.innerHTML = this.getTitle(), this._scrollTopHtmlElement = document.createElement("div"), this._scrollTopHtmlElement.id = this._elementId, this._scrollTopHtmlElement.appendChild(t), this._scrollTopHtmlElement.setAttribute("style", "display: none;"), this._scrollTopHtmlElement.addEventListener("click", this.getHandlerOnClick())
                    }
                    return this._scrollTopHtmlElement
                }
                getHandlerOnClick() {
                    return t => {
                        var e;
                        t.preventDefault(), null === (e = this._utilEnvironment.getEventTrackingObject()) || void 0 === e || e.track_over("navigation", this._elementId);
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                }
                getHandlerOnScroll() {
                    return () => {
                        this.getHtmlElement().style.display = window.pageYOffset < this._minScrollHeight ? "none" : "block"
                    }
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s, E, i) => {
                    e.addEventListener("DOMContentLoaded", () => {
                        const e = new _(s, E, i, 300, "scroll-to-top");
                        t.Api.loader.get("scrollToTop").fulfill(t => {
                            t(e)
                        })
                    })
                })(document, cjs.Api.config, cjs.dic.get("util_enviroment"), cjs.dic.get("util_trans"))
            })
        },
        479: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e = null) {
                    this._valuesToRowsMap = {}, this._doc = t, this._loader = e
                }
                prepare(t, e, s = null) {
                    const _ = t.box.querySelector(".glib-stats-filter");
                    if (!_) return;
                    if (this._selects = _.querySelectorAll(".filter__select[name]"), this._tbody = t.box.querySelector(".table .table__body"), !this._tbody) return;
                    if (this._noResultsText = _.dataset.noResultsText, this._rowsVisible = this._tbody.querySelectorAll('.table__row:not([style*="display:none"])').length, this._selects.length > 0) {
                        this._allRows = this._tbody.querySelectorAll(".table__row");
                        let t = 0;
                        this._allRows.forEach(e => {
                            const s = e.classList;
                            s && s.contains("hidden") || t++
                        }), this._tbody.dataset.visibleRows = t.toString();
                        const e = this;
                        this._selects.forEach(t => {
                            if (!1 === e.initList(t)) {
                                const e = t.parentElement;
                                e && e.remove()
                            }
                        })
                    }
                    let E = !1;
                    if (null != e)
                        for (const t in e) {
                            const s = e[t];
                            if (void 0 !== this._selects[s.select]) {
                                const t = this._selects[s.select];
                                t.options.selectedIndex = s.option, t.options[s.option].selected = !0, E = !0
                            }
                        }
                    null != s && (this._tbody.dataset.visibleRows = s.toString(), E = !0), E && this._filterChanged()
                }
                initList(t) {
                    const e = [],
                        s = {},
                        _ = {},
                        E = t.getAttribute("name"),
                        i = null !== E ? E : "",
                        r = !!t.dataset.isVirtual,
                        a = {},
                        n = this;
                    if (r) this._allRows.forEach(t => {
                        const e = t;
                        let E = e.getAttribute("data-virtual-" + i);
                        if (!E) return;
                        const r = e.getAttribute("data-virtual-" + i + "-choice-order"),
                            o = null !== r ? parseInt(r) : 0,
                            S = e.getAttribute("data-nationality-id"),
                            I = null !== S ? parseInt(S) : 0;
                        E = n._processValue(i, E), a[E] || (a[E] = [], o && (_[E] = o)), a[E].push(e), s[E] = I
                    });
                    else if (this._tbody) {
                        const t = this._tbody.querySelectorAll(".table__row .table__cell.table__cell--" + i);
                        if (!t.length) return !1;
                        const e = this._getNodeIndex(t.item(0)) + 1,
                            s = this._tbody.querySelectorAll(".table__row .table__cell:nth-child(" + e + ")");
                        s && s.forEach(t => {
                            let e = t.innerText || t.textContent;
                            return !e || (e = e.replace(/^\s+|\s+$/g, ""), e = n._processValue(i, e), e && (a[e] || (a[e] = []), a[e].push(t.parentNode)), !0)
                        })
                    }
                    if (this._valuesToRowsMap[t.name] = a, 0 === Object.keys(a).length) return !1;
                    for (const t in a) e.push(t);
                    0 === Object.keys(_).length ? e.sort(this._alphaSort) : e.sort((t, e) => _[t] < _[e] ? -1 : 1);
                    for (const s in e) {
                        const _ = this._doc.createElement("option");
                        _.value = e[s], _.text = e[s], t.append(_)
                    }
                    return t.addEventListener("change", () => {
                        n._filterChanged()
                    }), !0
                }
                getRowsVisible() {
                    const t = this._tbody ? this._tbody.getAttribute("visible-rows") : null;
                    return (null !== t ? parseInt(t) : 0) || this._rowsVisible
                }
                _filterChanged() {
                    let t = !0,
                        e = this._allRows;
                    var s;
                    if (this._allRows.forEach(t => {
                            t.classList.add("filtered-out")
                        }), this._selects.forEach((s = this, (_, E) => {
                            const i = _.options[_.selectedIndex].value;
                            if (_.name in s._valuesToRowsMap) {
                                const E = s._valuesToRowsMap[_.name];
                                i in E && (e = Array.prototype.filter.call(e, t => {
                                    let e = !1;
                                    return E[i].forEach(s => {
                                        e = e || s === t
                                    }), e
                                }), t = !1)
                            }
                        })), this._noResultsTFoot && (this._noResultsTFoot.style.display = "none"), t) {
                        this._allRows.forEach(t => {
                            const e = t.classList;
                            e.remove("filtered-out"), e.remove("hidden")
                        });
                        const t = this._tbody ? this._tbody.dataset.visibleRows : void 0;
                        t && (this._rowsVisible = parseInt(t)), this._allRows.forEach((t => (e, s) => {
                            s >= t._rowsVisible && e.classList.add("hidden")
                        })(this))
                    } else e.forEach(t => {
                        const e = t.classList;
                        e.remove("filtered-out"), e.remove("hidden")
                    }), e.length || this._showNoResultsTFoot();
                    if (this._loader && this._tbody) {
                        const t = this;
                        this._loader.get("tableSort").call({}, e => {
                            e.toggleShowMore(t._tbody)
                        })
                    }
                }
                _showNoResultsTFoot() {
                    if (!this._noResultsTFoot) {
                        const t = this._noResultsText ? this._noResultsText : "";
                        if (this._noResultsTFoot = this._doc.createElement("div"), this._noResultsTFoot.classList.add("table__foot"), this._noResultsTFoot.innerText = t, this._tbody) {
                            const t = this._tbody.parentNode;
                            t && t.insertBefore(this._noResultsTFoot, this._tbody.nextSibling)
                        }
                    }
                    this._noResultsTFoot && (this._noResultsTFoot.style.display = "block")
                }
                _processValue(t, e) {
                    if ("team_name" === t) {
                        const t = e.indexOf(" (");
                        if (-1 !== t) return e.substring(0, t)
                    }
                    return e
                }
                _alphaSort(t, e) {
                    return t.localeCompare(e)
                }
                _getNodeIndex(t, e = "") {
                    const s = t.parentNode;
                    if (s) {
                        const _ = s.children;
                        let E = 0;
                        for (let s = 0, i = _.length; s < i; s++) {
                            if (_[s] == t) return E;
                            (!e || e && _[s].matches(e)) && E++
                        }
                    }
                    return -1
                }
            }
            var E, i;
            E = document, i = cjs.Api.loader, $(() => {
                const t = {};
                i.get("tableFilter").fulfill((e, s) => {
                    !e.reinit && e.id in t || (t[e.id] = new _(E, i)), s(t[e.id])
                })
            })
        },
        480: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s, _, E) {
                    this._timeFormat = "", this._timezoneNameList = [], this._showGreenwichMeanTime = !0, this._timezone = t, this._utilConfig = e, this._utilDate = s, this._utilEnvironment = _, this._clientStorage = E, this._timeFormat = this._utilConfig.get("app", "US_time_format") ? "M d, h:i A" : "d.m. H:i", this._prepareTimezoneNameList()
                }
                init(t) {
                    if (!this._timezoneListElement) {
                        const e = t.querySelector("#tzcontentenv");
                        e && (e.innerHTML = "", this._timezoneListElement = document.createElement("ul"), this._timezoneListElement.id = "tzcontent", e.appendChild(this._timezoneListElement))
                    }
                    if (!this._timezoneActualElement) {
                        const e = t.querySelector("#tzactual");
                        e && (e.innerHTML = "", this._timezoneActualElement = e, this._timezoneActualElement.parentElement && this._timezoneActualElement.parentElement.addEventListener("click", this._getTimezoneActualHandlerOnClick()))
                    }
                    this._redrawTimezones(), setInterval(() => this._redrawTimezones(), 2e3)
                }
                _prepareTimezoneNameList() {
                    const t = this._utilConfig.get("timezone", "name_list") || [];
                    for (const e in t) this._timezoneNameList[this._timezone.getIsDaylightSavingTime() ? parseFloat(e) + 1 : parseFloat(e)] = t[e], this._showGreenwichMeanTime = !1
                }
                _getTimezoneSuffix(t) {
                    return this._showGreenwichMeanTime ? ", GMT" + (t < 0 ? "" : "+") + t : this._timezoneNameList[t] ? ", " + this._timezoneNameList[t] : ""
                }
                _getTimezoneString(t) {
                    return this._utilDate.timestamp2date(this._timeFormat, this._utilDate.getTimestamp(), 3600 * t * -1) + this._getTimezoneSuffix(t)
                }
                _toggleTimezoneList() {
                    this._timezoneListElement.classList.contains("active-display") ? (this._timezoneListElement.classList.add("active-hide"), this._timezoneListElement.classList.remove("active-display")) : (this._timezoneListElement.classList.add("active-display"), this._timezoneListElement.classList.remove("active-hide"))
                }
                _setNewActualTimezone(t) {
                    this._timezone.getActualTimezone() !== t && (this._timezone.setActualTimezone(t), this._clientStorage.store("ts_tz", t, 31104e3), this._utilEnvironment.changeTzCallback())
                }
                _getTimezoneActualHandlerOnClick() {
                    return t => {
                        t.preventDefault(), this._redrawTimezones(), this._toggleTimezoneList()
                    }
                }
                _getTimezoneListHandlerOnClick(t) {
                    return e => {
                        e.preventDefault(), this._setNewActualTimezone(t), this._redrawTimezones(), this._toggleTimezoneList()
                    }
                }
                _redrawTimezones() {
                    if (this._timezoneListElement) {
                        this._timezoneListElement.innerHTML = "";
                        for (const t of this._timezone.getTimezoneList()) {
                            const e = document.createElement("a");
                            e.innerHTML = this._getTimezoneString(t), e.setAttribute("href", "#"), t === this._timezone.getActualTimezone() && e.classList.add("active"), t === this._timezone.getDefaultTimezone() && e.classList.add("tzdefault");
                            const s = document.createElement("li");
                            s.append(e), s.addEventListener("click", this._getTimezoneListHandlerOnClick(t)), this._timezoneListElement.append(s)
                        }
                    }
                    if (this._timezoneActualElement) {
                        this._getTimezoneString(this._timezone.getActualTimezone()) !== this._timezoneActualElement.innerHTML && (this._timezoneActualElement.innerHTML = this._getTimezoneString(this._timezone.getActualTimezone()))
                    }
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((e, s, E, i, r, a) => {
                    e.addEventListener("DOMContentLoaded", () => {
                        const e = new _(s, E, i, r, a);
                        t.Api.loader.get("timezoneSwitcher").fulfill(t => {
                            t(e)
                        })
                    })
                })(document, window.cjs.Api.timezone, t.Api.config, t.dic.get("util_date"), t.dic.get("util_enviroment"), t.dic.get("client_storage"))
            })
        },
        481: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = s(171),
                E = s(26),
                i = s(208),
                r = s(90),
                a = s(22);
            class n {
                constructor(t, e) {
                    this.storageChannels = t, this.eventChannels = e, this.channels = [], this.defaultChannel = (new a.a).build()
                }
                getFilled() {
                    return this.eventChannels.forEach(t => {
                        const e = this.getStorageChannelById(t.getId());
                        if (t.getIsActive() && e) {
                            const s = (new a.a).setId(t.getId()).setStreamTypeId(t.getSteamTypeId()).setIsPurchasable(t.getIsPurchasable()).setIsActive(t.getIsActive()).setIsFree(e.isFree).setBundleUuid(e.bundleUuid).build();
                            e.bundleUuid === t.getDefaultBundleUuid() && (this.defaultChannel = s), this.channels.push(s)
                        }
                    }), (new r.a).setChannel(this.defaultChannel).setDefaultBundleUuid(this.defaultChannel.getBundleUuid()).setEventChannels(this.channels).build()
                }
                getStorageChannelById(t) {
                    return this.storageChannels[t]
                }
            }(t => {
                const e = new i.a(t);
                cjs.Api.loader.get("tv/channelsFeedParser").fulfill((t, s) => {
                    const i = new _.a;
                    E.a.parse(i, t), s(new n(e.getChannels(), i.getParsedModel().getChannels()).getFilled())
                })
            })(window.localStorage)
        },
        482: function(t, e, s) {
            "use strict";
            s.r(e);
            var _ = function(t, e, s, _) {
                return new(s || (s = Promise))((function(E, i) {
                    function r(t) {
                        try {
                            n(_.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function a(t) {
                        try {
                            n(_.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function n(t) {
                        var e;
                        t.done ? E(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(r, a)
                    }
                    n((_ = _.apply(t, e || [])).next())
                }))
            };
            class E {
                constructor(t, e) {
                    this.storageHandler = t, this.fetcher = e
                }
                store() {
                    return _(this, void 0, void 0, (function*() {
                        let t, e = [];
                        this.storageHandler.isSyncNeeded() && (t = yield this.fetcher.fetch(), (t.getChannels() || []).forEach(t => {
                            e = Object.assign({
                                [t.getId()]: {
                                    isFree: t.getIsFree(),
                                    bundleUuid: t.getBundleUuid()
                                }
                            }, e)
                        }), this.storageHandler.setChannels(e, (new Date).getTime()))
                    }))
                }
            }
            var i = s(23),
                r = s(60),
                a = s(111),
                n = s(208),
                o = function(t, e, s, _) {
                    return new(s || (s = Promise))((function(E, i) {
                        function r(t) {
                            try {
                                n(_.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                n(_.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function n(t) {
                            var e;
                            t.done ? E(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                t(e)
                            }))).then(r, a)
                        }
                        n((_ = _.apply(t, e || [])).next())
                    }))
                };
            ((t, e, s) => {
                const _ = new i.a("tv_b", new r.a(e.get("app", "feed_sign"), s.fetch(), ""), new a.a),
                    S = new E(new n.a(t), _);
                cjs.Api.loader.get("tv/channelsStorage").fulfill(() => o(void 0, void 0, void 0, (function*() {
                    yield S.store()
                })))
            })(window.localStorage, cjs.Api.config, cjs.dic.get("Fetch_Proxy"))
        },
        483: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s, _, E) {
                    this._htmlTemplate = t, this._htmlTemplateName = e, this._leagueItem = s, this._startTimeFormatter = _, this._sportId = E
                }
                getItems() {
                    return this._leagueItem.getUpcomingDraw()
                }
                render() {
                    const t = this.getItems();
                    return null === t || 0 === t.length ? "" : this._htmlTemplate.render(this._htmlTemplateName, this._createHtmlTemplateData())
                }
                _createHtmlTemplateData() {
                    const t = {
                            rows: []
                        },
                        e = this.getItems();
                    if (null === e || 0 === e.length) return "";
                    for (const s of e) {
                        const e = {
                            round_name: s.getRoundName(),
                            start_times: this._startTimeFormatter.format(this._sportId, s.getEventsStartTime(), !1),
                            is_final: s.isFinal()
                        };
                        t.rows.push(e)
                    }
                    return t
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                var e, E, i;
                e = t.dic.get("util_date"), E = t.dic.get("util_enviroment"), i = t.Api.config.get("app", "US_time_format"), s.e(3).then(s.bind(null, 551)).then(({
                    default: s
                }) => {
                    const r = new s(e, E, i);
                    t.Api.loader.get("upcomingDrawFormatter").fulfill(t => {
                        t(r)
                    }), ((e, s) => {
                        const i = E.getHtmlTemplate().TPL_COMPONENTS_UPCOMING_DRAW;
                        t.Api.loader.get("upcomingDraw").fulfill((t, E) => {
                            E(new _(e, i, t.leagueItem, s, t.sportId).render())
                        })
                    })(t.dic.get("HtmlTemplate"), r)
                })
            })
        },
        484: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s, _) {
                    this._$ = t, this._projectId = e, this._statsEnabled = s, this._adBlockedStatsUrl = _
                }
                save(t, e) {
                    if (!this._statsEnabled) return;
                    if (!this._adBlockedStatsUrl) return;
                    const s = {
                        blocked: t ? 1 : 0,
                        browserName: this._getBrowserName(e),
                        projectId: this._projectId
                    };
                    this._$.ajax({
                        url: location.protocol + "//" + this._adBlockedStatsUrl,
                        data: s,
                        dataType: "jsonp",
                        jsonpCallback: "jsonp_cb"
                    })
                }
                _getBrowserName(t) {
                    let e = "unknown";
                    if (!t) return e;
                    for (const s in t)["msie", "chrome", "mozilla", "opera", "safari"].includes(s) && t[s] && (e = s);
                    return e
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((t, e) => {
                    const s = new _(t, e.get("app", "project", "id"), e.get("app", "fs_stats", "enable"), e.get("app", "fs_stats", "url", "adblocked"));
                    cjs.Api.loader.get("util/adblocked").fulfill(t => {
                        t(s)
                    })
                })(jQuery, t.Api.config)
            })
        },
        485: function(t, e, s) {
            "use strict";
            s.r(e);
            (t => {
                cjs.Api.loader.get("util/advert/cleaner").fulfill(() => {
                    (class {
                        static cleanSpacers(t) {
                            t.querySelectorAll(".adsenvelope").forEach(t => {
                                const e = t.parentNode;
                                if (null != e) {
                                    if (-1 !== (t.getAttribute("style") || "").indexOf("display: none")) {
                                        const s = t.previousElementSibling;
                                        if (null != s && s.classList.contains("spacer10")) {
                                            const _ = s.previousElementSibling;
                                            if (null != _) {
                                                const E = _.firstElementChild;
                                                if (null != E && E.classList.contains("tournament-menu")) {
                                                    e.removeChild(s);
                                                    const _ = t.previousElementSibling;
                                                    null != _ && _.classList.contains("mbox0px") && _.setAttribute("style", "border-bottom: none !important")
                                                }
                                            }
                                        }
                                    }
                                }
                            })
                        }
                    }).cleanSpacers(t)
                })
            })(document)
        },
        486: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s) {
                    this._reload = !1, this.EVERY_10_SECONDS = 1e4, this._environment = t, this._utilDate = e, this._loader = s, this._initializeInterval()
                }
                disableReload() {
                    this._reload = !1
                }
                _initializeInterval() {
                    this._tryReloadOnMidnight(), setInterval(() => {
                        this._tryReloadOnMidnight()
                    }, this.EVERY_10_SECONDS)
                }
                _getMidnightTimestamp() {
                    const t = this._utilDate.getTimestamp(),
                        e = this._environment.getGmtOffsetDiff(),
                        s = new Date(1e3 * (t - e));
                    return new Date(s.getFullYear(), s.getMonth(), s.getDate(), 0, 0, 0).getTime() / 1e3
                }
                _tryReloadOnMidnight() {
                    if (0 == this._environment.getSudate()) {
                        const t = this._getMidnightTimestamp();
                        if (this._reload || this._lastMidnightTimestamp && this._lastMidnightTimestamp != t) {
                            this._reload = !0;
                            const t = this._environment.getUpdater();
                            t && t.doc_update(), this._loader.get("react").call(t => t.reloadOnDayChange())
                        }
                        this._lastMidnightTimestamp = t
                    }
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                ((t, e) => {
                    const s = new _(t, e, cjs.Api.loader);
                    cjs.Api.loader.get("util/midnightLiveTableRefresh").fulfill(t => {
                        t(s)
                    })
                })(t.dic.get("util_enviroment"), t.dic.get("util_date"))
            })
        },
        487: function(t, e, s) {
            "use strict";
            s.r(e), ((t, e, s) => {
                cjs.Api.loader.get("util/scroll").fulfill(() => {
                    ! function(t, e, s) {
                        const _ = e.location.hash;
                        if (_) {
                            const E = _.substring(1),
                                i = t.getElementById(E);
                            i && (i.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            }), s.pushState("", t.title, e.location.pathname + e.location.search))
                        }
                    }(t, e, s)
                })
            })(document, window, history)
        },
        489: function(t, e, s) {
            "use strict";
            s.r(e);
            class _ {
                constructor(t, e, s, _, E, i, r) {
                    this._myGamesWrapper = t, this._eventId = e, this._sportId = s, this._tooltipObject = _, this._myGames = E, this._utilTrans = i, this._dataEventHolderProxy = r
                }
                render() {
                    this._printIcon(), this._delegateTooltip(), this._delegateToggle()
                }
                addEventToDataHolder(t, e, s, _, E, i) {
                    const r = this._dataEventHolderProxy.getHolder().getOrCreateNewEvent(this._getEventKey());
                    r.reinit(E(t)), r.setValue("original_id", this._eventId), r.setValue("labl_id", `${this._sportId}_${e}`), r.setValue("sport_id", this._sportId), r.setValue("sport", t), r.setValue(i.SHAREDINDEXES_MATCH_START_UTIME, s), r.setValue(i.SHAREDINDEXES_MATCH_END_UTIME, _)
                }
                _getIcon() {
                    const t = this._myGames.check(this._getEventKey());
                    return `<span class="toggleMyGames${t?" active":""}" title="${t?this._utilTrans.translate("TRANS_MY_GAMES_REMOVE"):this._utilTrans.translate("TRANS_MY_GAMES_ADD")}"></span>`
                }
                _printIcon() {
                    this._myGamesWrapper.innerHTML = this._getIcon()
                }
                _delegateTooltip() {
                    this._myGamesWrapper.firstChild.addEventListener("mouseenter", t => {
                        this._tooltipObject.show(t.currentTarget, t, !0)
                    }), this._myGamesWrapper.firstChild.addEventListener("mouseleave", t => {
                        this._tooltipObject.hide(t.currentTarget, t, !0)
                    })
                }
                _delegateToggle() {
                    this._myGamesWrapper.firstChild.addEventListener("click", () => {
                        this._myGames.toggle(this._getEventKey()), this.render()
                    })
                }
                _getEventKey() {
                    return `g_${this._sportId}_${this._eventId}`
                }
            }
            cjs.Api.loader.get("cjs").call(t => {
                var e, s, E;
                e = t.dic.get("util_enviroment"), s = t.dic.get("util_trans"), E = t.dic.get("dataEventHolderProxy"), t.Api.loader.get("myGames/toggleIcon").fulfill(i => {
                    const r = document.querySelector("#toMyGames");
                    null != r && i(new _(r, t.eventId, window.sport_id, e.getTooltipObject(), e.getMyGamesObject(), s, E))
                })
            })
        },
        49: function(t, e, s) {
            "use strict";

            function _(t) {
                if (null === t) return 0;
                return t.getBoundingClientRect().width
            }
            s.d(e, "e", (function() {
                return i
            })), s.d(e, "c", (function() {
                return r
            })), s.d(e, "f", (function() {
                return a
            })), s.d(e, "d", (function() {
                return n
            })), s.d(e, "b", (function() {
                return o
            })), s.d(e, "a", (function() {
                return S
            }));
            const E = "table__resolver--marked",
                i = "displayTable";

            function r() {
                const t = document.body.classList,
                    e = document.querySelectorAll(".table");
                e.forEach(t => t.classList.remove("table--flex")), t.contains("soccer") && document.querySelectorAll(".table__cell--losses_pen").length || t.contains("beach-soccer") && document.querySelectorAll(".table__cell--wins_ot").length || t.contains("american-football") && document.querySelectorAll(".table__cell--wins_ot").length || t.contains("hockey") && document.querySelectorAll(".table__cell--wins_ot").length || t.contains("field-hockey") && document.querySelectorAll(".table__cell--wins_ot").length || t.contains("floorball") && document.querySelectorAll(".table__cell--wins_pen").length && document.querySelectorAll(".table__cell--wins_ot").length || t.contains("futsal") && document.querySelectorAll(".table__cell--wins_ot").length || t.contains("handball") && document.querySelectorAll(".table__cell--wins_pen").length || t.contains("rugby-league") && document.querySelectorAll(".table__cell--draws").length || t.contains("cricket") && document.querySelectorAll(".table__cell--no_result").length && document.querySelectorAll(".table__cell--draws").length || t.contains("baseball") && document.querySelectorAll(".table__cell--draws").length || t.contains("kabaddi") && document.querySelectorAll(".table__cell--points").length || t.contains("pesapallo") && document.querySelectorAll(".table__cell--count_3_point").length || t.contains("water-polo") && document.querySelectorAll(".table__cell--wins_ot").length || t.contains("netball") && document.querySelectorAll(".table__cell--wins_ot").length || t.contains("darts") && document.querySelectorAll(".table__cell--draws").length || t.contains("basketball") && document.querySelectorAll(".table__cell--winning_percentage").length || t.contains("basketball") && document.querySelectorAll(".table__cell--points").length ? e.forEach(t => {
                    t.classList.add("table--advanced")
                }) : t.contains("floorball") && document.querySelectorAll(".table__cell--draws").length && 0 === document.querySelectorAll(".table__cell--wins_ot").length ? e.forEach(t => {
                    t.classList.add("table--florbal-deuce")
                }) : t.contains("floorball") && document.querySelectorAll(".table__cell--draws").length && document.querySelectorAll(".table__cell--wins_ot").length ? e.forEach(t => {
                    t.classList.add("table--florbal-deuce_ot")
                }) : t.contains("floorball") && document.querySelectorAll(".table__cell--wins_pen").length && 0 === document.querySelectorAll(".table__cell--wins_ot").length ? e.forEach(t => {
                    t.classList.add("table--florbal-wins_pen")
                }) : t.contains("handball") && document.querySelectorAll(".table__cell--wins_ot").length ? e.forEach(t => {
                    t.classList.add("table--handball-ot")
                }) : t.contains("field-hockey") && document.querySelectorAll(".table__cell--draws").length ? e.forEach(t => {
                    t.classList.add("table--field-deuce")
                }) : t.contains("netball") && document.querySelectorAll(".table__cell--draws").length ? e.forEach(t => {
                    t.classList.add("table--netball-deuce")
                }) : t.contains("basketball") && document.querySelectorAll(".table__cell--wins_ot").length ? e.forEach(t => {
                    t.classList.add("table--basketball_ot")
                }) : t.contains("cricket") && document.querySelectorAll(".table__cell--net_rr").length && document.querySelectorAll(".table__cell--draws").length ? e.forEach(t => {
                    t.classList.add("table--cricket-draws")
                }) : t.contains("cricket") && document.querySelectorAll(".table__cell--net_rr").length && document.querySelectorAll(".table__cell--no_result").length ? e.forEach(t => {
                    t.classList.add("table--cricket-no_result")
                }) : t.contains("cricket") && 0 === document.querySelectorAll(".table__cell--draws").length && document.querySelectorAll(".table__cell--no_result").length ? e.forEach(t => {
                    t.classList.add("table--cricket-no_result_only")
                }) : t.contains("water-polo") && document.querySelectorAll(".table__cell--wins_pen").length ? e.forEach(t => {
                    t.classList.add("table--water-wins_pen")
                }) : t.contains("american-football") && document.querySelectorAll(".table__cell--draws").length && 0 === document.querySelectorAll(".table__cell--wins_ot").length ? e.forEach(t => {
                    t.classList.add("table--american_draws")
                }) : e.forEach(t => {
                    t.classList.add("table--normal")
                })
            }

            function a() {
                let t = !1;
                return document.querySelectorAll(".table").forEach(e => {
                    e.classList.remove("table--mobile"), _(e) < _(e.querySelector(".table__header")) ? (t = !0, e.classList.contains("table--flex") ? (e.classList.add("table--scroll"), e.classList.remove("table--mobile")) : (e.classList.add("table--mobile"), e.classList.remove("table--scroll"))) : e.classList.remove("table--scroll")
                }), t
            }

            function n(t) {
                const e = document.querySelectorAll(".table__resolverContainer"),
                    s = document.querySelectorAll('div[class^="glib-stats-box-top_"] .table, div[class^="glib-stats-box-over_under"] .table, div[class^="glib-stats-box-ht_ft"] .table');
                t ? (e.forEach(t => t.classList.add("table__resolverContainer--open")), s.forEach(t => {
                    t && (t.classList.add("table--scroll", "table--flex"), t.classList.remove("table--mobile"))
                })) : (e.forEach(t => t.classList.remove("table__resolverContainer--open")), s.forEach(t => {
                    t && (t.classList.add("table--flex"), t.classList.remove("table--scroll", "table--mobile"))
                }))
            }

            function o(t) {
                const e = document.querySelectorAll(".table"),
                    s = document.querySelectorAll(".table__resolver--grid"),
                    _ = document.querySelectorAll(".table__resolver--flex");
                t ? (e.forEach(t => t.classList.remove("table--flex")), s.forEach(t => t.classList.add(E)), _.forEach(t => t.classList.remove(E))) : (e.forEach(t => t.classList.add("table--flex")), s.forEach(t => t.classList.remove(E)), _.forEach(t => t.classList.add(E)))
            }

            function S(t, e, s) {
                const _ = t.classList.contains("table__resolver--flex");
                o(!_), _ ? e.drop(i) : e.store(i, "grid"), s()
            }
        },
        5: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })),
                function(t) {
                    t[t.MIXED = -1] = "MIXED", t[t.SOCCER = 1] = "SOCCER", t[t.TENNIS = 2] = "TENNIS", t[t.BASKETBALL = 3] = "BASKETBALL", t[t.HOCKEY = 4] = "HOCKEY", t[t.AMERICAN_FOOTBALL = 5] = "AMERICAN_FOOTBALL", t[t.BASEBALL = 6] = "BASEBALL", t[t.HANDBALL = 7] = "HANDBALL", t[t.RUGBY_UNION = 8] = "RUGBY_UNION", t[t.FLOORBALL = 9] = "FLOORBALL", t[t.BANDY = 10] = "BANDY", t[t.FUTSAL = 11] = "FUTSAL", t[t.VOLLEYBALL = 12] = "VOLLEYBALL", t[t.CRICKET = 13] = "CRICKET", t[t.DARTS = 14] = "DARTS", t[t.SNOOKER = 15] = "SNOOKER", t[t.BOXING = 16] = "BOXING", t[t.BEACH_VOLLEYBALL = 17] = "BEACH_VOLLEYBALL", t[t.AUSSIE_RULES = 18] = "AUSSIE_RULES", t[t.RUGBY_LEAGUE = 19] = "RUGBY_LEAGUE", t[t.BADMINTON = 21] = "BADMINTON", t[t.WATER_POLO = 22] = "WATER_POLO", t[t.FIELD_HOCKEY = 24] = "FIELD_HOCKEY", t[t.TABLE_TENNIS = 25] = "TABLE_TENNIS", t[t.BEACH_SOCCER = 26] = "BEACH_SOCCER", t[t.MMA = 28] = "MMA", t[t.NETBALL = 29] = "NETBALL", t[t.PESAPALLO = 30] = "PESAPALLO", t[t.GOLF = 23] = "GOLF", t[t.MOTORSPORT = 31] = "MOTORSPORT", t[t.MOTORSPORT_AUTO_RACING = 32] = "MOTORSPORT_AUTO_RACING", t[t.MOTORSPORT_MOTO_RACING = 33] = "MOTORSPORT_MOTO_RACING", t[t.CYCLING = 34] = "CYCLING", t[t.HORSE_RACING = 35] = "HORSE_RACING", t[t.ESPORTS = 36] = "ESPORTS", t[t.WINTER_SPORTS = 37] = "WINTER_SPORTS", t[t.WINTER_SPORTS_SKI_JUMPING = 38] = "WINTER_SPORTS_SKI_JUMPING", t[t.WINTER_SPORTS_ALPINE_SKIING = 39] = "WINTER_SPORTS_ALPINE_SKIING", t[t.WINTER_SPORTS_CROSS_COUNTRY = 40] = "WINTER_SPORTS_CROSS_COUNTRY", t[t.WINTER_SPORTS_BIATHLON = 41] = "WINTER_SPORTS_BIATHLON", t[t.KABADDI = 42] = "KABADDI"
                }(_ || (_ = {}))
        },
        53: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return _
            }));
            class _ {
                static createParams(t) {
                    return t.length ? "?" + t.map(this.createParameter).join("&") : ""
                }
                static createParameter(t) {
                    return `${t.key}=${t.value}`
                }
            }
        },
        54: function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return _
            })), s.d(e, "d", (function() {
                return E
            })), s.d(e, "c", (function() {
                return i
            })), s.d(e, "e", (function() {
                return r
            })), s.d(e, "a", (function() {
                return a
            }));
            const _ = "theme",
                E = "default",
                i = "dark",
                r = "theme--dark";
            class a {
                constructor() {
                    this.preferredDarkModeBasedOnBrowser = !1, this.isDefaultTheme = !0, this.userDefinedTheme = null
                }
                beforeLoad(t, e) {
                    if (this.preferredDarkModeBasedOnBrowser = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches, this.userDefinedTheme = window.localStorage.getItem(_), window.originalHash = e || window.location.hash, window.originalHash.startsWith("#theme-")) {
                        const t = window.originalHash.substring(7);
                        switch (t) {
                            case E:
                            case i:
                                this.userDefinedTheme = t
                        }
                    }
                    this.isDefaultTheme = this.userDefinedTheme == E, this.isDefaultTheme || (this.isDefaultTheme = !this.preferredDarkModeBasedOnBrowser && this.userDefinedTheme !== i), t(this.isDefaultTheme)
                }
                getPreferredDarkModeBasedOnBrowser() {
                    return this.preferredDarkModeBasedOnBrowser
                }
                isDarkModeEnabled() {
                    return !this.isDefaultTheme
                }
                isUserDefinedTheme() {
                    return !!this.userDefinedTheme
                }
            }
        },
        57: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })), s.d(e, "b", (function() {
                    return E
                })),
                function(t) {
                    t.UP = "u", t.DOWN = "d"
                }(_ || (_ = {}));
            class E {
                constructor(t, e = null, s = null) {
                    this.value = t, this.prevValue = e, this.arrow = s
                }
                getValue() {
                    return this.value
                }
                getPrevValue() {
                    return this.prevValue
                }
                getArrow() {
                    return this.arrow
                }
            }
        },
        60: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return r
            }));
            var _ = s(44),
                E = function(t, e, s, _) {
                    return new(s || (s = Promise))((function(E, i) {
                        function r(t) {
                            try {
                                n(_.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function a(t) {
                            try {
                                n(_.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function n(t) {
                            var e;
                            t.done ? E(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                t(e)
                            }))).then(r, a)
                        }
                        n((_ = _.apply(t, e || [])).next())
                    }))
                };
            class i extends _.b {
                constructor(t) {
                    super(), this.body = t
                }
                getBody() {
                    return this.body
                }
            }
            class r extends _.a {
                constructor(t, e, s) {
                    super(t, e, s), this.resolveFetchedData = t => E(this, void 0, void 0, (function*() {
                        return new i(yield t.text())
                    }))
                }
            }
        },
        63: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return _
            })), s.d(e, "b", (function() {
                return E
            }));
            class _ {
                constructor(t, e) {
                    this.tabs = t, this.content = e
                }
                getTabs() {
                    return this.tabs
                }
                getContent() {
                    return this.content
                }
            }
            class E {
                constructor() {
                    this.tabs = [], this.content = []
                }
                addTab(t) {
                    return this.tabs.push(t), this
                }
                addSubTabOrContent(t) {
                    return this.content.push(t), this
                }
                build() {
                    return new _(this.tabs, this.content)
                }
            }
        },
        7: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })),
                function(t) {
                    t[t.NONE = -1] = "NONE", t[t.RANK = 1] = "RANK", t[t.POINTS = 2] = "POINTS", t[t.JUMP_ROUND_1 = 3] = "JUMP_ROUND_1", t[t.JUMP_ROUND_2 = 4] = "JUMP_ROUND_2", t[t.TIME = 5] = "TIME", t[t.GAP = 6] = "GAP", t[t.EVENT_PARTICIPANT_SORT_KEY = 7] = "EVENT_PARTICIPANT_SORT_KEY", t[t.STOP_REASON = 8] = "STOP_REASON", t[t.PENALTY_LAP = 9] = "PENALTY_LAP", t[t.MISSED_SHOT = 10] = "MISSED_SHOT", t[t.STOP_EVENT_STAGE = 11] = "STOP_EVENT_STAGE", t[t.POINTS_ROUND_1 = 12] = "POINTS_ROUND_1", t[t.POINTS_ROUND_2 = 13] = "POINTS_ROUND_2", t[t.TIME_ROUND_1 = 14] = "TIME_ROUND_1", t[t.TIME_ROUND_2 = 15] = "TIME_ROUND_2", t[t.STOP_REASON_ROUND_1 = 16] = "STOP_REASON_ROUND_1", t[t.STOP_REASON_ROUND_2 = 17] = "STOP_REASON_ROUND_2", t[t.ON_TRACK = 18] = "ON_TRACK", t[t.STOP_REASON_TEXT = 19] = "STOP_REASON_TEXT", t[t.LAPS_DISTANCE = 20] = "LAPS_DISTANCE", t[t.JUMP_COUNT = 21] = "JUMP_COUNT", t[t.RIDES = 22] = "RIDES", t[t.WINS = 23] = "WINS", t[t.ROUND_1 = 24] = "ROUND_1", t[t.ROUND_2 = 25] = "ROUND_2", t[t.ROUND_3 = 26] = "ROUND_3", t[t.ROUND_4 = 27] = "ROUND_4", t[t.ROUND_5 = 28] = "ROUND_5", t[t.ROUND_6 = 29] = "ROUND_6", t[t.ROUND_7 = 30] = "ROUND_7", t[t.ROUND_8 = 31] = "ROUND_8", t[t.ROUND_9 = 32] = "ROUND_9", t[t.ROUND_10 = 33] = "ROUND_10", t[t.ROUND_11 = 34] = "ROUND_11", t[t.ROUND_12 = 35] = "ROUND_12", t[t.ROUND_13 = 36] = "ROUND_13", t[t.ROUND_14 = 37] = "ROUND_14", t[t.ROUND_15 = 38] = "ROUND_15", t[t.ROUND_16 = 39] = "ROUND_16", t[t.ROUND_17 = 40] = "ROUND_17", t[t.ROUND_18 = 41] = "ROUND_18", t[t.ROUND_19 = 42] = "ROUND_19", t[t.ROUND_20 = 43] = "ROUND_20", t[t.SEMIFINAL_1 = 44] = "SEMIFINAL_1", t[t.SEMIFINAL_2 = 45] = "SEMIFINAL_2", t[t.FINAL_ROUND = 46] = "FINAL_ROUND", t[t.LAPS = 47] = "LAPS", t[t.GRID = 48] = "GRID", t[t.PITSTOPS = 49] = "PITSTOPS", t[t.DARTS_180S = 50] = "DARTS_180S", t[t.DARTS_140_PLUS = 51] = "DARTS_140_PLUS", t[t.DARTS_100_PLUS = 52] = "DARTS_100_PLUS", t[t.DARTS_CHECKOUTS = 53] = "DARTS_CHECKOUTS", t[t.DARTS_CHECKOUTS_MAX = 54] = "DARTS_CHECKOUTS_MAX", t[t.DARTS_AVERAGES = 55] = "DARTS_AVERAGES", t[t.DARTS_LEG_WON = 56] = "DARTS_LEG_WON", t[t.LEG = 57] = "LEG", t[t.ROUND = 58] = "ROUND", t[t.PREV_POINTS = 59] = "PREV_POINTS", t[t.CURRENT_POINTS = 60] = "CURRENT_POINTS", t[t.OPPONENT_POINTS = 61] = "OPPONENT_POINTS", t[t.RESULT = 62] = "RESULT", t[t.LEG_RESULT = 63] = "LEG_RESULT", t[t.IS_PLAYING = 64] = "IS_PLAYING", t[t.CURRENT_LEG_RESULT = 65] = "CURRENT_LEG_RESULT", t[t.RUN_RATE = 66] = "RUN_RATE", t[t.SHOOTING = 67] = "SHOOTING"
                }(_ || (_ = {}))
        },
        72: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return _
            }));
            class _ {
                constructor() {
                    this.channels = [], this.signature = ""
                }
                add(t) {
                    return this.channels.push(t), this
                }
                getChannels() {
                    return this.channels
                }
                getSignature() {
                    return this.signature
                }
                setSignature(t) {
                    return this.signature = t, this
                }
            }
        },
        8: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })),
                function(t) {
                    t[t.SCHEDULED = 1] = "SCHEDULED", t[t.LIVE = 2] = "LIVE", t[t.FINISHED = 3] = "FINISHED"
                }(_ || (_ = {}))
        },
        80: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })),
                function(t) {
                    t[t.SCHEDULED = 1] = "SCHEDULED", t[t.LIVE = 2] = "LIVE", t[t.FINISHED = 3] = "FINISHED", t.TYPE_MAIN = "main", t.TYPE_ALTER = "alter", t.TYPE_MERGED = "merged"
                }(_ || (_ = {}))
        },
        81: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "b", (function() {
                    return _
                })), s.d(e, "a", (function() {
                    return E
                })),
                function(t) {
                    t[t.STANDINGS_IDENT = 1] = "STANDINGS_IDENT", t[t.DRAW_IDENT = 2] = "DRAW_IDENT"
                }(_ || (_ = {}));
            let E = (() => {
                class t {
                    constructor(t, e, s, _, E, i, r, a, n, o) {
                        this._width = n, this._height = o, this._statsTypeIdent = _, this._urlPrefix = E, this._tournamentId = t, this._tournamentStageId = e, this._eventId = s, this._utilTrans = r, this._isIos = i, this._highlightParticipants = a
                    }
                    _composeBaseUrl(e) {
                        let s = "";
                        this._statsTypeIdent === _.STANDINGS_IDENT ? s = this._utilTrans.translate(t.URL_STANDINGS) : this._statsTypeIdent === _.DRAW_IDENT && (s = this._utilTrans.translate(t.URL_DRAW));
                        const E = `${this._urlPrefix}/${s}/${this._tournamentId}/${this._tournamentStageId}/`.replace(/\/\//g, "/"),
                            i = this._getParams();
                        return i ? e.origin + E + "?" + i : e.origin + E
                    }
                    openWindow(t, e, s = !1) {
                        const _ = this._composeBaseUrl(e),
                            E = `hotkeys=no, resizable=yes, toolbar=no, status=no, dependent=yes, scrollbars=1, width=${this._width}, height=${this._height}`,
                            i = t.open(_, this.getTarget(), E);
                        return null === i || i.closed || i.focus(), i
                    }
                    getTarget() {
                        return this._isIos ? "_blank" : this._tournamentId
                    }
                    _getParams() {
                        let t = "";
                        return this._highlightParticipants && (t = this._highlightParticipants.map((t, e) => "hp" + (e + 1) + "=" + t).reduce((t, e) => t + "&" + e)), this._eventId && (t += (t ? "&" : "") + "e=" + this._eventId), t
                    }
                }
                return t.URL_STANDINGS = "TRANS_MOD_REWRITE_STANDINGS_TABLE", t.URL_DRAW = "TRANS_URL_STANDINGS_DRAW", t
            })()
        },
        83: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return _
            }));
            class _ {
                constructor(t, e) {
                    this._id = t, this._name = e
                }
                getId() {
                    return this._id
                }
                getName() {
                    return this._name
                }
            }
        },
        9: function(t, e, s) {
            "use strict";
            var _;
            s.d(e, "a", (function() {
                    return _
                })),
                function(t) {
                    t[t.TAB_NONE = -1] = "TAB_NONE", t[t.TAB_ID_ALL = 0] = "TAB_ID_ALL", t[t.TAB_ID_LIVE = 1] = "TAB_ID_LIVE", t[t.TAB_ID_FINISHED = 2] = "TAB_ID_FINISHED", t[t.TAB_ID_SCHEDULED = 3] = "TAB_ID_SCHEDULED", t[t.TAB_ID_ODDS = 4] = "TAB_ID_ODDS", t[t.TAB_ID_MYGAMES = 5] = "TAB_ID_MYGAMES", t[t.TAB_ID_MYGAMES_GROUPS = 55] = "TAB_ID_MYGAMES_GROUPS", t[t.TAB_ID_COUNTRY_ALL = 6] = "TAB_ID_COUNTRY_ALL", t[t.TAB_ID_COUNTRY_SCHEDULED = 7] = "TAB_ID_COUNTRY_SCHEDULED", t[t.TAB_ID_TV = 8] = "TAB_ID_TV", t[t.TAB_ID_MYTEAMS = 10] = "TAB_ID_MYTEAMS"
                }(_ || (_ = {}))
        },
        90: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return i
            }));
            var _ = s(22);
            class E {
                constructor(t, e, s) {
                    this.channel = t, this.eventChannels = e, this.defaultBundleUuid = s
                }
                getChannel() {
                    return this.channel
                }
                getDefaultBundleUuid() {
                    return this.defaultBundleUuid
                }
                getEventChannels() {
                    return this.eventChannels
                }
            }
            class i {
                constructor() {
                    this.eventChannels = [], this.defaultBundleUuid = ""
                }
                setChannel(t) {
                    return this.channel = t, this
                }
                setEventChannels(t) {
                    return this.eventChannels = t, this
                }
                setDefaultBundleUuid(t) {
                    return this.defaultBundleUuid = t, this
                }
                build() {
                    return new E(this.channel || (new _.a).build(), this.eventChannels, this.defaultBundleUuid)
                }
            }
        },
        98: function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return _
            })), s.d(e, "a", (function() {
                return i
            }));
            const _ = Object.freeze({
                    DECIMAL: 1,
                    HALVES: 2,
                    SPREAD: 3,
                    HALVES_QUARTERS: 4,
                    US: 5,
                    HA: 6
                }),
                E = Object.freeze({
                    EU: 1,
                    UK: 2,
                    US: 3,
                    HK: 4,
                    MA: 5,
                    IN: 6,
                    UK_SHORT: 10
                });
            class i {
                constructor() {
                    this.oddsFormat = E.EU, this.handicapFormat = _.DECIMAL, this.isString = t => "string" == typeof t
                }
                setOddsFormatByName(t) {
                    this.oddsFormat = function(t) {
                        switch (t) {
                            case "eu":
                                return E.EU;
                            case "us":
                                return E.US;
                            case "hk":
                                return E.HK;
                            case "ma":
                                return E.MA;
                            case "in":
                                return E.IN;
                            case "uk":
                                return E.UK_SHORT;
                            default:
                                return null
                        }
                    }(t)
                }
                setHandicapFormatByName(t) {
                    this.handicapFormat = function(t) {
                        switch (t) {
                            case "eu":
                                return _.DECIMAL;
                            case "us":
                                return _.US;
                            case "ha":
                                return _.HA;
                            default:
                                return null
                        }
                    }(t)
                }
                setOddsFormat(t) {
                    this.oddsFormat = t
                }
                setHandicapFormat(t) {
                    this.handicapFormat = t
                }
                parseNumber(t) {
                    return this.isString(t) ? parseFloat(t) : t
                }
                formatHandicap(t) {
                    const e = this.parseNumber(t);
                    switch (this.handicapFormat) {
                        case _.HALVES:
                            return this.formatHandicapHalves(e);
                        case _.SPREAD:
                        case _.US:
                            return this.formatHandicapUs(e);
                        case _.HALVES_QUARTERS:
                        case _.HA:
                            return this.formatHandicapHalvesQuarterOnly(e);
                        default:
                            return t
                    }
                }
                usFloat(t) {
                    let e = "";
                    const s = parseInt(String(t)),
                        _ = Math.abs(t - s);
                    switch (t > 0 && (e += "+"), t < 0 && (e += "-"), 0 == s && 5 != this.handicapFormat || (e += Math.abs(s)), _) {
                        case .25:
                            e += "Â¼";
                            break;
                        case .5:
                            e += "Â½";
                            break;
                        case .75:
                            e += "Â¾"
                    }
                    return e
                }
                formatHandicapHalves(t) {
                    const e = 2 * t,
                        s = Math.floor(e),
                        _ = Math.ceil(e);
                    return s < 0 || _ < 0 ? 6 == this.handicapFormat ? this.addSign(_ / 2) + ", " + this.addSign(s / 2) : _ / 2 + ", " + s / 2 : 6 == this.handicapFormat ? this.addSign(s / 2) + ", " + this.addSign(_ / 2) : s / 2 + ", " + _ / 2
                }
                addSign(t, e) {
                    return t > 0 ? "+" + t : t < 0 && e ? "-" + t : t
                }
                formatHandicapHalvesQuarterOnly(t) {
                    const e = parseInt(String(t)),
                        s = Math.abs(t - e);
                    return .25 == s || .75 == s ? this.formatHandicapHalves(t) : 6 == this.handicapFormat ? this.addSign(t) : t
                }
                formatHandicapUs(t) {
                    return this.usFloat(t) + "/" + this.usFloat(-1 * t)
                }
                formatOdd(t, e) {
                    if (!t) return "";
                    const s = this.parseNumber(t);
                    if (isNaN(s)) return t;
                    if (s > .999 && s < 1.001 && !e) return "-";
                    switch (this.oddsFormat) {
                        case E.EU:
                            return this.formatTwoDigits(s);
                        case E.UK:
                            return this.formatUk(s);
                        case E.US:
                            return this.formatUs(s);
                        case E.HK:
                            return this.formatHk(s);
                        case E.MA:
                            return this.formatMa(s);
                        case E.IN:
                            return this.formatIn(s);
                        case E.UK_SHORT:
                            return this.formatUkShort(s);
                        default:
                            return t
                    }
                }
                formatUs(t) {
                    return t > .999 && t < 1.001 ? "-25000" : t >= 2 ? "+" + Math.floor(100 * (t - 1)) : 1 != t ? -Math.round(100 / (t - 1)) : null
                }
                formatUk(t) {
                    if (t > .999 && t < 1.001) return "0/1";
                    let e = Math.round(100 * t),
                        s = 100,
                        _ = this.GCD(e, s);
                    return _ < -1 && (_ *= -1), _ > 1 && (e /= _, s /= _), e > s ? Math.round(e) - Math.round(s) + "/" + Math.round(s) : Math.round(e) + "/" + Math.round(s)
                }
                formatUkShort(t) {
                    if (t > .999 && t < 1.001) return "0/1";
                    const e = Math.round(1e3 * t) / 10 - 100;
                    let s, _ = 100,
                        E = -1,
                        i = -1,
                        r = 100;
                    for (let t = 1; t <= 11; t++) {
                        r = t, s = e * r / 100;
                        const a = Math.abs(Math.round(s) / Math.round(r) - e / 100);
                        a < _ && (_ = a, E = s, i = r)
                    }
                    return Math.round(E) + "/" + Math.round(i)
                }
                formatHk(t) {
                    return t > .999 && t < 1.001 ? this.formatTwoDigits(0) : this.formatTwoDigits(t - 1)
                }
                formatMa(t) {
                    return t > .999 && t < 1.001 ? this.formatTwoDigits(0) : (t <= 2 ? t -= 1 : t = 1 / (t - 1) * -1, this.formatTwoDigits(t))
                }
                formatIn(t) {
                    return t > .999 && t < 1.001 ? "-250.00" : (t <= 2 ? t = 1 / (t - 1) * -1 : t -= 1, this.formatTwoDigits(t))
                }
                GCD(t, e) {
                    let s = t,
                        _ = e;
                    for (; 0 != _;) {
                        const t = s % _;
                        s = _, _ = t
                    }
                    return s
                }
                formatTwoDigits(t) {
                    let e = Math.round(100 * t) / 100 + "";
                    return -1 == e.indexOf(".") && (e += ".00"), e.indexOf(".") == e.length - 2 && (e += "0"), e
                }
            }
        },
        99: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return _
            }));
            class _ {
                constructor(t, e) {
                    this.disabledGeoIps = [], this.disabledGeoIps = t, this.countryCode = e
                }
                hasHighlight(t) {
                    if (!t) return !1;
                    if (this.countryCode && this.disabledGeoIps.includes(this.countryCode)) return !1;
                    for (const e of t.split(";")) {
                        const [t, s] = this._getTsAndRestrictionFromHighlight(e);
                        if (t && this.checkHighlightRestriction(s)) return !0
                    }
                    return !1
                }
                hasHighlightInterval(t, e, s, _) {
                    return !!e && (!(!_ && !s) && t <= 3600 * e + (_ ? this.toNumber(_) : this.toNumber(s)))
                }
                toNumber(t) {
                    return "number" == typeof t ? t : null === t ? 0 : parseInt(t)
                }
                checkHighlightRestriction(t = "") {
                    const e = [],
                        s = [];
                    if ("1" === t) return !0;
                    if (!t || !this.countryCode) return !1;
                    for (const _ of t.split(",")) {
                        const [t, E] = _.split(":");
                        "a" == E ? e.push(t) : s.push(t)
                    }
                    return e.length ? e.includes(this.countryCode) : !s.length || !s.includes(this.countryCode)
                }
                _getTsAndRestrictionFromHighlight(t) {
                    if ("1" === t) return ["1", "1"];
                    if (!t.match(/^[0-9]*\|.*$/)) return [""];
                    const e = t.split("|");
                    return e[1] || (e[1] = "1"), e
                }
            }
        }
    },
    [
        [415, 0, 1]
    ]
]);