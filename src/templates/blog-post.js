import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulCoffeePost')
    const plainTextDescription = documentToPlainTextString(
      JSON.parse(post.body.raw)
    )

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { gatsbyImageData, description } = node.data.target
          if (!gatsbyImageData) {
            // asset is not an image
            return <p>Not an image?</p>
          }
          return <GatsbyImage image={gatsbyImageData} alt={description} />
        },
      },
    }

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={plainTextDescription}
          image={`http:${post.thumbnail.resize.src}`}
        />
        <article class="blog-post">
          <h2 class="blog-post-title mb-1">{post.title}</h2>
          {post.body?.raw && renderRichText(post.body, options)}
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulCoffeePost(slug: { eq: $slug }) {
      title
      slug
      thumbnail {
        resize(height: 256, width: 256) {
          src
        }
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
