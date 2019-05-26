import Player from './Player'

let wrapper = shallow(<Player />)

describe('<Player />', () => {
  describe('Renders', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-player')).toExist()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
