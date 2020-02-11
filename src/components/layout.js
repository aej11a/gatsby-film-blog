import React from "react"
import { Link } from "gatsby"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, children, siteTitle }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const [width, setWidth] = React.useState(3600)

  const adjustWindowSize = () => {
    if(window){
      setWidth(window.innerWidth)
    }
  }

  React.useEffect(() => {
    window.addEventListener('resize', adjustWindowSize);
    return () => window.removeEventListener('resize', adjustWindowSize)
  }, [])

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
      <div className={"main-wrapper"}>
        <main>
          <div className={'site-title'}><h1>{siteTitle}</h1></div>
          {children}
        </main>
      </div>
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
