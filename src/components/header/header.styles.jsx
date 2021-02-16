import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  margin: 0 2rem;

  @media screen and (max-width: 800px){
    height: 4%;
    margin-bottom: 1rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 2rem;
  padding: 2.5rem;

  @media screen and (max-width: 1200px) {
    width: 0;
    padding: 2.5rem 0;
  }

  @media screen and (max-width: 800px){
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px){
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 10px;
  width: 8rem;
  transition: all 0.3s;
  text-align: center;

  &:hover {
    background-color: #efefef;
  }
`;
