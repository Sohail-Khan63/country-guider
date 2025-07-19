let btn = document.querySelector(".searchBtn");
let userInput = document.querySelector("#Country-name");
let countryFlag = document.querySelector(".country-flag");
let countryTitle = document.querySelector(".country-title");
let countryCapital = document.querySelector(".capital");
let countryContinent = document.querySelector(".continent");
let countryPopulation = document.querySelector(".population");
let countryCode = document.querySelector(".country-code");
let countryArea = document.querySelector(".Area");
let countryLanguage = document.querySelector(".language");
let countryMap = document.querySelector(".map a");
let parentSection = document.querySelector(".main-section");


const getCountryData = async () => {
  let countryName = userInput.value.trim();
  if (!countryName) {
    alert("Please Enter Country Name");
    parentSection.style.display = "none";
  } else {
    const URL = `https://restcountries.com/v3.1/name/${countryName.toLowerCase()}`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    let flag = data[0].flags?.png || data[0].flags?.svg;
    let name = data[0].name.common;
    let capital = data[0].capital;
    let continents = data[0].continents;
    let population = data[0].population;
    let Area = data[0].area;
    let languages = Object.values(data[0].languages || {}).join(", ");
    let codeCountry = data[0].fifa;
    let map = data[0].maps.googleMaps;
    countryCode.textContent = `CountryCode: ${codeCountry}`;
    countryCapital.textContent = `Capital: ${capital}`;
    countryContinent.textContent = `Continent: ${continents}`;
    countryPopulation.textContent = `Populations: ${population}`;
    countryArea.textContent = `Area: ${Area}`;
    countryLanguage.textContent = `Language: ${languages}`;
    if (flag) {
      countryFlag.src = flag;
    }
    if (name) {
      countryTitle.textContent = name;
    }
    if(map){
      countryMap.href = map;
    }
  }
  userInput.value = '';
  parentSection.style.display = "block";
};

btn.addEventListener("click", getCountryData);
