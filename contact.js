function SendMail(){
    var params = {
        from_name : document.getElementById("user_name").value,
        user_email : document.getElementById("user_email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_qwvr2s4", "template_9pw96ui", params).then(function (res) {
        alert("Success! " + res.status);
    })
}

