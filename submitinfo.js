document.getElementById("submitinfo").onclick = function () {
    usr = document.querySelector('#name').value;
    age = document.querySelector('#age').value;
    birthday = document.querySelector('#birthday').value;
    job = document.querySelector('#job').value;
    employer = document.querySelector('#employer').value;
    city = document.querySelector('#city').value;
    email = document.querySelector('#email').value;
    number = document.querySelector('#number').value;

    $.ajax({
        method: 'POST',
        url: 'https://nqyeixuru9.execute-api.us-west-1.amazonaws.com/test' + '/insert',
        data: JSON.dumps({
            "name" : usr,
            "age" : age,
            "birthday" : birthday,
            "job" : job,
            "employer" : employer,
            "city" : city,
            "email" : email,
            "number" : number
        }),
        contentType: 'application/json'
    });

};