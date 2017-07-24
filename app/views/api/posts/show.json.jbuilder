json.id @post.id
json.title @post.title
json.body @post.body
json.image_url @post.image_url
json.topic_id @post.topic_id
json.author do
    json.id @post.author.id
    json.username @post.author.username
end
json.comments @post.comments do |comment|
    json.set! comment.id do
        json.id comment.id
        json.body comment.body
        json.author do
            json.username comment.user.username
            json.image_url comment.user.image_url
        end
    end
end
