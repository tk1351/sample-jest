import React from 'react'
import { render, screen } from '@testing-library/react'
import UseEffectRender from './UseEffectRender'

describe('useEffect rendering', () => {
  it('Should render only after async function resolved', async () => {
    render(<UseEffectRender />)
    // 最初のレンダリングはI amが表示されていないか確認
    expect(screen.queryByText(/I am/)).toBeNull()
    // 取得できてからI amが見つけられるか確認
    expect(await screen.findByText(/I am/)).toBeInTheDocument()
  })
})