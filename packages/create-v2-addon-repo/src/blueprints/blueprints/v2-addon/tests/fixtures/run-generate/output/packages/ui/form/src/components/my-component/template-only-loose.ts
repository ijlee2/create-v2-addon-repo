import templateOnlyComponent from '@ember/component/template-only';

interface MyComponentTemplateOnlyLooseSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

const MyComponentTemplateOnlyLoose =
  templateOnlyComponent<MyComponentTemplateOnlyLooseSignature>();

export default MyComponentTemplateOnlyLoose;
