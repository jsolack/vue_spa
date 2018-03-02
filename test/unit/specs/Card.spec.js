import Vue from 'vue'
import Card from '../../../src/theme/Card.vue'

// grouping with 'describe'
describe('Card.vue', () => {
  const createComponent = () => {
    const CardConstructor = Vue.extend(Card)
    const comp = new CardConstructor({
      propsData: {
        link: 'http://www.google.com'
      }
    }).$mount()
    return comp
  }
  it('should render a link', () => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.google.com')
  })
  //                                                           // done callback
  //                                                           // to handle async calls below
  it('should update element\'s href when property link changes', (done) => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.google.com')

    comp.link = 'https://www.google.com'
    // async dom updated
    Vue.nextTick(() => {
      expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
        .to.equal('https://www.google.com')
      done()
    })
  })
})
