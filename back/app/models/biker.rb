class Biker < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :city_of_origin, presence: true
    validates :state_of_origin, presence: true, length: { minimum: 2, maximum: 2 }
    validates :latitude, presence: true
    validates :longitude, presence: true
end
