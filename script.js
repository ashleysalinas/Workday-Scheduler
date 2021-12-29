var mainArea = $('.container')
var dateArea = $('#currentDay')

//Function to display current day using Moment API
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY hh:mm:ss a')
    dateArea.text("Current Date/Time: " + rightNow)
}
setInterval(displayTime, 1);


var hours = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
var militaryTime = ['8', '9' ,'10', '11', '12', '13', '14', '15', '16', '17']
//For loop uses hours array to create buttons/sections in bulk
for (i = 0; i < hours.length; i++) {
    var hourBlock = $('<div>')
    mainArea.append(hourBlock)
    var hoursDisplay = $('<section>');
    hoursDisplay.text(hours[i]);
    hoursDisplay.attr("id", militaryTime[i]) // will use later for hour color coding
    hoursDisplay.addClass('hourDisplay') //for CSS
    hourBlock.append(hoursDisplay)
    var textArea = $('<textarea>')
    textArea.addClass('textArea') //for CSS
    hourBlock.append(textArea)
    var saveButton = $('<button>')
    saveButton.text("Save")
    hourBlock.append(saveButton)
    saveButton.addClass('saveBtn') // CSS
}

//Save button function uses info from hours display and text area to create local storage key/value
$('.saveBtn').on('click', function() {
    let btn = $(this);
    let id = btn.siblings('section').text() //Uses hour of corresponding hour block as the ID
    let textInput = btn.siblings('textarea'); //Pulls info from text area
    let savedText = textInput.val()
    localStorage.setItem(id, savedText)
})

//Pulls data from local storage and places it in text areas using corresponding hour display as key
$('textarea').each(function() {
    $(this).val(localStorage.getItem($(this).siblings('section').text()))
})

//Function to change hour colors based on time of day
function pastHours() {
    let currentHour = moment().format('HH') //picks current hour in military time
    $('section').each(function() {
        let id = $(this).attr("id")

        if (currentHour > id) {
            $(this).siblings('textarea').addClass('pastHour')
            $(this).siblings('textarea').removeClass('currentHour')
            $(this).siblings('textarea').removeClass('futureHour')
        } 
        if (currentHour == id) {
            $(this).siblings('textarea').addClass('currentHour')
            $(this).siblings('textarea').removeClass('pastHour')
            $(this).siblings('textarea').removeClass('futureHour')
        }
        if (currentHour < id) {
            $(this).siblings('textarea').addClass('futureHour')
            $(this).siblings('textarea').removeClass('currentHour')
            $(this).siblings('textarea').removeClass('pastHour')
        }
    })
    console.log(currentHour)
}
pastHours()