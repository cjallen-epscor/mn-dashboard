/*global Backbone */
'use strict';

define(['jquery', 'underscore', 'backbone', 'views/IndexView', 'views/NodeSummaryView', 'views/NodeDetailView', 'views/NodeSummaryUpcomingTableView'], 				
function ($, _, Backbone, IndexView, NodeSummaryView, NodeDetailView, NodeSummaryUpcomingTableView) {

	var app = app || {};
	var indexView = new IndexView();
	var nodeSummaryView = new NodeSummaryView();
	var nodeDetailView = new NodeDetailView();
	var NodeSummaryUpcomingTableView = new NodeSummaryUpcomingTableView();

	
	/* Dashboard Router
	 * ------------------------------------------------------ */
	var UIRouter = Backbone.Router.extend({
		routes: {
			''                          		: 'renderNodes', // the default route
			'nodes(/:shortNodeId)(/:anchorId)'	: 'renderNodes', // nodes page w/optional nodeId filter
			'maps'                      		: 'renderMaps',  // map page
			'upcoming'                          : 'renderUpcomingNodes' // upcoming - Upcoming MN

		},

		renderIndex: function (param) {
			console.log('Called UIRouter.renderIndex()');
			appView.showView(indexView);
		},
		
		renderNodes: function (shortNodeId, anchorId) {
			console.log('Called UIRouter.renderNodes()');
			appModel.set('shortNodeId', shortNodeId);
			appModel.set('anchorId', anchorId);
			if (shortNodeId != null) {
				appView.showView(nodeDetailView);
			} else {
				appView.showView(nodeSummaryView);
			}
		},

		renderMaps: function () {
			console.log('Called UIRouter.renderMaps()');
//			appView.showView(mapsView);
		},
		
		renderUpcomingNodes: function () {
			console.log('Called UIRouter.renderUpcomingNodes()');
			appView.showView(NodeSummaryUpcomingTableView);
		},
		
	});

	return UIRouter;
});
