import './App.css'
import Home from './components/Home'
import {Provider} from "react-redux"
import store from './Redux/store'



function App() {
 

  return (
    <Provider store={store}>
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Home />
      </div>
    </Provider>
  )
}

export default App
