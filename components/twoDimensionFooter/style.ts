import styled from "styled-components";

export const TwoDimensionFooter = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  border-top: 1px solid #404040;

  @media screen and (max-width: 768px) {
    border-top: none;
  }
`;
export const EmptySpace = styled.div`
  position: relative;
  border-right: 1px solid #404040;
  grid-column: span 3;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    border-right: none;
  }
  
`;
export const Copyright = styled.div`
  padding: 2.5rem 1.1rem 4rem 1.1rem;
  border-right: 1px solid #404040;
  display: flex;
  p {
    font-size: 0.7rem;
    color: #404040;
    margin-left: 0.9rem;
  }

  @media screen and (max-width: 768px) {
    border-right: none;
  }
`;
