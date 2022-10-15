class PostListSerializer < ActiveModel::Serializer
  attributes :id, :title, :minutes_to_read, :author, :content, :date
end
