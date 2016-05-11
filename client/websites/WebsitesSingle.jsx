import React from 'react';
  

export default class WebsitesSingle extends React.Component{
  render() {
    return (
      <li>{this.props.website.address}</li>
    );
  }
} 
