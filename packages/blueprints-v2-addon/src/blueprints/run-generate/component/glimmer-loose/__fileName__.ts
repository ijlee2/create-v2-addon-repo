import Component from '@glimmer/component';

import styles from './<%= data.localFileName %>.css';

interface <%= options.entity.pascalizedName %>Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class <%= options.entity.pascalizedName %> extends Component<<%= options.entity.pascalizedName %>Signature> {
  styles = styles;
}
