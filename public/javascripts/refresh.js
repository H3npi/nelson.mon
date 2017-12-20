$(document).ready(function () {
    setInterval(function() {

    $.getJSON("http://localhost:18600", function (data) {

    }). done(function (data) {
        updateNelsonData(data);
    }). fail(function () {
        console.log('TES');
        $('#loading').hide();
    })
    }, 1000);
});

function updateNelsonData(data) {
    $('#ready').text(data.ready);
    $('#totalPeers').text(data.totalPeers);
    $('#connectedPeers').text(data.connectedPeers.length);
    $('#currentEpoch').text(data.heart.currentEpoch);
    $('#currentCycle').text(data.heart.currentCycle);
    newTable = '<tbody>';
    $.each(data.connectedPeers, function(key, item) {
        newTable += '<tr>';
        newTable += '<td>'+item.hostname+'</td>';
        newTable += '<td>'+item.weight+'</td>';
        newTable += '<td>'+item.isTrusted+'</td>';
        newTable += '<td>'+item.seen+'</td>';
        newTable += '</tr>';
    });
    newTable += '</tbody>';
    $('#nodeData tbody').replaceWith(newTable);
}