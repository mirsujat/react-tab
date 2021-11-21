import React, { Component, Fragment } from 'react';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.tabs = props.children;
    this.state = {  };
  }
  render() {
    return (
      <div className="tabs">
        <div className="tab-list" role="tablist">
          {this.tabs.map((tab, i) =>(
            <button
            className="tab"
            href={`tabpael_${i}`}
            role="tab"
            id={`tab_${i}`}
            aria-controls={`tab_${i}`}
            
            >{tab.props.title}</button>
          ))}
        </div>
        <Fragment>
        {this.tabs.map((tab, i) =>(
          React.cloneElement(tab, {
            index: i,
            isSelected: () => tab === this.state.isSelected,
            key: i
          }})
        ))}  
        </Fragment>     

      </div>
    );
  }
}

export default Tabs;