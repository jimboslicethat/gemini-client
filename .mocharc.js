module.exports = {
  reporter: 'list',
  require: ['ts-node/register', './test/setup.ts'],
  spec: './test/**/*.spec.ts',
  'watch-files': ['src/**/*.ts', 'test/**/*.spec.ts']
}
