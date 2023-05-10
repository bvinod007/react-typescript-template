import './styles.css'
import IMAGE from './react-1.png'
import LOGO from './logo-react.svg'
import { Counter } from './ClickCounter'

const App = () => {
  const name = 'vinod'
  return (
    <>
      <h1>
        Hi Vinod Hello world! - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" height="200" />
      <Counter />
    </>
  )
}

export default App
