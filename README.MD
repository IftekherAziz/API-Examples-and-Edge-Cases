1. const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`
If Fake James gives you the bondCode variable and tells you to find the code in javascript , what will you get?

- 0010

2. const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
How would you access "sakib khan" ?

- (data.result[0].userName.name)

3. Which array method will you use to obtain an array containing the cubes of array p? const p=[1,2,3]; const q=p.__?__( n=> Math.pow(n, 3));

- map

4. How will you make the url dynamic using the food variable?
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s={food}`

- Use ${food} instead of {food}

5. How to set image src dynamically? 

const path = "https://www.images.com/cat.jpg"; 
const div= document.createElement('div');
div.innerHTML = `<img src=__?__ alt = "">`;

- src = ${path}

6. What is textContent in javascript? 

- All the text contents of a node and all  its descendants

7. Which one is not a data type in JSON?

- undefined

8. How will you dynamically pass the name variable as a parameter to the loadDetail function?

- `<div onclick="loadDetails('${name}')"> Biriyani </div>`

9. How will you handle the error? 

fetch(url)
 .then(res=>res.json())
 .then(data => console.log(data)
 .__?__(error => console.log(error))

 - catch error

 10. Which one is a proper output? 

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));

- {"hobbies":["dancing","singing","acting"]}