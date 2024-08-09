import { useGroupOrganizer } from "../../contexts/GroupOrganizerContext";
import { Button } from "../button/Button";
import "./footer.css";

export const Footer = () => {
  const { isFontSizeLarge, setFontSize } = useGroupOrganizer();

  return (
    <div className={isFontSizeLarge ? "footer large" : "footer small"}>
      <p>footer footer footer</p>
      <Button action={setFontSize} text="set font size" />
    </div>
  );
};
