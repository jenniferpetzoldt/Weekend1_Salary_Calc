$(document).ready(onReady);

function onReady() {
    appendDom();
    $('#submit-btn').on('click', collectData);
    $('#submit-btn').on('click', clearData);
    $('#submit-btn').on('click', totalCost);
    $('.table').on('click', '#delete-btn', deleteRow);
}

let salaries = [];

function appendDom() {
    let table = $('<table class="table"></table>');
    table.append('<thead><tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th><th>Delete</th></thead>');
    let tbody = $('<tbody id="tableBody"></tbody>');
    $('.employees').append(table);
}

function clearData() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function collectData() {
    let firstNameIn = $('#firstName').val();
    let lastNameIn = $('#lastName').val();
    let idNumberIn = $('#idNumber').val();
    let titleIn = $('#jobTitle').val();
    let annualSalaryIn = $('#annualSalary').val();

    console.log('collecting data');

    $('.table').append('<tr><td>' + firstNameIn + '</td><td>' + lastNameIn + '</td><td>' + idNumberIn + '</td><td>' + titleIn + '</td><td>' + annualSalaryIn + '</td><td><button id="delete-btn">Delete</button></td></tr>');
    salaries.push(annualSalaryIn);
}

function deleteRow() {
    $(this).closest('tr').remove();
    console.log('delete row');
}

function totalCost() {
    let sum = 0;
    for (i = 0; i < salaries.length; i++) {
        sum += Number(salaries[i]);
        console.log(sum);
        $('.total').html('<p id="totalCost">Total Monthly Cost: $' + sum + '</p>');
        if (sum > 20000) {
            $('#totalCost').css('color', 'red');
            $('#totalCost').css('font-weight', 'bold');
            //$('#totalCost').css('background-color', 'red'); 
            //to show I can make the background color red. I prefer the astetic of making the text red
        }
    }
}