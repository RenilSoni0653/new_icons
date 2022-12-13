const $ = (selector) => document.querySelector(selector);

function validateForm() {
    let goal_desc = $('#goal_desc');
    let status = $('#status');
    
    let goalNamePattern = /^[a-zA-Z]{3,30}$/;
    if (goal_desc.value == '') {
        $('#show_goal').innerHTML = "Please enter goal name with atleast of 3 characters";
        $('#show_goal').style = "color: red";
    } else if (!goalNamePattern.test(goal_desc.value)) {
        $('#show_goal').innerHTML =  "Please enter goal name with letters only with 3 characters";
        $('#show_goal').style = "color: red";
    } else {
        $('#show_goal').innerHTML = "";
    }

    if(status.value == '') {
        $('#show_status').innerHTML = 'Please select status of your goal';
        $('#show_status').style = "color:red";
    } else {
        $('#show_status').innerHTML = '';
    }

    if(goal_desc.value != '' && status.value != '') {
        window.location.href = "../tasks/lists/thank_page.html";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    $('#submit').addEventListener('click', validateForm);
    $('#goal_desc').focus();
});