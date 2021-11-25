import { render, cleanup} from '@testing-library/react'
import Tabs from "./Tabs"
import Tab from './Tab/Tab'

afterEach(()=> cleanup)

const MockTabs = () =>(
  <Tabs>
    <Tab title="tab one">First panel</Tab>
     <Tab title="tab two">Second Panel</Tab>
  </Tabs>
)

test('tabs  renders into document', () => {
  const handleClick = jest.fn();
  const handleKeyUp = jest.fn();
  const handler = {handleClick, handleKeyUp}
  const { getByTestId } = render(<MockTabs {...handler} />)
  expect(getByTestId("tabs")).toBeInTheDocument()
 
  })
  test('tablist  renders into document', () => {
    const handleClick = jest.fn();
    const handleKeyUp = jest.fn();
    const handler = {handleClick, handleKeyUp}
    const { getByTestId } = render(<MockTabs {...handler} />)
    expect(getByTestId("tablist")).toBeInTheDocument()
    
  })
  test('tab  renders into document', () => {
    const handleClick = jest.fn();
    const handleKeyUp = jest.fn();
    const handler = {handleClick, handleKeyUp}
    const { getByText } = render(<MockTabs {...handler} />)
    expect(getByText("tab one")).toBeInTheDocument()
  })
  test('tabpanel  renders into document', () => {
    const handleClick = jest.fn();
    const handleKeyUp = jest.fn();
    const handler = {handleClick, handleKeyUp}
    const { getByText } = render(<MockTabs {...handler} />)
    expect(getByText("First panel")).toBeInTheDocument()
  })


  // test by role property
  test('tabs  renders into document', () => {
  const handleClick = jest.fn();
  const handleKeyUp = jest.fn();
  const handler = {handleClick, handleKeyUp}
  const { getByRole } = render(<MockTabs {...handler} />)
  expect(getByRole("tabs")).toBeInTheDocument()
 
  })
  test('tablist  renders into document', () => {
    const handleClick = jest.fn();
    const handleKeyUp = jest.fn();
    const handler = {handleClick, handleKeyUp}
    const { getByRole } = render(<MockTabs {...handler} />)
    expect(getByRole("tablist")).toBeInTheDocument()
    
  })
  // test('tab  renders into document', () => {
  //   const handleClick = jest.fn();
  //   const handleKeyUp = jest.fn();
  //   const handler = {handleClick, handleKeyUp}
  //   const { getByRole } = render(<MockTabs {...handler} />)
  //   expect(getByRole("tab")).toBeInTheDocument()
  // })
  test('tabpanel  renders into document', () => {
    const handleClick = jest.fn();
    const handleKeyUp = jest.fn();
    const handler = {handleClick, handleKeyUp}
    const { getByRole } = render(<MockTabs {...handler} />)
    expect(getByRole("tabpanel")).toBeInTheDocument()
  })
  