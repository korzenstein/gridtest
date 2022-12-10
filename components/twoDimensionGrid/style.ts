import styled from "styled-components";
import { motion } from "framer-motion";

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
  box-shadow: inset 0 1px #404040, inset -1px 0 #404040;
  position: relative;

  p {
    position: absolute;
    top: 0;
    font-size: 1.3rem;
    left: 22px;
  }
  &:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
  }
  &:nth-child(8n) {
    grid-column: span 2;
    grid-row: span 2;
  }
  &:nth-child(16n) {
    grid-column: span 2;
    grid-row: span 2;
  }
  &:nth-child(24n) {
    grid-column: span 2;
    grid-row: span 2;
  }
`;
