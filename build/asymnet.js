// const confCols = require("../config.json").cols
// const confRows = require("../config.json").rows

var rows = $("#config-form").find('input[name="#rows_form"]').text()
var cols = parseInt($("#cols_form").text())

function UpdateStatBox() {
    try {
        // if (rows == null) {
        //     rows = 7
        // }
        if (cols == NaN) {
            cols = 4
        }

        $("#rows-stat-box").text(rows)
        console.log(rows)
    } catch (e) {
        console.log(e)
    }
}

// $("form").submit(UpdateStatBox());