// These are all the custom `@` (at) rules that we use within our custom PostCSS plugins
const CUSTOM_AT_RULES = [
  // Tailwind-specific at-rules
  'apply',
  'layer',
  'responsive',
  'screen',
  'tailwind',
  'variants',
  // PostCSS-specific at-rules
  // 'define-mixin',
  // 'mixin',
];

// const myCase = /^[a-zA-Z]+(\-[a-zA-Z]+)*(\_[a-zA-Z]+)?/;

// Enforces certain selectors to be only in MyCase notation
// We use these for id selectors and classname selectors
const ONLY_ALLOW_MY_CASE_SELECTORS = [
  /^[a-zA-Z\_\-]+$/,
  { message: (s) => `Expected '${s}' to be in camelCase` },
];

export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    // Enforces Element Class Names to be myCase
    'selector-class-pattern': ONLY_ALLOW_MY_CASE_SELECTORS,
    // Enforces Element IDs to be myCase
    'selector-id-pattern': ONLY_ALLOW_MY_CASE_SELECTORS,
    // Allow Tailwind-based CSS Rules
    'at-rule-no-unknown': [true, { ignoreAtRules: CUSTOM_AT_RULES }],
    // Allow the Global CSS Selector
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] },
    ],
    // Enforces the order of the CSS properties to be in alphabetical order
    'order/properties-alphabetical-order': true,
    'no-descending-specificity': null,
    // Disables the Level-4 Media Queries; Since they're more exotic and less known
    'media-feature-range-notation': 'prefix',
    // Ignore Theme from Tailwindcss
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
  },
};
