class Contact < ActiveRecord::Base
  validates [:email, :user_id], presence: true, uniqueness: true
  validates :user_id, presence: true

  belongs_to :owner,
    foreign_key: :user_id,
    class_name: :User

  has_many :contact_shares

  has_many :shared_users,
    through: :contact_shares,
    source: :user
end
