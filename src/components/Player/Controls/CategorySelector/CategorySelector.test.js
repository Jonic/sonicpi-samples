import CategorySelector from './CategorySelector'
import PlayerContext from 'contexts/Player'

const contextValue = {
  categories: [],
  currentCategory: '',
  isLoading: false,
  setCurrentCategory: jest.fn(),
}

let wrapper = mount(
  <PlayerContext.Provider value={contextValue}>
    <CategorySelector />,
  </PlayerContext.Provider>,
)

describe('<CategorySelector />', () => {
  describe('Renders', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-category-selector')).toExist()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
