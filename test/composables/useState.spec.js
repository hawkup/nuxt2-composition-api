import { useState } from '~/composables/useState'

describe('useState', () => {
  it('should have initial value', () => {
    const { state } = useState(10)
    expect(state.value).toBe(10)
  })

  it('should update the value on call to setState', () => {
    const { state, setState } = useState(1)

    expect(state.value).toBe(1)

    setState(10)
    expect(state.value).toBe(10)
  })
})
