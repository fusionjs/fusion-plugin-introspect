// @flow
// eslint-disable-next-line
module.exports.logs = fn => async (...args) => console.log(await fn(...args));
