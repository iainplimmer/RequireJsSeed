//  On each page we can now 'require' our modules and use the revealed functions        
requirejs(['greeter_module'], function(Greeter){   
    var username = 'Iain';
    console.log(Greeter.SayHello(username));
});