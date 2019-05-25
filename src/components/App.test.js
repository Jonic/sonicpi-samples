import App from './App'

jest.mock('../helpers/Analytics')

let wrapper

describe('<App />', () => {
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  describe('Renders...', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-app')).toExist()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
