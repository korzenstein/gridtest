const Icon3D = ({dimensionChoice}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="14"
      fill="none"
      viewBox="0 0 10 14"
    >
      <path
        fill={dimensionChoice ?  "#ABABAB" : "#0A0A0A"}
        d="M8.788 2.21L4 0v4.982l3 1.385v1.94l3 1.385V4.19c0-.861-.477-1.64-1.212-1.98z"
      ></path>
      <path fill={dimensionChoice ?  "#ABABAB" : "#0A0A0A"} d="M6 7.846v-.77l-2-.922v.77l2 .922z"></path>
      <path fill={dimensionChoice ?  "#ABABAB" : "#0A0A0A"} d="M0 4.308l6 2.769V14l-6-2.77V4.309z"></path>
    </svg>
  );
}

export default Icon3D;
