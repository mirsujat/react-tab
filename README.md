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
