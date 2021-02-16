import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 17vw;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 25vw;
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    height: 20rem;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center center;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: all 0.2s;
`;

export const AddButton = styled(CustomButton)`
  width: 75%;
  position: absolute;
  top: 22rem;
  display: none;
  transition: all 0.2s;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 0.3rem;
    position: absolute;
    top: 13rem;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;

  @media screen and (max-width: 800px) {
    height: 10%;
  }
`;

export const NameContainer = styled.span`
  width: 85%;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    font-size: 1.1rem;
  }
`;

export const PriceContainer = styled.span`
  width: 15%;
  text-align: right;

  @media screen and (max-width: 800px) {
    font-size: 1.1rem;
  }
`;
