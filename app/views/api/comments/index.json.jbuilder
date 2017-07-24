json.array! @comments.each do |comment|
    json.id comment.id
    json.body comment.body
    json.author do
        json.id comment.user.id
        json.username comment.user.username
    end
end
