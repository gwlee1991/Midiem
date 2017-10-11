class Follow < ApplicationRecord
  validates :followee_id, :follower_id, presence: true

  
end

