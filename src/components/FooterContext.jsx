import { useContext } from "react";
import ThemeContext from "../context/Theme.Context";

const FooterContext = ({texts}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <footer className={theme}>
      <h4>{texts.footerTitle} </h4>
    </footer>
  );
};

export default FooterContext;