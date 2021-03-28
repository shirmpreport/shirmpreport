const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = "NCR3Edg5gMdJ1GeFX0GR1m8uhXTrzu9gdJqgSoSZ";

const getNasaData = async () => {
    try {
        const respone = await fetch(`${url}${api_key}`);

        // Parses the response to JSON
        const data = await respone.json();
        setImage(data);
    } catch (error) {
        console.log(error);
    }
}

const setImage = data => {
    // Sets the image element to the daily NASA image
    document.getElementById('nasa-image-explanation').innerHTML = data.explanation;
    document.getElementById("main_container").style.backgroundImage = "url(" + data.hdurl + ")"
}

getNasaData();