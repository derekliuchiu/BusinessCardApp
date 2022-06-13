$('#submitinfo').submit(handle_submit);

function handle_submit() {
    usr = document.querySelector('#name').value;
    age = document.querySelector('#age').value;
    birthday = document.querySelector('#birthday').value;
    job = document.querySelector('#job').value;
    employer = document.querySelector('#employer').value;
    city = document.querySelector('#city').value;
    email = document.querySelector('#email').value;
    number = document.querySelector('#number').value;

    console.log(usr)
    alert(usr)

    $.ajax({
        method: 'PUT',
        url: 'https://nqyeixuru9.execute-api.us-west-1.amazonaws.com/test' + '/insert',
        data: JSON.stringify({
            "name" : usr,
            "age" : age,
            "birthday" : birthday,
            "job" : job,
            "employer" : employer,
            "city" : city,
            "email" : email,
            "number" : number
        }),
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });

};