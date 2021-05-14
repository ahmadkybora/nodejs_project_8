var socket = io();
socket.on('message', addMessages);

/*const msgText = document.querySelector('#msg');
const btnSend = document.querySelector('#btn-send');
const chatBox = document.querySelector('.chat-content');
const displayMsg = document.querySelector('.message');

let name;

do {
    name = prompt('what is your name?')
} while (!name);

document.querySelector('#your-name').textContent = name;


btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    sendMsg(msgText.value);
    msgText.value = '';
    msgText.focus();
    chatBox.scrollTop = chatBox.scrollHeight;
});

const sendMsg = message => {
    let msg = {
        user: name,
        message: message.trim(),
    };

    display(msg, 'you-message');

    socket.emit('sendMessage', msg);
};


socket.on('sendToAll', msg => {
    display(msg, 'other-message');
    chatBox.scrollTop = chatBox.scrollHeight;
});


const display = (msg, type) => {
    const msgDive = document.createElement('dive');
    let className = type;
    msgDive.classList.add(className, 'message-row');
    let times = new Date().toLocaleTimeString();

    let innerText = `
    <div class="message-title">
    <span>${msg.user}</span>
    </div>
    <div class="message-text">
    ${msg.message}
    </div>
    <div class="message-time">
    ${times}
    </div>
    `;

    msgDive.innerHTML = innerText;
    displayMsg.appendChild(msgDive);
}*/
