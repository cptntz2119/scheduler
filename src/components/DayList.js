import classNames from "classnames";
import React from "react";
import DayListItem from "./DaylistItem";

export default function DayList(props) {
  // const {days, day, setDay}=props;
  const days = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.value}
        setDay={() => {
          props.onChange(props.name);
        }}
      />
    );
  });
  return <ul>{days}</ul>;
}