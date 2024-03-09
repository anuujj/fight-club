import CodeEditor from "../../components/CodeEditor/CodeEditor";
import style from "./problem.module.scss";
import useResizer from "../../hooks/useResizer";

export default function HtmlProb() {
  const { position, dragProps } = useResizer({ initWidth: "50%" });
  return (
    <>
      <h1>HtmlProb</h1>
      <div className={style.wrapper}>
        <CodeEditor width={position} />
        <div className={style.separator} {...dragProps}></div>
        <div className={style.right} />
      </div>
    </>
  );
}
