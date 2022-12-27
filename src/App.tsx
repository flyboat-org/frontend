import { LogtoConfig, LogtoProvider } from "@logto/react";
import { useHandleSignInCallback } from "@logto/react";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import Admin from "./routes/admin";
import Home from "./routes/admin/home";
import Users from "./routes/admin/users";
import Landing from "./routes/landing";
import Root from "./routes/root";

const config: LogtoConfig = {
  endpoint: "https://auth.flyboat.biishop.org",
  appId: "nw55OhfGcrcNlB8gFbqWV",
  resources: ["https://api.flyboat.biishop.org", "https://api.logto.io"],
};

const Callback = () => {
  const { isLoading } = useHandleSignInCallback(() => {
    // Navigate to root path when finished
    if (!isLoading) document.location.href = "https://flyboat.biishop.org/";
  });

  // When it's working in progress
  if (isLoading) {
    return <div>Redirecting...</div>;
  }
  document.location.href = "https://flyboat.biishop.org/";
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
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <LogtoProvider config={config}>
          <RouterProvider router={router} />
        </LogtoProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
