import CodeEditor from "../../components/CodeEditor/CodeEditor";
import style from "./problem.module.scss";

export default function HtmlProb() {
  return (
    <>
      <h1>HtmlProb</h1>
      <div className={style.wrapper}>
        <CodeEditor width={500} />
        <div className={style.right} />
      </div>
    </>
  );
}
