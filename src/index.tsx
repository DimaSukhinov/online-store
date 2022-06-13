import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/app/App';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {Provider} from 'react-redux';
import {store} from './store/store';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ApolloProvider>
    </React.StrictMode>
);
