import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path="/profile" element={<User />} />
				<Route path="/*" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App
