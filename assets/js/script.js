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
    hour9 = 9;
    if (currentHour === hour9) {
        $("div.time0 input").addClass("present");
    } else if (currentHour > hour9) {
        $("div.time0 input").addClass("past");
    } else if (currentHour < hour9) {
        $("div.time0 input").addClass("future");
    }
};

colorCode();
$(".saveBtn").on("click", save);