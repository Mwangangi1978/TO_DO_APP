import './App.css'
import Home from './components/Home'
import {Provider} from "react-redux"
import store from './Redux/store'



function App() {
 

  return (
    <Provider store={store}>
      <div>
        <Home  />
      </div>
    </Provider>
  )
}

export default App
