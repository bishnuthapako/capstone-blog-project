class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :username, :password_digest, :email, :bio, :avatar_url
    has_many :comments
    has_many :posts, through: :comments
end
