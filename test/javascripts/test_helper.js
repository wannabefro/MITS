//= require application
//= require_self
//= require_tree ./support

var d = document;
d.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
App.rootElement = "#ember-testing"
App.setupForTesting();
App.injectTestHelpers();
function hasContent(content) {
    return !!find('*:contains(' + content + ')').length;
}
function exists(selector) { return !!find(selector).length;
}
