import propTypes from 'prop-types'

const Dashboard = ({ name }) => {
  return <div>welcome to your Dashboard {name}</div>
}

Dashboard.propTypes = {
  name: propTypes.string,
}

export default Dashboard
