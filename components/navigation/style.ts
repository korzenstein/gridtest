import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Switch = styled.div`
  width: 160px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  justify-content: ${(props) => props.toggle ? `flex-end`: `flex-start`}
`

export const Handle = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 40px;
`

export const SideBar = styled.nav`
  width: 3rem;
  background-color: #202222;
  border-top: 1px #404040 solid;
`;

export const TopBar = styled.nav`
  width: 100%;
  height: 3rem;
  background-color: #202222;
  /* border-top: 1px #404040 solid; */
`;

export const Hamburger = styled.nav`
  width: 3rem;
  height: 3rem;
  background-color: #202222;
  border-left: 1px #404040 solid;
  /* cursor: pointer; */
`;