const arrayToSTring = (arr) => {
  return arr?.reduce((acc, cur) => {
    if (acc !== null) {
      return String(acc + ", " + cur);
    } else {
      return String(cur);
    }
  }, null);
};
export default arrayToSTring;
