import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Meta = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const titleTemplate = title ? `%s | ${site.siteMetadata.title}` : `%s`
  const _title = title ? title : site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={_title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: _title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: "https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/04/COVID.jpg"
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: _title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          site.siteMetadata.keywords.length > 0
            ? {
                name: `keywords`,
                content: site.siteMetadata.keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

Meta.defaultProps = {
  lang: `en`,
  meta: [],
}

export default Meta
