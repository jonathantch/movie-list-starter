const config = require('./config');

const getInfoFromMovieDB = (searchKey) => {
  request.get(`https://api.themoviedb.org/3/movie/550?api_key=${config.TOKEN}&language=en-US&query=${searchKey}&page=1&include_adult=false`
    , (err, response, body) => {
      console.log(body);
    })
}