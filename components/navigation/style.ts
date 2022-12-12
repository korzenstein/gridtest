import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Switch = styled(motion.div)`
  min-width: 60px;
  height: 32px;
  border: 1px solid #404040;
  display: flex;
  border-radius: 100px;
  padding: 4px;
  align-items: center;
  position: relative;
  z-index:40;
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
  min-width: 3rem;
  background-color: ${(props) => props.bg ? `#202222`: `transparent`};
  border-left: 1px #404040 solid;
  position: sticky;
  height: 100vh;
  z-index:20;
  top: 0;
  right: 0;
`;

export const SideBarExpanded = styled(motion.nav)`
  height: 100%;
  background-color: #202222;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;

  &:after {
    content: "";
    /* position: absolute; */
    top: 30px;
  right: 0;
  width: 100%;
  border-bottom: 1px solid black;
  }
  /* cursor: pointer; */
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
  z-index:50;
  border-bottom: 1px #404040 solid;
  background-color: ${(props) => props.bg ? `#202222`: `transparent`};

  span {
     z-index: 100;
  }

`;

export const TopBarExpanded = styled(motion.nav)`
  width: 100vw;
  background-color: #CCF267;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  /* cursor: pointer; */

  ul { 
    list-style: none;
    padding: 0;
  }
`;

export const Hamburger = styled.nav`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  z-index: 40;
  button {
    border: none;
    background-color:transparent;
    z-index:100;
    margin-top: 5px;
    margin-left: 2px;
    cursor: pointer;
  }

  


`;

export const Logo = styled.div`
   transition: 1s ease-in-out all;
   z-index: 100;
  svg {
     transition: 1s ease-in-out all;
     z-index: 100;
  }
`;



