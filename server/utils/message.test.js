var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate the correct message object',(done)=>{
        var from = 'Sergio';
        var text = 'Some message';
        var message = generateMessage(from,text);  
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
        done();
    });
});

describe('generateLocationMessage',()=>{
   it('should generate correct location object',()=>{
       var from = 'Sergio';
       var latitude = 15;
       var longitude = 19
       var url = 'https://www.google.com/maps?q=15,19';
       var message = generateLocationMessage(from,latitude,longitude);
       
       expect(message.createdAt).toBeA('number');
       expect(message).toInclude({from,url});
       
   }); 
});