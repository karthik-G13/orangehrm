module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'step-definitions/**/*.ts',
      'hooks/**/*.ts'
    ],
    paths: ['features/swaglabs.feature'],
    format: ['progress'],
    publishQuiet: true
  }
};