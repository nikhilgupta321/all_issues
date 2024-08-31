import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard';
import Editors from '../Pages_editors/Editors';

const MainComponent = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Fetch or set your list here
  }, []);

  return (
    <>
      <Dashboard editorsCount={list.length} />
      <Editors />
      {/* Other components or content */}
    </>
  );
};

export default MainComponent;
