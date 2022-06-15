import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
     query HeaderQuery {
       site {
         siteMetadata {
           title
           author {
             summary
           }
           social {
             twitter
           }
         }
       }
     }
   `)

  const title = data.site.siteMetadata?.title
  const summary = data.site.siteMetadata?.author?.summary

  return (
    <div class="px-4 py-5 my-3 text-center position-relative">
      <h1>☕</h1>
      <h1 class="display-5 fw-bold">{title}</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">{summary}</p>
      </div>
      <Link to="/" className="nav-link text-muted stretched-link">home</Link>
    </div>
  )
}

export default Header
