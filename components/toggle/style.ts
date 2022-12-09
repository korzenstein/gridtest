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