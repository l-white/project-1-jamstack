const axios = require('axios')

module.exports = async function () {
  let movieData = {
    comedyMovies: [],
    crimeMovies: [],
    dramaMovies: [],
    documentaryMovies: [],
  }

  try {
    const comedyMovies = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=a116b5ec3c6d5c4300f0c6c2db97c131&with_genres=35',
    )

    for (let i = 0; i < comedyMovies.data.results.length; i++) {
      let tempMovieObj = {
        title: comedyMovies.data.results[i].title,
        poster_path: comedyMovies.data.results[i].poster_path,
      }
      movieData.comedyMovies.push(tempMovieObj)
    }

    const crimeMovies = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=a116b5ec3c6d5c4300f0c6c2db97c131&with_genres=80',
    )

    for (let i = 0; i < crimeMovies.data.results.length; i++) {
      let tempMovieObj = {
        title: crimeMovies.data.results[i].title,
        poster_path: crimeMovies.data.results[i].poster_path,
      }
      movieData.crimeMovies.push(tempMovieObj)
    }
    const dramaMovies = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=a116b5ec3c6d5c4300f0c6c2db97c131&with_genres=18',
    )

    for (let i = 0; i < dramaMovies.data.results.length; i++) {
      let tempMovieObj = {
        title: dramaMovies.data.results[i].title,
        poster_path: dramaMovies.data.results[i].poster_path,
      }
      movieData.dramaMovies.push(tempMovieObj)
    }

    const documentaryMovies = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=a116b5ec3c6d5c4300f0c6c2db97c131&with_genres=99',
    )

    for (let i = 0; i < documentaryMovies.data.results.length; i++) {
      let tempMovieObj = {
        title: documentaryMovies.data.results[i].title,
        poster_path: documentaryMovies.data.results[i].poster_path,
      }
      movieData.documentaryMovies.push(tempMovieObj)
    }
    console.log(movieData)
  } catch (error) {
    console.log(error)
  }
}
