window.onload = function() {
    document.getElementById("biggerBtn").onclick = function() {
        document.getElementById("textInput").style.fontSize = "24pt";
        alert("Hello, world!");
    };

    document.getElementById("mooBtn").onclick = function() {
        var textArea = document.getElementById("textInput");
        var text = textArea.value.toUpperCase();
        var sentences = text.split(".");
        for (var i = 0; i < sentences.length; i++) {
            if (sentences[i].trim().length > 0) {
                sentences[i] = sentences[i].trim() + "-MOO";
            }
        }
        textArea.value = sentences.join(". ");
    };
};

function changeStyle() {
    var textArea = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
