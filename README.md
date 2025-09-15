[![This project uses GitHub Actions for continuous integration.](https://github.com/ijlee2/create-v2-addon-repo/actions/workflows/ci.yml/badge.svg)](https://github.com/ijlee2/create-v2-addon-repo/actions/workflows/ci.yml)

# create-v2-addon-repo

_Codemod to create a repo with v2 addons_

1. [Features](#features)
1. [Usage](#usage)
1. [Compatibility](#compatibility)
1. [Contributing](#contributing)
1. [License](#license)


## Features

Create a batteries-included project fast:

- Create as many v2 addons as you want
- Run `generate` and `destroy` commands to create and remove files
- Tailor blueprints to your needs, or stay close to the default with `update-blueprints` command
- Explore bleeding-edge Ember: Embroider app, `embroider-css-modules`, `glint`, `<template>` tag out of the box
- Maintain project like a pro: lint, test, CI, and documentation out of the box


## Usage

Step 1. Use `npx` to run `create-v2-addon-repo`.

```sh
npx create-v2-addon-repo <your-project-name>
```

This will create a folder named `<your-project-name>`.

Step 2. Change directory to the project root, then run these scripts in sequence:

```sh
# Install dependencies
pnpm install

# Build blueprints-v2-addon
pnpm build

# Install blueprints-v2-addon (one-time)
pnpm install
```

```sh
# Commit changes
git init
git add .
git commit -m "Initial commit"
```

```sh
# Push changes (to a new repo)
git remote add origin git@github.com:<your-github-handle>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

Step 3. Use the `new` command to start creating addons.

```sh
# Specify name
pnpm addon new ui-form

# Specify location
pnpm addon new @my-org-ui/form --location ui/form
```


## Compatibility

- Node.js v20 or above


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
