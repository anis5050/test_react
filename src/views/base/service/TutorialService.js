import http from "../http-common"

const getAll = () => {
  return http.get("/allUser");
};

const get = id => {
  return http.get(`/oneUser/${id}`);
};

const create = data => {
  return http.post("/adduser", data);
};
const auth = data => {
  return http.post("/authenUser", data);
};

const update = (id, data) => {
  return http.put('/updateuser/'+id, data);
};

const remove = id => {
  return http.delete(`/deleteuser/${id}`);
};

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

export default {
  getAll,
  get,
  create,
  auth,
  update,
  remove
 
};