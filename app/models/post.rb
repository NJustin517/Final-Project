class Post < ApplicationRecord
  belongs_to :user
  has_many :reports
  has_many :comments
end
