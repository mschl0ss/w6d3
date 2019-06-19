const AjaxUtil = require ('./ajax_util');

class UserSearch {
  constructor(el, options) {
    this.$el = $(el);
    this.input = this.$el.data('user-search-input') || options.input;
    this.ul = $el.find('ul');
  }
}


module.exports = UserSearch;