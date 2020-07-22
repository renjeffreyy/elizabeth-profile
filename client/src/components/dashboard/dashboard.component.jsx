import React from 'react';
import DashboardUpload from '../dashboard-upload/dashboard-upload.component';
import DashboardEditArt from '../dashboard-edit-art/dashboard-edit-art.component';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './dashboard.style.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-container container">
      <Tabs horizontal="true" className="dashboard-listgroup-container">
        <Tab eventKey="Upload" title="Upload Art">
          <DashboardUpload className="dashboard-upload-form" />
        </Tab>
        <Tab eventKey="Edit" title="Edit Art">
          <DashboardEditArt />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
