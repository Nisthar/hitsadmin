import React from 'react';

export default class UsersSingle extends React.Component{
  banUser(userId){
    let banning = Meteor.users.update({_id: userId},{$set:{"profile.banned": true}});
    if(banning){ return true; }else{ return false; }
  }

  render(){
    return (
        <li>
          {this.props.user.username}
          <div className="user-controls">
            <button type="button" class="ban-btn" onClick={this.banUser(this.props.user._id)}>{this.props.user.profile.banned ? 'Ban' : 'Unban'}</button>
          </div>
        </li>
      );
  }
}
