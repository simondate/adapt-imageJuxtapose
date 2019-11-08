define([
    'coreJS/adapt',
    './chartjsView',
    './chartjsModel'
], function(Adapt, ChartJSView, ChartJSModel) {

    return Adapt.register("imageJuxtapose", {
        view: ChartJSView,
        model: ChartJSModel
    });

});
