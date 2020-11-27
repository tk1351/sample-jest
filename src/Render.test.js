import React from 'react'
import { render, screen } from '@testing-library/react'
import Render from './Render'

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    render(<Render />)
    // screen.debug()
    // https://github.com/A11yance/aria-query
    // screen.debug(screen.getByRole("heading"))
    expect(screen.getByRole('heading')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
    // 複数ある場合はgetAllByRole()
    expect(screen.getAllByRole('button')[0]).toBeTruthy()
    expect(screen.getAllByRole('button')[1]).toBeTruthy()
    // screen.debug(screen.getByText('Udemy'))
    expect(screen.getByText('Udemy')).toBeTruthy()
    // textが無いかを確認する
    expect(screen.queryByText('Udeeeeeeemy')).toBeNull()
    // idがあるかどうか確認する
    expect(screen.getByTestId('copyright')).toBeTruthy()
  })
})
