
function removeFun(){
    console.log("js is working !!!")
    var el=document.getElementById('chat');
    
    console.log(el);

    if(el.classList.contains('chat-box')){
      console.log("inside the chat-box")
      el.classList.remove('chat-box');
      el.classList.add('removeChat');
   
     
    }
    else{
       el.classList.remove('removeChat');
       el.classList.add('chat-box');
    
      
    
     
       
    }
}