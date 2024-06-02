# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_06_01_171834) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bikers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "city_of_origin"
    t.string "state_of_origin"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.float "latitude"
    t.float "longitude"
    t.bigint "rider_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rider_id"], name: "index_locations_on_rider_id"
  end

  create_table "rider_locations", force: :cascade do |t|
    t.bigint "rider_id"
    t.string "location", limit: 50
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.decimal "latitude", precision: 10, scale: 6, null: false
    t.decimal "longitude", precision: 10, scale: 6, null: false
    t.index ["rider_id"], name: "index_rider_locations_on_rider_id"
    t.index ["user_id"], name: "index_rider_locations_on_user_id"
  end

  create_table "riders", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "city_of_origin"
    t.string "state_of_origin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "slogan_submissions", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email_address"
    t.text "slogan_idea"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "submissions", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "slogan", limit: 50
    t.integer "status", limit: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_submissions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", limit: 50
    t.string "last_name", limit: 50
    t.string "email", limit: 255
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_type", limit: 2, null: false
    t.string "city", limit: 50
    t.string "state", limit: 50
  end

  add_foreign_key "locations", "riders"
  add_foreign_key "rider_locations", "users", column: "rider_id", on_delete: :cascade
  add_foreign_key "rider_locations", "users", on_delete: :cascade
  add_foreign_key "submissions", "users"
end
