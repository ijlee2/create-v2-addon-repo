import type MyModifierFunctionModifier from './modifiers/my-modifier/function.ts';
import type MyModifierClassModifier from './modifiers/my-modifier/class.ts';
import type MyHelperFunctionHelper from './helpers/my-helper/function.ts';
import type MyHelperClassHelper from './helpers/my-helper/class.ts';
import type MyComponentTemplateOnlyStrictComponent from './components/my-component/template-only-strict.gts';
import type MyComponentGlimmerStrictComponent from './components/my-component/glimmer-strict.gts';
export default interface MyOrgUiFormRegistry {
  'my-modifier/function': typeof MyModifierFunctionModifier;
  'my-modifier/class': typeof MyModifierClassModifier;
  'my-helper/function': typeof MyHelperFunctionHelper;
  'my-helper/class': typeof MyHelperClassHelper;
  'MyComponent::TemplateOnlyStrict': typeof MyComponentTemplateOnlyStrictComponent;
  'my-component/template-only-strict': typeof MyComponentTemplateOnlyStrictComponent;
  'MyComponent::GlimmerStrict': typeof MyComponentGlimmerStrictComponent;
  'my-component/glimmer-strict': typeof MyComponentGlimmerStrictComponent;
}
