import style from "./problem.module.scss";

const problemList = [
  `<p>Create a component called ProgressBar which displays a progress bar. The progress bar should have the following styling applied 
    <ul>
    <li>A width of 100%</li>    
     <li>   A height of 20px </li>
     <li> A border radius of 5px </li>
     <li>The completed bit should be green </li>
     <li>The remaining bit should be lightgrey</li>
    </ul>
    You add the CSS to the component using Styled Components or using Inline CSS or adding identifiers and using the App.css file. It's totally up to you
    The component should accept a percent prop which is used to determine how many percentage of the progress bar to fill with green colour.
    We have already written some code for you in the App.jsx file.</p>`,
];
export default function Problem() {
  return (
    <div
      className={style.problemContainer}
      dangerouslySetInnerHTML={{ __html: problemList[0] }}
    ></div>
  );
}
