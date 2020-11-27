import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RenderInput from './RenderInput'

// itが複数ある場合に記載する必要がある
afterEach(() => cleanup())

describe('Rendering', () => {
  // buttonとinput(placeholde名)があるかどうか
  it('Should render all the elements correctly', () => {
    render(<RenderInput />)
    expect(screen.getByRole('button')).toBeTruthy()
    expect(screen.getByPlaceholderText('Enter')).toBeTruthy()
  })
})

describe('Input form onChange event', () => {
  // inputに対してタイピングするテスト
  it('Should update input value correctly', () => {
    render(<RenderInput />)
    const inputValue = screen.getByPlaceholderText('Enter')
    // 第二引数に入れた文字列をシミュレートできる
    userEvent.type(inputValue, 'test')
    // シミュレートした文字列とinputフォームのvalueが一致するか判定
    expect(inputValue.value).toBe('test')
  })
})


describe('Console button conditionally triggered', () => {
  // inputが空の場合は動作しないテスト
  it('Should not trigger output function', () => {
    // mock関数を作成する
    const outputConsole = jest.fn()
    render(<RenderInput outputConsole={outputConsole} />)
    userEvent.click(screen.getByRole('button'))
    expect(outputConsole).not.toHaveBeenCalled()
  })
  // inputに文字が入っている場合のテスト
  it('Should trigger output function', () => {
    const outputConsole = jest.fn()
    render(<RenderInput outputConsole={outputConsole} />)
    const inputValue = screen.getByPlaceholderText('Enter')
    userEvent.type(inputValue, 'test')
    userEvent.click(screen.getByRole('button'))
    // 一度だけ関数が呼ばれる
    expect(outputConsole).toHaveBeenCalledTimes(1)
  })
})


