import 'web-audio-test-api'

import Audio from './Audio'

jest.mock('helpers/Analytics')

let wrapper = shallow(<Audio />)

describe('<Audio />', () => {
  describe('Renders', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-audio')).toExist()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
