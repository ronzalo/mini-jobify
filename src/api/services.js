const getJobs = query => fetch(process.env.REACT_APP_GETONBOARD_URL + query);
const getFavoriteJobs = () => fetch(process.env.REACT_APP_BACKEND_URL);
const postFavoriteJob = data => {
  return fetch(process.env.REACT_APP_BACKEND_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
};
const removeFavoriteJob = id => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export { getFavoriteJobs, getJobs, postFavoriteJob, removeFavoriteJob };
