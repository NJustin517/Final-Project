class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :follows
  has_many :comments
  has_many :reports, through: :posts

  validates :username, presence: true, uniqueness: true
  validates :email, format: { with: /\A\S+@.+\.\S+\z/, message: "Email invalid"  }, uniqueness: { case_sensitive: false }, length: { minimum: 4, maximum: 254 }
  validates :first_name, presence: true
  validates :last_name, presence: true
end
