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
        "total": "61",
        "ok": "114",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "137",
        "ok": "137",
        "ko": "63"
    },
    "meanResponseTime": {
        "total": "94",
        "ok": "127",
        "ko": "62"
    },
    "standardDeviation": {
        "total": "33",
        "ok": "8",
        "ko": "1"
    },
    "percentiles1": {
        "total": "89",
        "ok": "129",
        "ko": "62"
    },
    "percentiles2": {
        "total": "128",
        "ok": "134",
        "ko": "62"
    },
    "percentiles3": {
        "total": "134",
        "ok": "136",
        "ko": "63"
    },
    "percentiles4": {
        "total": "136",
        "ok": "137",
        "ko": "63"
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
        "total": "61",
        "ok": "114",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "137",
        "ok": "137",
        "ko": "63"
    },
    "meanResponseTime": {
        "total": "94",
        "ok": "127",
        "ko": "62"
    },
    "standardDeviation": {
        "total": "33",
        "ok": "8",
        "ko": "1"
    },
    "percentiles1": {
        "total": "89",
        "ok": "129",
        "ko": "62"
    },
    "percentiles2": {
        "total": "128",
        "ok": "134",
        "ko": "62"
    },
    "percentiles3": {
        "total": "134",
        "ok": "136",
        "ko": "63"
    },
    "percentiles4": {
        "total": "136",
        "ok": "137",
        "ko": "63"
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
