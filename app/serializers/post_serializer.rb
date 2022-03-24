class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :likes, :caption, :username, :comments
  has_one :user
  has_many :comments
end
