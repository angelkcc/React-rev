export const Button = ({
  label = "Button",
  onClick,
}) => {
  return <button onClick={onClick}>{label}</button>;
};