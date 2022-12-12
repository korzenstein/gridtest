import {motion} from 'framer-motion'

const Logo = ({topOpen}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="191"
      height="40"
      fill="#CCF267"
      viewBox="0 0 191 40"
    >
      <motion.path
        style={{
          transition: '0.7s ease-in-out all', 
        }}
        fill={topOpen ? "#202222" : '#CCF267'}
        d="M58.553 5.82c0-3.3-2.14-5.82-5.74-5.82H0v19.247l52.933.013c3.207 0 5.62-2.407 5.62-5.693V5.82zM58.553 26.553c0-3.3-2.14-5.82-5.74-5.82H0V39.98l52.933.013c3.207 0 5.62-2.406 5.62-5.693v-7.747zM59.967 34.18c0 3.3 2.14 5.82 5.74 5.82h52.813V20.747l-52.933-.014c-3.207 0-5.62 2.407-5.62 5.694v7.753zM59.967 13.44c0 3.3 2.14 5.82 5.74 5.82h52.813V.013L65.587 0c-3.207 0-5.62 2.407-5.62 5.693v7.747zM134.493 27.36c.247 0 .44-.013.574-.04a.552.552 0 00.333-.213c.087-.114.133-.294.133-.547 0-.253-.046-.433-.133-.54a.572.572 0 00-.333-.207 3.149 3.149 0 00-.574-.04h-4.026v1.587h4.026zm-4.026-4.747v1.567h3.633c.28 0 .487-.013.633-.033a.511.511 0 00.347-.207c.087-.113.133-.293.133-.533 0-.24-.046-.434-.133-.547a.537.537 0 00-.347-.207 3.85 3.85 0 00-.633-.033h-3.633v-.007zm7.206 2.947c.294.333.434.76.434 1.287 0 .726-.234 1.3-.7 1.713-.467.413-1.194.62-2.174.62h-7.24v-8.393h6.907c1.873 0 2.813.693 2.813 2.08 0 .446-.106.833-.32 1.153-.213.32-.513.587-.906.787.5.166.893.413 1.186.746M147.814 20.787v1.906h-6.354v1.34h6.114v1.9h-6.114v1.34h6.354v1.907h-8.827v-8.393h8.827zM159.5 22.493l-1.68 3.28h3.36l-1.68-3.28zm6.08 6.687h-2.647l-.813-1.587h-5.247l-.813 1.587h-2.66l4.386-8.393h3.414l4.373 8.393h.007zM133.986 35.693c.307 0 .56-.02.76-.053a.86.86 0 00.5-.28c.14-.153.207-.393.207-.72 0-.327-.073-.56-.207-.713a.859.859 0 00-.5-.28 4.574 4.574 0 00-.76-.054h-3.54V35.7h3.54v-.007zm3.134-3.346c.606.553.906 1.313.906 2.286 0 .974-.3 1.747-.906 2.3-.607.554-1.42.827-2.454.827h-4.22v2.153h-2.466V31.52h6.686c1.034 0 1.854.273 2.454.827zM141.54 31.52v6.32h5.9v2.067h-8.374V31.52h2.474zM154.446 33.22l-1.68 3.28h3.36l-1.68-3.28zm6.08 6.687h-2.646l-.814-1.587h-5.246l-.814 1.587h-2.66l4.387-8.394h3.413l4.374 8.394h.006zM164.18 35.093l2.907-3.573h3.1l-4.754 5.607v2.78h-2.493v-2.78l-4.773-5.607h3.106l2.907 3.573zM179.707 31.52v1.9h-6.36v1.34h6.12v1.907h-6.12v1.34h6.36v1.9h-8.827V31.52h8.827zM183.34 33.5v2.033h3.46c.333 0 .593-.013.786-.046a.763.763 0 00.48-.274c.134-.146.2-.38.2-.693 0-.313-.066-.553-.2-.7a.826.826 0 00-.48-.267 4.77 4.77 0 00-.786-.053h-3.46zm7.08 3.447c.253.273.38.64.38 1.113v1.847h-2.454V38.52c0-.273-.026-.48-.08-.613a.5.5 0 00-.3-.294c-.146-.06-.36-.086-.646-.086h-3.98v2.386h-2.467V31.52h6.533c1.12 0 1.974.22 2.567.667.587.44.88 1.1.88 1.98 0 1.173-.507 1.946-1.513 2.313.466.047.833.207 1.086.473"
      ></motion.path>
    </motion.svg>
  );
}

export default Logo;
