# Deploying Instructions
Deploying instructions for deploying to heroku.

**NOTE:-** Run all commands from inside the root of the app

## Initial Deployment
```bash
bash scripts/create.bash <app-name> &&
bash scripts/deploy.bash <app-name>
```

For example
```bash
bash scripts/create.bash askanexpert-landing-page &&
bash scripts/deploy.bash askanexpert-landing-page
```

## Subsequent Deploys
```bash
bash scripts/deploy.bash <app-name>
```

For example
```bash
bash scripts/deploy.bash askanexpert-landing-page
```

# Testing Instructions
Test the deployed build via navigating to
http://<app-name>.herokuapp.com inside browser

Example:-
http://askanexpert-landing-page.herokuapp.com

## Testing Lead Creation
See if the signup form works by signing up inside the front-end template and if it records a response inside the backend.

# Author
- Tejas Nikumbh
  - Email: tejnikumbh@gmail.com
  - Skype: tjnikumbh
