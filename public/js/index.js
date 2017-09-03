var socket = io();

socket.on('connect',function(){
    console.log('Connected to server');
    
    socket.emit('createMessage',{
        from:'Mariana',
        text:'Hola como estas?',
    });
});    
socket.on('disconnect',function (){
    console.log('Disconnected from server'); 
});

socket.on('newMessage',function(newMessage){
   console.log('Mew message',newMessage); 
});