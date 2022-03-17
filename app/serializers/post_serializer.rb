class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :likes, :caption
  has_one :user
end
