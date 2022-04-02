import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

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

    return axios.put(`/api/appointments/${id}`, { interview }).then((res) => {
      setState({
        ...state,
        appointments,
      });
      updateSpots(id);
    });
  };

  const cancelInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({
        ...state,
      });
      updateSpots(id);
    });
  };

  const updateSpots = (id) => {
    axios
      .get("/api/days")
      .then((response) => {
        setState((prev) => ({ ...prev, days: response.data }));
      })
      .catch((error) => console.log(error));
  };

  return { state, setDay, bookInterview, cancelInterview };
}
