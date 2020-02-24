describe('color Game', function () {

    var html = require('./fixture.js');
    var jsdom = require('jsdom');
    var { JSDOM } = jsdom;

    beforeEach(() => {
        dom = new JSDOM(html, {

            runScripts: "dangerously",
            resources: "usable"
        });
        document = dom.window.document;
       
    });

    it('Should start the game', function () {
        const btn = document.querySelector('#start');
        expect(btn.innerHTML).toBe('Start');
    });

    it('Should reset game to play again', function () {
        const btn = document.querySelector('#restart');
        expect(btn.innerHTML).toBe('Play Again');
    });

    

});