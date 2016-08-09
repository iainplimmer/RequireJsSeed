(function(){
    requirejs.config({
        baseUrl: "/Scripts/modules",
        urlArgs: 'cacheversion=123', 
        paths: {
            'greeter_module' : 'greeter',
            'helpers_module' : 'stringhelpers'
        }       
    });
})();
