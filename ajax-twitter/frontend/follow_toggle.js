const AjaxUtil = require('./ajax_util');

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el); 
    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = this.$el.data('initial-follow-state') || options.followState;
    this.render();
    //something about a click handler
    this.$el.on('click', this.handleClick.bind(this));
  }

  render () {
    this.$el.prop("disabled", false);

    if ( this.followState === 'unfollowed' ) { this.$el.text('Follow!');  }
    else if ( this.followState === 'followed' ) { this.$el.text('Unfollow!'); }
    else {
      this.$el.text('CHILL OUT BROSEF STALIN');
      this.$el.prop( "disabled", true );
    }
  }

  handleClick ( event ) {

    event.preventDefault();

    const tollowFoggle = this;

    if ( this.followState === 'followed' ) {
      this.followState = 'unfollowing';
      this.render();
      AjaxUtil.unfollowUser(this.userId).then( ()=> {
        tollowFoggle.followState = 'unfollowed';
        tollowFoggle.render();
      });
    } 
    else {
      this.followState = 'following';
      this.render();
      AjaxUtil.followUser(this.userId).then( ()=> {
        tollowFoggle.followState = 'followed';
        tollowFoggle.render();
      });
    }
  }





}

module.exports = FollowToggle;