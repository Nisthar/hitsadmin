import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { MainLayout } from './layouts/MainLayout.jsx';
import  UsersWrapper  from './users/UsersWrapper.jsx';
import  WebsitesWrapper  from './websites/WebsitesWrapper.jsx';

FlowRouter.route('/users',{
  action(){
    mount(MainLayout,{
      content: (<UsersWrapper />)
    })
  }
});
FlowRouter.route('/websites',{
  action(){
    mount(MainLayout,{
      content: (<WebsitesWrapper />)
    })
  }
});
