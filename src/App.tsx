import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { LogtoProvider, LogtoConfig, } from '@logto/react';
import Root from "./routes/root";
import Landing from "./routes/landing"
import Admin from "./routes/admin"
import Users from "./routes/admin/users"
import Home from "./routes/admin/home"
import { useHandleSignInCallback } from '@logto/react';import { MantineProvider, AppShell, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

const config: LogtoConfig = {
  endpoint: 'https://auth.flyboat.biishop.org',
  appId: 'nw55OhfGcrcNlB8gFbqWV',
  resources: ['https://api.flyboat.biishop.org', 'https://api.logto.io'],
};

const Callback = () => {
  const { isLoading } = useHandleSignInCallback(() => {
    // Navigate to root path when finished
    if (!isLoading)
      document.location.href="https://flyboat.biishop.org/";
  });

  // When it's working in progress
  if (isLoading) {
    return <div>Redirecting...</div>;
  }
  document.location.href="https://flyboat.biishop.org/";
  return <div>Authenticated ig</div>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="callback" element={<Callback />} />
      <Route path="admin" element={<Admin />}>
        <Route path="users" element={<Users />} />
        <Route path="home" element={<Home />} />
      </Route>
    </>
  )
);

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <LogtoProvider config={config}>
          <RouterProvider router={router} />
        </LogtoProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
