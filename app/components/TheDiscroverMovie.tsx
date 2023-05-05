'use client';

import { base_banner_url, original_size, w500_size } from "@/utils/moviePhotos";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TheDiscroverMovie({ discoverMovies }: { discoverMovies: Movie[]; }) {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        setMovie(discoverMovies[Math.floor(Math.random() * discoverMovies.length)]);
    }, [discoverMovies]);

    // console.log(movie);

    return (
        <>
            {movie?.poster_path ? (
                <>
                    <div className="absolute inset-0 h-[95vh] w-screen">
                        <Image
                            src={`${base_banner_url}/${w500_size}/${movie?.backdrop_path || movie?.poster_path}`}
                            alt={`${movie?.title} movie banner`}
                            fill
                            priority
                            className="-z-10"
                        />
                    </div>
                </>
            ) : (
                <>
                    <div>test</div>
                </>
            )}

        </>
    );
}
