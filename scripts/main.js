// ! XMLHttpRequest - For info, not that useful anymore

// const apiRequestUrl = "https://swapi.dev/api/planets/1/";


// const xmlReq = new XMLHttpRequest("GET", apiRequestUrl);

// xmlReq.onload = function(){
// 	console.log('it loaded');
// 	const data = JSON.parse(this.responseText);
// 	console.log(data);
// 	console.log(data.name);
// }

// xmlReq.onerror = function() {
// 	console.log('Error');

// }

// xmlReq.open("GET", apiRequestUrl);

// xmlReq.send();

// ! Fetch Request

// fetch(apiRequestUrl) // Fetch is going to return a promise
// .then((res) => { // We then take the response, and return the response using the .json method, which also returns a promise
// 	console.log("RESOLVED", res);
// 	return res.json()
// })
// .then((data) => { // We then take that response (data) and log it so we can read the data
// 	console.log("This is my data", data);
// })
// .catch((e) => {
// 	console.log("ERROR", e);
// });

// ! ASYNC Function

// const loadSW = async () => {
// 	try {
// 	const res = await fetch(apiRequestUr);
// 	const data = await res.json();
// 	console.log(data);
// } catch (e) {
// 	console.log('Incorrect destination', e);
// }
// };

// loadSW();

// ! Axios

// axios.get(apiRequestUrl)
// .then((res) => {
// 	console.log("RESPONSE", res);
// });

// const getSWPerson = async (id) => {
// 	const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
// 	.then((res) => {
// 		console.log("ASYNC Response", res);
// 	})
// 	.catch((e) => {
// 		console.log("ERROR", e);
// 	})
// }

// getSWPerson(4);

// ! Headers in Axios

// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');



// const addNewJoke = async () => {
// 	const jokeText = await getDadJoke();
// 	const newLI = document.createElement('li');
// 	newLI.append(jokeText);
// 	jokes.append(newLI);
// }

// const getDadJoke = async () => {
// 	const config = { headers: { Accept: 'application/json' }};
// 	const res = await axios.get("https://icanhazdadjoke.com", config)
// 	return res.data.joke;
// };

// button.addEventListener('click', addNewJoke);

// ! TV Show Search APP - Axios

const form = document.querySelector('#tv-form');
const button = document.getElementsByTagName('button');

form.addEventListener('submit', async function (e) {
	e.preventDefault();
	const userSearchQuery = form.elements.query.value;
	const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userSearchQuery}`);
	console.log(res.data[0].show.image.medium);
	makeImages(res.data)
	form.elements.query.value = '';
})


const makeImages = (shows) => {
	for (const result of shows) {
		if(result.show.image) {
		const img = document.createElement('img');
		img.src = result.show.image.medium;
		document.body.append(img);
		}
	}
}




