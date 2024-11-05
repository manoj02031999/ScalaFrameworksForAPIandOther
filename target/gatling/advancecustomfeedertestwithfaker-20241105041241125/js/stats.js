var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1016",
        "ok": "1016",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1222",
        "ok": "1222",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1132",
        "ok": "1132",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1198",
        "ok": "1198",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1208",
        "ok": "1208",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1219",
        "ok": "1219",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1221",
        "ok": "1221",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 60
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "2.5",
        "ko": "-"
    }
},
contents: {
"req_post-api-to-cre-7aa48": {
        type: "REQUEST",
        name: "Post Api to create student",
path: "Post Api to create student",
pathFormatted: "req_post-api-to-cre-7aa48",
stats: {
    "name": "Post Api to create student",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1016",
        "ok": "1016",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1222",
        "ok": "1222",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1132",
        "ok": "1132",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1198",
        "ok": "1198",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1208",
        "ok": "1208",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1219",
        "ok": "1219",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1221",
        "ok": "1221",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 60
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "2.5",
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
