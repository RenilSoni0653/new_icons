function messageValidate() {
    // For message inputs
    let chat_sub = document.getElementById('chat-input-id');
    let chat_team = document.getElementById('textarea-input-id');
    let chat_msg = document.getElementById('chat-input-txtarea');

    if(chat_msg.value == '') {
        document.getElementById('show_msg').innerHTML = 'Please enter a message';
        document.getElementById('show_msg').style="color: red";
    } else {
        document.getElementById('show_msg').innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('send').addEventListener('click', messageValidate);
});