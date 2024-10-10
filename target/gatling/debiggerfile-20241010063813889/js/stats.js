var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "8",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "533",
        "ok": "533",
        "ko": "10049"
    },
    "maxResponseTime": {
        "total": "31190",
        "ok": "31190",
        "ko": "10081"
    },
    "meanResponseTime": {
        "total": "5934",
        "ok": "4901",
        "ko": "10065"
    },
    "standardDeviation": {
        "total": "9141",
        "ok": "9956",
        "ko": "16"
    },
    "percentiles1": {
        "total": "1463",
        "ok": "978",
        "ko": "10065"
    },
    "percentiles2": {
        "total": "8157",
        "ok": "1933",
        "ko": "10073"
    },
    "percentiles3": {
        "total": "21691",
        "ok": "21141",
        "ko": "10079"
    },
    "percentiles4": {
        "total": "29290",
        "ok": "29180",
        "ko": "10081"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.286",
        "ok": "0.229",
        "ko": "0.057"
    }
},
contents: {
"req_put-api-update--df9d0": {
        type: "REQUEST",
        name: "put api update scenario",
path: "put api update scenario",
pathFormatted: "req_put-api-update--df9d0",
stats: {
    "name": "put api update scenario",
    "numberOfRequests": {
        "total": "10",
        "ok": "8",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "533",
        "ok": "533",
        "ko": "10049"
    },
    "maxResponseTime": {
        "total": "31190",
        "ok": "31190",
        "ko": "10081"
    },
    "meanResponseTime": {
        "total": "5934",
        "ok": "4901",
        "ko": "10065"
    },
    "standardDeviation": {
        "total": "9141",
        "ok": "9956",
        "ko": "16"
    },
    "percentiles1": {
        "total": "1463",
        "ok": "978",
        "ko": "10065"
    },
    "percentiles2": {
        "total": "8157",
        "ok": "1933",
        "ko": "10073"
    },
    "percentiles3": {
        "total": "21691",
        "ok": "21141",
        "ko": "10079"
    },
    "percentiles4": {
        "total": "29290",
        "ok": "29180",
        "ko": "10081"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.286",
        "ok": "0.229",
        "ko": "0.057"
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
