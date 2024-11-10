// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://880d9c6475d0cc9a56dd17c1fedd6d2b@o4508269779681280.ingest.de.sentry.io/4508269784399952",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
