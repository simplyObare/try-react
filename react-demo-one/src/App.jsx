import Counter from './components/Counter'
import Number from './components/Number'
import User from './components/User'

const App = () => {
  return (
    <section>
      Hello
      <div>
        <Number />
      </div>
      <User name="John" age={30} />
      <div>
        <Counter />
      </div>
    </section>
  )
}

export default App
