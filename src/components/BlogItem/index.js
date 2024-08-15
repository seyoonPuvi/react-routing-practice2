// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {list} = props
  const {title, description, publishedDate} = list

  return (
    <li className="blog-item">
      <div className="title-publishedDate">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
