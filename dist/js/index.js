async function fetchAndAppend(url, id) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        let h3 = document.createElement('h3')
        h3.innerHTML = data.results[i].title
        if (h3 !== null || h3 !== undefined) {
          document.getElementById(`${id}`).appendChild(h3)
        }
        let img = document.createElement('img')
        img.src = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`
        document.getElementById(`${id}`).appendChild(img)
      }
    })
}

window.onload = () => {
  fetchAndAppend(
    'https://api.themoviedb.org/3/discover/movie?api_key=a116b5ec3c6d5c4300f0c6c2db97c131&with_genres=80',
    'img-container',
  )
  fetchAndAppend(
    'https://api.themoviedb.org/3/discover/movie?api_key=a116b5ec3c6d5c4300f0c6c2db97c131&with_genres=35',
    'img-container',
  )

  fetchAndAppend(
    'https://api.themoviedb.org/3/discover/movie?api_key=a116b5ec3c6d5c4300f0c6c2db97c131&with_genres=18',
    'img-container',
  )
  fetchAndAppend(
    'https://api.themoviedb.org/3/discover/movie?api_key=a116b5ec3c6d5c4300f0c6c2db97c131&with_genres=80',
    'img-crime',
  )
  fetchAndAppend(
    'https://api.themoviedb.org/3/discover/movie?api_key=a116b5ec3c6d5c4300f0c6c2db97c131&with_genres=35',
    'img-comedies',
  )

  fetchAndAppend(
    'https://api.themoviedb.org/3/discover/movie?api_key=a116b5ec3c6d5c4300f0c6c2db97c131&with_genres=18',
    'img-dramas',
  )
}
