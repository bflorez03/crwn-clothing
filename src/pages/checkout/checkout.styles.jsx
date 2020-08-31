import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90hv;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`;
export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;
export const TotalContainer = styled.div`
  align-self: flex-end;
  font-size: 2rem;
  text-transform: uppercase;
  margin-top: 1rem;
`;
export const TestWarningContainer = styled.div`
  text-align: center;
  color: red;
  margin-top: 40px;
  font-size: 24px;
`;

export const StripeCheckoutButtonContainer = styled.div`
  margin-left: auto;
  margin-top: 50px;
`;
