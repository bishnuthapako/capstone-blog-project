class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :username, :password_digest, :email, :bio, :avatar_url
end
