var app = angular.module('techfeedapp', []);

app.controller ('techFeedController', function($scope, $http) {
    
    $scope.newsFeed = {};
    
    $scope.init = function ( ) { 
        $scope.hackerSpinner = true;
        $scope.productHuntSpinner = true;
        $scope.techcrunchSpinner = true;
        $scope.techmemeSpinner = true;
        
        $scope.getHackerNews( );
        $scope.getProductHunt( );
        $scope.getTechCrunch( );
        $scope.getTechMeme ( );
        
    }
    
    $scope.getHackerNews = function ( ) {
        $http.get('https://techfeedyservice.herokuapp.com/hackernews')
        .success(function(response) {
            $scope.hackerSpinner = false;
            $scope.newsFeed.hackerNews = response;
        });        
    } 
    
    $scope.getProductHunt = function ( ) {
        $http.get('https://techfeedyservice.herokuapp.com/producthunt')
        .success(function(response) {
            $scope.productHuntSpinner = false;
            $scope.newsFeed.productHunt = response;
        });        
    }   
    
    $scope.getTechCrunch = function ( ) {
        $http.get('https://techfeedyservice.herokuapp.com/techcrunch')
        .success(function(response) {
            $scope.techcrunchSpinner = false;
            $scope.newsFeed.techcrunch = response;
        });        
    } 
    
    $scope.getTechMeme = function ( ) {
        $http.get('https://techfeedyservice.herokuapp.com/techmeme')
        .success(function(response) {
            $scope.techmemeSpinner = false;
            $scope.newsFeed.techmeme = response;
        });        
    }     
    
});