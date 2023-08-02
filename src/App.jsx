
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Orders from './components/Orders'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='orders' element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
