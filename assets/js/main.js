var date = moment().format("dddd, MMMM Do");
currentDay = $("#currentDay").append(date);
console.log(date);

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


var timeCheck = function() {
    //currentTime = moment().format("hA");
    currentTime = "1PM";
    for (i = 0; i<timeRange.length; i++) {
        if (currentTime === timeRange[i].hour) {
            currentIndex = timeRange[i].index;
            for (j = 0; j<timeRange.length; j++) {
                loopedIndex = timeRange[j].index;
                if (loopedIndex > currentIndex) {
                    //add past class
                    $("#"+j).addClass("future");
                }if (loopedIndex === currentIndex) {
                    //add current class
                    $("#"+j).addClass("present");
                }else if (loopedIndex < currentIndex) {
                    //add future class
                    $("#"+j).addClass("past");
                };
            };
        };
    };
};
timeCheck();


//write click jquery function for the save button

//write a save function to local storage
var saveTasks = function() {
    localStorage.setItem("task", JSON.stringify());
};


//write a load function from local storage

//write a function that continues to recall the timeCheck function
