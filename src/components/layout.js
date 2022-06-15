import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper container text-lowercase" data-is-root-path={isRootPath}>
      <Header className="global-header" />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
