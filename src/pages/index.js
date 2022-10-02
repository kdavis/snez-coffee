import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulCoffeePost.nodes')
    // const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulCoffeePost(sort: { fields: date, order: DESC }, limit: 5) {
      nodes {
        title
        slug
        thumbnail {
          gatsbyImage(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 64
            height: 64
          )
          resize(height: 64, width: 64) {
            src
          }
        }
        overview {
          overview
        }
      }
    }
  }
`
