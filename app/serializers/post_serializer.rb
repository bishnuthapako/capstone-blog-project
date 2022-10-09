class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :author, :date
end
