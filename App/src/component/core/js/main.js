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

  init: function()
  {
    this.__setVars(window);
  }

};

