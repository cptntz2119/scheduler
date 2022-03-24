import classNames from "classnames";
import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  console.log("props from Form", props.interviewer);
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset(props.onCancel);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={props.student}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => {
              setStudent(event.target.value);
            }}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          onChange={() => {
            setInterviewer(props.id);
          }}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>
            Cancel
          </Button>
          <Button confirm onClick={props.onSave}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}