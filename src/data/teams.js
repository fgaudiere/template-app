import React from 'react';
import {USERS} from './users';


export default class A extends React.Component {
    render () {
    const usersRole = USERS.map(function(USERS) {
        return [USERS.role, USERS.name]
        } 
    );
    const filterAdmin = USERS.filter(function(newarr1) {
        return newarr1.role === 'Admin';
    });
    const filterEditor = USERS.filter(function(newarr2) {
        return newarr2.role === 'Editor';
        });
    const filterViewer = USERS.filter(function(newarr3) {
        return newarr3.role === 'Viewer';
        });
   
    const TEAMTAB =  [
        {
            name: 'Total',
            value: `${usersRole.length}`
        },
        {
            name: 'Admins',
            value: `${filterAdmin.length}`
        },
        {
            name: 'Editors',
            value: `${filterEditor.length}`
        },
        {
            name: 'Viewers',
            value: `${filterViewer.length}`
        },
    
    ]
    

    console.log(TEAMTAB)
    return TEAMTAB
}
}

