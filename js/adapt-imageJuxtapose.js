define([
    'coreJS/adapt',
    'coreViews/componentView',
    'libraries/juxtapose.min'
], function(Adapt, ComponentView, Juxtapose) {

    var ImageJuxtapose = ComponentView.extend({

        events: {

        },

        preRender: function() {
            this.listenTo(Adapt, 'device:resize', this.onScreenSizeChanged);
            this.listenTo(Adapt, 'device:changed', this.onDeviceChanged);
            this.listenTo(Adapt, 'accessibility:toggle', this.onAccessibilityToggle);
        },

        postRender: function() {
            this.setupJuxtapose();
        },

        setupJuxtapose: function() {
            var leftImage = this.model.get('_leftImage');
            var rightImage = this.model.get('_rightImage');

            var slider = new juxtapose.JXSlider('.juxtapose-slider',
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

            this.setReadyStatus();
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

    return Adapt.register("imageJuxtapose", ImageJuxtapose);

});
