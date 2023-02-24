const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");
  countries.forEach((country) => {
    // console.log(country);
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
            <img src="${country.flags.png}">
            <h4>Country Name: ${country.name.common}</h4>
            <p>Capital: ${country.capital}</p>
            <button onclick="loadCountryByDetails('${country.cca2}')">Details</button>
           
        `;
    countriesDiv.appendChild(div);
  });
};



const loadCountryByDetails = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};

const displayCountryDetails = (country) => {
    
    const countryDiv = document.getElementById("country-details");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <img src="${country.flags.png}">
    <h3>${country.name.common}</h3>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    <p>Sub Region: ${country.subregion}</p>
    `;
};

loadCountries();


