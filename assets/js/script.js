var currentDay = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().hour();
var timeIndex = 0

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

// timeBlocks = [
//     {
//         element: $("div.time0 input"),
//         time: 9,
//     },
//     {
//         element: $("div.time1 input"),
//         time: 10,
//     },
//     {
//         element: $("div.time2 input"),
//         time: 11,
//     },
//     {
//         element: $("div.time3 input"),
//         time: 12,
//     },
// ]

// var colorCode = function() {
//     for (var i = 0; i < timeBlocks.length; i++) {
//         if (currentHour === timeBlocks[timeIndex].time) {
//             timeBlocks.element.addClass("present");
//             timeBlocks.element.removeClass("future");
//         } else if (currentHour > timeBlocks[timeIndex].time) {
//             timeBlocks.element.addClass("past");
//             timeBlocks.element.removeClass("present");
//         } else if (currentHour < timeBlocks[timeIndex].time) {
//             timeBlocks.element.addClass("future");
//             timeBlocks.element.removeClass("past");
//         }

//     }
//     timeIndex++;

// };

// colorCode(timeBlocks);

$(".saveBtn").on("click", save);