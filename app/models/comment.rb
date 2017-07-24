class Comment < ApplicationRecord
  validates :user, :post_id, :body, presence: true

  belongs_to :user
  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post
end
