import './styles.scss';

type CardProps = {
  thumbnail: string;
  title: string;
  difficulty: string;
  slug: string;
};

function Card({ thumbnail, title, difficulty, slug }: CardProps) {
  return (
    <article className="card">
      <img className="card-img" src={thumbnail} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">Difficulté : {difficulty}</p>
        <a href={`/recipe/${slug}`} className="card-link">
          Voir la recette
        </a>
      </div>
    </article>
  );
}

export default Card;
