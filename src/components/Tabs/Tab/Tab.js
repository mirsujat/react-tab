import React from 'react';

const Tab = ({children, index, isSelected}) => (
  <div className="tabpanel" 
  id={`tabpanel_${index}`} 
  name={`tabpanel_${index}`} 
  role="tabpanel" 
  aria-labelledby={`tab_${index}`} 
  aria-hidden={!isSelected()}
  key={`tabpanel_${index}`}
  tabIndex="0"
  data-test-id="tabpanel"
  >
      {children}
  </div>
);

export default Tab;