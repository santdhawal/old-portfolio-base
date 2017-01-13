
	var Bootstrap = {
    _timer: null,
    init: function () {
      document.addEventListener(CONSTANTS.general.events.DOMContentLoaded, this.onLoad.bind(this));
    },
    onLoad: function () {
      this.checkJQueryLoaded();
    },
    startApp: function () {
      MainApplication.init();
    },
    startTimer: function (){
      this._timer = setTimeout(this.checkJQueryLoaded.bind(this), 50);
    },
    checkJQueryLoaded: function () {
      clearTimeout(this._timer);
      this._timer = null;
      if (window.$) {
          this.startApp();
      } else {
        this.startTimer();
      }
    }
  }

  Bootstrap.init();


