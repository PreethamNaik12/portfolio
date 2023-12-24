import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);