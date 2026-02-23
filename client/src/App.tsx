import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './utils/queryClient'
import { Clothes } from './pages/Clothes'
import { Jewelery } from './pages/Jewelery'
import { Electronics } from './pages/Electronocs'
import { RegistrationPage } from './pages/RegistrationPage'
import { LoginPage } from './pages/LoginPage'
import { ProfilePage } from './pages/ProfilePage'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { ProductPage } from './pages/ProductPage'

function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/clothes/:id" element={<ProductPage />}></Route>
          <Route path="/clothes" element={<Clothes />}></Route>
          <Route path="/jewelery" element={<Jewelery />}></Route>
          <Route path="/electronics" element={<Electronics />}></Route>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App


// johnd
// m38rmF$