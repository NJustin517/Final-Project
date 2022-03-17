class FollowSerializer < ActiveModel::Serializer
  attributes :id, :follow_id
  has_one :user
end
