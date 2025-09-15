# Contributing to create-v2-addon-repo

Open source projects like `create-v2-addon-repo` live on your words of encouragement and contribution. Please give feedback, report issues, or submit pull requests!

Here are some guidelines to help you and everyone else.


## Local development

<details>

<summary>Install dependencies</summary>

1. Fork and clone this repo.

    ```sh
    git clone git@github.com:<your-github-handle>/create-v2-addon-repo.git
    ```

1. Change directory.

    ```sh
    cd create-v2-addon-repo
    ```

1. Use [`pnpm`](https://pnpm.io/installation) to install dependencies.

    ```sh
    pnpm install
    ```

</details>


<details>

<summary>Check and fix errors</summary>

1. As you write code, please check that it meets formatting and linting rules.

    ```sh
    # From the workspace root
    pnpm lint
    ```

1. You can run `lint:fix` to fix errors.

    ```sh
    # From the workspace root
    pnpm lint:fix
    ```

</details>


<details>

<summary>Run tests</summary>

1. When you write code, please check that all tests continue to pass.

    ```sh
    # From the workspace root
    pnpm test
    ```

</details>


<details>

<summary>Add changeset to pull request</code></summary>

1. To record how a pull request affects packages, you will want to add a changeset.

    The changeset provides a summary of the code change. It also describes how package versions should be updated (major, minor, or patch) as a result of the code change.

    ```sh
    # From the workspace root
    pnpm changeset
    ```

</details>


<details>

<summary>Publish packages</summary>

1. Generate a [personal access token](https://github.com/settings/tokens/) in GitHub. This token will be used to retrieve pull request information.

1. Run the `release:prepare` script. This removes changesets, updates package versions, and updates `CHANGELOG`s.

    ```sh
    # From the workspace root
    GITHUB_TOKEN=<YOUR_PERSONAL_ACCESS_TOKEN> pnpm release:prepare
    ```

    Note, `release:prepare` also updated the workspace root's version (e.g. from `0.1.1` to `0.1.2`). We will use it to name the tag that will be published.

1. Review the file changes. Commit them in a branch, then open a pull request to merge the changes to the `main` branch.

    ```sh
    # From the workspace root
    git checkout -b tag-0.1.2
    git add .
    git commit -m "Tagged 0.1.2"
    git push origin tag-0.1.2
    ```

1. [Create a tag](https://github.com/ijlee2/create-v2-addon-repo/releases/new) and provide release notes. The tag name should match the workspace root's version (e.g. `0.1.2`).

1. Publish the packages.

    ```sh
    # From the workspace root
    pnpm release:publish
    ```

</details>

<details>

<summary>Sync reference repo for <code>blueprints-v2-addon</code> (for admins)</summary>

1. Run the following commands in the `blueprints-v2-addon-output` repo.

    ```sh
    # Reset project
    git rm -r .

    # Downstream files
    git clone --no-checkout git@github.com:ijlee2/create-v2-addon-repo.git temp
    cd temp
    git sparse-checkout set packages/blueprints-v2-addon
    git checkout
    cd ..

    # Move files
    mv temp/packages/blueprints-v2-addon/* .
    mv temp/packages/blueprints-v2-addon/.* .
    rm -rf temp

    # Reset CHANGELOG
    echo "# blueprints-v2-addon" > CHANGELOG.md
    ```

</details>


💡 Have ideas for contribution? Reach out to `@ijlee2` on [Discord](https://discord.com/invite/emberjs)!
