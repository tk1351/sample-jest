import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import ReduxAsync from './ReduxAsync'
import { configureStore } from '@reduxjs/toolkit'
import customCounterReducer from './features/customCounter/customCounterSlice'

afterEach(() => {cleanup()})

describe('ReduxAsync test', () => {
  let store
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer
      }
    })
  })
  it('Should display value with 100 + payload', async () => {
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    )
    userEvent.click(screen.getByText('FetchDummy'))
    // 2秒待つ
    expect(await screen.findByTestId('count-value')).toHaveTextContent(105)
  })
})