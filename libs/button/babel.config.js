module.exports = (api) => {
  api.cache(true)

  console.log('xxx button-blue babel.config.js')

  const out = {
    presets: [
      [
        '@babel/preset-env',
        {
          'debug': false,
          'targets': '> 0.25%, not dead',
          'useBuiltIns': 'usage',
          'corejs': 3,
          'modules': false
        }
      ],
      '@babel/preset-react'
    ],
    plugins: [
      'babel-plugin-styled-components'
    ]
  }

  return out
};
