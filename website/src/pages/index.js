/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import { Styled } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Meta from "../components/meta"
import Share from "../components/share"

const IndexPage = () => {
  const { file, site: { siteMetadata: { title, siteUrl} }} = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "home.mdx" }) {
        childMdx {
          body
        }
      }
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)
  return (
    <Layout>
      <Meta />
      <Styled.root>
        <div sx={{ display: "flex", flexDirection: "column", py: 5 }}>
          <MDXRenderer>{file.childMdx.body}</MDXRenderer>
          <div sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', my: 5}}>
            <Share twitterHandle="pedropbuendia" url={siteUrl} title={title} tags={[]}/>
          </div>
          <footer sx={{ alignSelf: "center", color: "gray", mt: 5 }}>
            Un proyecto desarrollado por <a href="https://ppinera.es">Pedro Piñera</a>
          </footer>
        </div>
      </Styled.root>
    </Layout>
  )
}

export default IndexPage
