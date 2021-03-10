/**
 * Fetch the user details from the server
 *
 * @param   {func}  resolve  The function to fires if the request is a success
 *
 * @return  {void}
 */
const getUserDetails = (resolve, id) => {
  fetch(`http://localhost:3000/user/${id}`)
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
const getUserActivity = (resolve, id) => {
  fetch(`http://localhost:3000/user/${id}/activity`)
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
const getUserAverageSession = (resolve, id) => {
  fetch(`http://localhost:3000/user/${id}/average-sessions`)
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
const getUserPerformance = (resolve, id) => {
  fetch(`http://localhost:3000/user/${id}/performance`)
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
