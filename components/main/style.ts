import styled from "styled-components";
import {motion} from 'framer-motion'

export const Main = styled(motion.main)`
  width: 100%;
  height: 100%;
  /* background: #202222; */
  display: flex;
  padding-top: 3rem;
  padding-right: 3rem;

  @media screen and (max-width: 768px) {
    padding-right: 0.65rem;
    padding-left: 0.65rem;
  }
`;
