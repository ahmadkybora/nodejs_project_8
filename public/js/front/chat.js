$(() => {
    $("#send").click(() => {
        sendMessage({
            name: $("#name").val(),
            message: $("#message").val()
        });
    })
    getMessages()
});

function addMessages(message) {
    $("#messages").append(`
      <h4> ${message.name} </h4>
      <p>  ${message.message} </p>`)
}

function getMessages() {
    $.get('http://localhost:8000/panel/chats', (data) => {
        data.forEach(addMessages);
    })
}

function sendMessage(message) {
    $.post('http://localhost:8000/panel/chat/store', message)
}
