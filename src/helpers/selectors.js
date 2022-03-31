export const getAppointmentsForDay = (state, day) => {
  const dayArr = state.days.filter((ele) => ele.name === day);
  const resultArr = [];
  if (dayArr.length > 0) {
    dayArr[0].appointments.forEach((ele) => {
      resultArr.push(state.appointments[ele]);
    });
  }
  return resultArr;
};

export const getInterview = (state, interview) => {
  const resultObj = {};
  if (interview) {
    resultObj.student = interview.student;
    resultObj.interviewer = state.interviewers[interview.interviewer];
    return resultObj;
  } else {
    return null;
  }
};

export function getInterviewersForDay(state, day) {
  const dayArr = state.days.filter((ele) => ele.name === day);
  if (dayArr.length === 0) {
    return [];
  }
  const resultArr = [];
  if (dayArr.length > 0) {
    Object.keys(state.interviewers).forEach((id) => {
      if (dayArr[0].interviewers.includes(state.interviewers[id].id)) {
        resultArr.push(state.interviewers[id]);
      }
    });
  }
  return resultArr;
}
