/**
 * Created by yuqili on 2015/7/14.
 */
var Browser = require('zombie');
var assert = require('chai').assert;

var browser;

suite('Cross-Page test',function(){
    setup(function(){
        browser = new Browser();
    });

    test('requesting a group rate quote'+'from the hood river tour page'
    +'should populate the referrer field', function(done){
        var referrer = 'http://localhost:3001/tour/hood-river';
        browser.visit(referrer,function(){
            browser.clickLink('.requestGroupRate',function(){
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test('requesting a group rate quote'+'from the oregon coast tour page'
    +'should populate the referrer field', function(){
        var referrer = 'http://localhost:3001/tour/oregon-coast';
        browser.visit(referrer,function(){
            browser.clickLink('.requestGroupRate',function(){
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test('visiting the request group rate page directly'
    +' should result in an empty referrer field', function(){
        browser.visit('http:localhost:3001/tours/request-group-rate',function(){
            assert(browser.field('referrer').value === '');
            done();
        });
    });
});