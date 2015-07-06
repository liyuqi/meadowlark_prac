var fortuneCookies = [
    "OP",
    "you got it!",
    "sup!",
    "!!!",
    "never say never"
];

exports.getFortune = function(){
    var index = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[index];
};