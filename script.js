var mainArea = $('.container')

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
    console.log("working")
}