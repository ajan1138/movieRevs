export async function handleGetMovies(page, search) {
  let data;

  let url;

  if (!search) {
    url = `http://localhost:8080/?page=${page ? page : 1}`;
  }

  if (search) {
    url = `http://localhost:8080/search?search=${search}&page=${
      page ? page : 1
    }&`;
  }
  const rawData = await fetch(url);
  data = await rawData.json();

  return data;
}

export async function handleGetMovie(movieId) {
  const movie = await fetch(`http://localhost:8080/movies/${movieId}`);

  return movie;
}
