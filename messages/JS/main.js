function messageValidate() {
    // For message inputs
    let chat_sub = document.getElementById('chat-input-id');
    let chat_team = document.getElementById('textarea-input-id');
    let chat_msg = document.getElementById('chat-input-txtarea');

    if(chat_sub.value == '') {
        document.getElementById('show_sub').innerHTML = 'Please enter subject';
        document.getElementById('show_sub').style="color: red";
    } else {
        document.getElementById('show_sub').innerHTML = '';
    }

    if(chat_team.value == '') {
        document.getElementById('show_team').innerHTML = 'Please enter one of the team member name';
        document.getElementById('show_team').style="color: red";
    } else {
        document.getElementById('show_team').innerHTML = '';
    }

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

// Table JS

var msgsName = [
    [
        '1',
        'Nrup Patel',
        'Unseen',
        '<a href="../messages/message_seen.html"><i class="fa fa-eye"></i></a>  |   <i class="fa fa-trash"></i>'
    ],
    [
        '2',
        'Jai Darji',
        'Seen',
        '<a href="../messages/message_seen.html"><i class="fa fa-eye"></i></a>  |   <i class="fa fa-trash"></i>'
    ],
    [
        '3',
        'Manav Ranpura',
        'Seen',
        '<a href="../messages/message_seen.html"><i class="fa fa-eye"></i></a>  |   <i class="fa fa-trash"></i>'
    ],
    [
        '4',
        'Raj Soni',
        'Unseen',
        '<a href="../messages/message_seen.html"><i class="fa fa-eye"></i></a>  |   <i class="fa fa-trash"></i>'
    ]
];