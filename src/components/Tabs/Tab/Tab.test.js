import { render} from '@testing-library/react'

// import test from 'ava'
import Tab from "./Tab"

// test.afterEach(cleanup)
test('tab panel renders into document', () => {
  const isSelected = jest.fn()
  const props = {isSelected}
    const { getByTestId } = render(<Tab {...props}/>)
    expect(getByTestId("tabpanel")).toBeInTheDocument()
  })