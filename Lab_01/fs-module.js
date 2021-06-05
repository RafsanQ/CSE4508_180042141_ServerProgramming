const fs = require("fs");

// // fs.writeFileSync("./contents/demoFile.txt", "We are learning NodeJs.")

// // fs.appendFileSync("./contents/demoFile.txt", "We are learning JavaScript.")

// // fs.rename("./contents/demoFile.txt", "./contents/renamedFile.txt", (err)=>{
// //     if(err)
// //         console.log(err);
// //     else
// //         console.log("Rename Successful");
// // })

// console.log("BEFORE");

// fs.readFile("./contents/renamedFile.txt", (err,data) => {
//     if(err)
//         console.log(err);
//     else{
//         fs.appendFile("./contents/renamedFile.txt", "Is this a synchronous Process?", (err)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log("append Successful");
//         });
//         fs.readFile("./contents/renamedFile.txt", "utf-8", (err,data)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(data);
//         })
//     }
// })

// console.log("AFTER");

fs.unlink("./contents/renamedFile.txt", (err)=>{
    if(!err)
        console.log("Deleted Successfully");
});
