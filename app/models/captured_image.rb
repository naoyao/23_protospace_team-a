class CapturedImage < ActiveRecord::Base
  belongs_to :prototype
  # has_many :prototype

  mount_uploader :content, PrototypeImageUploader

  enum status: %i(main sub)

  validates :status,
            presence: true
end
