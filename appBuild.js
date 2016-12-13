var app=angular.module("techfeedapp",[]);
app.controller("techFeedController",["$scope","$http",function(a,c){a.newsFeed={};a.init=function(){a.hackerSpinner=!0;a.productHuntSpinner=!0;a.techcrunchSpinner=!0;a.techmemeSpinner=!0;a.getHackerNews();a.getProductHunt();a.getTechCrunch();a.getTechMeme()};a.getHackerNews=function(){c.get("https://techfeedyservice.herokuapp.com/hackernews").success(function(b){a.hackerSpinner=!1;a.newsFeed.hackerNews=b})};a.getProductHunt=function(){c.get("https://techfeedyservice.herokuapp.com/producthunt").success(function(b){a.productHuntSpinner=!1;
a.newsFeed.productHunt=b})};a.getTechCrunch=function(){c.get("https://techfeedyservice.herokuapp.com/techcrunch").success(function(b){a.techcrunchSpinner=!1;a.newsFeed.techcrunch=b})};a.getTechMeme=function(){c.get("https://techfeedyservice.herokuapp.com/techmeme").success(function(b){a.techmemeSpinner=!1;a.newsFeed.techmeme=b})}}]);

//To build this 
//ng-annotate -a appController.js > appBuild.js
//And then use closure Compiler on appBuild.js