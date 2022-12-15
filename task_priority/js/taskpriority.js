const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;

let taskNew=['Plan the design', 'Write the chapter', 'Proofread the chapter'];
let taskDate=['01/01/23','01/02/23','03/02/23'];
let taskPriority=['High', 'Low', 'High']

let taskDone=['Project 2 testing', 'Project 1 Team Meeting']


//calling function
listTask();
listComplete();

//declaring function
function listTask(){
    let task='';
    let i=0;
    task+= '<thead><tr><th>Tasks</th><th>Due Dates</th><th>Priority</th></tr></thead>';
    taskNew.forEach((e1)=>{
            task+= `<tr><td> ${e1} </td><td> ${taskDate[i]} </td><td> ${taskPriority[i]} </td></tr>`
            i++;
        });
    document.getElementById('tasknew').innerHTML = task;
}

function listComplete(){
    let complete='';
    let i=0;
    taskDone.forEach((e2)=>{
            complete+= `<tr><td> ${e2} </td><td> ${currentDate} </td></tr>`
            i++;
        });
    document.getElementById('taskdone').innerHTML = complete;
}

