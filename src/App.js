// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Tab from './components/Tabs/Tab/Tab';
import Tabs from './components/Tabs/Tabs';





function App() {
  return (
    <div className="app">
      <header>
       Accessibile React Tabs Component
      </header>
      <Tabs>
        <Tab title="Tabs">
          <section>
            <h4>Tabs</h4>
            <p> Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.
            </p>
            <p>Terms used to describe this design pattern include:</p>
            <h2>Tabs or Tabbed Interface</h2>
            <p> A set of tab elements and their associated tab panels.</p>
            <h2>Tab List</h2>
            <p>A set of tab elements contained in a tablist element.</p> 
            <h2>tab</h2>
            <p>An element in the tab list that serves as a label for one of the tab panels and can be activated to display that panel.</p>
            <h2>tabpanel</h2>
            <p>The element that contains the content associated with a tab.
            When a tabbed interface is initialized, one tab panel is displayed and its associated tab is styled to indicate that it is active. When the user activates one of the other tab elements, the previously displayed tab panel is hidden, the tab panel associated with the activated tab becomes visible, and the tab is considered "active".
            </p>
        </section>
    </Tab>
    <Tab title="Keyboard Interaction">
      <section>
        <h4>Keyboard Interaction</h4>
        <p>For the tab list:</p>
        <p>Tab: When focus moves into the tab list, places focus on the active tab element. When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is typically either the first focusable element inside the tab panel or the tab panel itself. When focus is on a tab element in a horizontal tab list:</p>
        <p>Left Arrow: moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab. Optionally, activates the newly focused tab (See note below).</p>
        <p>Right Arrow: Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab. Optionally, activates the newly focused tab (See note below).</p>         
        <p>When focus is on a tab in a tablist with either horizontal or vertical orientation:</p>
        <p>Space or Enter: Activates the tab if it was not activated automatically on focus.</p>
        <p>Home (Optional): Moves focus to the first tab. Optionally, activates the newly focused tab (See note below).</p>
        <p>End (Optional): Moves focus to the last tab. Optionally, activates the newly focused tab (See note below).</p>
        <p>Shift + F10: If the tab has an associated pop-up menu, opens the menu.</p>
        <p>Delete (Optional): If deletion is allowed, deletes (closes) the current tab element and its associated tab panel, sets focus on the tab following the tab that was closed, and optionally activates the newly focused tab. If there is not a tab that followed the tab that was deleted, e.g., the deleted tab was the right-most tab in a left-to-right horizontal tab list, sets focus on and optionally activates the tab that preceded the deleted tab. If the application allows all tabs to be deleted, and the user deletes the last remaining tab in the tab list, the application moves focus to another element that provides a logical work flow. As an alternative to Delete, or in addition to supporting Delete, the delete function is available in a context menu.</p>
      </section>
    </Tab>
         <Tab title="WAI-ARIA Roles">
           <section>
             <h4>WAI-ARIA Roles, States, and Properties</h4>
             <ul>
               <li>The element that serves as the container for the set of tabs has role tablist.</li>
               <li>Each element that serves as a tab has role tab and is contained within the element with role tablist.</li>
               <li>Each element that contains the content panel for a tab has role tabpanel.</li>
               <li>If the tab list has a visible label, the element with role tablist has aria-labelledby set to a value that refers to the labelling element. Otherwise, the tablist element has a label provided by aria-label.</li>
               <li>Each element with role tab has the property aria-controls referring to its associated tabpanel element.</li>
               <li>The active tab element has the state aria-selected set to true and all other tab elements have it set to false.</li>
               <li>Each element with role tabpanel has the property aria-labelledby referring to its associated tab element.</li>
               <li>If a tab element has a pop-up menu, it has the property aria-haspopup set to either menu or true.</li>
               <li>If the tablist element is vertically oriented, it has the property aria-orientation set to vertical. The default value of aria-orientation for a tablist element is horizontal.</li>
             </ul>
           </section>
        </Tab>
      </Tabs>
      <Footer></Footer>
    </div>
  );
}

export default App;
