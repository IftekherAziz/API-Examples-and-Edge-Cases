const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => displayCountries(data));
}


const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
   
   // Method: 1
    // console.log(countries);
   /*  for (const country of countries) {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
        `;
        countriesDiv.appendChild(div);
    } */

    // Method: 2
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <img src="${country.flags.png}">
            <h4>Country Name: ${country.name.common}</h4>
            <p>Capital: ${country.capital}</p>
            <p>Region: ${country.region}</p>
            <p>State: ${country.subregion}</p>
            <p>Population: ${country.population}</p>
            <p>Area Code: ${country.area}</p>
            <p>Time Zone: ${country.timezones}</p>
            <img src="${country.maps.googleMaps}"></img>
        `;
        countriesDiv.appendChild(div);
    });
}

loadCountries();

