import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  const navigateToCategory = () => navigate(`shop/${title.toLowerCase()}`);

  return (
    <DirectoryItemContainer>
      <BackgroundImage>
        <img src={imageUrl} alt="" />
      </BackgroundImage>
      <Body onClick={navigateToCategory}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
