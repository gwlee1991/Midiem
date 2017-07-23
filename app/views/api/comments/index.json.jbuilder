@comments each do |comment|
    json.set! comment.id do
        json.id comment.id
        json.body comment.body
        json.author do
            json.id comment.author.id
            json.username comment.author.username
        end
    end
end
