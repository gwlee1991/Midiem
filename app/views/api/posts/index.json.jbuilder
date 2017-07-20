json.array! @posts do |post|
    json.id post.id
    json.title post.title
    json.body post.body
    json.image_url post.image_url
    json.author post.author
    json.topic_id post.topic_id
end
