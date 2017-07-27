@comments.each do |comment|
    json.set! comment.id do
        json.id comment.id
        json.body comment.body
        json.author do
            json.id comment.user.id
            json.username comment.user.username
            json.image_url comment.user.image_url
        end
        json.written_on comment.created_at
        json.post_id comment.post_id
    end
end
