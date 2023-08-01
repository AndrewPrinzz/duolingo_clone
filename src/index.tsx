import './bootstrap'
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { AppProviders } from 'context/app-providers';
import { FullPageSpinner } from 'compontents/lib';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<FullPageSpinner />}>
      <AppProviders>
        <App />
      </AppProviders>
    </React.Suspense>
  </React.StrictMode>
);
