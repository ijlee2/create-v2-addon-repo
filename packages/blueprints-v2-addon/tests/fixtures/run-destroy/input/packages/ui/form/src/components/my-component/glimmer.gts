import Component from '@glimmer/component';

import styles from './glimmer.css';

interface MyComponentGlimmerSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class MyComponentGlimmerComponent extends Component<MyComponentGlimmerSignature> {
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>
}
