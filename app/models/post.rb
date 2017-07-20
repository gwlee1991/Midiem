class Post < ApplicationRecord
    validates :title, :body, :author_id, :image_url, :topic, presence: true
    
    # has_many :comments
    belongs_to :topic
end
