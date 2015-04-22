(function() {
  'use strict';
  
  var SearchKeywords = function(values){
  	this.keywords = values;
  	this.elementId = "#search-keywords";
  };
  
  SearchKeywords.prototype.$add = function(){
  	var keywords = this.keywords;
  	var optionFor = function(keyword){
  		return $("<option>", {value: keyword});
  	};
  	for(var i = 0; i < keywords.length; i++){
  		$(this.elementId).append(optionFor(keywords[i]));
  	}
  };
  
  SearchKeywords.add = function(values){
  	new SearchKeywords(values).$add();
  };
  
  window.saviour.SearchKeywords = SearchKeywords;
}).call(this);