var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "344",
        "ok": "344",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "254",
        "ok": "254",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "percentiles1": {
        "total": "212",
        "ok": "212",
        "ko": "-"
    },
    "percentiles2": {
        "total": "278",
        "ok": "278",
        "ko": "-"
    },
    "percentiles3": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "percentiles4": {
        "total": "341",
        "ok": "341",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
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
        "total": "3",
        "ok": "3",
        "ko": "-"
    }
},
contents: {
"req_get-single-stud-0e1c2": {
        type: "REQUEST",
        name: "get single student details for 0 of the user name <no phase>",
path: "get single student details for 0 of the user name <no phase>",
pathFormatted: "req_get-single-stud-0e1c2",
stats: {
    "name": "get single student details for 0 of the user name <no phase>",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "344",
        "ok": "344",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "254",
        "ok": "254",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "percentiles1": {
        "total": "212",
        "ok": "212",
        "ko": "-"
    },
    "percentiles2": {
        "total": "278",
        "ok": "278",
        "ko": "-"
    },
    "percentiles3": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "percentiles4": {
        "total": "341",
        "ok": "341",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
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
        "total": "3",
        "ok": "3",
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