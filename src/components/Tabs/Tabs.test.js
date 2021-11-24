import React from "react";
import { render} from '@testing-library/react'

// import test from 'ava'
import Tabs from "./Tabs"

// test.afterEach(cleanup)
const children = React.Children;
test('tabs  renders into document', () => {
  const handleClick = jest.fn();
  const handleKeyUp = jest.fn();
  const handler = {handleClick, handleKeyUp}
    
    const { getByTestId } = render(<Tabs {...handler} {...children} />)
    expect(getByTestId("tabs")).toBeInTheDocument()
  })