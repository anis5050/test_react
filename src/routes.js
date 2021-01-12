import React from 'react';


const Tache=React.lazy(() => import('./views/base/Tache/AddTache'));
const TacheAuth=React.lazy(() => import('./views/base/Tache/Auth'));
const TacheUser=React.lazy(() => import('./views/base/Tache/AddUser'));
const ListeTache=React.lazy(() => import('./views/base/Tache/ListTache'));
const UpdateTache=React.lazy(() => import('./views/base/Tache/UpdateTache'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  
  
  
  
  
  
  { path: '/base/AddUSER', name: 'ADDUSER', component: TacheUser },
  { path: '/base/ListTache', name: 'ListTache', component: ListeTache },
  { path: '/base/UpdateTache', name: 'UpdateTache', component: UpdateTache },
  { path: '/base/addtache', name: 'Tache', component: Tache},
  { path: '/base/authtache', name: 'Auth', component: TacheAuth},
  
];

export default routes;
