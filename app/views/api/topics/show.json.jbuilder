json.topic do 
    json.set! @topic.id do
        json.id @topic.id
        json.title @topic.title
    end
end