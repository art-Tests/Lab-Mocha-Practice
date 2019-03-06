var Nightmare = require("nightmare");
var mocha = require("mocha");
var chai = require("chai");
chai.should();

describe("Google page nightmare test", function() {
  this.timeout(10000);
  let nightmare;
  before(function() {
    nightmare = Nightmare({ show: true });
  });
  after(async function() {
    await nightmare.end();
  });

  it("should be google", async function() {
    let title = await nightmare.goto("https://google.com").title();
    title.should.be.equal("Google");
  });

  it("should find the nightmare github link first", function(done) {
    nightmare
      .goto("https://duckduckgo.com")
      .type("#search_form_input_homepage", "github nightmare")
      .click("#search_button_homepage")
      .wait("#links .result__a")
      .evaluate(() => document.querySelector("#links .result__a").href)
      .end()
      .then(link => {
        link.should.be.equal("https://github.com/segmentio/nightmare");
        done();
      });
  });
});
