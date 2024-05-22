import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../Store'
import { HomePage } from '../HomePage/HomePage'
import './App.scss'

function App() {

  return (
    <div className='app'>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
