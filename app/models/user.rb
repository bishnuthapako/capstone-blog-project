class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    has_secure_password
    # validates :fullname, presence: true
    # validates :username, presence: true, uniqueness: true
    # validates :password, length: {in: 6..20}, uniqueness: true
    # validate :must_have_gmail
    # validates :bio, presence: true
 

    # def must_have_gmail
    #     unless email.match?(/gmail.com/)
    #         error.add(:email, "we are only allowed to have people who have gmail account")
    #     end
    # end

end
