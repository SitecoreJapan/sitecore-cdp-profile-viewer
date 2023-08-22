<p align="center">
  <a href="https://www.sitecore.com/">
    <img src="https://wwwsitecorecom.azureedge.net/-/media/sitecoresite/images/global/logo/sitecore-logo.svg?la=es-ES&hash=89E5BCF25116F0D8B53F53F0E3D33A0E" alt="RBE logo" target="_blank" width="200" height="165">
  </a>
</p>

# Sitecore CDP Profile Viewer

This application is provided as a sample to display Sitecore CDP profile information.

## Prerequisites
### Node.js

This application needs to have Node.js installed to build the project. We recommend using the LTS version of Node.js. You can find the latest version of Node.js [here](https://nodejs.org/en/).

### Environment variables

The Sitecore CDP Profile Viewer needs some environment variables to work. You can get the values for them in API Access. And you can check VITE_BASE_URL from https://doc.sitecore.com/cdp/en/developers/api/base-url.html. For full functionality, create a **.env** file in the root of the project and add the following environment variables.

Please create **.env** file using **.env.example**

```
VITE_CDP_URL=<your-cdp-url>
VITE_BASE_URL=<your-region-api-base-url>
VITE_CLIENT_KEY=<your client key>
VITE_API_TOKEN=<your api token>
```

## Quick start

To start using `Sitecore CDP Profile Viewer`:
1. Install [Node.js](htts://nodejs.org/en/). We recommend the LTS version.
2. Clone the repository: `git clone git@github.com:SitecoreJapan/sitecore-cdp-profile-viewer`.
3. In the repository, to install all dependencies, run `npm install`.
4. In the root of the project, create a `.env` file then add the following environment variables to it:

```
VITE_CDP_URL=<your-cdp-url>
VITE_BASE_URL=<your-region-api-base-url>
VITE_CLIENT_KEY=<your client key>
VITE_API_TOKEN=<your api token>
```

5.  To start the development server, run `npm run dev`.
6.  To view the site, open your browser to **http://localhost:5174**
7.  To build the app for production, run: `npm run build`
