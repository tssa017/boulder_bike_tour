class CreateSloganSubmissions < ActiveRecord::Migration[7.1]
  def change
    create_table :slogan_submissions do |t|
      t.string :first_name
      t.string :last_name
      t.string :email_address
      t.text :slogan_idea

      t.timestamps
    end
  end
end
