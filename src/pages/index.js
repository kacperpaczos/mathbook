import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Main from "../templates/page/main.js"
import Nav from "../templates/nav/nav.js"

const IndexPage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
              title
              menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <Main>
        <Nav menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title}>

        </Nav>
      </Main>
    )}
  />
)

export default IndexPage
