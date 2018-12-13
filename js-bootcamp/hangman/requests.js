const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })

    request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send() 
})

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const requestCountry = new XMLHttpRequest()

    requestCountry.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const countries = JSON.parse(e.target.responseText)
            countries.forEach((country) => {
                if (country.alpha2Code === countryCode) {
                    resolve(country.name)
                }
            })
        } else if (e.target.readyState === 4) {
            reject('An error has occurred!!')
        }
    })
     
    requestCountry.open('GET','http://restcountries.eu/rest/v2/all')
    requestCountry.send() 

}) 