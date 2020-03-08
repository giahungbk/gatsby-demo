//? generate a slug for each post
// gatsby.md -> gatsby -> /blog/gatsby

const path = require("path")

/**
 * onCreateNode là một Gatsby API được gọi mỗi khi có một node mới
 * thêm vào hay chỉnh sửa (mỗi node chính là một file).
 * Mục đích của hàm này là mình sẽ tạo thêm trường slug cho mỗi node
 */
// tao slug cho page
/*module.exports.onCreateNode  = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    //* cut name file md => slug name
    const slug = path.basename(node.fileAbsolutePath, ".md")

    //* create fields slug query. in createPages get slug query
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}*/

// dynamic page contenful needn't onCreateNode
/**
 * Tạo ra trang tương ứng với mỗi bài viết
Để làm việc này, mình cần phải sử dụng một Gatsby API khác là createPages
 */
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const tagTemplate = path.resolve("./src/templates/tag.js")
  const categorieTemplate = path.resolve("./src/templates/categorie.js")
  let tags = []
  let categories = []

  //* 1. get path to template
  //* 2. get markdown data
  //* 3. create new pages
  let res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            tags
            categories
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    tags = Array.from(new Set([...tags, ...node.tags.match(/[a-z]+/g)]))
    categories = Array.from(new Set([...categories, ...node.categories.match(/[a-z]+/g)])
    )
  })

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  tags.forEach(tag => {
    createPage({
      component: tagTemplate,
      path: `/tags/${tag.toLowerCase()}`,
      context: {
        tag,
      },
    })
  })
  categories.forEach(categorie => {
    createPage({
      component: categorieTemplate,
      path: `/categories/${categorie.toLowerCase()}`,
      context: {
        categorie,
      },
    })
  })
}
