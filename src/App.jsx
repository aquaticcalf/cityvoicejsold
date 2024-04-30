// import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Middle from "./middle/middle.jsx"
import Right from "./right/right.jsx"
import Left from "./left/left.jsx"

function App() {

	return (
		<div className="bg-[#333333] flex justify-center">
			<Left />
			<Middle />
			<Right />
		</div>
	)
}

export default App
