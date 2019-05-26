import LoopCheckbox from './LoopCheckbox'

let wrapper = shallow(<LoopCheckbox />)

describe('<LoopCheckbox />', () => {
  describe('Renders', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-loop-checkbox')).toExist()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
