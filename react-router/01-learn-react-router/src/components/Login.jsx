import propTypes from 'prop-types'

function Login({ onLogin }) {
  const handleLogInClick = () => {
    onLogin()
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogInClick}>login</button>
    </div>
  )
}

Login.propTypes = {
  onLogin: propTypes.func,
}

export default Login
