class Post < ApplicationRecord
    validates :title, :body, :author, :topic, presence: true
    
    belongs_to :topic
    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
    has_many :comments, dependent: :destroy,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment
end
