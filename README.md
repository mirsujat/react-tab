# `Tabs ` #
Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.

Terms used to describe this design pattern include:

### `Tabs or Tabbed Interface `
A set of tab elements and their associated tab panels.

### `Tab List `
A set of tab elements contained in a tablist element.

### `tab `
An element in the tab list that serves as a label for one of the tab panels and can be activated to display that panel.

### `tabpanel `
The element that contains the content associated with a tab.
When a tabbed interface is initialized, one tab panel is displayed and its associated tab is styled to indicate that it is active. When the user activates one of the other tab elements, the previously displayed tab panel is hidden, the tab panel associated with the activated tab becomes visible, and the tab is considered "active".

# `Accessibility Features`
### `Keyboard Support`
<table>
    <tr style="">
        <td>key</td>
        <td>function</td>
    </tr>
    <tr>
    <td>tab</td>
    <td>
      <p> 
      - When focus moves into the tab list, places focus on the active tab element . 
      </p>
      <p>
      - When the tab list contains the focus, moves focus to the next element in the tab sequence, which is the tabpanel element.
      </p>
    </td>
    </tr>
    <tr>
    <td>Right Arrow</td>
    <td>
      <p> - Moves focus to the next tab.</p>
      <p> - If focus is on the last tab, moves focus to the first tab.</p>
      <p> - Activates the newly focused tab.</p>
    </td>
    </tr>
    <tr>
     <td>Left Arrow</td>
     <td>
     <p> -Moves focus to the previous tab.</p>
     <p> -If focus is on the first tab, moves focus to the last tab.</p>
     <p> -Activates the newly focused tab.</p>
     </td>
    </tr>
    <tr>
      <td>Home</td>
      <td>
      <p>Moves focus to the first tab and activates it.</p>
      </td>
    </tr>
    <tr>
    <td>End</td>
    <td>Moves focus to the last tab and activates it.</td>
    </tr>
</table>

### `Role, Property, State, and Tabindex Attributes`

<table>
  <thead>
    <tr>
      <th>Role</th>
      <th>Attribute</th>
      <th>Element</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>tablist</td>
    <td></td>
    <td>div</td>
    <td>Indicates that the element serves as a container for a set of tabs.</td>
  </tr>
   <tr>
    <td></td>
    <td>aria-label=""</td>
    <td>div</td>
    <td>Provides a label that describes the purpose of the set of tabs.</td>
  </tr>
    <tr>
    <td>tab</td>
    <td></td>
    <td>button</td>
    <td>
    <p> - Indicates the element serves as a tab control.<p>
    <p> - When focused, is automatically activated, causing its associated tabpanel to be displayed.<p>
    <p> - Provides a title for its associated tabpanel.<p>
    </td>
  </tr>
  <tr>
    <td></td>
    <td>aria-selected="true"</td>
    <td>button</td>
    <td>
    <p> - Indicates the tab control is activated and its associated panel is displayed.<p>
    <p> - Set when a tab receives focus.<p>
    </td>
  </tr>
   <tr>
    <td></td>
    <td>tabindex="-1"</td>
    <td>button</td>
    <td>
    <p> - Removes the element from the page Tab sequence.<p>
    <p> - Set when a tab is not selected so that only the selected tab is in the page Tab sequence.<p>
    <p> - Since an HTML button element is used for the tab, it is not necessary to set tabindex=0 on the selected (active) tab element.<p>
    </td>
  </tr>
   <tr>
    <td></td>
    <td>aria-controls="IDREF"</td>
    <td>button</td>
    <td>
    <p> - Refers to the tabpanel element associated with the tab.<p>
    </td>
  </tr>
  <tr>
    <td>tabpanel</td>
    <td></td>
    <td>div</td>
    <td>
    <p> - Indicates the element serves as a container for tab panel content.<p>
    <p> - Is hidden unless its associated tab control is activated.<p>
    </td>
  </tr>
  <tr>
    <td></td>
    <td>aria-labelledby="IDREF" </td>
    <td>div</td>
    <td>
    <p> - Refers to the tab element that controls the panel.<p>
    <p> - Provides an accessible name for the tab panel.<p>
    </td>
  </tr>
  <tr>
    <td></td>
    <td>tabindex="0" </td>
    <td>div</td>
    <td>
    <p> - Puts the tabpanel in the page Tab sequence.<p>
    <p> - Facilitates movement to panel content for assistive technology users.<p>
    <p> - Especially helpful if there are panels that do not contain a focusable element.<p>
    </td>
  </tr>

  </tbody>
</table>

### CSS
> 
> .tabs {
  display: block;
  width: 20em;
  font-family: "lucida grande", sans-serif;
}

[role="tablist"] {
  display: flex;
  width: 20em;
  margin: 0 0 -0.1em;
  background-color: rgba(237, 239, 243, 1);
  overflow: visible;
}

[role="tab"] {
  position: relative;
  margin: 0;
  padding: 0.5em;
  border: 1px solid rgba(183, 183, 184, 1);
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  background: rgba(237, 239, 243, 1);
}

[role="tab"]:hover::before,
[role="tab"]:focus::before,
[role="tab"][aria-selected="true"]::before {
  position: absolute;
  bottom: 100%;
  right: -1px;
  left: -1px;
  border-radius: 0.2em 0.2em 0 0;
  border-top: 3px solid rgb(170, 50, 220, 0.6);
  content: "";
}

[role="tab"][aria-selected="true"] {
  border-radius: 0;
  background: rgb(251, 252, 254, 1);
  outline: 0;
}

[role="tab"][aria-selected="true"]:not(:focus):not(:hover)::before {
  border-top: 5px solid rgb(68, 129, 235, 1);
}

[role="tab"][aria-selected="true"]::after {
  position: absolute;
  z-index: 3;
  bottom: -1px;
  right: 0;
  left: 0;
  height: 0.3em;
  background: rgb(251, 252, 254, 1);
  box-shadow: none;
  content: "";
}

[role="tab"]:hover,
[role="tab"]:focus,
[role="tab"]:active {
  outline: 0;
  border-radius: 0;
  color: inherit;
}

[role="tab"]:hover::before,
[role="tab"]:focus::before {
  border-color: rgb(68, 129, 235, 1);
}

[role="tabpanel"] {
  position: relative;
  z-index: 2;
  padding: 0.5em 0.5em 0.7em;
  border: 1px solid rgb(183 183 184);
  border-radius: 0 0.2em 0.2em 0.2em;
  box-shadow: 0 0 0.2em rgba(183, 183, 184, 1);
  background: rgba(251, 252, 254, 1);
}

[role="tabpanel"]:focus {
  border-color: rgba(74, 73, 75, 0.6);
  box-shadow: 0 0 0.2em rgba(205, 202, 206, 0.6);
  outline: 0;
}

[role="tabpanel"]:focus::after {
  position: absolute;
  bottom: 0;
  right: -1px;
  left: -1px;
  border-bottom: 3px solid rgb(241 116 53);
  border-radius: 0 0 0.2em 0.2em;
  content: "";
}

[role="tabpanel"] p {
  margin: 0;
}

[role="tabpanel"] * + p {
  margin-top: 1em;
}
[role="tabpanel"][aria-hidden="true"] {
  display: none;
}
>

# `Keyboard Interaction `
For the tab list:

### `Tab ` 
When focus moves into the tab list, places focus on the active tab element. When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is typically either the first focusable element inside the tab panel or the tab panel itself.

### `When focus is on a tab element in a horizontal tab list ` 
#### `Left Arrow :`
moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab. Optionally, activates the newly focused tab (See note below).
#### `Right Arrow :`
Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab. Optionally, activates the newly focused tab (See note below).
### `When focus is on a tab in a tablist with either horizontal or vertical orientation`.
#### `Space or Enter `
Activates the tab if it was not activated automatically on focus.

#### `Home (Optional) `
Moves focus to the first tab. Optionally, activates the newly focused.

#### `tab (See note below)`.
#### `End `
Moves focus to the last tab
#### `Shift + tab `
Move focus to the previous focus element

# `NOTE `
##### `It is recommended that tabs activate automatically when they receive focus as long as their associated tab panels are displayed without noticeable latency. This typically requires tab panel content to be preloaded. Otherwise, automatic activation slows focus movement, which significantly hampers users' ability to navigate efficiently across the tab list. For additional guidance, see § 6.4 Deciding When to Make Selection Automatically Follow Focus.`

### `If the tabs in a tab list are arranged vertically `
Down Arrow performs as Right Arrow is described above.
Up Arrow performs as Left Arrow is described above.
If the tab list is horizontal, it does not listen for Down Arrow or Up Arrow so those keys can provide their normal browser scrolling functions even when focus is inside the tab list.

# `WAI-ARIA Roles, States, and Properties`     
- The element that serves as the container for the set of tabs has role tablist.
  Each element that serves as a tab has role tab and is contained within the element with `role tablist`.
- Each element that contains the content panel for a tab has role tabpanel.
  If the tab list has a visible label, the element with role tablist has `aria-labelledby` set to a value that refers to the labelling element. Otherwise, the tablist element has a label provided by `aria-label`.
- Each element with role tab has the property `aria-controls` referring to its associated tabpanel element.
- The active tab element has the state `aria-selected` set to true and all other tab elements have it set to false.
- Each element with role tabpanel has the property `aria-labelledby` referring to its associated tab element.
- If a tab element has a pop-up menu, it has the property `aria-haspopup` set to either menu or true.
- If the tablist element is vertically oriented, it has the property `aria-orientation` set to vertical. The default value of `aria-orientation` for a tablist element is horizontal.

## Available Scripts 
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
