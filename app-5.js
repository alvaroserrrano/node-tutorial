//WORKING WITH THE FILE SYSTEM PART -2
//WORK WITH FOLDERS
const fs = require('fs');
// fs.mkdir('tutorial-1', (error) => {
//     if(error){
//         console.log(error);
//     }else{
//         fs.rmdir('tutorial', (error) =>{
//             if(error){
//                 console.log(error);
//             }else{
//                 console.log('Successfully deleted folder');                
//             }
//         })
        
//     }
// })

// //create a file within a folder
// fs.mkdir('tutorial-2', (err) => {
//     if(err){
//         console.log(err);
        
//     }else{
//         fs.writeFile('./tutorial-2/tut-1.txt', '123', (err) => {
//             if(err){
//                 console.log(err);
                
//             }else{
//                 console.log('Successfile created file');
                
//             }
//         })
//     }
// })

//returns array containing files
fs.readdir('tutorial-3', (error, files) => {
    if(error){
        console.log(error);
        
    }else{
        for(let file of files){
            fs.unlink('./tutorial-3/' + file, (err) => {
                if(err){
                    console.log(error);
                    
                }else{
                    console.log('Successfully deleted file');
                    
                }
            })
        }
    }
})