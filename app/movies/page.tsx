import requests from "@/utils/movieRequests";
import TheMainMovies from "../components/TheMainMovies";
import TheLatestMovie from "../components/TheLatestMovie";
import TheDiscroverMovie from "../components/TheDiscroverMovie";
import { Suspense } from "react";

const getDiscoverMovies = async (): Promise<Movie[]> => {
    const data = await fetch(requests.fetchDiscoverMovies);

    if (!data.ok) throw new Error('Couldn\'t fetch newly discovered movies');
    const discoverMovies = await data.json();

    return discoverMovies.results;
};

const getMainMovies = async (): Promise<Movie[]> => {
    const data = await fetch(requests.fetchMainMovies);

    if (!data.ok) throw new Error('Couldn\'t fetch top rated movies');
    const mainMovies = await data.json();

    return mainMovies.results;
};

const getTopRatedMovies = async (): Promise<Movie[]> => {
    const data = await fetch(requests.fetchTopRatedMovies);

    if (!data.ok) throw new Error('Couldn\'t fetch top rated movies');
    const topRatedMovies = await data.json();

    return topRatedMovies.results;
};


const getLatestMovie = async (): Promise<Movie> => {
    const data = await fetch(requests.fetchLatestMovie);

    if (!data.ok) throw new Error('Coudln\'t fetch latest movie');
    const latestMovie = await data.json();

    return latestMovie;
};

export default async function MoviesPage() {
    const discoverMovies = await getDiscoverMovies();
    const mainMovies = await getMainMovies();
    const topRatedMovie = await getTopRatedMovies();
    const latestMovie = await getLatestMovie();

    return (
        <>
            <div className="flex h-[95vh]">
                <TheDiscroverMovie discoverMovies={discoverMovies} />
            </div>
            <div className="flex flex-wrap gap-3">
                <TheMainMovies mainMovies={mainMovies} />
            </div>
            <TheLatestMovie latestMovie={latestMovie} />
        </>
    );
}
