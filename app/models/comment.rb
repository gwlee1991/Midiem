class Comment < ApplicationRecord
  validates :user, :post, :body, presence: true

  belongs_to :user
  belongs_to :post
end
