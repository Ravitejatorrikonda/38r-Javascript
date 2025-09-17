/**
 * 
 * 
 */
function getWeather() {
    //getting data from the input
    let city = document.getElementById("city")
    showWeather(city.value)


}

//using async and await fetching the data city wise
async function showWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1b32c3b37fmsh869396a329e31bbp12c15djsn426915319b0e',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if(!response){
            throw new Error("wether not supported")
        }
        const result = await response.json();
        //function calling for append the data to the body
        getdata(result)
    } catch (error) {
        console.error(error);
    }

}
function getdata(result){
    //accessing the element for append the data to the body
    let item=document.getElementById("main")
    item.innerHTML=
    `<p>city: ${result.name}</p>
    <p>temparature: ${result.main.temp}</p>
    `
    // document.body.appendChild(item)

}