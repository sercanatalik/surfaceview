import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// scroll bar
import 'simplebar/src/simplebar.css';

// apex-chart
import 'assets/third-party/apex-chart.css';
import 'assets/third-party/react-table.css';
import "@finos/perspective-viewer/dist/css/material.css";
import "@finos/perspective-viewer/dist/css/material-dark.css";
// project import
import App from './App';
import { store } from 'store';
import { ConfigProvider } from 'contexts/ConfigContext';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, split, HttpLink } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const container = document.getElementById('root');
const root = createRoot(container!);

const httpLink = new HttpLink({ uri: 'http://127.0.0.1/8080' })

const wsLink = new WebSocketLink({
  uri: 'ws://127.0.0.1:8080',
  options: { reconnect: true ,lazy: true,reconnectionAttempts: 10}
})

const splitLink = split(({ query }) => { const definition = getMainDefinition(query); return definition.kind === 'OperationDefinition' && definition.operation === 'subscription' }, wsLink, httpLink)



const client = new ApolloClient({link: splitLink, cache: new InMemoryCache()})


// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

root.render(
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <ConfigProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </ReduxProvider>
  </ApolloProvider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
