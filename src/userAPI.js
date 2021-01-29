const getUserDetails = () => {
  fetch("http://localhost:3000/user/12")
    .then((response) => response.json())
    .then((result) => console.log("Success: ", result.data))
    .catch((error) => console.log("Error: ", error));
};

const getUserActivity = () => {
  fetch("http://localhost:3000/user/12/activity")
    .then((response) => response.json())
    .then((result) => console.log("Success: ", result.data))
    .catch((error) => console.log("Error: ", error));
};

const getUserAverageSession = () => {
  fetch("http://localhost:3000/user/12/average-sessions")
    .then((response) => response.json())
    .then((result) => console.log("Success: ", result.data))
    .catch((error) => console.log("Error: ", error));
};

const getUserPerformance = () => {
  fetch("http://localhost:3000/user/12/performance")
    .then((response) => response.json())
    .then((result) => console.log("Success: ", result.data))
    .catch((error) => console.log("Error: ", error));
};

export {
  getUserDetails,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
};
