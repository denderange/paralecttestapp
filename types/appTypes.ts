export type MovieHadingProps = {
	title: string;
	year: string;
	rating: number;
	popularity: number
};

export type SingleMovie = {
	duration: string | number,
	premiere: string,
	budget: string | number,
	grossWorldwide: string | number,
	genres: string
}