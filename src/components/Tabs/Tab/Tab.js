import React from 'react';

const Tab = ({childred, index, isSelected}) => (
  <div className="tab-panel"
        id={`tabpanel_${index}`}
        name={`tabpanel_${index}`}
        role="tabpanel"
        aria-labelledby={`tab_${index}`}
        aria-hidden={!isSelected()}
        key={index}
  >
    {childred}
  </div>
);

export default Tab;