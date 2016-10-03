class ContactShare < ActiveRecord::Base
  validates :user_id, :contact_id, presence: true
  validates [:user_id, :contact_id], uniqueness: true

  belongs_to :user
  belongs_to :contact
end
