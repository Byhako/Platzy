https://standardjs.com/
https://github.com/standard/eslint-config-standard

## dependencies

npm install -S vue bulma-stylus

## devDependencies

npm install -D babel-core babel-loader babel-preset-env babel-preset-stage-3 cross-env css-loader eslint eslint-config-standard  eslint-loader eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard file-loader standard stylus stylus-loader vue-loader vue-template-compiler webpack webpack-dev-server

## .eslintrc
{
  "extends": "standard",

  "rules": {
    "no-new": 0
  },

  "plugins": ["html"]
}

