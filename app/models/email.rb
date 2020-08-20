class Email < ApplicationRecord
    validates :message,presence: true
    validates :name,presence: true
    validates :email,presence: true

end