import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import UsersSingle from './UsersSingle.jsx';


export default class UsersWrapper extends TrackerReact(React.Component){
  // constructor(){
  //   super();
  // }
  users(){
    return Meteor.users.find().fetch();
  }
  render(){
    let users = this.users();
    if(users.length <= 0){
      return (<div classsName="loading">Loading</div>);
    }
    return (
        <div className="users-wrapper">
        <h1>Users</h1>
          <ul>
          {users.map((user) => {
            return <UsersSingle key={user._id} user={user} />
          })}
        </ul>
        </div>
      );
  }
}
