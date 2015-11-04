window.onload = function()
{
    String.prototype.addToElement = function (el, cl) {
        if (cl.length > 0) {
            return '<' + el + ' class = "' + cl + '">' + this + '</' + el + '>';
        } else {
            return '<' + el + '>' + this + '</' + el + '>';
        }
    }

    var str = "Hello world!";
    str = str.addToElement('h1', 'blue');

    document.body.innerHTML = str;

    myHTML.addText('str1').addText(' str2').addText(' str3');
    myHTML.addH('Hi!))', 1);
    document.body.innerHTML += myHTML.showHTML();

}

var myHTML = {
    innerStr: '',
    addText: function(str) {
        this.innerStr += str;
        return this;
    },
    addH: function(str, N)
    {
        this.innerStr += '<h' + N + '>' + str + '</' + N + '>';
        return this;
    },
    showHTML: function() {
        return this.innerStr;
    }
}