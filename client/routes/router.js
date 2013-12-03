// use more human express 
/*
   define( function(require) {
     var $                   = require('jquery'),
         _                   = require('underscore'),
         Backbone            = require('backbone'),
         Handlebars          = require('handlebars'),
         SomeModel           = require('SomeModel'),
         SomeCollection      = require('SomeCollection'),
         Template            = require('text!templates/table.template.html');
         ....
    });
*/
          
   //The application
   define(['jquery','underscore','backbone','handlebars','collections/people.collection','models/jinliao.model','TableView','views/page.jinliao.view'],
      function($, _, Backbone, Handlebars, People,Jinliao, TableView, JinliaoView) {

      'use strict';
      var Router = Backbone.Router.extend({
      //defien routes and mapping route to the function
         routes: {
           '': 'showHome',  //homeView
           'home': 'showHome', //show homeview also
           'jinliao': 'showJinliao', //show homeview also
         },


        
         showHome: function(actions) {
             
			// will render homeview and navigate to homeView
			var data = [ {
				'name' : 'stan',
				'age' : 37,
				'regdate' : '11/27 2013'
			}, {
				'name' : 'frank',
				'age' : 30,
				'regdate' : '11/27 2013'
			}, {
				'name' : '你新龙',
				'age' : 20,
				'regdate' : '11/27 2013'
			}, ];
			var people = new People(data);
			var tableView = new TableView({
				collection : people
			});
			console.log($("#page"));
                        $("#page").replaceWith('<div id="page"><div id="myusers" class="inner"/></div>');
			//$(".inner").replaceWith(tableView.render().$el);
			$("#myusers").append(tableView.render().$el);
         },    

         showJinliao: function(actions) {
           //will render homeview and navigate to homeView
            var data= {'jinliaoAction1': 1, 'jinliaoAction2': 1 }; 
            var jinliao= new Jinliao(data);
            var jinliaoView = new JinliaoView({
                 model: jinliao 
                });
             jinliaoView.render();
             console.log($("#page"));
             $("#page").replaceWith('<div id="page"><div id="jinliao" class="inner"/></div>');
               
             //$(".inner").append(tableView.render().$el);
             $("#jinliao").replaceWith(jinliaoView.render().$el);

         },

 
       }); 

      return Router;
   
});
