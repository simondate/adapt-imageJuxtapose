define([
    'coreJS/adapt',
    'coreViews/componentView',
    './Chart.min'
], function(Adapt, ComponentView, Chart) {

    var ChartJSView = ComponentView.extend({

        events: {

        },

        preRender: function() {
            this.listenTo(Adapt, 'device:resize', this.onScreenSizeChanged);
            this.listenTo(Adapt, 'device:changed', this.onDeviceChanged);
            this.listenTo(Adapt, 'accessibility:toggle', this.onAccessibilityToggle);
            this.listenTo(this.model, 'change:data', this.onDataChanged);
            this.checkIfResetOnRevisit();
        },

        postRender: function() {
            this.setupChart();
            this.$('.component-widget').on('inview', _.bind(this.inview, this));
        },


        setupChart: function() {
            var ctx = $("#myChart"+this.model.get('_id'));
            var chart = new Chart(ctx, {
                type: this.model.get('_chartType'),
                data: this.model.get('data'),
                options: this.model.get('_options')
            });

            this.setReadyStatus();

            this.model.set("_chart", chart);
        },

        onDataChanged: function() {
            var chart = this.model.get("_chart");

            if (chart) {
                chart.update();
            }
        },

        setupEventListeners: function() {

        },

        checkIfResetOnRevisit: function() {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
            if (isResetOnRevisit) {
                this.model.reset(isResetOnRevisit);
            }
        },

        inview: function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                if (visiblePartY === 'top') {
                    this._isVisibleTop = true;
                } else if (visiblePartY === 'bottom') {
                    this._isVisibleBottom = true;
                } else {
                    this._isVisibleTop = true;
                    this._isVisibleBottom = true;
                }

                if (this._isVisibleTop && this._isVisibleBottom) {
                    this.$('.component-inner').off('inview');
                    this.setCompletionStatus();
                }
            }
        },

        remove: function() {
            if ($("html").is(".ie8")) {
                var obj = this.$("object")[0];
                if (obj) {
                    obj.style.display = "none";
                }
            }
            this.$('.component-widget').off('inview');
            ComponentView.prototype.remove.call(this);
        },

        onCompletion: function() {
            this.setCompletionStatus();
        },

        onDeviceChanged: function() {

        },

        onScreenSizeChanged: function() {

        },

        onAccessibilityToggle: function() {

        }

    });

    return ChartJSView;

});
