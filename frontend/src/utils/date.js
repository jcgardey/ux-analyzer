export const dateToISOString = (aDate) =>
  `${aDate.getDate()}/${
    aDate.getMonth() + 1
  }/${aDate.getFullYear()} ${aDate.getHours()}:${
    aDate.getMinutes() < 10 ? `0${aDate.getMinutes()}` : aDate.getMinutes()
  }`;

