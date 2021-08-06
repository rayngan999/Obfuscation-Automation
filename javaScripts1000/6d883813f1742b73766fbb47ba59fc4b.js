var PREBID_TIMEOUT = 2000;

const customConfigObject = {
    "buckets" : [{
        "precision": 2,
        "min" : 0,
        "max" : 70,
        "increment" : 0.70
    },
    {
        "precision": 2,
        "min" : 70,
        "max" : 1750,
        "increment" : 3.50
    },
    {
        "precision": 2,
        "min" : 1750,
        "max" : 3500,
        "increment" : 7.00
    },
    {
        "precision": 2,
        "min" : 3500,
        "max" : 7000,
        "increment" : 17.50
    }]
};


var adUnits = [{
    code: "div-gpt-ad-1520936202459-0",
    sizes: [728, 90],
    bids: [{
        bidder: "criteo",
        params: {
            zoneId: "1403607"
            }
        },

    ]
},

{
    code: "div-gpt-ad-1520936249572-0",

    sizes: [300, 250],
    bids: [{
        bidder: "criteo",
        params: {
            zoneId: "1401161"
        }

    },
]
},
    {
        code: "div-gpt-ad-1520936067064-0",

        sizes: [728, 90],
        bids: [{
        bidder: "criteo",
        params: {
            zoneId: "1401160"
        }

    },

    ]

},
];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];



pbjs.bidderSettings = {

    criteo: {
        sendStandardTargeting: false,
        adserverTargeting: [{
            key: "hb_adid_criteo",
            val: function(bidResponse) {
                return bidResponse.adId;
            }
        }, {
            key: "hb_pb_criteo",
            val: function(bidResponse) {
                return bidResponse.pbMg;
            }
        }, {
            key: "hb_size_criteo",
            val: function(bidResponse) {
                return bidResponse.size;
            }
        }, ]
    },

};
