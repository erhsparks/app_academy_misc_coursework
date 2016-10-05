class Note < ActiveRecord::Base
  validates :author_id, presence: true

  belongs_to :commentable, polymorphic: true
end
