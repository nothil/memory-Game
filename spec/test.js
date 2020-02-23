const game = require("../src/game");
const memory_game = new game;

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

    it('Should display easy mode', function () {
        const btn = document.querySelector('#start');
        expect(btn.innerHTML).toBe('Start');
    });

    it('Should reset game to hard mode', function () {
        const btn = document.querySelector('restart');
        expect(btn.innerHTML).toBe('play Again');
    });

    it('should reset new color', function(){
        const btn = document.querySelector('#start');
        expect(btn.innerHTML).toBe('startButton');
    });
         
    beforeEach(function(){
            spyOn(memory_game, 'flipCard');
            spyOn(memory_game, 'disableCards');
        
    })

    it('shoud be disabled after matched', function(){
        memory_game.flipCard();
        expect(memory_game.flipCard).toHaveBeenCalled();

    });


});