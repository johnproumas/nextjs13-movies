import { base_banner_url, w500_size } from "@/utils/moviePhotos";
import Image from "next/image";

export default function TheMainMovies({ mainMovies }: { mainMovies: Movie[]; }) {
    // console.log(mainMovies);
    return (
        <>
            {mainMovies.map(movie => (
                <div key={movie.id}>
                    <Image
                        src={`${base_banner_url}/${w500_size}/${movie.backdrop_path}`}
                        alt={`${movie.title} movie banner`}
                        width={500}
                        height={281} />
                    <h2>{movie.title}</h2>
                </div>
            ))}
        </>
    );
}
