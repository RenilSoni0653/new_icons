function listTask(){
    $(document).ready(function () {
        $.getJSON("./task.json", function (data) {
            let list = '';
            list +='<table><thead><th>Task Name</th><th>Project Name</th><th>Due Date</th>';
            list += '<th>Priority</th><th>Status</th></thead><tbody><tr>';
            $.each(data.taskName, function (i, task) {
                list += '<td>'+ task.tasknm + '</td>';
                list += '<td>'+ task.projectName + '</td>';
                list += '<td>'+ task.date + '</td>';
                if(task.priority=='Low'){
                    list += '<td><button id='+task.priority+'>'+ task.priority + '</button></td>';
                }
                if(task.priority=='Medium'){
                    list += '<td><button>'+ task.priority + '</button></td>';   
                }
                if(task.priority=='High'){
                    list += '<td><button>'+ task.priority + '</button></td>';   
                }
                
                list += '<td>'+ task.status + '</td>';
                list += '</tr></tbody></table>';
            });
            $('#tasknew').html(list);
        });
    });
}


function completedTask(){
    $.getJSON("./task.json", function (data) {
        let list = '';
        list +='<table><thead><th>Task Name</th><th>Project Name</th><th>Due Date</th>';
        list += '<th>Priority</th><th>Status</th></thead><tbody><tr>';
        $.each(data.taskName, function (i, task) {
            if(task.status=='Completed'){
                list += '<td>'+ task.tasknm + '</td>';
                list += '<td>'+ task.projectName + '</td>';
                list += '<td>'+ task.date + '</td>';
                list += '<td>'+ task.priority + '</td>';
                list += '<td>'+ task.status + '</td>';
            }
            list += '</tr></tbody></table>';
        });
        $('#taskdone').html(list);
    });
}

//calling function
listTask();
completedTask();