import React from 'react';
import Alert from 'react-bootstrap/Alert';

import { removeAlert } from '../../actions/alert.action';
import { connect } from 'react-redux';

import './alert.style.scss';

const AppAlert = ({ alert, removeAlert }) => {
  return (
    <div className="alert-container">
      {alert.map((alertItem) => {
        return (
          <Alert
            key={alert.indexOf(alertItem)}
            variant={alertItem.variant}
            onClose={() => removeAlert(alertItem)}
            dismissible
          >
            <Alert.Heading>{alertItem.msg}</Alert.Heading>
          </Alert>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({ alert: state.alert.alerts });

export default connect(mapStateToProps, { removeAlert })(AppAlert);
