import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme-provider';

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  );
}
