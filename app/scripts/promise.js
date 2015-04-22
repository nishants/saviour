(function() {
  'use strict';
  
  var Promise = function(data ){};
  
  Promise.prototype.ok = function(callback){
    this.okCallback = callback;
    return this;
  };
  
  Promise.prototype.error = function(callback){
    this.errorCallback = callback;
    return this;
  };
  
  Promise.prototype.fulfill = function(data){
    this.okCallback(data);
    return this;
  };
 
  Promise.prototype.sorry = function(data){
    this.errorCallback(data);
    return this;
  };
  
  window.saviour.Promise = Promise;
  
}).call(this);