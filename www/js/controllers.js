angular.module('starter.controllers', [])

.controller('PrayerCtrl', function($scope, $location, Prayers) {
    Prayers.get().then(function(prayers) {
        $scope.prayers = prayers;
    });

    $scope.toHHMM = function(seconds) {
      var hour = Math.floor(seconds/3600);
      var hour12 = hour > 12 ? hour % 12 : hour;
      var minute = (seconds/3600 - hour) * 60;
      var meridiem = Math.floor(seconds/3600) < 12 ? 'am' : 'pm';
      return hour12 + ':' + ('0' + minute).slice(-2) + ' ' + meridiem;  
    };
    $scope.goToUpdates = function() {
       $location.path( "/tab/updates" ); 
    };
})

.controller('UpdatesCtrl', function($scope, $location, FeedService) {
    FeedService.get('https://groups.google.com/forum/feed/icd-announcements/msgs/rss_v2_0.xml').then(function(res){
        $scope.newsletters=res.responseData.feed.entries;
    });
    $scope.openLink = function(link) {
        window.open(link, '_system', 'location=yes');
        return false;
    };
    $scope.goToPrayer = function() {
       $location.path( "/tab/prayer" ); 
    };
    $scope.goToVideos = function() {
       $location.path( "/tab/videos" ); 
    };
})

.controller('VideosCtrl', function($scope, $location, FeedService) {
    FeedService.get('https://www.youtube.com/feeds/videos.xml?channel_id=UCbb_nZ6eA2rF0ujRyFqgsJg').then(function(res){
        $scope.videos=res.responseData.feed.entries;
    });
    $scope.openLink = function(link) {
        window.open(link, '_system', 'location=yes');
        return false;
    };
    $scope.goToUpdates = function() {
       $location.path( "/tab/updates" ); 
    };
});
