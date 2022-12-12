import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    // stroke="hsl(0, 0%, 18%)"
    {...props}
  />
);

const HamburgerIcon = ({ topOpen }) => {
  return (
    <button
    // onClick={toggle}
    >
      <motion.svg 
      style={{transition: '0.7s ease-in-out all'}}
      stroke={topOpen ? "hsla(180, 3%, 13%, 1)" : "hsla(76, 84%, 68%, 1)"}
      initial="closed"
      animate={topOpen ? "open" : "closed"}
      width="23" height="23" viewBox="0 0 23 23">
      <Path
      
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
      
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </motion.svg>
    </button>
  );
};

export default HamburgerIcon;
