import React from 'react';

//This is a  Tab Panel Container 
const Tab = ({children, index, isSelected}) => (
  <div id={`tabpanel_${index}`}
       name={`tabpanel_${index}`}
       role="tabpanel" 
       aria-labelledby={`tab_${index}`}
       aria-hidden={!isSelected()}
  >{children}</div>
)

export default Tab;