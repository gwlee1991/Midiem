@comments.each do |comment|
    json.set! comment.id do
        json.id comment.id
        json.body comment.body
        json.author do
            json.id comment.user.id
            json.username comment.user.username
        end
    end
end
