function famousFunnyNames() {

    var firstName = ["Brad", "Angelina", "George", "Haruki", "Britney", "Elton", "Mother", "Ada", "George", "Barak", "Zack", "Nelson", "Frida","Elvis", "Anne", "Patty"];
    var lastName = ["Clooney", "John", "Obama", "Pitt", "Loveless", "Kahlo", "Bush", "Afron", "Theresa","Smith", "Mandela", "Murakami", "Frank", "Presley", "Clooney", "Spears"];

    function shuffleNames(i) {
        return i[Math.floor(Math.random() * i.length)];
    }

    for (var i = 0; i < 1; i++) {
        console.log(shuffleNames(firstName) + " " + shuffleNames(lastName));
    }
}
module.exports = famousFunnyNames();