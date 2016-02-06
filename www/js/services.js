angular.module('starter.services', [])

.factory('Prayers', function($http, $q) {
  return {
    get: function() {
        var defered = $q.defer();

        $http.get('http://www.davismasjid.org/node/959/json')
        .success(function(result){
            defered.resolve(result);
        })
        .error(function(error){
            defered.reject(error);
        });

        return defered.promise;
    }
  };
})

.factory('FeedService', function($http, $q) {
    return {
        get : function(feedUrl){
            var defered = $q.defer();

            $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(feedUrl))
            .success(function(feed){
                defered.resolve(feed);
            })
            .error(function(error){
                defered.reject(error);
            });

            return defered.promise;
        }
    };
});

