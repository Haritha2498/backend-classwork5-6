async function fetchdata(url){
    try {
        const res=await fetch(url)
    const result=await res.json();
    
    const data=result.main.temp;
    console.log(result.main)
    console.log( "current temp:"+data)
    } catch (error) {
        console.error("error")
    }
    // finally{
    //     console.log("completed")
    // }
    
}



fetchdata("https://api.openweathermap.org/data/2.5/weather?lat=8.4833&lon=76.9167&appid=01b6b1db55b9f7dddb87a2a75043c50e&units=metric")