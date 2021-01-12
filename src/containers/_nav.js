import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Tache',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
     
      
      {
        _tag: 'CSidebarNavItem',
        name: 'list Tache',
        to: '/base/authtache',
      },
      
      
     
      
     
      
      
    ],
  },
  
  
  
  
  
  
  
  
  
]

export default _nav
