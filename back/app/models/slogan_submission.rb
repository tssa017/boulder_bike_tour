class SloganSubmission < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email_address, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :slogan_idea, presence: true, length: { minimum: 5 }
end
