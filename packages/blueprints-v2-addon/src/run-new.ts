import {
  canSkip,
  createAddon,
  createOptions,
  updateDocsApp,
  updateTestApp,
} from './steps/run-new/index.js';
import type { CodemodOptions } from './types/run-new.js';

export function runNew(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  if (canSkip(options)) {
    console.log(
      `🚫 Skipped creating ${options.addon.name}, because it already exists.`,
    );

    return;
  }

  createAddon(options);
  updateDocsApp(options);
  updateTestApp(options);

  console.log(`✅ Created ${options.addon.name}.`);
}
