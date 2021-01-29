/**
 * Fetch the user details from the server
 *
 * @param   {func}  resolve  The function to fires if the request is a success
 *
 * @return  {void}
 */
const getUserDetails = (resolve) => {
  fetch("http://localhost:3000/user/18")
    .then((response) => response.json())
    .then((result) => resolve(result.data))
    .catch((error) => console.log("Error: ", error));
};

/**
 * Fetch the user activity from the server
 *
 * @param   {func}  resolve  The function to fires if the request is a success
 *
 * @return  {void}
 */
const getUserActivity = (resolve) => {
  fetch("http://localhost:3000/user/18/activity")
    .then((response) => response.json())
    .then((result) => resolve(result.data))
    .catch((error) => console.log("Error: ", error));
};

/**
 * Fetch the user average session from the server
 *
 * @param   {func}  resolve  The function to fires if the request is a success
 *
 * @return  {void}
 */
const getUserAverageSession = (resolve) => {
  fetch("http://localhost:3000/user/18/average-sessions")
    .then((response) => response.json())
    .then((result) => resolve(result.data))
    .catch((error) => console.log("Error: ", error));
};

/**
 * Fetch the user performance from the server
 *
 * @param   {func}  resolve  The function to fires if the request is a success
 *
 * @return  {void}
 */
const getUserPerformance = (resolve) => {
  fetch("http://localhost:3000/user/18/performance")
    .then((response) => response.json())
    .then((result) => resolve(result.data))
    .catch((error) => console.log("Error: ", error));
};

export {
  getUserDetails,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
};
