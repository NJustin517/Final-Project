class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :profile_picture, :first_name, :last_name

  has_many :posts
end
