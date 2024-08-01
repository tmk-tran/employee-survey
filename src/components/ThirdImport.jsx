// This component was imported from Figma, using a plugin to turn to code
// Returned solution filled up the page, so it was placed in a div set to 50vw in App.jsx
// Minor edits to css module file - changed background color
// (Solution from Figma set the backgrounnd color a bit lighter of a blue)
// This solution from Figma also set the global fonts for Nunito (compared to PixelFree, which set to Roboto)

import styles from "./ThirdImport.module.css";

const ThirdImport = () => {
  return (
    <div className={styles.surveyRowRating}>
      <div className={styles.employeeSatisfactionSurvey}>
        Employee Satisfaction Survey
      </div>
      <div className={styles.question1Parent}>
        <div className={styles.question1}>Question 1</div>
        <div className={styles.group}>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl ac `}</div>
          <div className={styles.tinciduntLuctusNunc}>
            tincidunt luctus, nunc mauris aliquam nunc, id aliquet nunc nunc id
            nunc.
          </div>
        </div>
      </div>
      <div className={styles.rowRateScale}>
        <div className={styles.veryPoor}>Very Poor</div>
        <div className={styles.parent}>
          <div className={styles.div}>5</div>
          <div className={styles.div1}>4</div>
          <div className={styles.div2}>3</div>
          <div className={styles.div3}>2</div>
          <div className={styles.div4}>1</div>
        </div>
        <div className={styles.veryPoor}>Excellent</div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.buttontext}>
          <div className={styles.base}>
            <div className={styles.button}>back</div>
          </div>
        </div>
        <div className={styles.buttoncontained}>
          <div className={styles.base1}>
            <div className={styles.button}>next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdImport;
