import App from "./App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import { renderStylesToString } from "emotion-server";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const context = {};
    const markup = renderStylesToString(
      renderToString(
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      )
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `
          <!doctype html>
          <html lang="en">
            <head>
              <title>Mark Lyck - Web Developer</title>

              <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <link rel="manifest" href="/manifest.json">
              <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch/apple-touch-icon.png">
              <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32">
              <link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16">

              <meta name="theme-color" content="#ED5B5F">
              <meta name="description" content="MARK LYCK PORTFOLIO / Web Developer">

              <meta property="og:type" content="website">
              <meta property="og:description" content="MARK LYCK PORTFOLIO / Web Developer">
              <meta property="og:site_name" content="MARK LYCK PORTFOLIO">
              <meta property="og:locale" content="en_us">
              <meta property='og:url' content="www.marklyck.com">
              <meta property="og:title" content="MARK LYCK PORTFOLIO">
              <meta property="og:image" content="/media/portfolio.jpg">
              
              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ""
              }
              ${
                process.env.NODE_ENV === "production"
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${
                      assets.client.js
                    }" defer crossorigin></script>`
              }
            </head>
            <body>
              <div id="root">${markup}</div>
            </body>
          </html>
        `
      );
    }
  });

export default server;
