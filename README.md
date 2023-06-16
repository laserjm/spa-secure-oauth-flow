# spa-secure-oauth-flow

## Description

This repo shows a sample integration for the authorization code flow. The client secret secret is securely stored in the backend.

## Installation

To install this app go to `frontend` and `backend` folder and run `npm install` for each folder.

## Configuration

### Frontend

Update the frontend configuration in the `auth_config.json` file:

```json
{
  "domain": "",
  "audience": "",
  "clientId": "",
  "scopes": "",
  "redirectUrl": "",
  "logoutRedirectUrl": ""
}
```

### Backend

Update the backend configuration in the `auth_config.json` file:

```json
{
  "domain": "",
  "clientId": "",
  "clientSecret": "",
  "redirectUrl": ""
}
```

The port is by default configured to `5002`. If you want to update it you have to adjust proxy settings in `vite.config.ts` in the frontend folder, too.

## Usage

👉 Configure the `auth_config.json` beforehand 👈

To run the frontend open a terminal window in _/frontend and run `npm run dev`.
To run the backend open a second terminal window in _/backend and run `npm run dev`.

Once both apps are running you can test the authorization code flow.
