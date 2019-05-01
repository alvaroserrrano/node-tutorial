// //WORKING WITH THE FILE SYSTEM MODULE
const fs = require('fs');
// //create a file; params(nameOfFile, contentOfFile, callBack(error))
// fs.writeFile('example.txt', 'this is an example', (error) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log('File was successfully created');
//         //params for readFile(nameOfFile, encoding type, callback)
//         fs.readFile('example.txt', 'utf-8',(error, file) => {
//             if(error){
//                 console.log(error);
//             }else{
//                 console.log(file);
//             }
//         })
//    }
// });

//RENAME FILE
// fs.rename('example.txt', 'example-2.txt', (error => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Succesfile renamed the file");
//     }
// }))


// //APPEND DATA TO FILE
// fs.appendFile('example-2.txt', 'Some data appended', (error) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log('Successfully appended data to the file');
//     }
// })

//DELETE A FILE
fs.unlink('example-2.txt', (error) => {
    if(error){
        console.log(error);
    }else{
        console.log('Successfully deleted the file');
        
    }
})