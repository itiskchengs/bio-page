module.exports = {
    rules: {
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "tailwind",
                    "apply",
                    "variants",
                    "responsive",
                    "screen",
                ],
            },
        ],
        "declaration-block-trailing-semicolon": null,
        "no-descending-specificity": null,
        "block-no-empty": true,
        "color-no-invalid-hex": true,
        "comment-no-empty": true,
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,
        "function-calc-no-unspaced-operator": true,
        "function-linear-gradient-no-nonstandard-direction": true,
        "keyframe-declaration-no-important": true,
        "media-feature-name-no-unknown": true,
        "no-duplicate-at-import-rules": true,
        "no-empty-source": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": true,
        "property-no-unknown": true,
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-element-no-unknown": true,
        "selector-type-no-unknown": true,
        "string-no-newline": true,
        "unit-no-unknown": true
    },
};