var exec = require('child_process').exec;

var command = 'java -jar 3plibs/jsdoc-toolkit/jsrun.jar \
                         3plibs/jsdoc-toolkit/app/run.js -a \
                         -t=3plibs/jsdoc-toolkit/templates/jsdoc \
                         -d=site/docs src/core/global.js src/core/ src/helper/';

exec(command, function (error, output) { 
    console.log(output)
});