const axios = require("axios");

const tokenAPI = `080ca33c5670a4985cf1451c274f8c29`;

const ITEMS_PER_PAGE_DASH = 9;

exports.getMovies = async (req, res, next) => {
  const page = req.query.page || 1;

  const TMDB_URL =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const TMDB_TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODBjYTMzYzU2NzBhNDk4NWNmMTQ1MWMyNzRmOGMyOSIsIm5iZiI6MTczNTA2OTgyOC4xOCwic3ViIjoiNjc2YjEwODQ4YzlmODJjNTYwN2VjZDFlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.eqG36dAScDZDc6Nf-Vy89fQ20BYsaQf6KmRu53R2wQA";

  try {
    const response = await axios.get(TMDB_URL, {
      headers: {
        accept: "application/json",
        Authorization: TMDB_TOKEN,
      },
    });

    const items = response.data.results.length;

    const startIndex = (page - 1) * ITEMS_PER_PAGE_DASH;
    const endIndex = startIndex + ITEMS_PER_PAGE_DASH;
    const data = response.data.results.slice(startIndex, endIndex);

    return res.status(200).json({
      data,
      paginationSettings: {
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE_DASH * page < items,
        hasPreviousPage: page > 1,
        nextPage: Number(page) + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(items / ITEMS_PER_PAGE_DASH),
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
};

exports.getMoviesBySearch = async (req, res) => {
  const searchQuery = req.query.search;
  const page = req.query.page || 1;

  const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=${tokenAPI}`;

  try {
    const response = await axios(url);

    const items = response.data.results.length;

    const startIndex = (page - 1) * ITEMS_PER_PAGE_DASH;
    const endIndex = startIndex + ITEMS_PER_PAGE_DASH;
    const data = response.data.results.slice(startIndex, endIndex);

    return res.status(200).json({
      data,
      paginationSettings: {
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE_DASH * page < items,
        hasPreviousPage: page > 1,
        nextPage: Number(page) + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(items / ITEMS_PER_PAGE_DASH),
        link: "/",
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
};

exports.getMovieByID = async (req, res, next) => {
  const reqParam = req.params.movieId;
  const TMDb_URL = `https://api.themoviedb.org/3/movie/${reqParam}?api_key=${tokenAPI}`;
  const similarMoviesURL = `https://api.themoviedb.org/3/movie/${reqParam}/recommendations?language=en-US&page=1&api_key=${tokenAPI}`;

  try {
    const response = await axios.get(TMDb_URL);
    const similarMovies = await axios(similarMoviesURL);

    res.json([response.data, similarMovies.data]);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the movie data.");
  }
};
