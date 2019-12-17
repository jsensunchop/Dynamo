const Thread = require('../models/threads');
const Post = require('../models/posts')

exports.getPosts = function(req, res) {
  const threadId = req.query.threadId;

  Post.find({'thread': threadId})
        .populate('user')
        .exec((errors, posts) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(posts);
  });
}

exports.createPosts = function(req, res) {
  const postdata = req.body;
  const post = new Post(postData)
  post.user = req.user

  post.save((errors, createdPost) => {
    if (errors) {
      return res.status(422).send({errors});
    }

    Thread.update({_id: createdPost.thread }, { $push: { posts: createdPost}}, ()=> {})
    return res.json(createdPost)
  });
}
