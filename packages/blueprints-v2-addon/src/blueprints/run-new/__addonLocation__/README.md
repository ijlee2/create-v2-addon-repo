# <%= options.addon.name %>

## Local development

<details>

<summary>Check and fix errors</summary>

```sh
# Check errors
pnpm lint
 
# Fix errors
pnpm lint:fix
```

</details>


<details>

<summary>Build and rebuild addon</summary>

```sh
# Build addon
pnpm build

# Live reload ("keep building")
pnpm start
```

</details>


<details>

<summary>Create files</summary>

Run the `generate` command (from anywhere inside the addon) to create the source code and its test file.

```sh
pnpm addon generate <component|helper|modifier|service|util> <name> [options]

# Example: Create a component
pnpm addon generate component ui/form/input

# Example: Use alias
pnpm addon g component ui/form/textarea
```

There may be more than 1 blueprint available. You can pass `--blueprint` to select the right one.

```sh
# Example: Create a <template> tag component
pnpm addon g component ui/form/select --blueprint glimmer
```

For more information, pass `--help`.

</details>


<details>

<summary>Remove files</summary>

Run the `destroy` command (from anywhere inside the addon) to remove the source code and its test file.

```sh
pnpm addon destroy <component|helper|modifier|service|util> <name> 

# Example: Remove a component
pnpm addon destroy component ui/form/input

# Example: Use alias
pnpm addon d component ui/form/textarea
```

</details>


## Compatibility

- Node.js v20 or above
