import Component from '@glimmer/component';

import styles from './<%= data.localFileName %>.css';

interface <%= options.entity.pascalizedName %>Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class <%= options.entity.pascalizedName %> extends Component<<%= options.entity.pascalizedName %>Signature> {
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>
}
