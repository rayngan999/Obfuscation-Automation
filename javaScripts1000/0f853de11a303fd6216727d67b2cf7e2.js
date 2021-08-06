var adfoxBiddersMap = {
    "betweenDigital": "1366074",
	"otm": "1536143",
	"rtbhouse": "1366077",
	"getintent": "1366078"
};

var adUnits = [
    {
        "code": "adfox_160674312844154233",
        "bids": [
            {
                "bidder": "betweenDigital",
                "params": {
                    "placementId": "3990783"
                }
            },
			{
                "bidder": "otm",
                "params": {
                    "placementId": "13764"
                }
            },
			{
                "bidder": "getintent",
                "params": {
                    "placementId": "66_728x90_alfadart"
                }
            },
			{
                "bidder": "rtbhouse",
                "params": {
                    "placementId": "Mp6nDymhcpPJLmlpiwMu"
                }
            }
        ],
        "sizes": [
            [
                728,
                90
            ]
        ]
    },
    //mob_300x250
     {
        "code": "adfox_160674314458974065",
        "bids": [
            {
                "bidder": "betweenDigital",
                "params": {
                    "placementId": "3990784"
                }
            },
			{
                "bidder": "otm",
                "params": {
                    "placementId": "13765"
                }
            },
			{
                "bidder": "getintent",
                "params": {
                    "placementId": "66_300x250_alfadart"
                }
            },
			{
                "bidder": "rtbhouse",
                "params": {
                    "placementId": "Mp6nDymhcpPJLmlpiwMu"
                }
            }
        ],
        "sizes": [
            [
                300,
                250
            ]
        ]
    },
    //desk_300x250
    {
        "code": "adfox_160689912160272763",
        "bids": [
            {
                "bidder": "betweenDigital",
                "params": {
                    "placementId": "3991847"
                }
            },
			{
                "bidder": "otm",
                "params": {
                    "placementId": "13766"
                }
            },
			{
                "bidder": "getintent",
                "params": {
                    "placementId": "66_300x250_alfadart"
                }
            },
			{
                "bidder": "rtbhouse",
                "params": {
                    "placementId": "Mp6nDymhcpPJLmlpiwMu"
                }
            }
        ],
        "sizes": [
            [
                300,
                250
            ]
        ]
    }
];
var userTimeout = 1000;
window.YaHeaderBiddingSettings = {
    biddersMap: adfoxBiddersMap,
    adUnits: adUnits,
    timeout: userTimeout
};