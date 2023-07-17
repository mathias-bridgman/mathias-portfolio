import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Foundations from './components/foundations'
import Bootcamp from './components/bootcamp'
import App from './components/App'
export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/Foundations" element={<Foundations />} />
    <Route path="/Bootcamp" element={<Bootcamp />} />
  </>
)

export const router = createBrowserRouter(routes)
