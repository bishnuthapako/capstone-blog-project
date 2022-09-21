class Tag < ApplicationRecord
    has_many :posts
    has_many :post_tags, through: :post_tags
end
