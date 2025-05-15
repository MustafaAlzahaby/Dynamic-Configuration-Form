import React from 'react';
import ConfigurationForm from './components/ConfigurationForm/ConfigurationForm';
import configData from './data/configData';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Dynamic Configuration Form</h1>
      <ConfigurationForm configData={configData} />
    </div>
  );
};

export default App;