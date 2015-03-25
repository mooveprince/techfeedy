var app = angular.module('techfeedapp', []);

app.controller ('techFeedController', function($scope, $http) {
    
    $scope.newsFeed = {};
    
    $scope.init = function ( ) { 
        $scope.getHackerNews( );
        $scope.getProductHunt( );
        $scope.getTechCrunch( );
        $scope.getTechMeme ( );
        
    }
    
    $scope.getHackerNews = function ( ) {
        $http.get('http://techfeedyservice.herokuapp.com/hackernews')
        .success(function(response) {
            $scope.newsFeed.hackerNews = response;
        });        
    } 
    
    $scope.getProductHunt = function ( ) {
        $http.get('http://techfeedyservice.herokuapp.com/producthunt')
        .success(function(response) {
            $scope.newsFeed.productHunt = response;
        });        
    }   
    
    $scope.getTechCrunch = function ( ) {
        $http.get('http://techfeedyservice.herokuapp.com/techcrunch')
        .success(function(response) {
            $scope.newsFeed.techcrunch = response;
        });        
    } 
    
    $scope.getTechMeme = function ( ) {
        $http.get('http://techfeedyservice.herokuapp.com/techmeme')
        .success(function(response) {
            $scope.newsFeed.techmeme = response;
        });        
    }     
    
});