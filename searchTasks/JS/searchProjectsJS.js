/* function showprojectList() {
    let projectList = "";
    document.getElementById("projectList").innerHTML = "";
    tasks.forEach(
        (task) => (projectList += `<li>${task}</li>`)
    );
    document.getElementById("projectList").innerHTML =  projectList;
}
 */
/* function myFunction() {
    var input, filter;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    tasks.forEach(task => {
        console.log(task);
        if(!task.toLowerCase().includes(filter)){
            console.log("inn");
            tasks.splice(tasks.findIndex(task),1);
         }else if(tasksCopy.includes(filter) || !task.toLowerCase().includes(filter)){
            tasks.push(task);
            console.log("22"+!task.toLowerCase().includes(filter));
        }
    });
    showprojectList();
} */

$(document).ready(function () {
    $.getJSON("../searchTasks/JSON/projects.json", function (data) {
        let html = '';
        $.each(data.projectsName, function (i, project) {
            html += `<div class = "project" data-popup-open="popup-project">`
                html += '<img class="project_logo" src=' + project.logo + ' alt = "logo"/>';
                html += '<div class="projectDetails">'
                html += '<a href="#" onclick="openPopup(' + project.id + ')" ><h2>' + project.name + '</h2></a>';
                html += '<p><b>Due Date: </b>' + project.dueDate + '</p>';
                html += '<p><b>Status: </b>' + project.status + '</p>';
                html += '<p><b>Priority: </b>' + project.priority + '</p>';
                html += '<p><b>Description: </b>' + project.desc + '</p> </div>';
                html += '</div>'
        });
        $('#projectList').html(html);
    });
});

function searchProject() {
    $('#projectList').html('');
    let searchField = $('#search').val();
    let expression = new RegExp(searchField, "i");
    let html = '';
    $.getJSON("../searchTasks/JSON/projects.json", function (data) {
        $.each(data.projectsName, function (key, project) {
            if (project.name.search(expression) != -1 || project.status.search(expression) != -1
                || project.desc.search(expression) != -1 || project.priority.search(expression) != -1) {
                html += `<div class = "project" data-popup-open="popup-project">`
                html += '<img class="project_logo" src=' + project.logo + ' alt = "logo"/>';
                html += '<div class="projectDetails">'
                html += '<a href="#" onclick="openPopup(' + project.id + ')" ><h2>' + project.name + '</h2></a>';
                html += '<p><b>Due Date: </b>' + project.dueDate + '</p>';
                html += '<p><b>Status: </b>' + project.status + '</p>';
                html += '<p><b>Priority: </b>' + project.priority + '</p>';
                html += '<p><b>Description: </b>' + project.desc + '</p> </div>';
                html += '</div>'
            }
        });
        $('#projectList').html(html);
    });

}

function openPopup(projectId) {
    // Open
    $('[data-popup-open]').on('click', function (e) {
        console.log(projectId);
        $.getJSON("../searchTasks/JSON/projects.json", function (data) {
            let html = '';
            $.each(data.projectsName, function (key, project) {
                if (project.id == projectId) {
                    html += `<div class = "project">`
                    html += '<img class="project_logo" src=' + project.logo + ' alt = "logo"/>';
                    html += '<div class="projectDetails">'
                    html += '<h2>' + project.name + '</h2>';
                    html += '<p><b>Due Date: </b>' + project.dueDate + '</p>';
                    html += '<p><b>Project: </b>' + project.status + '</p>';
                    html += '<p><b>Priority: </b>' + project.priority + '</p>';
                    html += '<p><b>Description: </b>' + project.desc + '</p> </div>';
                    html += '<p><a href="#" class = "close_link"  data-popup-close="popup-project" onclick = "closePopUp();">Close</a></p>';
                    html += '<a href="#" onclick = "closePopUp();" class="popup-close" data-popup-close="popup-project">x</a>';
                    html += '</div>'
                }
                $('.popup-inner').html(html);
            });
        });
        var targeted_popup_class = $(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        e.preventDefault();

    });

};

function  closePopUp(){
    // Close
    console.log("innnclose");
    document.querySelector('.popup').style.display = 'none';
};

