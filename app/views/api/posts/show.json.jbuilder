json.id @post.id
json.title @post.title
json.body @post.body
json.image_url @post.image_url
json.topic_id @post.topic_id
json.written_on @post.created_at
json.liked @post.liked?(current_user)
json.likes @post.likers.count
json.author do
    json.id @post.author.id
    json.username @post.author.username
    json.image_url @post.author.image_url
    json.following current_user ? current_user.following?(@post.author.id) : false
end