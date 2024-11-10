
// AngularJS Application Code
var app = angular.module('myDigitalClock', []);

app.controller('ClockCtrl', function($scope, $interval) {
    $scope.timeStamp = function() {
        $scope.monthArray = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        $scope.dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var date = new Date();
        var day = date.getDate();
        var month = $scope.monthArray[date.getMonth()];
        var year = date.getFullYear();
        var week = $scope.dayArray[date.getDay()];

        var time = date.toLocaleTimeString();
        var hour = time.substring(0, time.search(":"));
        var mint = time.substring(time.search(":") + 1, time.lastIndexOf(":"));
        var daylight = time.substring(time.search("M") - 2, time.search("M") + 1);

        return week + ", " + month + " " + day + ", " + year + ". " + hour + ":" + mint + daylight;
    };

    $interval(function() {
        $scope.timeStamp();
    }, 1000);

    // Updated Functions in AngularJS Controller
    $scope.futDate = function() {
        var nameElement = document.getElementById("DaysToAdd").value;
        var myDay = new Date();
        myDay.setDate(myDay.getDate() + parseInt(nameElement));
        document.getElementById("display").value = myDay.toDateString();
    };

    $scope.pastDate = function() {
        var nameElement = document.getElementById("DaysToAdd").value;
        var myDay = new Date();
        myDay.setDate(myDay.getDate() - parseInt(nameElement));
        document.getElementById("display").value = myDay.toDateString();
    };

    $scope.futWeek = function() {
        var nameElement = document.getElementById("DaysToAdd").value;
        var myDay = new Date();
        myDay.setDate(myDay.getDate() + (parseInt(nameElement) * 7));
        document.getElementById("display").value = myDay.toDateString();
    };

    $scope.pastWeek = function() {
        var nameElement = document.getElementById("DaysToAdd").value;
        var myDay = new Date();
        myDay.setDate(myDay.getDate() - (parseInt(nameElement) * 7));
        document.getElementById("display").value = myDay.toDateString();
    };
});

// Window Style Functionality - Load DOM first
window.onload = function() {
    const minimizeBtn = document.getElementById("minimize");
    const closeBtn = document.getElementById("close");
    const resizeBtn = document.getElementById("resize");
    const windowDiv = document.querySelector(".window");
    const windowContent = document.querySelector(".window-content");

    // Minimize functionality
    minimizeBtn.addEventListener("click", () => {
        windowContent.style.display = windowContent.style.display === "none" ? "block" : "none";
    });

    // Close functionality
    closeBtn.addEventListener("click", () => {
        windowDiv.style.display = "none";
        
    });

    // Resize functionality
    resizeBtn.addEventListener("click", () => {
        if (windowDiv.classList.contains("fullscreen")) {
            windowDiv.classList.remove("fullscreen");
            windowDiv.style.width = "400px";
        } else {
            windowDiv.classList.add("fullscreen");
            windowDiv.style.width = "90%";
        }
    });
};
