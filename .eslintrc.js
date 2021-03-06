module.exports = {
    "extends": "airbnb",
    "globals": {
        "React": true,
        "ReactDOM": true,
        "SaltUI": true,
        "mountNode": true,
        "document": true,
    },
    "plugins": [
        "react",
        "import",
        "markdown",
    ],
    "env": {
        "es6": true,
        "browser": true,
    },
    "parser": "babel-eslint",
    "rules": {
        "import/no-extraneous-dependencies": "off",
        "react/prefer-stateless-function": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "react/forbid-prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-no-bind": "off",
        "class-methods-use-this": "off"
    }
};