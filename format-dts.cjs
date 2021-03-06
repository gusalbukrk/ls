// 'replace-in-file' config
// used at postbuild script to insert blank lines between statements at dist/index.d.ts
// it's needed because typescript doesn't preserve empty lines

module.exports = {
  files: 'dist/index.d.ts',
  from: /(?<!\n)\n(declare|interface|type|export)/gm,
  to: '\n\n$1',
};
