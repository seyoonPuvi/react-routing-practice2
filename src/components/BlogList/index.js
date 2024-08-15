// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsListDetails} = props

  return (
    <ul className="blog-list-container">
      {blogsListDetails.map(each => (
        <BlogItem list={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
