class Post < ApplicationRecord
  has_many :comments
  belongs_to :user
  has_many :post_tags
  has_many :tags, through: :post_tags
end
