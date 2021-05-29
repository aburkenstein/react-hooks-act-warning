const typescriptTransform = require('i18next-scanner-typescript');

module.exports = {
  input: [
    'app/{features}/**/*.{js,jsx,ts,tsx}'
  ],
  output: './',
  options: {
    debug: true,
    removeUnusedKeys: true,
    sort: true,
    attr: false,
    func: {
      list: ['translate', 'translatePlural'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: null,
      extensions: ['.js', '.jsx'],
      fallbackKey: false,
    },
    lngs: ['en', 'es'],
    ns: [
      'social',
    ],
    defaultLng: 'en',
    defaultNs: 'translation',
    defaultValue(lng, ns, key, options) {
      // <Trans> components have a default value with the JSX interpolation
      // translate(...) calls have an empty string in options.defaultValue
      // return the key for translate() calls (which is the untranslated string)
      return options.defaultValue ? options.defaultValue : key;
    },
    resource: {
      loadPath: 'app/translations/{{ns}}/{{lng}}.json',
      savePath: 'app/translations/{{ns}}/{{lng}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: '::',
    keySeparator: null,
    pluralSeparator: null,
    contextSeparator: null,
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
  transform: typescriptTransform(),
};
