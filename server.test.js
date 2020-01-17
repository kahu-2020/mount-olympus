const request = require("supertest")
const cheerio = require('cheerio')
const server = require('./server')

test('no errors', (done) => {
    request(server)
    .get('/')
    .end((err, res) => {
        expect(err). toBe(null)
        done()
    })
})

test('checking header to be title to be Pantheon', (done) => {
    request(server)
    .get('/Pantheon/')
    .end((err, res) => {
        const $ = cheerio.load(res.text)
        const actual = $('title').text()
        let expected = 'Pantheon'
        expect(actual).toContain(expected)

        done()
    })

})

test('counting img tags on main page', (done) => {
    request(server)
    .get('/Pantheon/')
    .end((err, res) => {
        const $ = cheerio.load(res.text)
        const actual = $('img').length
        let expected = 4
        expect(actual).toBe(expected)

        done()
    })

})

// test('checking hera', (done) => {
//     request(server)
//     .get('/form/Hera')
//     .end((err, res) => {
//         const $ = cheerio.load(res.text)
//         const actual = $('div').('src')
//         let expected = "/images/hera.jpg"
//         expect(actual).toBe(expected)

//         done()
//     })

// })

test('checking hera', (done) => {
    request(server)
    .get('/Pantheon/Hera')
    .end((err, res) => {
        const $ = cheerio.load(res.text)
        const actual = $('img').attr('src')
        let expected = "/images/hera.jpg"
        expect(actual).toBe(expected)

        done()
    })

})