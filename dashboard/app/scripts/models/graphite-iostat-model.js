/*global define*/

define(['underscore', 'backbone', 'models/graphite-model'], function(_, Backbone, GraphiteModel) {
    'use strict';

    var GraphiteIoModel = GraphiteModel.extend({
        url: function() {
            return this.graphiteHost + '/metrics/find?query=servers.' + this.host + '.iostat.*';
        },
        DriveRegexp: new RegExp('sd[a-z]$'),
        keys: function() {
            var re = this.DriveRegexp;
            return _.filter(_.map(this.attributes, function(v, k) {
                return k;
            }), function(v) {
                return re.test(v);
            });
        }
    });

    return GraphiteIoModel;
});
