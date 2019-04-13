const { parse, stringify } = require('../modules/cookie')

test('parse(string): Should output valid json', () => {
    const json = parse("abc=bed; ref=abc;")
    expect(json).toEqual({abc:'bed', ref:'abc'})
})

test('stringify(json): Should output valid string', () => {
    const string = stringify({abc:'bed', ref:'abc'})
    expect(string).toEqual("abc=bed;ref=abc")
})