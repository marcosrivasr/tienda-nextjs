import Menu from "./menu";
import style from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Menu />

      <div className={style.container}>{children}</div>
    </div>
  );
}
