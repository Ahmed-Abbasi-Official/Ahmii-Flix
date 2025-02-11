import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css'

const MoviePage =async () => {

  const url:string = process.env.RAPID_KEY || "" ;

  if (!url) {
    throw new Error("RAPID_KEY environment variable is missing.");
  }

  // ? OPTIONS

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '79b7c341b2mshb074273a8ced5e5p12c197jsn295eeab8c91d',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  };

  // * MOVIE DATA INTERFACE

  interface Movie {
    id: string;
    details: {
      title: string;
      releaseYear: number;
      contextualSynopsis: {
        text: string;
      };
      itemSummary:{
        boxArt: {
            url: string;
          };
      };
    };
    // Add other properties if needed
  }
  

  // * DATA GETTING

  const res:Response = await fetch(url,options);
  const data:Movie[] = await res.json();

  return (
    <>
    <section className={styles.movieSection}>
      <div className={styles.container}>
      <h1>Series & Movies</h1>
    {
      data?.map((currElm:Movie)=>{
        return <MovieCard key={currElm?.id} movie={currElm}/>
      })
    }
      </div>
    </section>
    </>
  )
}

export default MoviePage