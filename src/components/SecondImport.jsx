// This component was built using PixelFree, second attempt.
// Imported Frame from Figma, after removing hidden elements.
// Text in buttons were wrapped
//    i.e the text 'BACK', had the letter 'K' on the next line
//    i.e the text 'NEXT', had the letter 'T' on the next line
//
// Commented out sections are the fix for that here,
// In the CSS file, the commented out sections are the solution to fix
// Added borders (disabled) to the CSS classes that were modified
// 
// Changed classname for: button-1-region to avoid interference with FirstImport CSS file

import "./SecondImport.css";

export default function SecondImport() {
  return (
    <div className="anchorpane2" id="anchorpane2">
      <div className="anchorpane2-region" id="anchorpane2-region">
        <div className="survey_-_row_rating" id="survey_-_row_rating">
          <div
            className="survey_-_row_rating-region"
            id="survey_-_row_rating-region"
          >
            <div
              className="employee_satisfaction_survey"
              id="employee_satisfaction_survey"
            >
              <label
                className="employee_satisfaction_survey-region"
                id="employee_satisfaction_survey-region"
              >
                Employee Satisfaction Survey
              </label>
            </div>
            <div className="frame_108" id="frame_108">
              <div className="frame_108-region" id="frame_108-region">
                <div className="question_1" id="question_1">
                  <label className="question_1-region" id="question_1-region">
                    Question 1
                  </label>
                </div>
                <div className="group" id="group">
                  <div className="group-region" id="group-region">
                    <div
                      className="lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__nullam_auctor__nisl_ac"
                      id="lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__nullam_auctor__nisl_ac"
                    >
                      <label
                        className="lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__nullam_auctor__nisl_ac-region"
                        id="lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__nullam_auctor__nisl_ac-region"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam auctor, nisl ac{" "}
                      </label>
                    </div>
                    <div
                      className="tincidunt_luctus__nunc_mauris_aliquam_nunc__id_aliquet_nunc_nunc_id_nunc_"
                      id="tincidunt_luctus__nunc_mauris_aliquam_nunc__id_aliquet_nunc_nunc_id_nunc_"
                    >
                      <label
                        className="tincidunt_luctus__nunc_mauris_aliquam_nunc__id_aliquet_nunc_nunc_id_nunc_-region"
                        id="tincidunt_luctus__nunc_mauris_aliquam_nunc__id_aliquet_nunc_nunc_id_nunc_-region"
                      >
                        tincidunt luctus, nunc mauris aliquam nunc, id aliquet
                        nunc nunc id nunc.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row_-_rate_scale" id="row_-_rate_scale">
              <div
                className="row_-_rate_scale-region"
                id="row_-_rate_scale-region"
              >
                <div className="very_poor" id="very_poor">
                  <label className="very_poor-region" id="very_poor-region">
                    Very Poor
                  </label>
                </div>
                <div className="group_7" id="group_7">
                  <div className="group_7-region" id="group_7-region">
                    <div className="_9" id="_9">
                      <label className="_9-region" id="_9-region">
                        5
                      </label>
                    </div>
                    <div className="_8" id="_8">
                      <label className="_8-region" id="_8-region">
                        4
                      </label>
                    </div>
                    <div className="_7" id="_7">
                      <label className="_7-region" id="_7-region">
                        3
                      </label>
                    </div>
                    <div className="_6" id="_6">
                      <label className="_6-region" id="_6-region">
                        2
                      </label>
                    </div>
                    <div className="_1" id="_1">
                      <label className="_1-region" id="_1-region">
                        1
                      </label>
                    </div>
                  </div>
                </div>
                <div className="excellent" id="excellent">
                  <label className="excellent-region" id="excellent-region">
                    Excellent
                  </label>
                </div>
              </div>
            </div>
            <div className="buttons" id="buttons">
              <div className="buttons-region" id="buttons-region">
                <div className="button_text" id="button_text">
                  <div className="button_text-region" id="button_text-region">
                    <div className="base" id="base">
                      {/* <div className="base-region" id="base-region">
                        <div className="button" id="button">
                          <label className="button-region" id="button-region">
                            BACK
                          </label>
                        </div>
                      </div> */}
                      <label className="button-region" id="button-region">
                        BACK
                      </label>
                    </div>
                  </div>
                </div>
                <div className="button_contained" id="button_contained">
                  <div
                    className="button_contained-region"
                    id="button_contained-region"
                  >
                    {/* <div className="base-1" id="base-1"> */}
                    {/* <div className="base-1-region" id="base-1-region"> */}
                    {/* <div className="button-1" id="button-1"> */}
                    {/* Changed classname here to avoid interference with FirstImport CSS file */}
                    <label
                      className="button-1-region-secondimport"
                      id="button-1-region-secondimport"
                    >
                      NEXT
                    </label>
                    {/* </div> */}
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
