(function(){
    define([], function () {
        return {
            PutInQuotes : function (string) {
                return '"' + string + '"';
            },
            Shout : function (string) {
                return string.toUpperCase() + '!!!!!!!';
            }
        };    
    });
})();
