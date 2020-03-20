let slider = document.getElementById("myRange"); //getting the number of days
let day = document.getElementById("day"); // 
updateDays(); //gets specific day from slider value
updateBackground();
let myDay = document.getElementById("action"); 
function getDay() { //getting days

    let baseDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Weekend"];
    let baseDay = baseDays[slider.value];
   
   
    return baseDay ;
}

function updateDay () {
    if (slider.value == 0)  {
        myDay.innerHTML = "Work from a Hotel lobby before you check in!";
    }
    else if (slider.value > 0 && slider.value < 4) {
        myDay.innerHTML = "You're staying in a hotel, you can work from your room!"
    } else if ( slider.value == 4) {
        myDay.innerHTML = "Work from a Hotel lobby afetr you check out!";
    }
     else  myDay.innerHTML = "It's Van time!"
}

function updateDays (){
     day.innerHTML = `${(getDay()).toString()}`;
    }

function getColor() {
   
    let colors = ['yellow','hotpink','chartreuse', 'lightBlue', 'orange', 'red',];
    return colors[slider.value]
}
function updateBackground() {
slider.style.background = getColor();

}

function updateDayColor () {
myDay.style.color = getColor();
}

slider.addEventListener("change", function () {
   updateBackground();
   updateDayColor();
    updateDay();
    updateDays();
});

