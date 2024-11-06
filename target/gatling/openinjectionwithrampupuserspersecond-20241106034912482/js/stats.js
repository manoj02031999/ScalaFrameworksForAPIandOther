var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "112",
        "ok": "105",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "10028"
    },
    "maxResponseTime": {
        "total": "14347",
        "ok": "14347",
        "ko": "11041"
    },
    "meanResponseTime": {
        "total": "2745",
        "ok": "2240",
        "ko": "10324"
    },
    "standardDeviation": {
        "total": "3149",
        "ok": "2546",
        "ko": "453"
    },
    "percentiles1": {
        "total": "1796",
        "ok": "1453",
        "ko": "10041"
    },
    "percentiles2": {
        "total": "3224",
        "ok": "3108",
        "ko": "10543"
    },
    "percentiles3": {
        "total": "10040",
        "ok": "7154",
        "ko": "11040"
    },
    "percentiles4": {
        "total": "11041",
        "ok": "10548",
        "ko": "11041"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 36,
    "percentage": 32
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 55,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 7,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.333",
        "ok": "5",
        "ko": "0.333"
    }
},
contents: {
"req_get-api-for-fet-c8f2f": {
        type: "REQUEST",
        name: "GET API for fetching single user data",
path: "GET API for fetching single user data",
pathFormatted: "req_get-api-for-fet-c8f2f",
stats: {
    "name": "GET API for fetching single user data",
    "numberOfRequests": {
        "total": "112",
        "ok": "105",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "10028"
    },
    "maxResponseTime": {
        "total": "14347",
        "ok": "14347",
        "ko": "11041"
    },
    "meanResponseTime": {
        "total": "2745",
        "ok": "2240",
        "ko": "10324"
    },
    "standardDeviation": {
        "total": "3149",
        "ok": "2546",
        "ko": "453"
    },
    "percentiles1": {
        "total": "1796",
        "ok": "1453",
        "ko": "10041"
    },
    "percentiles2": {
        "total": "3224",
        "ok": "3108",
        "ko": "10543"
    },
    "percentiles3": {
        "total": "10040",
        "ok": "7154",
        "ko": "11040"
    },
    "percentiles4": {
        "total": "11041",
        "ok": "10548",
        "ko": "11041"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 36,
    "percentage": 32
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 55,
    "percentage": 49
},
    "group4": {
    "name": "failed",
    "count": 7,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.333",
        "ok": "5",
        "ko": "0.333"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
