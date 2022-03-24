class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :follows
  # has_many :followed_users, through: :follows, foreign_key: :follow_id, source: :user
  # has_many :followed_posts, through: :followed_users, source: :posts
  has_many :comments
  has_many :reports, through: :posts

  validates :username, presence: true, uniqueness: true
  validates :email, format: { with: /\A\S+@.+\.\S+\z/, message: "Email invalid"  }, uniqueness: { case_sensitive: false }, length: { minimum: 4, maximum: 254 }
  validates :first_name, presence: true
  validates :last_name, presence: true

  def follow_profiles
    follows = self.follows.map {|f| User.find(f.follow_id)}
  end
end
