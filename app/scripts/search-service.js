(function() {
  'use strict';
  
  var Promise       = saviour.Promise,
      SearchService = function(){};
  
  SearchService.prototype.getAllKeywords = function(){
    var promise = new Promise();
    $.get( "server/keywords.json", function(data) {
      promise.fulfill(data);
    });
    return promise;
  };
  
  window.saviour.searchService = new SearchService();
  
}).call(this);