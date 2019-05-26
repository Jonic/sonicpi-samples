import PlayerContext from 'contexts/Player'
import SampleSelector from './SampleSelector'

const contextValue = {
  currentSample: '',
  filteredSamples: [],
  isLoading: false,
  setCurrentSample: jest.fn(),
}

let wrapper = mount(
  <PlayerContext.Provider value={contextValue}>
    <SampleSelector />,
  </PlayerContext.Provider>,
)

describe('<SampleSelector />', () => {
  describe('Renders', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-sample-selector')).toExist()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
