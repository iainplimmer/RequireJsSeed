(function(){
    define(['helpers_module'], function (stringHelpers) {
        return {
            SayHello : function (name) {
                return stringHelpers.Shout('Hello ' + name);
            },
            SayGoodbye : function (name) {
                return 'Goodbye ' + name + ':)';
            }
        };  
    });
})();
