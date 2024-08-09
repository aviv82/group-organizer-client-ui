import "./button.css";

export const Button = ({
  type = "button",
  style = "primary",
  text = "ok",
  action = () => console.log("click"),
}) => {
  return (
    <button onClick={action} type={type} className={style}>
      {text}
    </button>
  );
};
