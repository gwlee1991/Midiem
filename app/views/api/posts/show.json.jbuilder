json.id @post.id
json.title @post.title
json.body @post.body
json.image_url @post.image_url
json.topic_id @post.topic_id
json.author do
    json.id @post.author.id
    json.username @post.author.username
end