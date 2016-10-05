class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true

  has_many :contacts,
    dependent: :destroy

  has_many :contact_shares,
    dependent: :destroy

  has_many :shared_contacts,
    through: :contact_shares,
    source: :contact

  has_many :groups, dependent: :destroy

  has_many :notes, as: :commentable, dependent: :destroy

  has_many :authored_notes,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Note
end
