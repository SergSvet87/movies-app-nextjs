import Image from 'next/image';

import Heading from './Heading';

import styles from '../styles/MovieDetails.module.scss';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <Heading tag="h3" className='text-aligh' text="Empty movie" />
  }

  const screenshots = [
    movie.medium_screenshot_image1,
    movie.medium_screenshot_image2,
    movie.medium_screenshot_image3,
  ];

  return (
    <div className={styles.info}>
      <div
        className={styles.header}
        style={{
          background: `url(${movie.background_image_original}) 100% 100% / cover no-repeat`,
        }}>
        <div className={styles.view}>
          <Heading className={styles.titleLong} tag='h1' text={movie.title_long} />
          <Heading className={styles.titleEng} tag='h2' text={movie.title_english} />
          <div className={styles.description}>
            <div className={styles.image}>
              <Image
                src={movie.large_cover_image}
                alt={movie.title}
                title={movie.title}
                width={340}
                height={480}
              />
              <div className={styles.play}>
                <a
                  href={movie.torrents[0].url}
                  download={`${movie.title_long}.torrent`}>
                  <Image
                    src='/film-info/btn-play.png'
                    alt="Play"
                    width={180}
                    height={180}
                    title={`Download ${movie.title_long}`}
                  />
                </a>
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.rating}>

                <Heading tag='h3' text='Rating:' className='h3' />
                <span>{movie.rating}</span> / 10
              </div>
              <div className={styles.year}>
                <Heading tag='h3' text='Year:' className='h3' />
                <span>{movie.year}</span>
              </div>
              <div className={styles.genres}>
                <Heading tag='h3' text='Genre:' className='h3' />
                <ul>
                  {movie.genres.map((genre, index) => (
                    <li className={styles.genre} key={index}>
                      {genre}
                    </li>
                  ))}
                </ul>
              </div>

              {movie.cast ? (
                <div className={styles.actors}>
                  <Heading tag='h3' text='Top Cast:' className='h3' />
                  <ul>
                    {movie.cast.map((actor, index) => (
                      <li className={styles.actor} key={index}>
                        {actor.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>

      {screenshots ? (
        <div className={styles.screen}>
          <Heading tag='h3' text='Screenshots:' className='h3' />
          <ul className={styles.screenshots}>
            {screenshots.map((screen, index) => (
              <li className={styles.screenshot} key={index}>
                <Image src={screen} alt={`${index}`} width={280} height={200} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}

      <div className={styles.text}>
        <Heading tag='h3' text='Description:' className='h3' />
        {movie.description_full ? (
          <div className={styles.summary}>{movie.description_full}</div>
        ) : (
          <div className={styles.summary}>{movie.description_intro}</div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;