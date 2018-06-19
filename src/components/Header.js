/* eslint react/prop-types: 0 */
import React from 'react'

const Header = (props) => (
  <div className='header'>
    <div className='container'>
      <h1 className='header__title'>{props.title}</h1>
      <p className='header__subtitle'>{props.subtitle}</p>
    </div>
  </div>
)

Header.defaultProps = {
  title: 'MarkDown Previewer',
  subtitle: 'Free Code Camp Vizualisation Assignment. By Daniel Meilleur'
}
export default Header
