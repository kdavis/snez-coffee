import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
     query FooterQuery {
       site {
         siteMetadata {
           title
           social {
             twitter
           }
         }
       }
     }
   `)

  const title = data.site.siteMetadata?.title
  const twitterAccount = data.site.siteMetadata?.social?.twitter

  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-muted">{title}</p>

      {/* <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
      </a> */}

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><Link className="nav-link px-2 text-muted" to={"https://twitter.com/" + twitterAccount}>twitter</Link></li>
        <li class="nav-item"><Link className="nav-link px-2 text-muted" to="https://tokenary.studio">tokenary.studio</Link></li>
      </ul>
    </footer>
  )
}

export default Footer
