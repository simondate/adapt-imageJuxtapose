define([
  'coreModels/componentModel'
], function(ComponentModel){

  var ChartJSModel = ComponentModel.extend({
    /**
     * Updates an existing dataset for a chart.
     *
     * @param  {array} datasetData  An array of the new data points.
     * @param  {int} datasetIndex The index of the dataset to update (defaults to 0.)
     */
    updateDataset: function(datasetData, datasetIndex) {
      datasetIndex = datasetIndex || 0;

      var data = this.get("data");
      if (!data) {
        throw new Error("This chart instance has no data; it may be improperly configured");
      }

      if (!data.datasets || datasetIndex >= data.datasets.length) {
        throw new RangeError("Cannot update a nonexistent dataset");
      }

      data.datasets[datasetIndex].data = datasetData;

      this.trigger("change:data");
    }
  });

  return ChartJSModel;
});
