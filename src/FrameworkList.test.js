import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import FrameworkList from './FrameworkList'

afterEach(() => cleanup())

describe('Rendering the list with props', () => {
  // No Data!が正しく表示されるか
  it('Should render No data ! when no data propped', () => {
    render(<FrameworkList />)
    // HTML内にtextが含まれるかどうか確認する
    expect(screen.getByText('No data !')).toBeInTheDocument()
  })
  // propsが渡されているか
  it('Should render list item correctly', () => {
    const dummyData = [
      { id: 1, item: 'React dummy' },
      { id: 2, item: 'Angular dummy' },
      { id: 3, item: 'Vue dummy' }
    ]
    render(<FrameworkList frameworks={dummyData}/>)
    const frameworkItems = screen.getAllByRole('listitem').map((ele) => ele.textContent)
    const dummyItems = dummyData.map((ele) => ele.item)
    expect(frameworkItems).toEqual(dummyItems)
    expect(screen.queryByText('No data !')).toBeNull()
  })
})