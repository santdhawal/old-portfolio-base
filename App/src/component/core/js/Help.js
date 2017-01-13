var Help = {
  throttle: function (fn, threshold, scope) {
    var last,
      deferTimer;

    return function () {
      var context = scope;

      var now = new Date(),
        args = arguments;

      if (last && now < last + threshold) {
        MainApplication.window.clearTimeout(deferTimer);

        deferTimer = MainApplication.window.setTimeout(function () {
          last = now;

          fn.apply(context, args);
        }, threshold);
      } else {
        last = now;

        fn.apply(context, args);
      }
    };
  },

  templ: function (template, content) {
    var matchingRegEx = /<%=(.*?)%>/g,
      properties = this.__getMatchingExpressions(template, matchingRegEx),
      variables = {},
      key,
      regExpKeyInstance;

    properties.forEach(function (property) {
      var nest = property.split('.'),
        i = 0,
        len = nest.length,
        layeredObject = this.deepObjectCopy(content);

      for (i; i < len; i += 1) {
        layeredObject = layeredObject[nest[i]];
      }

      if (!variables[property]) {
        variables[property] = layeredObject;
      }
    }.bind(this));

    for (key in variables) {
      regExpKeyInstance = new RegExp('<%=' + key + '%>', 'g');
      template = template.replace(regExpKeyInstance, variables[key]);
    }

    return template;
  },

  deepObjectCopy: function (obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  __getMatchingExpressions: function (template, regExp) {
    var expressions = [],
      value = regExp.exec(template);

    while (value) {
      expressions.push(value[1]);

      value = regExp.exec(template);
    }

    return expressions;
  }
};
