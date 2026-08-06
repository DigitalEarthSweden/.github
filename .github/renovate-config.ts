import type { AllConfig } from "renovate/dist/config/types";

const config: AllConfig = {
  extends: ["github>DigitalEarthSweden/.github:preset.json5"],
  // Repositories here need to match the repositories for create-github-app-token
  // in .github/workflows/renovate.yaml.
  repositories: [
    "DigitalEarthSweden/.github",
    "DigitalEarthSweden/digital-earth-sweden-community",
    "DigitalEarthSweden/umbrella",
  ],
  onboarding: false,
  requireConfig: "optional",
  // gitAuthor: "renovate[bot] <des-renovate-app-id+renovate[bot]@users.noreply.github.com>",
  secrets: {
    HARBOR_DIGITALEARTH_SE_USER: process.env.RENOVATE_HARBOR_DIGITALEARTH_SE_USER,
    HARBOR_DIGITALEARTH_SE_PASSWORD: process.env.RENOVATE_HARBOR_DIGITALEARTH_SE_PASSWORD,
  },
};

export default config;
