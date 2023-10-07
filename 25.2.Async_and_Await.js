async function Weather() {
    let delhiWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("27 Deg")
            }, 2000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("21 Deg")
            }, 5000)
    })

    // delhiWeather.then(alert)  -->alert "27 deg" in 2sec
    // bangaloreWeather.then(alert)  -->alert "21 deg" in 2sec

    console.log("Fetching Delhi Weather Please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW)

    console.log("Fetching Bangalore Weather Please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather: " + bangaloreW)
    return [delhiW, bangaloreW]
}

/*
//we can use different asyn function parallelly without having a flow
let cherry=()=>{
    console.log("Hey i am cherry and i am not waiting!");
}

console.log("Welcome to weather controller room!")
let a=Weather();
let b=cherry();
a.then((value)=>{
    console.log(value);
})
//console.log(Weather());
*/

//But we want to execute different asyn function according to their flow,we convert these function to asyn funcion!
let cherry=async()=>{
    console.log("Hey i am cherry and i am not waiting!");
}

const main1 = async() => {
    console.log("Welcome to weather control room")
    let a = await Weather() //a takes value of weather
    let b = await cherry() 
    console.log(a);
}
main1()


//watch codewithharry video number "59" 