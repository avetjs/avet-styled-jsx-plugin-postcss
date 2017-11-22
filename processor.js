const postcss = require('postcss');

let _processor;

function processor(src, options) {
  options = options || {};
  const { plugins } = options;

  return Promise.resolve()
    .then(() => {
      if (!_processor) {
        _processor = postcss(plugins);
      }
      return _processor.process(src);
    })
    .then(result => result.css);
}

module.exports = processor;
