import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from 'features/routes/AppRoutes';

import 'assets/css/preflight.css';
import 'assets/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
);
