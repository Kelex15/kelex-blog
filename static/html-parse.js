$(document).ready(function() {
    function range(start, end)
    {
        var array = new Array();
        for(var i = start; i < end; i++)
        {
            array.push(i);
        }
        return array;
    }
    $.each(range(1, 1000), function(index, val) {
        var $log = $("#" + val.toString());
        if ($log.text() === "") {
            return
        }
        var str = $log.text();
        var html = $.parseHTML(str);
        var nodeNames = [];

        // Append the parsed HTML
        $log.replaceWith(html);
        console.log($log.text());
    })
});