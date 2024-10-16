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
        "total": "33",
        "ok": "207",
        "ko": "33"
    },
    "maxResponseTime": {
        "total": "2041",
        "ok": "2041",
        "ko": "828"
    },
    "meanResponseTime": {
        "total": "539",
        "ok": "932",
        "ko": "145"
    },
    "standardDeviation": {
        "total": "634",
        "ok": "664",
        "ko": "229"
    },
    "percentiles1": {
        "total": "208",
        "ok": "648",
        "ko": "79"
    },
    "percentiles2": {
        "total": "796",
        "ok": "1366",
        "ko": "99"
    },
    "percentiles3": {
        "total": "2040",
        "ok": "2041",
        "ko": "511"
    },
    "percentiles4": {
        "total": "2041",
        "ok": "2041",
        "ko": "765"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "2",
        "ko": "2"
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
        "total": "33",
        "ok": "207",
        "ko": "33"
    },
    "maxResponseTime": {
        "total": "2041",
        "ok": "2041",
        "ko": "828"
    },
    "meanResponseTime": {
        "total": "539",
        "ok": "932",
        "ko": "145"
    },
    "standardDeviation": {
        "total": "634",
        "ok": "664",
        "ko": "229"
    },
    "percentiles1": {
        "total": "208",
        "ok": "648",
        "ko": "79"
    },
    "percentiles2": {
        "total": "796",
        "ok": "1366",
        "ko": "99"
    },
    "percentiles3": {
        "total": "2040",
        "ok": "2041",
        "ko": "511"
    },
    "percentiles4": {
        "total": "2041",
        "ok": "2041",
        "ko": "765"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "2",
        "ko": "2"
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
