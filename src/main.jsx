import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle />
                <Navbar />
                <App />
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
