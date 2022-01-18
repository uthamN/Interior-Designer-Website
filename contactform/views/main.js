$(document).ready(function(){
    $('.btn').click(function(event){
        console.log('clicked button')
        var fname = $('.fname').val()
        var lname = $('.lname').val()
        var fname = $('.fname').val()
        var number = $('.number').val()
        var email = $('.email').val()
        var statusElm = $('.status')
        statusElm.empty()
        
        if(fname.length>=5){   
        }else{
            statusElm.append('<div>Fname is not valid</div>')
        }
        if(lname.length>=1){   
        }else{
            statusElm.append('<div>lname is not valid</div>')
        }
        if(number = 10){

        }else{
            statusElm.append('<div>number is not valid</div>')

        }

        if(email.length >5 && email.includes('@') && email.includes('.')){

        }else {
            event.preventDeafault()
            statusElm.append('<div>Email is not valid</div>')
           }
        if(message.length > 20){
        }else {
            event.preventDeafault()
            statusElm.append('<div>Message is not valid</div>')
        }
          
    });
})

