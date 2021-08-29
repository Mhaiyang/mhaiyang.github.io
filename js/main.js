//import emailjs from 'emailjs-com'
//import apiKeys from './apikeys'
//
//const sendEmail = e = >{
//  e.preventDefault() emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID).then(result = >{
//    console.log(result.text)
//  },
//  error = >{
//    console.log(error.text)
//  })
//}
//
//const form = document.querySelector('.form')form.addEventListener('submit',sendEmail)

$('#btnSubmit').click(function(e){
    var templateParams = {
        name: $('#first').val(),
        institute: $('#second').val(),
        email: $('#third').val()
    };
    emailjs.send('service_xbodefd', 'CVPR2021_PDNet', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your Request has been Sent!");
    }, function(error) {
       console.log('FAILED...', error);
       alert("Your Request failed!")
    });
});

