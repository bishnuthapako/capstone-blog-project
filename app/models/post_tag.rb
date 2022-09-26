class PostTag < ApplicationRecord
  belongs_to :Tag
  belongs_to :Post
end
