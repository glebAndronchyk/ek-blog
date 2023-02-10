import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'app/App';

import 'assets/css/preflight.css';
import 'assets/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
