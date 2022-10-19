class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :user
  has_many :post_tags, dependent: :destroy
  has_many :tags, through: :post_tags

  # validates :title, presence: true
  # validates :content, presence: true

  def author
    user.username
  end

  # def preview
  #   content
  # end

  def date
    created_at.strftime('%B %e %Y')
  end



end
