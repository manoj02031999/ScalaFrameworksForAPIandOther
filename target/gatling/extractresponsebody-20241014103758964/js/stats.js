var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "10",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "26",
        "ok": "124",
        "ko": "26"
    },
    "maxResponseTime": {
        "total": "176",
        "ok": "176",
        "ko": "51"
    },
    "meanResponseTime": {
        "total": "88",
        "ok": "141",
        "ko": "35"
    },
    "standardDeviation": {
        "total": "55",
        "ok": "17",
        "ko": "8"
    },
    "percentiles1": {
        "total": "88",
        "ok": "138",
        "ko": "34"
    },
    "percentiles2": {
        "total": "132",
        "ok": "153",
        "ko": "38"
    },
    "percentiles3": {
        "total": "154",
        "ok": "166",
        "ko": "47"
    },
    "percentiles4": {
        "total": "172",
        "ok": "174",
        "ko": "50"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.667",
        "ok": "3.333",
        "ko": "3.333"
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
        "total": "20",
        "ok": "10",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "26",
        "ok": "124",
        "ko": "26"
    },
    "maxResponseTime": {
        "total": "176",
        "ok": "176",
        "ko": "51"
    },
    "meanResponseTime": {
        "total": "88",
        "ok": "141",
        "ko": "35"
    },
    "standardDeviation": {
        "total": "55",
        "ok": "17",
        "ko": "8"
    },
    "percentiles1": {
        "total": "88",
        "ok": "138",
        "ko": "34"
    },
    "percentiles2": {
        "total": "132",
        "ok": "153",
        "ko": "38"
    },
    "percentiles3": {
        "total": "154",
        "ok": "166",
        "ko": "47"
    },
    "percentiles4": {
        "total": "172",
        "ok": "174",
        "ko": "50"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.667",
        "ok": "3.333",
        "ko": "3.333"
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
