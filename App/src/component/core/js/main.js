/* global CONSTANTS, methods*/

var MainApplication = { // eslint-disable-line
  __setVars: function(windowObject)
  {
    this.$application = $(CONSTANTS.components);
    this.$html = $('html');
    this.window = windowObject;
    this.bgComponents = [];
    this.genericInfoComponents = [];
  },

  __objectFitImages: function()
  {
    objectFitImages(null, {watchMQ: true});
  },

  init: function()
  {
    this.__setVars(window);
    this.__objectFitImages();
    /*
    this.window.resize = function(){
      this.__objectFitImages();
    }*/
  }

};

