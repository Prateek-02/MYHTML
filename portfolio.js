document.getElementById('contact-link').addEventListener('click',function(event){
    event.preventDefault();
    var email = document.getElementById('email');
    if(email.style.display === 'none'){
        email.style.display = 'block';
    }
    else{
        email.style.display = 'none';
    }
});

