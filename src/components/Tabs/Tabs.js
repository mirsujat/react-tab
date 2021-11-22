import React, { Component, Fragment } from 'react';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.tabs = props.children;
    this.activeLink = React.createRef();
    this.state = { selected: false };
  }

  componentDidMount = () =>{
    let selected = this.tabs.find(tab => tab.props.selected) || this.tabs[0];
    this.setState({selected})
  }
  componentDidUpdate = () =>{
    this.activeLink.focus()
  }

  selectTab = (tab) =>{
    this.setState({selected: tab})
  }

  handleClick = (e, tab) =>{
    e.preventDefault();
    this.selectTab(tab)
  }
  // For Key Board accessibility
  nextTab = (tab) =>{
    let index = this.tabs.indexOf(tab);
    if(index < this.tabs.length - 1) this.selectTab(this.tabs[index + 1])
  }
  previousTab = (tab) =>{
    let index = this.tabs.indexOf(tab);
    if(index > 0) this.selectTab(this.tabs[index - 1])
  }

  handleKeyUp = (e, tab) =>{  
    e.preventDefault();
   
    if(e.keyCode === 39) this.nextTab(tab);
    else if(e.keyCode === 37) this.previousTab(tab);
  }


  render() {
    return (
      <div className="tabs">
        <div className="tab-list" role="tablist">
            {this.tabs.map((tab, i) =>(
              <button className="tab" 
              id={`tab_${i}`} 
              role="tab" 
              aria-controls={`tab_${i}`} 
              aria-selected={tab === this.state.selected}
              tabIndex={tab === this.state.selected ? 0 : -1} 
              onClick={e => this.handleClick(e, tab)}
              onKeyUp={e => this.handleKeyUp(e, tab)}
              ref={el => {if(tab === this.state.selected) this.activeLink = el}}
              key={`tab_${i}`} >
                {tab.props.title}
                </button>
            ))}
        </div>
        <Fragment>
          {this.tabs.map((tab, i) =>(
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