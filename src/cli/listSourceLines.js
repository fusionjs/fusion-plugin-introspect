// @flow

/*::
import type {Source} from './types.js';
*/

module.exports.listSourceLines = (
  dep /*: {type: string, sources: Array<Source>}*/,
  type /*: string */
) /*: Array<string> */ => {
  return dep.sources
    .filter(item => item.type === type)
    .map(item => item.source);
};
