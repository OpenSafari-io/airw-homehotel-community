function Button(props) {
  const { bg = "bg-white", color = "text-black" } = props;
  return (
    <button
      className={`${
        props?.outlined ? "text-white border" : `${bg} ${color}`
      } py-2 px-2 md:px-8 rounded-md `}
      onClick={props?.onClick}
      type={props?.type}
    >
      {props?.children}
    </button>
  );
}

export default Button;
