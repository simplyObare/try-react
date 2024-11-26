import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>
        It looks like you are trying to access a page that does not exist. Click
        <Link to="/">here</Link> to go back to the homepage.
      </p>
    </div>
  )
}

export default PageNotFound
