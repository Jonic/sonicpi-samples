import Controls from './Controls'

let wrapper = shallow(<Controls />)

describe('<Controls />', () => {
  describe('Renders', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-controls')).toExist()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
