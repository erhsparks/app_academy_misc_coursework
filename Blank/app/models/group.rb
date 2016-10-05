class Group < ActiveRecord::Base
  validates :name, :user_id, presence: true

  belongs_to :user

  has_many :groupings

  has_many :contacts,
    through: :grouings,
    dependent: :destroy
end
