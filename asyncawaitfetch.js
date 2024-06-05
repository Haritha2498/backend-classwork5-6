// let promise=new Promise (function(resolve,reject){
//     setTimeout(function(){
//         let a=fetch('https://jsonplaceholder.typicode.com/todos/20')
//             let b=a.then(response =>response.json())
//             //let c=b.then(json =>console.log(json))
//             resolve(b)
//     },1000)
// })


async function funfetch(){

    let result=await fetch('https://jsonplaceholder.typicode.com/todos/20');
    const data = await result.json()
    console.log(data)
}

funfetch();