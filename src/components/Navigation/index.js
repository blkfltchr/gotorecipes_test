import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar navbar-expand-sm navbar-light bg-white'>
      <a className='navbar-brand' href='/'>GoToRecipes</a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse justify-content-end' id='navbarNavAltMarkup'>
        <div className='navbar nav-pills'>
          <a className='nav-item nav-link' href='/recipes'>My recipes</a>
          <a className='nav-item nav-link' href='/recipes/add'>Add a recipe</a>
          <a className='nav-item nav-link' href='/search'><i className='fas fa-search' /></a>
          <a className='nav-item nav-link active' href='/signup'>Sign up</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
