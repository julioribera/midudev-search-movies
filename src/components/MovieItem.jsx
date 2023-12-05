import "./MovieItem.css";

export const MovieItem = ({ src, title, year }) => {
  return (
    <li className="movieitem">
      <div className="movieimage">
        <img src={src} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{year}</p>
    </li>
  );
};
