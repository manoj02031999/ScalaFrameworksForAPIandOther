var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1540",
        "ok": "1540",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4026",
        "ok": "4026",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "319",
        "ok": "319",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "454",
        "ok": "454",
        "ko": "-"
    },
    "percentiles1": {
        "total": "138",
        "ok": "138",
        "ko": "-"
    },
    "percentiles2": {
        "total": "226",
        "ok": "226",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1161",
        "ok": "1161",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2155",
        "ok": "2155",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1355,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 112,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 73,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "128.333",
        "ok": "128.333",
        "ko": "-"
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
        "total": "1540",
        "ok": "1540",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4026",
        "ok": "4026",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "319",
        "ok": "319",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "454",
        "ok": "454",
        "ko": "-"
    },
    "percentiles1": {
        "total": "138",
        "ok": "138",
        "ko": "-"
    },
    "percentiles2": {
        "total": "226",
        "ok": "226",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1161",
        "ok": "1161",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2155",
        "ok": "2155",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1355,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 112,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 73,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "128.333",
        "ok": "128.333",
        "ko": "-"
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
