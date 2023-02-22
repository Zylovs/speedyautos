function sendEmail(){
    Email.send({
        
        Host : "smtp.elasticemail.com ",
        Username : "loganpizzawilson@gmail.com",
        Password : "2AA8D34FBC62B06DEA09CC0E9D6B6776FC8F",
        To : 'loganpizzawilson@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert("Message Sent Succesfully")
    );
}