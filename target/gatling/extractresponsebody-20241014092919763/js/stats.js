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
        "total": "27",
        "ok": "217",
        "ko": "27"
    },
    "maxResponseTime": {
        "total": "3773",
        "ok": "1093",
        "ko": "3773"
    },
    "meanResponseTime": {
        "total": "856",
        "ok": "885",
        "ko": "827"
    },
    "standardDeviation": {
        "total": "804",
        "ok": "258",
        "ko": "1107"
    },
    "percentiles1": {
        "total": "828",
        "ok": "1006",
        "ko": "328"
    },
    "percentiles2": {
        "total": "1029",
        "ok": "1030",
        "ko": "826"
    },
    "percentiles3": {
        "total": "1906",
        "ok": "1093",
        "ko": "2889"
    },
    "percentiles4": {
        "total": "3400",
        "ok": "1093",
        "ko": "3596"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 40
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
        "total": "2.857",
        "ok": "1.429",
        "ko": "1.429"
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
        "total": "27",
        "ok": "217",
        "ko": "27"
    },
    "maxResponseTime": {
        "total": "3773",
        "ok": "1093",
        "ko": "3773"
    },
    "meanResponseTime": {
        "total": "856",
        "ok": "885",
        "ko": "827"
    },
    "standardDeviation": {
        "total": "804",
        "ok": "258",
        "ko": "1107"
    },
    "percentiles1": {
        "total": "828",
        "ok": "1006",
        "ko": "328"
    },
    "percentiles2": {
        "total": "1029",
        "ok": "1030",
        "ko": "826"
    },
    "percentiles3": {
        "total": "1906",
        "ok": "1093",
        "ko": "2889"
    },
    "percentiles4": {
        "total": "3400",
        "ok": "1093",
        "ko": "3596"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 40
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
        "total": "2.857",
        "ok": "1.429",
        "ko": "1.429"
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
