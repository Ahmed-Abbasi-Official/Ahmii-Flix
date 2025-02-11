import styles from '@/app/styles/common.module.css'
import Image from 'next/image';
import Link from 'next/link';


interface Movie {
    id: string;
    details: {
        title: string;
        releaseYear: number;
        contextualSynopsis: {
            text: string;
        };
        itemSummary: {
            boxArt: {
                url: string;
            };
        };
    };
}

interface MovieCardProps {
    movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    console.log(movie)
    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <img
                    src={movie.details.itemSummary.boxArt.url}
                    alt={movie.details.title}
                    // width={250}
                    // height={200}
                    className='w-[250] h-[200]'
                />
            </div>
                <div className={styles.card_data}>
                    <h2>{movie?.details?.title}</h2>
                    <p>{movie?.details?.contextualSynopsis?.text}</p>
                    <Link href={`/movie/${movie?.id}`}>Read More</Link>
                </div>
        </div>
    );
};

export default MovieCard;
