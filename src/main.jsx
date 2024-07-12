import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from "sonner";
import store from './redux/store.js';
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store} >
			<Toaster position="top-right" expand={false} richColors closeButton />
			<App />
		</Provider>
	</React.StrictMode>
);
