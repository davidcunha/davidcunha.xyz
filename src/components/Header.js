import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" className="alt">
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
