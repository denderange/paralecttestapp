const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_ACCESS_KEY}`
  }
};

export const getGenres = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/genre/movie/list?language=en`, 
    options
  )

  const data = await res.json()

  return data
}

export const getMovies = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, 
    options
  )

  const data = await res.json()

  return data
}