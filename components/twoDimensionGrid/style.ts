import styled from "styled-components";
import { motion } from "framer-motion";

  const randomizer = () => {
    const options = ["flex-end", "flex-start"];
    const randomNumber = Math.floor(Math.random() * 2);
    return options[randomNumber];
  };

export const TwoDimentionGrid = styled(motion.ul)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled(motion.li)`
  display: flex;
  padding: 1rem;
  box-shadow: 1px 1px inset #404040;
  position: relative;
  /* justify-content:${randomizer};
  align-items: ${randomizer}; */

  p {
    position: absolute;
    top: 0;
    font-size: 1.3rem;
    left: 22px;
  }


  &:nth-child(1),
  &:nth-child(8n),
  &:nth-child(16n),
  &:nth-child(24n) {
    grid-column: span 2;
    grid-row: span 2;
  }

  @media screen and (max-width: 768px) {

    box-shadow: 0 0 1px 0 #404040;
    
    &:nth-child(1),
    &:nth-child(8n),
    &:nth-child(16n),
    &:nth-child(24n) {
      grid-column: span 1;
      grid-row: span 1;
    }
    
    &:last-child {
      display: none;
    }
  }
`;
