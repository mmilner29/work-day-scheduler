var currentDay = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().hour();

console.log(currentHour);

$("#currentDay").append(currentDay);

var save = function() {
    var plan = $(this).siblings(".description").val();
    var hour = $(this).siblings(".hour").attr("id");

    localStorage.setItem(hour,plan);
};

$("div.time0 input").val(localStorage.getItem("time0"));
$("div.time1 input").val(localStorage.getItem("time1"));
$("div.time2 input").val(localStorage.getItem("time2"));
$("div.time3 input").val(localStorage.getItem("time3"));
$("div.time4 input").val(localStorage.getItem("time4"));
$("div.time5 input").val(localStorage.getItem("time5"));
$("div.time6 input").val(localStorage.getItem("time6"));
$("div.time7 input").val(localStorage.getItem("time7"));
$("div.time8 input").val(localStorage.getItem("time8"));



var colorCode = function() {
    var timeBlock = {hour9: 9, hour10: 10, hour11: 11, hour12: 12, 
        hour13: 13, hour14: 14, hour15: 15, hour16: 16, hour17: 17}

    if (currentHour === timeBlock.hour9) {
        $("div.time0 input").addClass("present");
        $("div.time0 input").removeClass("future");
    } else if (currentHour > timeBlock.hour9) {
        $("div.time0 input").addClass("past");
        $("div.time0 input").removeClass("present");
    } else if (currentHour < timeBlock.hour9) {
        $("div.time0 input").addClass("future");
        $("div.time0 input").removeClass("past");
    };

    if (currentHour === timeBlock.hour10) {
        $("div.time1 input").addClass("present");
        $("div.time1 input").removeClass("future");
    } else if (currentHour > timeBlock.hour10) {
        $("div.time1 input").addClass("past");
        $("div.time1 input").removeClass("present");
    } else if (currentHour < timeBlock.hour10) {
        $("div.time1 input").addClass("future");
        $("div.time1 input").removeClass("past");
    }

    if (currentHour === timeBlock.hour11) {
        $("div.time2 input").addClass("present");
        $("div.time2 input").removeClass("future");
    } else if (currentHour > timeBlock.hour11) {
        $("div.time2 input").addClass("past");
        $("div.time2 input").removeClass("present");
    } else if (currentHour < timeBlock.hour11) {
        $("div.time2 input").addClass("future");
        $("div.time2 input").removeClass("past");
    }

    if (currentHour === timeBlock.hour12) {
        $("div.time3 input").addClass("present");
        $("div.time3 input").removeClass("future");
    } else if (currentHour > timeBlock.hour12) {
        $("div.time3 input").addClass("past");
        $("div.time3 input").removeClass("present");
    } else if (currentHour < timeBlock.hour12) {
        $("div.time3 input").addClass("future");
        $("div.time3 input").removeClass("past");
    }

    if (currentHour === timeBlock.hour13) {
        $("div.time4 input").addClass("present");
        $("div.time4 input").removeClass("future");
    } else if (currentHour > timeBlock.hour13) {
        $("div.time4 input").addClass("past");
        $("div.time4 input").removeClass("present");
    } else if (currentHour < timeBlock.hour13) {
        $("div.time4 input").addClass("future");
        $("div.time4 input").removeClass("past");
    }

    if (currentHour === timeBlock.hour14) {
        $("div.time5 input").addClass("present");
        $("div.time5 input").removeClass("future");
    } else if (currentHour > timeBlock.hour14) {
        $("div.time5 input").addClass("past");
        $("div.time5 input").removeClass("present");
    } else if (currentHour < timeBlock.hour14) {
        $("div.time5 input").addClass("future");
        $("div.time5 input").removeClass("past");
    }

    if (currentHour === timeBlock.hour15) {
        $("div.time6 input").addClass("present");
        $("div.time6 input").removeClass("future");
    } else if (currentHour > timeBlock.hour15) {
        $("div.time6 input").addClass("past");
        $("div.time6 input").removeClass("present");
    } else if (currentHour < timeBlock.hour15) {
        $("div.time6 input").addClass("future");
        $("div.time6 input").removeClass("past");
    }

    if (currentHour === timeBlock.hour16) {
        $("div.time7 input").addClass("present");
        $("div.time7 input").removeClass("future");
    } else if (currentHour > timeBlock.hour16) {
        $("div.time7 input").addClass("past");
        $("div.time7 input").removeClass("present");
    } else if (currentHour < timeBlock.hour16) {
        $("div.time7 input").addClass("future");
        $("div.time7 input").removeClass("past");
    }

    if (currentHour === timeBlock.hour17) {
        $("div.time8 input").addClass("present");
        $("div.time8 input").removeClass("future");
    } else if (currentHour > timeBlock.hour17) {
        $("div.time8 input").addClass("past");
        $("div.time8 input").removeClass("present");
    } else if (currentHour < timeBlock.hour17) {
        $("div.time8 input").addClass("future");
        $("div.time8 input").removeClass("past");
    }
};

colorCode();

$(".saveBtn").on("click", save);