describe('memory Game', function () {


var jsdom = require("jsdom");

    var html = require('../src/index.html');
    var jsdom = require('jsdom');
    var { JSDOM } = jsdom;

    beforeEach(() => {
        dom = new JSDOM(html, {

            runScripts: "dangerously",
            resources: "usable"
        });
        document = dom.window.document;
        game = require("../src/game.js");
    });

    it('Should start new game ', function () {
        const btn = document.querySelector('#start');
        expect(btn.innerHTML).toBe('start');
    });

    it('Should click open the card', function () {
        const cards = document.querySelector('.yellow.selected');
        expect(cards.innerHTML).toBe('#yellow');
    });

    
})
