const AjaxUtil = {

  followUser: id => AjaxUtil.changeFollowStatus(id, 'POST'),

  unfollowUser: id => AjaxUtil.changeFollowStatus(id, 'DELETE'),

  changeFollowStatus: (id, method) => (
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'json',
      method
    })
  ),

  searchUsers: (query) => {

    $.ajax({
      url: `/users/${id}`,
      method: 'get',
      dataType: 'json',
      data: { query }
    });
  }
};


module.exports = AjaxUtil;