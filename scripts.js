const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector('.search');
const list = document.querySelector('.suggestions');
const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
  return cities.filter(city => {
    const regex = new RegExp(wordToMatch, 'gi');
    return city.city.match(regex) || city.state.match(regex);
  })
}

function displayMatches(){
  const matchArray = findMatches(this.value, cities);
  console.log(matchArray);
}

input.addEventListener('keyup', displayMatches);
input.addEventListener('change', displayMatches);
