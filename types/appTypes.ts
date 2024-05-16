export type GenreT = {
	id: number;
	name: string;
};

export type SingleMovie = {
	id: number,
	title: string,
	poster_path: string | null,
	release_date: string,
	vote_average: number,
	popularity: number | null,
	overview: string,
	genre_ids: number[],

	duration: string | number,
	premiere: string,
	budget: string | number,
	grossWorldwide: string | number,
	genres: string,
}