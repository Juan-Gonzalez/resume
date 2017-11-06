var emailto = document.getElementById('emailToField');
var emailfrom = "gonzalezd.juan@gmail.com";
var subject = "Referees from Juan Gonzalez Dominguez";
var body = "Thank you for your interest. Please find contact details below:" + '\n\n' + "Marcus Bingenmann - International Communications Director - Macquarie University" + '\n' + "9850 - 6300 | marcus.bingemann@mq.edu.au | 0402 484 528" + '\n\n' + "Joe Giunta - International Contact Centre Manager - Macquarie University" + '\n' + "9850 - 6358 | joe.giunta@mq.edu.au | 0414 762 881" + '\n\n' + "Please do not hesitate to contact me if further information is required" + '\n\n' + "Juan Gonzalez";
var form = document.getElementById('emailform');

form.addEventListener('submit', function (event) {
  if (!emailto.value) {
    alert("Please enter values in the fields");
    } else {
        var to = emailto.value;
        var email = {"To": to, "CC": emailfrom, "Subject":subject, "Body": body};
        var jsonEmail = JSON.stringify(email);
        //var jsonEmailFields = json.stringify(emailFields);
        var request = new XMLHttpRequest();

        request.open("POST", "https://hooks.zapier.com/hooks/catch/1511719/ij1zxp/", true);
        request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) 
            console.log(request.responseText);};
        // request.setRequestHeader("Content-type","application-json"); ** problems with Zapier headers that is why headers are not use "Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response."
        request.send(jsonEmail);

        console.log(request.status);
        
        alert("Details are on its way!")
        //console.log(body);
        event.preventDefault();

    }});
          