import styles from "@/app/styles/common.module.css"

interface Params {
  params: {
    id: string;
  }
}

const DynamicPageForMovie = async({ params }: Params) => {
  const id: string = params.id;
  console.log(id)

  const url = process.env.RAPID_KEY || "" ;

  // * OPTIONS

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '79b7c341b2mshb074273a8ced5e5p12c197jsn295eeab8c91d',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  };



  const res = await fetch(url,options);
  const data = await res.json();

  const filterMovie=data.filter((movie:{id:string})=>(
    movie.id === id
  ))[0]

  console.log(filterMovie)



  return (
    <div className={styles.container}>
    <h2 className={styles.movie_title}>   Netflix \ <span>  </span> </h2>
    <div className={styles.card_section}>
        <div>
            <img src={filterMovie.details.itemSummary.boxArt.url} alt={filterMovie.details.title} className="w-[600] h-[300]" />
        </div>
        <div>
            <h1>{filterMovie.details.title}</h1>
            <p>{filterMovie?.details?.contextualSynopsis?.text}</p>
        </div>
    </div>
</div>
  )
}

export default DynamicPageForMovie