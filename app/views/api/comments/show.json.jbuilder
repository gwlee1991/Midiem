json.id @comment.id
json.body @comment.body
json.author do
    json.id @comment.user.id
    json.username @comment.user.username
end
json.post_id @comment.post_id
