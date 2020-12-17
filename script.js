var time = moment();

//this will show current date and time in header
function currentDateTime() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    $("#currentTime").text(moment().format("HH:mm:ss"));
   
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        console.log(this);

        var schedule = localStorage.getItem(id);

        if(schedule !== null) {
            $(this).children(".schedule").val(schedule)
            //console.log(this);
        }
    });
}

currentDateTime();
//console.log(currentDateTime());


//this will save the schedule input on the specific time
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    //console.log(this);
    var schedule = $(this).siblings(".schedule").val();
    //console.log(this)

    localStorage.setItem(time, schedule);
    console.log(localStorage);
});


//this will be the colour changing basis for past, present and future
function pastPresentFuture() {
    var currentTimeEl = moment().hours();
   // console.log(currentTimeEl);

    $(".time-block").each(function () {
        var timeBlockEl = parseInt($(this).attr("id"));
       // console.log(timeBlockEl);

    if (currentTimeEl < timeBlockEl) {
        $(this).addClass("future")
        //console.log(this);
    }
    else if (currentTimeEl === timeBlockEl) {
        $(this).addClass("present")
    }
    else if (currentTimeEl > timeBlockEl) {
        $(this).addClass("past")
    }
})

}

pastPresentFuture();
//localStorage.clear();