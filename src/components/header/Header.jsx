import { Input } from "../core/input/Input";
import s from "./Header.module.css";
export const Header = () => {
  return (
    <div className={s.header}>
      <Input variant="outline" />
    </div>
  );
};
