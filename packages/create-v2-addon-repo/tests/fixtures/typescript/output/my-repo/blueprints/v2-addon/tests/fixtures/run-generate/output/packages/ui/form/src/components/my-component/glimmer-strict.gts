import Component from '@glimmer/component';

import styles from './glimmer-strict.css';

interface MyComponentGlimmerStrictSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class MyComponentGlimmerStrict extends Component<MyComponentGlimmerStrictSignature> {
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>
}
