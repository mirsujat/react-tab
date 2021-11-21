import React, { Fragment } from 'react';


class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.tabs = props.children; 
    this.activeLink = React.createRef();
    this.state = { selected: this.tabs.find(tab => tab.props.selected) || this.tabs[0] }
    this.NavigationKeys = {
    tabKey: 13,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46
  };
  }
  // For easy reference
   

  componentDidUpdate = () => {
    this.activeLink.focus()
  }

  selectTab = (tab) => { 
    this.setState({ selected: tab })
  }
  // PRESS Home Key on Key Board
  firstTab = (tab) => {
    const index = this.tabs.indexOf(tab)
    if (index > 0) this.selectTab(this.tabs[0])
  }
  // PRESS Left Arrow Key on Key Board
  previousTab = (tab) => {
    const index = this.tabs.indexOf(tab)
    if (index > 0) this.selectTab(this.tabs[index - 1])
  }
  // PRESS Right Arrow Key on Key Board
  nextTab = (tab) => {
    const index = this.tabs.indexOf(tab)
    if (index < this.tabs.length - 1) this.selectTab(this.tabs[index + 1])
  }
  // PRESS End Key on Key Board
  lastTab = (tab) => {
    const index = this.tabs.indexOf(tab)
    if (index >= 0) this.selectTab(this.tabs[this.tabs.length - 1])
  }
  handleClick = (e, tab) => {
    e.preventDefault()
    this.selectTab(tab)
  }

  handleKeyup = (e, tab) => {
     let key = e.keyCode;
    e.preventDefault()
    switch(key){
      case this.NavigationKeys.tabKey:
        this.selectTab(tab)
        break;
      case this.NavigationKeys.left:
        this.previousTab(tab)
        break;
      case this.NavigationKeys.right:
        this.nextTab(tab)
        break;
      case this.NavigationKeys.home:
        this.firstTab(tab)
        break;
      case this.NavigationKeys.end:
        this.lastTab(tab)
        break;
      default:

    }
 
  }
  render() {
    
    return (
      <div className="tabs">
        <div className="tab-list" role="tablist" aria-label={this.props.label}>
          {this.tabs.map((tab, i) => (
            <button
              id={`tab_${i}`}
              href={`#tabpanel_${i}`}
              role="tab"
              aria-controls={`tab_${i}`}
              aria-selected={tab === this.state.selected}
              tabIndex={tab === this.state.selected ? 0 : -1}
              onClick={e => this.handleClick(e, tab)}
              onKeyUp={e => this.handleKeyup(e, tab)}
              ref={el => { if (tab === this.state.selected) this.activeLink = el }}
              key={i}
             
            >{tab.props.title}</button>

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
      </div>)
  }
}

export default Tabs;