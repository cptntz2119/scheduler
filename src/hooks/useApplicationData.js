import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const setDay = (day) => setState({ ...state, day });
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    //to updateds spots, find (that day) on which u add the interview by given id and interview, then got (that day).spots - 1, is the result
    const days = [...state.days];
    const currentDayIndex =
      state.days.filter((day) => day.appointments.includes(id))[0]["id"] - 1;

    days[currentDayIndex] = {
      ...state.days[currentDayIndex],
      spots: state.days[currentDayIndex].spots - 1,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then((res) => {
      setState({
        ...state,
        appointments,
        days,
      });
    });
  };

  const cancelInterview = (id) => {
    const currentDayIndex =
      state.days.filter((day) => day.appointments.includes(id))[0]["id"] - 1;
    const days = [...state.days];
    days[currentDayIndex] = {
      ...state.days[currentDayIndex],
      spots: state.days[currentDayIndex].spots + 1,
    };

    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({
        ...state,
        days,
      });
    });
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
      return all;
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}
