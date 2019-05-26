import Debug from './Debug'
import PlayerContext from 'contexts/Player'

const contextValue = {
  currentCategory: '',
  currentSample: '',
  isLooping: false,
  isPlaying: true,
}

let wrapper = mount(
  <PlayerContext.Provider value={contextValue}>
    <Debug />,
  </PlayerContext.Provider>,
)

describe('<Debug />', () => {
  describe('Renders', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-debug')).toExist()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
