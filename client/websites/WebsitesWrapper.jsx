import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import WebsitesSingle from './WebsitesSingle.jsx';

Payment = new Mongo.Collection('payments');
Website = new Mongo.Collection('websites');

export default class WebsitesWrapper extends React.Component{

  websites(){
    return Website.find().fetch();
  }

  render() {
    let websites = this.websites();
    if(websites.length < 0){
      return (<div className="loading">Loading</div>);
    }
    return (
      <div className="websitesWrapper">
        <h1 className="header">Websites</h1>
        {websites.map((website)  => {
          return <WebsitesSingle website={website} />
        })}
      </div>
    );
  }
} 
