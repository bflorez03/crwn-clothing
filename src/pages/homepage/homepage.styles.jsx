import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 7rem;

  @media screen and (max-width: 1200px) {
    padding: 0 1.5rem 0 1.5rem;
  }

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
