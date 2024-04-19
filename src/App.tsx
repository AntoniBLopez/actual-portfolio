import MyCvWeb from './pages/MyCvWeb'
// import Home from './pages/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Navigate to='/cv' />} />
          <Route path='/cv' element={<MyCvWeb />} />
          {/* <Route path='/home'>
            <Route index element={isAuth ? <HomePage /> : <Navigate to='/' />} />
            <Route path='profile/:userId' element={isAuth ? <ProfilePage /> : <Navigate to='/' />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
