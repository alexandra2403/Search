//to use this program you need to install find-in-files tool 

let findInFiles = require('find-in-files'); 

let myArgs = process.argv.slice(2);	
		
let EXT =  myArgs[0];						
let TEXT = myArgs[1];						

if (myArgs[0]== undefined) {
	console.log('USAGE: node search [EXT] [TEXT]');
} else {
	findInFiles.find(TEXT, '.', EXT).then(function(results) {
        for (let result in results){ 
            console.log(__dirname + '\\' + result);
        }	
		if (Object.keys(results).length == 0){
			console.log('No file was found.');
		}
    });
 };
	
	
	
	
