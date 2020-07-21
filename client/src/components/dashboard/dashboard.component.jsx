import React from 'react';
import DashboardUpload from '../dashboard-upload/dashboard-upload.component';

import './dashboard.style.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-container container">
      <DashboardUpload className="dashboard-upload-form" />
    </div>
  );
};

export default Dashboard;
