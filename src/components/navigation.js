import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <nav role="navigation" aria-label="Main">
    <div class="mb-3 text-center position-relative">
      <h1>☕</h1>
      <h1 class="display-5 fw-bold">snez.coffee</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead m2-4">coffee updates</p>
      </div>
      <Link to="/" className="nav-link text-muted stretched-link">
        home
      </Link>
    </div>
  </nav>
)

export default Navigation
