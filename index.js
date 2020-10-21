function famousFunnyNames() {

    var firstName = ["Brad", "Angelina", "George", "Haruki", "Britney", "Elton", "Mother", "Ada", "George", "Barak", "Zack", "Nelson", "Frida","Elvis", "Anne", "Patty"];
    var lastName = ["Clooney", "John", "Obama", "Pitt", "Loveless", "Kahlo", "Bush", "Afron", "Theresa","Smith", "Mandela", "Murakami", "Frank", "Presley", "Clooney", "Spears"];

    var colors =["\x1b[31m", "\x1b[33m", "\x1b[32m", "\x1b[34m", "\x1b[36m"];
    var reset = "\x1b[0m";

    function shuffleNames(i) {
        return i[Math.floor(Math.random() * i.length)];
    }

    for (var i = 0; i < 1; i++) {
        console.log(shuffleNames(colors)+ shuffleNames(firstName) + reset + " " + shuffleNames(colors) + shuffleNames(lastName)+ reset);
    }
}


module.exports = famousFunnyNames();