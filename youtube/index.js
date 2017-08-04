var YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';


var RESULT_HTML_TEMPLATE = (
  '<li style="float:left;">' +
    '<img class="js-result-thumb" id="" src="" />' +
  '</li>'
);

function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key: ' AIzaSyA_sAVCtjkOgGBRJIjv59u7ujKmc3RSYnQ',
    q: searchTerm
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}


function renderResult(result, index) {
    console.log('Index', index);
    console.log("www.youtube.com/watch?v=" + result.id.videoId);
    console.log(result);
    console.log('thumb', result.snippet.thumbnails.default.url);
    var template = $(RESULT_HTML_TEMPLATE);

    template.find(".js-result-thumb").attr("id",result.id.videoId);
    template.find(".js-result-thumb").attr("src", result.snippet.thumbnails.default.url);
    if(index == 0) {
      $("#currentVideo").attr("src", "http://www.youtube.com/embed/" + result.id.videoId);
    }
    return template;
}

function displayGitHubSearchData(data) {
    console.log('Data', data);
    var results = data.items.map(function(item, index) {
        return renderResult(item, index);
    });
    $('.js-search-results').html(results);

    $('.js-result-thumb').click(function(event){
            console.log('ThumbClick');
            var thumbId = $(this).attr("id");
          //   alert(thumbId);
          $("#currentVideo").attr("src", "http://www.youtube.com/embed/" + thumbId);
          $("#currentVideo").slideDown(2000);
    });
}

function watchSubmit() {
  $('.js-search-form').submit(function(event) {
    event.preventDefault();
    var queryTarget = $(event.currentTarget).find('.js-query');
    var query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayGitHubSearchData);
  });
}

$(watchSubmit);
