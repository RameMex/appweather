import s from "./TitleContent.module.css";
export const TitleContent = ({ title, subTitle }) => {
  return (
    <div className={s.container}>
      <span className={s.title}>{title} </span>
      <span className={s.subTitle}>{subTitle}</span>
    </div>
  );
};
