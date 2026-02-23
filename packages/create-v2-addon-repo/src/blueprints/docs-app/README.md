# docs-app

## Local development

```sh
# Check errors
pnpm lint
 
# Fix errors
pnpm lint:fix
 
# Run tests
pnpm test
```

<details>

<summary>Run the app</summary>

1. To test the latest code, build the addons in the `packages` folder before starting the app.

    ```sh
    # From the workspace root
    pnpm build

    # From the root of this package
    pnpm start
    ```

1. Open the app at [http://localhost:4200](http://localhost:4200).

</details>


## Compatibility

- Node.js v22 or above
