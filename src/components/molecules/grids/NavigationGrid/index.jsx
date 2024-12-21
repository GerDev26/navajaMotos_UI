import PropTypes from 'prop-types'
import './styles.css'

export function NavigationGrid ({ navbar, content }) {
  return (
    <section className='navigation-grid'>
      <header>
        {navbar}
      </header>
      <main>
        {content}
      </main>
    </section>
  )
}

NavigationGrid.propTypes = {
  navbar: PropTypes.element,
  content: PropTypes.element
}
