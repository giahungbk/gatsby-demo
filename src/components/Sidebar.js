import React from "react"
import { Link } from "gatsby"

export default function Sidebar(props) {
  const { edges } = props
  let tags = []
  let categories = []
console.log(props);

  edges.forEach(({ node }) => {
    tags = Array.from(new Set([...tags, ...node.tags.match(/[a-z]+/g)]));
    categories = Array.from(new Set([...categories, ...node.categories.match(/[a-z]+/g)]));
  })


  return (
    <aside>
      <div>
        <h3>Chuyên mục</h3>
        {categories.map((category, index) => (
          <p key={index}>
            <Link to={`/categories/${category.toLowerCase()}/`}>
              {category}
            </Link>
          </p>
        ))}
      </div>

      <div>
        <h3>Thẻ</h3>
        {tags.map((tag, index) => (
          <p key={index}>
            <Link to={`/tags/${tag.toLowerCase()}/`}>{tag}</Link>
          </p>
        ))}
      </div>
    </aside>
  )
}
