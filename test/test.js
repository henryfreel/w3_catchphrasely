//
// test/test.js
//

var request = require('request')
  , expect = require('chai').expect
  , cheerio = require('cheerio')

  var baseUrl = 'http://localhost:3000';

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();


//TEST MAIN SITE
describe('localhost:3000/', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://localhost:3000/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      console.log("-> this is the err");
      console.log(err);
      console.log("-> this is the res");
      console.log(res);
      console.log("-> this is the body");
      console.log(body);
      done();
    })
  })
});

// TEST PHRASES JSON
describe('localhost:3000/phrases', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://localhost:3000/phrases', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      console.log("-> this is the err");
      console.log(err);
      console.log("-> this is the res");
      console.log(res);
      console.log("-> this is the body");
      console.log(body);
      done();
    })
  })
});

// TEST POST REQUEST
describe('localhost:3000/phrases POST', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request.post('http://localhost:3000/phrases', {form:{key:'value'}}, function(err, res, body) {

      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)

      console.log("this is a thing");
      console.log(res.body);

      done();
    })
  })
});

// // TEST PUT REQUEST
// describe('localhost:3000/phrases PUT', function() {
//   it('should have a HTTP of 200 - success', function(done) {
//     request.put('http://localhost:3000/phrases/1', function(err, res, body) {

//       expect(res.statusCode).to.equal(200)
//       // expect(res.statusCode).to.equal(300)
//       console.log("-> this is the err");
//       console.log(err);
//       console.log("-> this is the res");
//       console.log(res);
//       console.log("-> this is the body");
//       console.log(body);
//       done();
//     })
//   })
// });

// // TEST DELETE REQUEST
// describe('localhost:3000/phrases DELETE', function() {
//   it('should have a HTTP of 200 - success', function(done) {
//     request.delete('http://localhost:3000/phrases/', function(err, res, body) {
//       expect(res.statusCode).to.equal(200)
//       // expect(res.statusCode).to.equal(300)
//       console.log("-> this is the err");
//       console.log(err);
//       console.log("-> this is the res");
//       console.log(res);
//       console.log("-> this is the body");
//       console.log(body);
//       done();
//     })
//   })
// });

