define([
    'coreJS/adapt',
    './chartjsView',
    './chartjsModel'
], function(Adapt, ChartJSView, ChartJSModel) {

    return Adapt.register("chartjs", {
        view: ChartJSView,
        model: ChartJSModel
    });

});
