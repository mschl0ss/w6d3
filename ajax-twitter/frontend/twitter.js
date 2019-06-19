const FollowToggle = require('./follow_toggle');

$( () => {
  $fts = $('button.follow-toggle');

  $fts.each( (i, $button ) => new FollowToggle($button, {}) );


} );