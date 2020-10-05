//finds current date to display
var date = moment().format("dddd, MMMM Do");
currentDay = $("#currentDay").append(date);

//set up array of business hours and index
var timeRange = [{
        hour: "9AM",
        index: 0
    },
    {
        hour: "10AM",
        index: 1
    },
    {
        hour: "11AM",
        index: 2
    },
    {
        hour: "12PM",
        index: 3
    },
    {
        hour: "1PM",
        index: 4
    },
    {
        hour: "2PM",
        index: 5
    },
    {
        hour: "3PM",
        index: 6
    },
    {
        hour: "4PM",
        index: 7
    },
    {
        hour: "5PM",
        index: 8
    }
];

//check current time
var timeCheck = function() {
    currentTime = moment().format("hA");
    for (i = 0; i<timeRange.length; i++) {
        if (currentTime === timeRange[i].hour) {
            currentIndex = timeRange[i].index;
            for (j = 0; j<timeRange.length; j++) {
                loopedIndex = timeRange[j].index;
                //if hour is in future turn green
                if (loopedIndex > currentIndex) {
                    $("#"+j).removeClass("past");
                    $("#"+j).removeClass("present");
                    $("#"+j).addClass("future");
                //if hour is current turn red
                }if (loopedIndex === currentIndex) {
                    $("#"+j).removeClass("past");
                    $("#"+j).removeClass("future");
                    $("#"+j).addClass("present");
                //if hour is past turn gray
                }else if (loopedIndex < currentIndex) {
                    $("#"+j).removeClass("present");
                    $("#"+j).removeClass("future");
                    $("#"+j).addClass("past");
                };
            };
        };
    };
};
timeCheck();

//write a save function to local storage
var saveEvents = function() {
    for (i=0; i<timeRange.length; i++) {
        var updateText = $('textarea')[i].value;
        eventText = $('textarea')[i].textContent;
        eventText = updateText;
        localStorage.setItem("event"+i, JSON.stringify(eventText));
    };
};

//write a load function for every time the page is refreshed
var loadEvents = function() {
    for (i=0; i<timeRange.length; i++) {
        loadedEvent = localStorage.getItem("event"+i);
        loadedEvent = JSON.parse(loadedEvent);
        $('textarea')[i].textContent = loadedEvent;
    }
}
loadEvents();

//adds save to save button
$(".btn-s").click(saveEvents);

//continues to recall the timeCheck function
setInterval(timeCheck, 15000);