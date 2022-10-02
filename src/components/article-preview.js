import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <div>
      {posts.map((post) => {
        return (
          <Link to={`/blog/${post.slug}`}>
            <div class="d-flex mb-2" key={post.slug}>
              <div class="flex-shrink-0">
                <GatsbyImage image={post.thumbnail.gatsbyImage} />
              </div>
              <div class="flex-grow-1 ms-3">
                <strong>{post.title}</strong>
                <br /> {post.overview?.overview}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ArticlePreview
