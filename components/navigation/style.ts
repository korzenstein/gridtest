import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Switch = styled.div`
  width: 60px;
  height: 32px;
  border: 1px solid #404040;
  display: flex;
  border-radius: 100px;
  padding: 4px;
  align-items: center;
  position: relative;
  justify-content: ${(props) => props.toggle ? `flex-end`: `flex-start`};

  svg:nth-child(2) {
    cursor: pointer;
    position: absolute;
    left: 10px;
  }

  svg:nth-child(3) {
    cursor: pointer;
    position: absolute;
    right: 10px;
  }

`

export const Handle = styled(motion.div)`
  width: 24px;
  height: 24px;
  background-color: #CCF267;
  border-radius: 40px;
  cursor: pointer;
`

export const SideBar = styled.div`
  width: 3rem;
  /* background-color: #202222; */
  border-left: 1px #404040 solid;
  position: sticky;
  height: 100vh;
  z-index:20;
  top: 0;
  right: 0;
`;

export const TopBar = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content:space-between;
  align-items:center;
  gap: 20rem;
  top: 0;
  left: 0;
  position: sticky;
  z-index:20;

  border-bottom: 1px #404040 solid;
`;

export const Hamburger = styled.nav`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  z-index: 30;
  cursor: pointer;

`;

export const Logo = styled.div`
  
  /* cursor: pointer; */
`;

export const SideBarExpanded = styled(motion.nav)`
  height: 100%;
  background-color: #202222;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  /* cursor: pointer; */
`;

export const TopBarExpanded = styled(motion.nav)`
  width: 100vw;
  background-color: #CCF267;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  /* cursor: pointer; */
`;
