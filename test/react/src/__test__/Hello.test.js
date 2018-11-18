import React from 'react'
import Hello from '../components/Hello.jsx'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Pruebas en React', () => {
  test('Comprobando props', () => {
    const data = { title: "Hola Jest"}
    const wrapper = mount(
      <Hello title={data.title} />
    )
    const h1 = wrapper.find('h1')

    expect(h1.text()).toBe('Hola Jest')
  })
})
