class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "English", "Hello World!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let france = new Country("France", "French", "Bonjour le monde!", ["blue", "white", "red"]);
let germany = new Country("Germany", "German", "Hallo Welt!", ["black", "red", "gold"]);
let russia = new Country("Russia", "Russian", "Привет мир!", ["white", "blue", "red"]);

//I know this isnt very clean but I added this array since the instructions said that the countries needed to be all in one array.
const countries = [usa, mexico, france, germany, russia];


function DisplayColor() {
    let country;
    let input = document.getElementById("CountryList").value;
    let flag = document.getElementById("flag");

    //else-ifs to decide country
    if (input === "USA") {
        country = countries[0];
        flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg");
    }
    else if (input === "Mexico") {
        country = countries[1];
        flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg");
    }
    else if (input === "France") {
        country = countries[2];
        flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg");
    }
    else if (input === "Germany") {
        country = countries[3];
        flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg");
    }
    else if (input === "Russia") {
        country = countries[4];
        flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg");
    }
    //Countries info
    let name = document.getElementById("CountryName");
    name.innerText = country.name;
    let lang = document.getElementById("OfficialLanguage");
    lang.innerText = country.lang;
    let greeting = document.getElementById("HelloWorld");
    greeting.innerText = country.greeting;

    //coloring
    let color1 = document.getElementById("Color1");
    color1.style.backgroundColor = country.colors[0];

    let color2 = document.getElementById("Color2");
    color2.style.backgroundColor = country.colors[1];

    let color3 = document.getElementById("Color3");
    color3.style.backgroundColor = country.colors[2];

    //this is just to ensure that "germany" is still visible in the black background color
    if(country === germany)
    {
        name.style.color = "white";
    }
    else
    {
        name.style.color = "black";
    }
}