import styled from "styled-components";

export const TwoDimensionFooter = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  border-top: 1px solid #404040;
`;
export const EmptySpace = styled.div`
  position: relative;
  border-right: 1px solid #404040;
  grid-column: span 3;
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
`;
