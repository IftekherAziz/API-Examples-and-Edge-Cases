/**
 * When the page loads, fetch the data from the API and then display the meals.
 */
const loadMeals = (searchText) => {
  // fetch the data from the API
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

/* ---------------------------------------------------------------------------- */

const displayMeals = (meals) => {
  // console.log(meals);

  // step 1: get the parent element:
  const mealsContainer = document.getElementById("meals-container");

  // step 2: clear the parent element:
  mealsContainer.innerHTML = "";

  // step 3: create a child element:
  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");

    // step 4: set the innerHTML of the child element:
    mealDiv.innerHTML = `
        <div class="card">
            <img src="${
              meal.strMealThumb
            }" class="card-img-top" alt="Food Image">
            <div class="card-body">
                <h4 class="card-title">${meal.strMeal}</h4>             
                <p class="card-text">${meal.strInstructions
                  .split(" ")
                  .slice(0, 15)
                  .join(" ")}</p> 
                <div class="d-grid">
                 <button onclick="leadMealDeatil(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsDetails">Details</button>               
                </div>        
            </div>
        </div>
      `;
    // step 5: append the child element to the parent element:
    mealsContainer.appendChild(mealDiv);
  });
};

/* ------------------------------------------------------------------------------ */

const searchMeals = () => {
  const searchText = document.getElementById("searchField").value;
  // console.log(searchText);

  // Search Meals
  loadMeals(searchText);
};

/* -------------------------------------------------------------------------------- */

const leadMealDeatil = (idMeal) => {
  // console.log(idMeal);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealsDetail(data.meals[0]));
};

/* ---------------------------------------------------------------------------------- */

const displayMealsDetail = (meal) => {
  // console.log(meal);
  document.getElementById("mealDetailsTitle").innerText = meal.strMeal;
  const mealDetailsBody = document.getElementById("mealDetailsBody");
  mealDetailsBody.innerHTML = `
    <img src="${
      meal.strMealThumb
    }" class="card-img-top img-fluid" alt="Food Image">
    <h5 class="card-text pt-3">Type: ${meal.strArea}</h5>
    <p class="card-text">${meal.strInstructions
      .split(" ")
      .slice(0, 50)
      .join(" ")}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary d-grid">Watch Video</a>
  `;

}


/* ----------------------------------------------------------------------------------- */
// call the function
loadMeals('chicken');
