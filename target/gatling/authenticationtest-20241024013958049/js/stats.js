var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "167",
        "ok": "342",
        "ko": "167"
    },
    "maxResponseTime": {
        "total": "342",
        "ok": "342",
        "ko": "167"
    },
    "meanResponseTime": {
        "total": "255",
        "ok": "342",
        "ko": "167"
    },
    "standardDeviation": {
        "total": "88",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "255",
        "ok": "342",
        "ko": "167"
    },
    "percentiles2": {
        "total": "298",
        "ok": "342",
        "ko": "167"
    },
    "percentiles3": {
        "total": "333",
        "ok": "342",
        "ko": "167"
    },
    "percentiles4": {
        "total": "340",
        "ok": "342",
        "ko": "167"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
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
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.333",
        "ko": "0.333"
    }
},
contents: {
"req_get-all-student-bc6d6": {
        type: "REQUEST",
        name: "get all students details",
path: "get all students details",
pathFormatted: "req_get-all-student-bc6d6",
stats: {
    "name": "get all students details",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "percentiles2": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "percentiles3": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "percentiles4": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "0.333",
        "ko": "-"
    }
}
    },"req_get-single-stud-448fc": {
        type: "REQUEST",
        name: "get single student details",
path: "get single student details",
pathFormatted: "req_get-single-stud-448fc",
stats: {
    "name": "get single student details",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "167",
        "ok": "-",
        "ko": "167"
    },
    "maxResponseTime": {
        "total": "167",
        "ok": "-",
        "ko": "167"
    },
    "meanResponseTime": {
        "total": "167",
        "ok": "-",
        "ko": "167"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "167",
        "ok": "-",
        "ko": "167"
    },
    "percentiles2": {
        "total": "167",
        "ok": "-",
        "ko": "167"
    },
    "percentiles3": {
        "total": "167",
        "ok": "-",
        "ko": "167"
    },
    "percentiles4": {
        "total": "167",
        "ok": "-",
        "ko": "167"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "-",
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
