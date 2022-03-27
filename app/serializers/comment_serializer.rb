class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_text, :likes, :username
  has_one :post
  has_one :user
end
