import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) {
    margin-bottom: 1rem;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.5rem;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
