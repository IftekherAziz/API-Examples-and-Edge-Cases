const loadRandomUsers = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
loadRandomUsers();

const displayUsers = users => {
    const genderTag = document.getElementById('gender');
    gender = genderTag.innerText = users.results[0].gender;

    const nameTag = document.getElementById('name');
    nameTag.innerText = users.results[0].name.title + ' ' + users.results[0].name.first + ' ' + users.results[0].name.last;


    const locationTag = document.getElementById('location');
    locationTag.innerText = users.results[0].location.country + ', ' + users.results[0].location.city + ', ' + users.results[0].location.street.name + ', ' + users.results[0].location.street.number;

    const imageTag = document.getElementById('image');
    imageTag.src = users.results[0].picture.large;
}