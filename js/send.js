
function send(){
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let phone = document.getElementById("phone").value
  let message = document.getElementById("message").value
  //console.log('Name =',name, '\nEmail =', email, '\nPhone =', phone, '\nMessage =', message);
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "samialforwarder@outlook.com",
    Password : "65813813FBED6054557677111D69A7EC4935",
    To : 'info@saaccountings.com',
    From : "samialforwarder@outlook.com",
    Subject : name,
    Body : ("{Name: " + name + "} , {Email: " + email + " },  {Phone: " + phone + " },  {Message: " + message + "}" )
})
}