import ReactDOM from 'react-dom';
import App from './App.js';
import { ContextProvider } from './contexts/ContextProvider';
import './index.css';
ReactDOM.render(<ContextProvider><App/></ContextProvider>,document.querySelector('#root'));