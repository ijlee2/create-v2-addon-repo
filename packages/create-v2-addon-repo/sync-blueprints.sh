#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Ensures correct blueprints files.
#
#  B. Usage
#
#    ./sync-blueprints.sh
#
#---------

# Copy files from `configs` to `src/blueprints/configs`
rm -r "src/blueprints/configs"

rsync --archive "../../configs" "src/blueprints" --exclude "node_modules" --exclude ".eslintcache"

# Copy files from `packages/blueprints-v2-addon` to `src/blueprints/blueprints`
rm -r "src/blueprints/blueprints"
mkdir "src/blueprints/blueprints"
mkdir "src/blueprints/blueprints/v2-addon"

cp -r "../blueprints-v2-addon/bin" "src/blueprints/blueprints/v2-addon/bin"
cp -r "../blueprints-v2-addon/src" "src/blueprints/blueprints/v2-addon/src"
cp -r "../blueprints-v2-addon/tests" "src/blueprints/blueprints/v2-addon/tests"

cp "../blueprints-v2-addon/.gitignore" "src/blueprints/blueprints/v2-addon/__gitignore__"
cp "../blueprints-v2-addon/.npmignore" "src/blueprints/blueprints/v2-addon/__npmignore__"
cp "../blueprints-v2-addon/.prettierignore" "src/blueprints/blueprints/v2-addon/.prettierignore"
cp "../blueprints-v2-addon/build.sh" "src/blueprints/blueprints/v2-addon/build.sh"
cp "../blueprints-v2-addon/CHANGELOG.md" "src/blueprints/blueprints/v2-addon/CHANGELOG.md"
touch "src/blueprints/blueprints/v2-addon/CHANGELOG.md"; echo "# blueprints-v2-addon" > "src/blueprints/blueprints/v2-addon/CHANGELOG.md"
cp "../blueprints-v2-addon/eslint.config.mjs" "src/blueprints/blueprints/v2-addon/eslint.config.mjs"
cp "../blueprints-v2-addon/LICENSE.md" "src/blueprints/blueprints/v2-addon/LICENSE.md"
cp "../blueprints-v2-addon/package.json" "src/blueprints/blueprints/v2-addon/package.json"
cp "../blueprints-v2-addon/prettier.config.mjs" "src/blueprints/blueprints/v2-addon/prettier.config.mjs"
cp "../blueprints-v2-addon/README.md" "src/blueprints/blueprints/v2-addon/README.md"
cp "../blueprints-v2-addon/tsconfig.build.json" "src/blueprints/blueprints/v2-addon/tsconfig.build.json"
cp "../blueprints-v2-addon/tsconfig.json" "src/blueprints/blueprints/v2-addon/tsconfig.json"
cp "../blueprints-v2-addon/update-blueprints.mjs" "src/blueprints/blueprints/v2-addon/update-blueprints.mjs"
cp "../blueprints-v2-addon/update-test-fixtures.sh" "src/blueprints/blueprints/v2-addon/update-test-fixtures.sh"

mv "src/blueprints/blueprints/v2-addon/src/blueprints/run-new/__addonLocation__/__gitignore__" "src/blueprints/blueprints/v2-addon/src/blueprints/run-new/__addonLocation__/__.gitignore__"

# Escape delimiters
find "src/blueprints/blueprints/v2-addon" -type f \
  -exec sed -i '' 's/<%=/\\\\<%=/g' {} \; \
  -exec sed -i '' 's/%>/%\\\\>/g' {} \;

# Update test fixtures
./update-test-fixtures.sh
