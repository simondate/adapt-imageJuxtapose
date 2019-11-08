# adapt-chart  

This is a container for displaying [Chart.js](http://www.chartjs.org/) charts in the Adapt framework and authoring tool.  You will need to read the Chart.js [documentation](http://www.chartjs.org/docs/) to create charts using this plugin.



### Installation




### Attributes

[**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. [Read more](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes).

**_component** (string): This value must be: `chart`.

**_classes** (string): CSS class name to be applied to **Chart**’s containing div. The class must be predefined in one of the Less files. Separate multiple classes with a space.

**_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full`, `left` or `right`.  

**instruction** (string): This optional text appears above the component. It is frequently used to
guide the learner’s interaction with the component.  

**_chartType** (string): Select the type of chart to display. 

**_height** (number): Set the height of the chart

**data** (object): Set datasets and labels. See Chart.js documentation for details. 

Line chart example for authoring tool:

```JSON
{
    "labels": ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    "datasets": [{
        "label": "My First dataset",
        "backgroundColor": "rgba(179,181,198,0.2)",
        "borderColor": "rgba(179,181,198,1)",
        "pointBackgroundColor": "rgba(179,181,198,1)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgba(179,181,198,1)",
        "data": [65, 59, 90, 81, 56, 55, 40]
    }, {
        "label": "My Second dataset",
        "backgroundColor": "rgba(255,99,132,0.2)",
        "borderColor": "rgba(255,99,132,1)",
        "pointBackgroundColor": "rgba(255,99,132,1)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgba(255,99,132,1)",
        "data": [28, 48, 40, 19, 96, 27, 100]
    }]
}
```

**_options** (object): Add specifc chart options here. See Chart.js [docs](http://www.chartjs.org/docs/#line-chart-chart-options).

Line chart example for authoring tool:

```JSON
{
    "title": {
        "display": true,
        "text": "Custom Chart Title"
    }
}
```

<div float align=right><a href="#top">Back to Top</a></div>

### JSON Examples  


### Accessibility

<div float align=right><a href="#top">Back to Top</a></div>

## Limitations

----------------------------
**Version number:**  0.0.1   <a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a>
**Framework versions:** 2.0  
**Author / maintainer:** Dan Gray [contributors](https://github.com/dancgray/adapt-chart/graphs/contributors)  
**Accessibility support:** No   
**RTL support:** No  
**Cross-platform coverage:** Chrome, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE Mobile 11, Safari for iPhone (iOS 8+9), Safari for iPad (iOS 8+9), Safari 8     
