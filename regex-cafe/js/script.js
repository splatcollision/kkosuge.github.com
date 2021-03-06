var check;

check = function() {
  var content, i, regex, result, results, _len, _results;
  $("#match-results").html('');
  regex = new RegExp($("#regex-str").val(), $("#regex-opt").val());
  results = $("#text").val().match(regex);
  _results = [];
  for (i = 0, _len = results.length; i < _len; i++) {
    result = results[i];
    content = "<div class=\"results\">" + i + ": " + result + "</div>";
    _results.push($("#match-results").append(content));
  }
  return _results;
};

$(function() {
  $('#regex-str').bind('textchange', function(event, previousText) {
    return check();
  });
  $('#regex-opt').bind('textchange', function(event, previousText) {
    return check();
  });
  return $('#text').bind('textchange', function(event, previousText) {
    return check();
  });
});
