import http from "../http-tache"

const getAll = () => {
  return http.get("/allTache");
};

const get = id => {
  return http.get(`/oneTache/${id}`);
};

const create = data => {
  return http.post("/addtache", data);
};


const update = (id, data) => {
  return http.put('/updateTache/'+id, data);
};

const remove = id => {
  return http.delete(`/deleteTache/${id}`);
};


export default {
  getAll,
  get,
  create,
 
  update,
  remove
 
};