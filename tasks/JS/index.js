const $ = (selector) => document.querySelector(selector);

function validateForm() {
    let tasks = $('#tasks');
    let deadline = $('#dl');
    let project = $('#prj');
    let priority = $('#prr');
    
    let taskpattern = /^[a-zA-Z]{3,30}$/;
    if (tasks.value == '') {
        $('#show_tasks').innerHTML = "Please enter task name with atleast of 3 characters";
        $('#show_tasks').style = "color: red";
    } else if (!taskpattern.test(tasks.value)) {
        $('#show_tasks').innerHTML =  "Please enter task name with letters only with 3 characters";
        $('#show_tasks').style = "color: red";
    } else {
        $('#show_tasks').innerHTML = "";
    }

    if(deadline.value == '') {
        $('#show_dl').innerHTML = 'Please enter a deadline';
        $('#show_dl').style = "color:red";
    } else {
        $('#show_dl').innerHTML = '';   
    }

    if(project.value == '') {
        $('#show_prr').innerHTML = 'Please select project';
        $('#show_prr').style = "color:red";
    } else {
        $('#show_prr').innerHTML = '';
    }

    if(priority.value == '') {
        $('#show_prj').innerHTML = 'Please select priority';
        $('#show_prj').style = "color:red";
    } else {
        $('#show_prj').innerHTML = '';
    }

    if(tasks.value != '' && deadline.value != '' && project.value != '' && priority.value != '') {
        window.location.href = "../tasks/lists/thank_page.html";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    $('#submit').addEventListener('click', validateForm);
    document.getElementById('tasks').focus();
});