var mainArea = $('.container')
var dateArea = $('#currentDay')

//Function to display current day using Moment API
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY hh:mm:ss a')
    dateArea.text("Current Date/Time: " + rightNow)
}
setInterval(displayTime, 1);


var hours = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

//For loop uses hours array to create buttons/sections in bulk
for (i = 0; i < hours.length; i++) {
    var hourBlock = $('<div>')
    mainArea.append(hourBlock)
    var hoursDisplay = $('<section>');
    hoursDisplay.text(hours[i]);
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


$('.saveBtn').on('click', function() {
    let btn = $(this);
    let id = btn.siblings('section').text() //Uses hour of corresponding hour block as the ID
    let textInput = btn.siblings('textarea'); //Pulls info from text area
    let savedText = textInput.val()
    localStorage.setItem(id, savedText)
})


$('textarea').each(function() {
    $(this).val(localStorage.getItem($(this).siblings('section').text()))
})
