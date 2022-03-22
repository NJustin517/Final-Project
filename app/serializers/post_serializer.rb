class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :likes, :caption, :username
  has_one :user
end
