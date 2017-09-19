const expect = require('expect')
const gh = require('../lib/github-url')

describe('github-url', () => {
  const examples = {
    "https://github.com/foo/bar/issues/999": {
      type: 'issue', owner: 'foo', repo: 'bar', number: "999"
    },
    "https://github.com/foo/bar/pull/123": {
      type: 'pull', owner: 'foo', repo: 'bar', number: "123"
    },
    "https://github.com/foo/bar/pull/987#issuecomment-112233": {
      type: 'comment', owner: 'foo', repo: 'bar', number: "987", id: "112233"
    },
    "https://github.com/foo/bar/issues/987#issuecomment-112233": {
      type: 'comment', owner: 'foo', repo: 'bar', number: "987", id: "112233"
    },
  }

  for(const link in examples) {
    it(`parses ${link}`, () => {
      expect(gh(link)).toEqual(examples[link])
    })
  }
});
