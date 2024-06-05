let promise =new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve("result inside Promise")
    },5000)
});

async function asyncfun(){

    console.log("result before promise")

    let result= await promise;

    console.log(result);
    console.log("result after promise")
}


function normalfun(){
    console.log("from normal function")
}

// setTimeout(function(){
//     console.log("inside a normal timeout function"),4000
// })

asyncfun()
normalfun()