const url = 'https://api.insuranceagent.tube';
const webUrl = 'https://insuranceagent.tube/';
const tubeUrl = 'https://video.insuranceagent.tube/'
// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: false,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.insuranceagent.tube'
};
