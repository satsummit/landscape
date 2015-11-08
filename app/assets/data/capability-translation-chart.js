module.exports = {
  resolution: {
    display: "Spatial resolution (m)",
    fn: function (x) {
      return x + 'm resolution';
    }
  },
  revisit: {
    display: "Revisit rate (days)",
    fn: function (x) {
      return x + ' days';
    }
  },
  cost: {
    display: "Cost ($ per km²)",
    fn: function (x) {
      return '$' + x + '/km²';
    }
  }
};
