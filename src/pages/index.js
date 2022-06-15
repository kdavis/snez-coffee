import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <div class="my-3 p-3 bg-body rounded shadow-sm">
        <h6 class="border-bottom pb-2 mb-0">Recent coffees</h6>

        <div class="d-flex flex-column align-items-stretch">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug;

            const thumbnail = post.frontmatter.thumbnail?.publicURL;

            return (
              <div class="d-flex text-muted pt-3" key={post.fields.slug}>
                {
                  thumbnail && <img alt={title} className="flex-shrink-0 me-2 rounded" style={{ width: "32px", height: "32px" }} src={thumbnail} />
                }
                <p class="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <span class="d-block text-gray-dark"><strong>{title}</strong> <small> - {post.frontmatter.date}</small></span>
                  <span dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                    itemProp="description"></span>

                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnail {
            publicURL
          }
        }
      }
    }
  }
`
