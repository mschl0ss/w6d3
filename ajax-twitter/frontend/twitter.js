const FollowToggle = require('./follow_toggle');
const UserSearch = require('./users_search');

$( () => {
  $('button.follow-toggle').each( (i, $button ) => new FollowToggle($button, {}) );
  $('nav.users-search').each( (i, $button ) => new UserSearch($button, {}) );

} );