const {CookieMonster} = require("cookie_monster");
const obSvc = require("observer-service");
const {Cc, Ci} = require("chrome");

var monster;

exports.setup = function() {
    monster = new CookieMonster();
};

exports["can create"] = function(test) {
    test.assertEqual(true, monster instanceof CookieMonster, "we have a monster on our hands");
};

exports["can watch"] = function(test) {
    monster.watch("mozilla", "test-cookie", function(value) {
        test.assertEqual("test-value", value, "we got the right value");
        test.done();
    });

    monster.simulate("mozilla", "test-cookie", "test-value");
    test.waitUntilDone();
};

exports["can unregister"] = function(test) {
    var success = true;
    var callback = function() {
        success = false;
    };

    monster.watch("mozilla", "test-cookie", callback);
    monster.unregisterListener("mozilla", "test-cookie", callback);
    monster.simulate("mozilla", "test-cookie", "test-value");

    test.assertEqual(true, success, "unregister failure, callback should not have been called");
};


exports["changes with cookie"] = function(test) {
    var success=false;

    monster.watch("Mozilla", "monster", function(value) {
        success = true;
    });


    obSvc.notify("cookie-changed", {
        QueryInterface:function() {
            return {
                name: 'monster',
                host: 'Mozilla'
            };
        }
    }, "added");

    test.assertEqual(success, true, "our cookie stuff works!");
};

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    var cookie = name+"="+value+expires+"; path=/";
    return cookie;
}
