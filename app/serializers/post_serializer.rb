class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :like_count, :caption, :username, :comments
  has_one :user
  has_many :comments
end
