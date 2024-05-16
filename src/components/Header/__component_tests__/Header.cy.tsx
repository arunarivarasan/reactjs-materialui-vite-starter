import { mount } from 'cypress/react18'
import Header from "../Header"

describe('Header', () => {
  it('should render', () => {
    mount(<Header />)
    cy.get('div').should('exist')
  })

  it('should render a button', () => {
    mount(<Header />)
    cy.get('button').should('exist')
  })
})
