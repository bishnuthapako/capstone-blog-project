class PostListSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :preview, :date
end
