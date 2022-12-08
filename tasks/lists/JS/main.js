var tasksName = [
    [
        '1',
        'Header Page',
        '24/12/2022',
        'HTML',
        '<div class="lst_high_type_priority">High</div>',
        '<a href="../edit_task.html"><i class="fa fa-edit"></i></a>  |   <i class="fa fa-trash"></i>'
    ],
    [
        '2',
        'Sidebar',
        '09/02/2022',
        'Javascript',
        '<div class="lst_low_type_priority">Low</div>',
        '<a href="../edit_task.html"><i class="fa fa-edit"></i></a>  |   <i class="fa fa-trash"></i>'
    ],
    [
        '3',
        'Goals Page',
        '12/02/2022',
        'Live website',
        '<div class="lst_medium_type_priority">Medium</div>',
        '<a href="../edit_task.html"><i class="fa fa-edit"></i></a>  |   <i class="fa fa-trash"></i>'
    ],
    [
        '4',
        'Messages Page',
        '02/04/2022',
        'Dynamic program',
        '<div class="lst_high_type_priority">High</div>',
        '<a href="../edit_task.html"><i class="fa fa-edit"></i></a>  |   <i class="fa fa-trash"></i>'
    ],
    [
        '5',
        'Footer Page',
        '01/12/2022',
        'Tic tac toe',
        '<div class="lst_medium_type_priority">Medium</div>',
        '<a href="../edit_task.html"><i class="fa fa-edit"></i></a>  |   <i class="fa fa-trash"></i>'
    ],
    [
        '6',
        'Calendar',
        '01/12/2022',
        'CSS',
        '<div class="lst_low_type_priority">Low</div>',
        '<a href="../edit_task.html"><i class="fa fa-edit"></i></a>  |   <i class="fa fa-trash"></i>'
    ]
];

//  const $ = (selector) => document.querySelector(selector);

// function generateTable() {
//     // creates a <table> element and a <tbody> element
//     // const tbl = document.createElement("table");
//     const tbl = $('#lst_myTable');
//     const tblBody = document.createElement("tbody");
  
//     // creating all cells
//     for (let i = 0; i < 2; i++) {
//       // creates a table row
//       const row = document.createElement("tr");
  
//       for (let j = 0; j < 2; j++) {
//         // Create a <td> element and a text node, make the text
//         // node the contents of the <td>, and put the <td> at
//         // the end of the table row
//         const cell = document.createElement("td");
//         const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       }
  
//       // add the row to the end of the table body
//       tblBody.appendChild(row);
//     }
  
//     // put the <tbody> in the <table>
//     tbl.appendChild(tblBody);
//     // appends <table> into <body>
//     document.body.appendChild(tbl);
//     // sets the border attribute of tbl to '2'
//     // tbl.setAttribute("border", "2");
//   }
  

// document.addEventListener('DOMContentLoaded', () => {
//     $('#gen').addEventListener('click', generateTable);
// });