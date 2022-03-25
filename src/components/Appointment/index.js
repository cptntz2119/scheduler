import classNames from "classnames";
import React, { Fragment } from "react";
//import InterviewerListItem from "./InterviewerListItem";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  //console.log("props in Appointment :)", props);
  //const { student, interviewer } = props;
  return (
    <Fragment>
      <Header time={props.time} />
      <Fragment>
        {props.interview ? (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
          />
        ) : (
          <Empty />
        )}
      </Fragment>
    </Fragment>
  );
}
