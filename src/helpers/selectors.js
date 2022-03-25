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
