/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
module.exports = {
  extends: "stylelint-config-standard",

  plugins: ["stylelint-order"],

  rules: {
    "property-no-unknown": [
      true,
      {
        ignoreProperties: [
          // CSS Modules composition
          // https://github.com/css-modules/css-modules#composition
          "composes",
        ],
      },
    ],

    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: [
          // CSS Modules :global scope
          // https://github.com/css-modules/css-modules#exceptions
          "global",
          "local",
        ],
      },
    ],

    // Opinionated rule, you can disable it if you want
    "string-quotes": "single",

    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "at-rules",
      "rules",
    ],

    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
    "order/properties-order": [],
  },
};
