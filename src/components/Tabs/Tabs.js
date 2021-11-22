import React, { Component, Fragment } from 'react';


class Tabs extends Component {
  constructor(props) {
    super(props);
    this.tabs = props.children;
    this.state = { selected: false  };
  }

  componentDidMount = () => {
    let selected = this.tabs.find(tab => tab.props.selected) || this.tabs[0];
    this.setState({selected})
  }

  selectTab = (tab) =>{
    this.setState({selected: tab})
  }

  handleClick = (e, tab) =>{
    e.preventDefault();
    this.selectTab(tab);
  }

  render() {
   
    return (
      <div className="tabs">
        <div className="tab-list" role="tablist">
              {this.tabs.map((tab, i) =>(
                <button className="tab" 
                role="tab" 
                id={`tab_${i}`}
                href={`#tabpanel_${i}`}
                aria-controls = {`tab_${i}`}
                aria-selected = {tab === this.state.selected}
                onClick={e => this.handleClick(e, tab)}
                key={`tab_${i}`}
                >
                    {tab.props.title}
                </button>
              ))}
            </div>
            <Fragment>
              {this.tabs.map((tab, i) => (
                React.cloneElement(tab, {
                  index: i,
                  isSelected: () => tab === this.state.selected,
                  key: i
                })
              ))}
            </Fragment>

      </div>
    );
  }
}

export default Tabs;