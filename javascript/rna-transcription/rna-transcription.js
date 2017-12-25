function DnaTranscriber(){}
let bindings = {
    "G" : "C",
    "C" : "G",
    "T" : "A",
    "A" : "U"
}
DnaTranscriber.prototype.toRna = function(input) {
if (input.match(/[BDEFHIJKLMNOPQRSVWXYZ]/)) {
        throw new Error('Invalid input');
    }
    else if (input.match(/[GCTAU]/)) {
        let output = input.split("").map(letter => bindings[letter]);
        return output.join("");
    }
}

module.exports = DnaTranscriber;

