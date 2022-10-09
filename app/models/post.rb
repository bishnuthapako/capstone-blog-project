class Post < ApplicationRecord
  has_many :comments
  belongs_to :user
  has_many :post_tags
  has_many :tags, through: :post_tags

  def author
    user.username
  end

  def preview
    content
  end

  def date
    created_at.strftime('%B %e %Y')
  end

end
