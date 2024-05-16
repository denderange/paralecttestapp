import type { GenreT } from "../types/appTypes";

export const getGenresNames = (genres: GenreT[], movieIds: number[]) => {
  const genreNames = [];

  for (const movieId of movieIds) {
    const genre = genres.find(genre => genre.id === movieId);

    if (genre) {
      genreNames.push(genre.name);
    }
  }

  return genreNames.join(', ');
}