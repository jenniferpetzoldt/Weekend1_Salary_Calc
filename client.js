$(document).ready(onReady);

function onReady(){
    $('#submit-btn').on('click', collectData);
}

function collectData() {
    console.log('button was clicked');
    let firstName = $('#firstNumber').val();
    let lastName = $('#lastNmae').val();
    let idNumber = $('#idNumber').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    $('#employees').append('<p>' + firstName + lastName + idNumber + title +annualSalary + '</p>')
}