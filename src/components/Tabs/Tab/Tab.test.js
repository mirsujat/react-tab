import { render, cleanup} from '@testing-library/react'
import Tab from "./Tab"

afterEach(() => cleanup)
test('tab panel renders into document', () => {
  const isSelected = jest.fn()
  const props = {isSelected}
  const { getByTestId } = render(<Tab {...props}/>)
  expect(getByTestId("tabpanel")).toBeInTheDocument()
  })