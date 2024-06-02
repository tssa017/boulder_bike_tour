FactoryBot.define do
    factory :biker do
      first_name { "John" }
      last_name { "Doe" }
      city_of_origin { "Redwood City" }
      state_of_origin { "CA" }
      latitude { "40.00" }
      longitude { "40.00" }
    end
  end
  