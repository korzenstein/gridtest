const Icon2D = ({dimensionChoice}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="10"
      fill="none"
      viewBox="0 0 11 10"
    >
      <path
        fill={dimensionChoice ? "#0A0A0A" : "#ABABAB"}
        d="M0 0h4.889v4.444H0V0zM0 5.556h4.889V10H0V5.556zM6.111 0h2.445C9.906 0 11 .995 11 2.222c0 1.228-1.094 2.222-2.444 2.222H6.11V0zM6.111 5.556h2.445c1.35 0 2.444.994 2.444 2.222C11 9.005 9.906 10 8.556 10H6.11V5.556z"
      ></path>
    </svg>
  );
}

export default Icon2D;
