window.onload = function()
{
    var rowCount = prompt('Укажите количество строк:');
    var colCount = prompt('Укажите количество столбцов:');
    document.body.appendChild(createTable(rowCount, colCount));
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(createChessTable());
    var label = document.createElement('div');
    label.id = 'label';
    document.body.appendChild(label);
}

var currentCellID = 'A1';

window.onkeydown = function(e) {
    var KEY_LEFT = 37;
    var KEY_UP = 38;
    var KEY_RIGHT = 39;
    var KEY_DOWN = 40;
    var i;

    switch  (e.keyCode) {
        case KEY_LEFT:
            i = chessLetter.indexOf(currentCellID[0]);
            if (i > 0) {
                i--;
                selectCell(chessLetter[i] + currentCellID[1]);
            }
            break;
        case KEY_UP:
            i = currentCellID[1];
            if (i < 8) {
                i++;
                selectCell(currentCellID[0] + i);
            }
            break;
        case KEY_RIGHT:
            i = chessLetter.indexOf(currentCellID[0]);
            if (i < 7) {
                i++;
                selectCell(chessLetter[i] + currentCellID[1]);
            }
            break;
        case KEY_DOWN:
            i = currentCellID[1];
            if (i > 1) {
                i--;
                selectCell(currentCellID[0] + i);
            }
            break;
    }
}

function selectCell(cellID)
{
    document.getElementById(currentCellID).style.outline = 'none';
    document.getElementById(cellID).style.outline = '3px solid red';
    document.getElementById('label').innerText = cellID;
    currentCellID = cellID;
}

function createTable(rowCount, colCount)
{
    var table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    for (var i = 0; i < rowCount; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < colCount; j++) {
            var td = document.createElement('td');
            td.innerHTML = getRandomLetter();
            td.style.background = getRandomColor();
            td.style.border = '1px solid black';
            row.appendChild(td);
        }
        table.appendChild(row);
    }
    return table;
}

var letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

function getRandomLetter()
{
    return letters[Math.round(Math.random() * (letters.length - 1))];
}

function getRandomColor()
{
    var R = Math.random() * 255;
    var G = Math.random() * 255;
    var B = Math.random() * 255;

    return '#' + decToHex(R) + decToHex(G) + decToHex(B);
}

function decToHex(dec)
{
    var hexStr = '0123456789ABCDEF';
    var low = dec % 16;
    var high = (dec - low)/16;
    hex = '' + hexStr.charAt(high) + hexStr.charAt(low);
    return hex;
}

var chessLetter = ['A','B','C','D','E','F','G','H'];

function createChessTable()
{
    var table = document.createElement('table');
    table.style.width = '300px';
    table.style.height = '300px';
    table.style.borderCollapse = 'collapse';
    for (var i = 0; i < 10 ; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < 10 ; j++) {
            var td = document.createElement('td');
            td.style.textAlign = 'center';
            td.width = 30;
            td.height = 30;
            if ((i > 0) && (j > 0) && (i < 9) && (j < 9))  {
                td.style.border = '1px solid black';
                td.id = chessLetter[j - 1] + (9 - i);
                td.onclick = function() {
                    selectCell(this.id);
                }
                if (((j + (i % 2)) % 2) == 1) {
                    td.style.background = 'black';
                }
            } else {
                if (((i == 0) || (i == 9)) && ((j > 0) && (j < 9))) {
                    td.innerText = chessLetter[j - 1];
                } else {
                    if (((j == 0) || (j == 9)) && ((i > 0) && (i < 9))) {
                        td.innerText = 9 - i;
                    }
                }
            }
            row.appendChild(td);
        }
        table.appendChild(row);
    }
    return table;
}