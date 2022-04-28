const app = require('../app/app')
const request = require("supertest");

describe("Unit test for Express_API_HTTP_Methods", () => {
    test("GET /v1/explorers", (done) => {
      request(app)
        .get("/v1/explorers")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body[0].id).toBe(1)
            expect(res.body[0].name).toBe("Juan1")
            expect(res.body[1].id).toBe(2)
            expect(res.body[1].name).toBe("Juan2")
            expect(res.body[2].id).toBe(3)
            expect(res.body[2].name).toBe("Juan3")
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        })
    })

    test("GET /v1/explorers/:id", (done) => {
        request(app)
          .get("/v1/explorers/1")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect((res) => {
              expect(res.body.id).toBe(1)
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })

     test("Post /v1/explorers", (done) => {
        request(app)
          .post("/v1/explorers")
          .expect("Content-Type", /json/)
          .send({body:"Cliente_Nuevo"})

          .expect(201)
          .expect((res) => {
              expect(res.body.message).toBe("Created")
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })

      test("Put /v1/explorers/:id", (done) => {
        request(app)
          .put("/v1/explorers/1")
          .expect("Content-Type", /json/)
          .send({name:"Juan"})
          .expect(200)
          .expect((res) => {
              expect(res.body.message).toBe("Updated!")
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })
})