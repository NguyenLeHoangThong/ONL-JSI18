const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2319b966d9msh2c4a53a1ab88c27p14683djsn71589ad057b5',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Vietnam', options)
	.then(response => response.json())
	.then(response => {
        const deaths = response.data.deaths

        const h1Tag = document.getElementById("deathPeopleNumber")

        h1Tag.innerHTML = `<h1>${deaths}</h1>`
    })
	.catch(err => console.error(err));



