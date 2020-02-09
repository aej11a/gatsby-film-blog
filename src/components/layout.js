import React from "react"
import { Link } from "gatsby"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const [width, setWidth] = React.useState(1280)

  const adjustWindowSize = () => {
    if(window){
      setWidth(window.innerWidth)
    }
  }

  React.useEffect(() => {
    window.addEventListener('resize', adjustWindowSize);
    return () => window.removeEventListener('resize', adjustWindowSize)
  }, [])

  React.useEffect(() => {
    document.addEventListener("DOMContentLoaded", function() {
      adjustWindowSize()
    });
  })

  const FilmStripTicks = () => {
    const divs = []
    for(let i = 0; i < width - 80; i += 60){
      divs.push(<div className={"film-strip-tick"}/>)
    }
    return (
      <div className={"film-strip-tick-container"}>
        {divs}
      </div>
    )
  }

  return (
    <>
        <header className={"site-header"}>
          <FilmStripTicks/>
        </header>
        <main>{children}</main>
      <footer className={"page-footer"}>
        <FilmStripTicks/>
        {' '}
        {/*© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
      </footer>
    </>
  )
}

export default Layout
