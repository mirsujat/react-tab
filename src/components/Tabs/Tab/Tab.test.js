import { render} from '@testing-library/react'

// import test from 'ava'
import Tab from "./Tab"

// test.afterEach(cleanup)
test('tab panel renders into document', () => {
    const { getByTestId } = render(<Tab />)
    expect(getByTestId("tabpanel")).toBeInTheDocument()
  })