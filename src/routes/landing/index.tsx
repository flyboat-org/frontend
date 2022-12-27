import { MantineProvider, AppShell, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import HeroBullets from './HeroBullets';
import HeaderMegaMenu from './Header';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ParticlesContainer } from './Particles';

export default function Landing() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
  }, []);


  return (
    <div>

    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppShell header={<HeaderMegaMenu />} >
          <div style={{ zIndex: -1, position: "absolute" }}>
            <ParticlesContainer />
          </div>
          <HeroBullets />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
    </div>
  )
}
