/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res)
	{
		Posts.find(function(err, posts)
		{
			res.send(posts);
		})
	}
};
