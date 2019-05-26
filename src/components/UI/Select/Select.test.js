import Select from './Select'

let wrapper = shallow(
  <Select disabled={false} onChange={jest.fn()} options={[]} value={''} />,
)

describe('<Select />', () => {
  describe('Renders', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-select')).toExist()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
