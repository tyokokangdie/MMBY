$(function () {
    banner();
});

function banner() {
    var getData = function () {
        $.ajax({
            url: "js/banner.json",
            data: {},
            type: "get",
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        })
    }
}