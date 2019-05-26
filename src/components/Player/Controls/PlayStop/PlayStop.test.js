import PlayStop from './PlayStop'

let wrapper = shallow(<PlayStop />)

describe('<PlayStop />', () => {
  describe('Renders', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-play-stop')).toExist()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
