import { ImageProps } from "@mantine/core";
import React from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

export class ParticlesContainer extends React.PureComponent<ImageProps> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadLinksPreset(engine);
  }

  render() {
    const options = {
      preset: "links",
      background: {
        color: "",
      },
    };

    return <Particles options={options} init={this.customInit} />;
  }
}
