import Component from '@glimmer/component';

import styles from './glimmer-loose.css';

interface MyComponentGlimmerLooseSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class MyComponentGlimmerLoose extends Component<MyComponentGlimmerLooseSignature> {
  styles = styles;
}
