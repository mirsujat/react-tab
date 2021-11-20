import React, { Fragment } from 'react';


class Tabs extends React.Component {
  constructor(props) {
    super(props)
    // React.Children
    // React.Children provides utilities for dealing with the this.props.children opaque /// data structure.
    // React.Children.map
    // React.Children.map(children, function[(thisArg)])
    this.tabs = props.children;
    this.activeLink = React.createRef();
    this.state = { selected: this.tabs.find(tab => tab.props.selected) || this.tabs[0] }
  }
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
    e.preventDefault()
    if (e.which === 13) this.selectTab(tab)
    else if (e.which === 37) this.previousTab(tab)
    else if (e.which === 39) this.nextTab(tab)
    else if (e.which === 36) this.firstTab(tab)
    else if (e.which === 35) this.lastTab(tab)
  }
  render() {
    console.log("Tab", this.tabs);
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