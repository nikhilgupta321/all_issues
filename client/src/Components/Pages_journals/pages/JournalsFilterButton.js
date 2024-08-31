// JournalsFilterButton.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JournalsFilterButton = ({ type, label }) => {
  return (
    <Link to={`/issues/journals/entries/status`} state={{ type }}>
      <button className={`w-auto px-1 py-2 text-center bg-gray-300 rounded text-black-200 uppercase text-xs ${type === 'padding' ? 'padding' : ''}`}>
        {label}
      </button>
    </Link>
  );
};

export default JournalsFilterButton;
