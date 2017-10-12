# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true}
    validates :username, length: { minimum: 4 }
    validates :username, uniqueness: true;
    after_initialize :ensure_session_token

    has_many :posts,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Post
    
    has_many :comments

    has_many :post_likes,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Like

    has_many :liked_posts,
        through: :post_likes,
        source: :post

    has_many :followings,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: "Follow"
    
    has_many :followeds,
        primary_key: :id,
        foreign_key: :followee_id,
        class_name: "Follow"
    
    has_many :followees,
        through: :followeds,
        source: :followee

    has_many :followers,
        through: :followings,
        source: :follower
    
    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
