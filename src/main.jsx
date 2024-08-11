import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { Provider } from 'react-redux';
import store from './store/store';
import { CartProvider } from './store/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <CartProvider>
                        <GlobalStyle />
                        <Navbar />
                        <App />
                        <Footer />
                    </CartProvider>
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>
    </Provider>
);
