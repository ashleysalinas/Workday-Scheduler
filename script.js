var mainArea = $('.container')
var dateArea = $('#currentDay')

//Function to display current day using Moment API
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY hh:mm:ss a')
    dateArea.text("Current Date/Time: " + rightNow)
}
setInterval(displayTime, 1);
var hours = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];


for (i = 0; i < hours.length; i++) {
    var hourBlock = $('<div>')
    mainArea.append(hourBlock)
    var hoursSlot = $('<section>');
    hoursSlot.text(hours[i]);
    hourBlock.append(hoursSlot)
    var textArea = $('<input>')
    hourBlock.append(textArea)
    var saveButton = $('<button>')
    saveButton.text("Save")
    hourBlock.append(saveButton)
    saveButton.on('click', saveHourInfo)

}

function saveHourInfo() {
   
}