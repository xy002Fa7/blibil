(function (window) {
    function setsizeConfig(max,unit) {
        var config={};
        for(var i=0;i<max;i++){
            config[i]=`${i}${unit}`;
        }
        return config;
    }
    window.tailwind.config = {
        darkMode:"selector",
        theme: {
          extend: {
            colors: {
              clifford: '#da373d',
            },
            width: setsizeConfig(4500,"px"),
            height: setsizeConfig(3000,"px"),
          },
        },
      }
})(window)