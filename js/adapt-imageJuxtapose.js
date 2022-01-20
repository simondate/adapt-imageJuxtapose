define([
    'coreJS/adapt',
    'coreViews/componentView',
    'libraries/juxtapose.min.js'
], function(Adapt, ComponentView, Juxtapose) {

    var ImageJuxtapose = ComponentView.extend({

        preRender: function() {
            this.listenTo(Adapt, 'device:resize', this.onScreenSizeChanged);
            this.listenTo(Adapt, 'device:changed', this.onDeviceChanged);
            this.listenTo(Adapt, 'accessibility:toggle', this.onAccessibilityToggle);
        },

        postRender: function() {
            this.setReadyStatus();
            this.setupInview();
            this.setupJuxtapose();

        },

        setupJuxtapose: function() {
            const leftImage = this.model.get('_leftImage');
            const rightImage = this.model.get('_rightImage');
            // console.log('hi')
            // console.log(Juxtapose)
            // console.log($('juxtapose__slider'));

            let context = this;
            var slider = new Juxtapose.JXSlider('.juxtapose__slider',
            [
                {
                    src: leftImage.src,
                    label: leftImage.label,
                    credit: leftImage.credit
                },
                {
                    src: rightImage.src,
                    label: rightImage.label,
                    credit: rightImage.credit
                }
            ],
            {
                animate: true,
                showLabels: true,
                showCredits: true,
                startingPosition: this.model.get("_startingPosition"),
                makeResponsive: true
            });


        },

        setupInview() {
            const selector = this.getInviewElementSelector();
            if (!selector) {
              this.setCompletionStatus();
              return;
            }
      
            this.setupInviewCompletion(selector);
        },
      
          /**
           * determines which element should be used for inview logic - body, instruction or title - and returns the selector for that element
           */
          getInviewElementSelector: function() {
            if (this.model.get('body')) return '.component__body';
      
            if (this.model.get('instruction')) return '.component__instruction';
      
            if (this.model.get('displayTitle')) return '.component__title';
      
            return null;
        },
      
          checkIfResetOnRevisit: function() {
            const isResetOnRevisit = this.model.get('_isResetOnRevisit');
      
            // If reset is enabled set defaults
            if (isResetOnRevisit) {
              this.model.reset(isResetOnRevisit);
            }
        }
    });

    return Adapt.register("imageJuxtapose", ImageJuxtapose);

});
