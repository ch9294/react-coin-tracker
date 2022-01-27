import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DefaultTheme, ThemeProvider} from "styled-components";
import {QueryClient, QueryClientProvider} from "react-query";

const theme: DefaultTheme = {
    bgColor: '#2f3640',
    textColor: '#f5f6fa',
    accentColor: '#9c88ff'
}

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


