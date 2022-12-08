var count = 1; //for attempts

function addComment(){
    var cmnt = document.getElementById("comment").value;
    if(cmnt == ""){
        alert("Comment can not be empty!");
    }
    else{
        var disp_cmnt = document.getElementById("show-comment");
        var comment = disp_cmnt.innerHTML + "<br>" + "- " + cmnt;
        disp_cmnt.innerHTML = comment;
        document.getElementById("comment").value = "";  
    }
}

function updatedDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var currentDate = "Updated: " + day + "/" + month + "/" + year;
    var show_date = document.getElementById("updated-date");
    show_date.innerHTML = currentDate;
}

function addNewLog(current){
    var formLog = document.getElementsByClassName("form");
    // formLog[0].style.display = "block";
    if(formLog[0].style.display == "block"){
        formLog[0].style.display = "none";
        current.innerHTML = "Add New Log";
    }
    else{
        formLog[0].style.display = "block";
        current.innerHTML = "Close";
    }
}
function addNewLogDetails(){    
    var type1 = document.getElementById("type").value;
    var priority1 = document.getElementById("priority").value;
    var label1 = document.getElementById("label").value;
    var status1 = document.getElementById("status").value;
    var resolution1 = document.getElementById("resolution").value;
    var asignee1 = document.getElementById("asignee").value;
    var description1 = document.getElementById("description").value;
    var reporter1 = document.getElementById("reporter").value;

    if(type1 == ""){
        alert("Type field can not be empty!");
    }
    else if(priority1 == "" ){
        alert("Priority field can not be empty!");
    }
    else if(label1 == ""){
        alert("Label field can not be empty!");
    }
    else if(status1 == ""){
        alert("Status field can not be empty!");
    }
    else if(resolution1 == ""){
        alert("Resolution field can not be empty!");
    }
    else if(asignee1 == ""){
        alert("Asignee field can not be empty!");
    }
    else if(description1 == ""){
        alert("Description field can not be empty!");
    }
    else if(reporter1 == ""){
        alert("Reporter field can not be empty!");
    }
    else{
        count++;

        updatedDate();

        var cdate = document.getElementById("cdate");
        var des = document.getElementById("des");
        var rep = document.getElementById("rep");
        var asi = document.getElementById("asi");
        var res = document.getElementById("res");
        var sta = document.getElementById("sta");
        var typ = document.getElementById("typ");
        var pri = document.getElementById("pri");
        var lab = document.getElementById("lab");
        var logged = document.getElementById("logged");

        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        var createdDate = "Created: " + day + "-" + month + "-" + year;
        cdate.innerHTML = createdDate;

        rep.innerHTML = "Reporter: " + reporter1;
        asi.innerHTML = "Asignee: " + asignee1;
        des.innerHTML = "Description: " + description1;
        res.innerHTML = "Resolution: " + resolution1;
        sta.innerHTML = "Status: " + status1;
        pri.innerHTML = "Priority: " + priority1;
        typ.innerHTML = "Type: " + type1;
        lab.innerHTML = "Labels: " + label1;

        logged.innerHTML = count;

        document.getElementById("type").value="";
        document.getElementById("priority").value="";
        document.getElementById("label").value="";
        document.getElementById("status").value="";
        document.getElementById("resolution").value="";
        document.getElementById("asignee").value="";
        document.getElementById("description").value="";
        document.getElementById("reporter").value="";

        addNewLog();
    }
}
/*function validate(){
     var type = $('#fullname');
     var priority = $('#priority');
     var label = $('#label');
     var status = $('#status');
     var resolution = $('#resolution');
     var asignee = $('#asigee');
     var reporter = $('#reporter');
     var description = $('#description');
     let isValid = true;
     if (type.value == '') {
         type.nextElementSibling.textContent = 'This field is required.';
       isValid = false;
     } else {
         type.nextElementSibling.textContent = '';
     }
     if (priority.value == '') {
         priority.nextElementSibling.textContent = 'This field is required.';
         isValid = false;
     } else {
         priority.nextElementSibling.textContent = '';
     }
     if (label.value == '') {
         label.nextElementSibling.textContent = 'This field is required.';
       isValid = false;
     } else {
         label.nextElementSibling.textContent = '';
     }
     if (status.value == '') {
         status.nextElementSibling.textContent = 'This field is required.';
       isValid = false;
     } else {
        status.nextElementSibling.textContent = '';
     }
     if (resolution.value == '') {
         resolution.nextElementSibling.textContent = 'This field is required.';
       isValid = false;
     } else {
         resolution.nextElementSibling.textContent = '';
     }
     if (asignee.value == '') {
        asignee.nextElementSibling.textContent = 'This field is required.';
       isValid = false;
     } else {
         asignee.nextElementSibling.textContent = '';
     }
     if (reporter.value == '') {
         reporter.nextElementSibling.textContent = 'This field is required.';
       isValid = false;
     } else {
         reporter.nextElementSibling.textContent = '';
     }
     if (description.value == '') {
         description.nextElementSibling.textContent = 'This field is required.';
       isValid = false;
     } else {
         description.nextElementSibling.textContent = '';
     }

     if(isValid == true)
     {
        count++;    
    var type1 = document.getElementById("type").value;
    var priority1 = document.getElementById("priority").value;
    var label1 = document.getElementById("label").value;
    var status1 = document.getElementById("status").value;
    var resolution1 = document.getElementById("resolution").value;
    var asignee1 = document.getElementById("asignee").value;
    var description1 = document.getElementById("description").value;
    var reporter1 = document.getElementById("reporter").value;
    
    updatedDate();

    var cdate = document.getElementById("cdate");
    var des = document.getElementById("des");
    var rep = document.getElementById("rep");
    var asi = document.getElementById("asi");
    var res = document.getElementById("res");
    var sta = document.getElementById("sta");
    var typ = document.getElementById("typ");
    var pri = document.getElementById("pri");
    var lab = document.getElementById("lab");
    var logged = document.getElementById("logged");

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var createdDate = "Created: " + day + "-" + month + "-" + year;
    cdate.innerHTML = createdDate;

    rep.innerHTML = "Reporter: " + reporter1;
    asi.innerHTML = "Asignee: " + asignee1;
    des.innerHTML = "Description: " + description1;
    res.innerHTML = "Resolution: " + resolution1;
    sta.innerHTML = "Status: " + status1;
    pri.innerHTML = "Priority: " + priority1;
    typ.innerHTML = "Type: " + type1;
    lab.innerHTML = "Labels: " + label1;

    logged.innerHTML = count;
     }
 }

document.addEventListener('DOMContentLoaded', () => {
    $('#submit').addEventListener('click', validate);
    $('#type').focus();
    $('#priority').focus();
    $('#label').focus();
    $('#status').focus();
    $('#resolution').focus();
    $('#asignee').focus();
    $('#reporter').focus();
    $('#description').focus();
});*/

