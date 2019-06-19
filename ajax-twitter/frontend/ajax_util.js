const AjaxUtil = {

  followUser: id => AjaxUtil.changeFollowStatus(id, 'POST'),

  unfollowUser: id => AjaxUtil.changeFollowStatus(id, 'DELETE'),

  changeFollowStatus: (id, method) => (
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'json',
      method
    })
  )
};


module.exports = AjaxUtil;