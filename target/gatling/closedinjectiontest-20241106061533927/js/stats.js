var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2904",
        "ok": "2904",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2586",
        "ok": "2586",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "211",
        "ok": "211",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles1": {
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "percentiles2": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "percentiles3": {
        "total": "943",
        "ok": "943",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1461",
        "ok": "1461",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2743,
    "percentage": 94
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 121,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 40,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "132",
        "ok": "132",
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
        "total": "2904",
        "ok": "2904",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2586",
        "ok": "2586",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "211",
        "ok": "211",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles1": {
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "percentiles2": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "percentiles3": {
        "total": "943",
        "ok": "943",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1461",
        "ok": "1461",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2743,
    "percentage": 94
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 121,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 40,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "132",
        "ok": "132",
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
