import React from 'react';
import './Style.css';

const LoginSelection = ({ onUserTypeSelection }) => {
  const handleUserTypeSelection = (type) => {
    onUserTypeSelection(type);
  };

  return (
    <div className='login-background'>
    <div className="login-selection-container">
      <h2>Select User Type</h2>
      <div className="button-container">
        <button onClick={() => handleUserTypeSelection('user')}>User</button>
        <button onClick={() => handleUserTypeSelection('owner')}>Owner</button>
      </div>
    </div>
    </div>
  );
};

export default LoginSelection;