import LoopCheckbox from './LoopCheckbox'

const isLoading = false
const isLooping = false
const loopCheckboxClickHandler = jest.fn()

let wrapper

describe('<LoopCheckbox />', () => {
  beforeEach(() => {
    wrapper = shallow(
      <LoopCheckbox
        isLoading={isLoading}
        isLooping={isLooping}
        loopCheckboxClickHandler={loopCheckboxClickHandler}
      />,
    )
  })

  describe('Renders...', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-loop-checkbox')).toExist()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
