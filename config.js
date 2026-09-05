// The renovate/config-validation check fails with "No config file found"
// when making a pull request from renovate/reconfigure. Import the
// real config file here and export it in hope that Renovate will suddenly
// be able to locate it and perform the config validation.
export { default } from "./.github/renovate-config.ts";
