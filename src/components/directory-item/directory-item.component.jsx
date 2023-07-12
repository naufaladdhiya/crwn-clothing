import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryIten = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <div className="directory-item-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <Link to={`/shop/${title.toLowerCase()}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryIten;
