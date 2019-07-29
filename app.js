// console.log( "HELLO WORLD")
// var result=0;
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i]);
// }
// console.log(result)



// var fs = require('fs');
 
// var contents = fs.readFileSync(process.argv[2]);
// var lines = contents.toString().split('\n').length - 1;
 
// console.log(lines);


// var fs = require('fs');
 
// var contents = fs.readFile(process.argv[2],function(err,contents){
// 	var lig = contents.toString().split('\n').length - 1;
 
// console.log(lig);
// })



// var fs = require('fs');
 
// var contents = fs.readFile(process.argv[2],function(err,contents){
// 	var lig = contents.toString().split('\n').length - 1;
 
// console.log(lig);
// })

var fs = require('fs');
var path = require('path');
 
fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3]) {
            console.log(file);
        }
    });
});


