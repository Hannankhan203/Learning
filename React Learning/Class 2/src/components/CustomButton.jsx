const CustomButton = (props) => {
  return (
    <button
      title={props.title}
      onClick={() => {
        props.click(props.title);
      }}
    >
      {props.name}
    </button>
  );
};

export default CustomButton;
