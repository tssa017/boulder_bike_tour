# (WIP) Boulder Bike Tour

Boulder Bike Tour is a website for a Colorado-based bike race that allows users to sign up, track rider locations, view photos, and submit entries to a competition 🚲

I designed and built this full-stack application as project 7 for the OpenClassrooms Full Stack Developer path. For the back-end I use Ruby on Rails with PostgreSQL for the database. For the front-end I use React with Tailwind CSS.

## Features

-   **1**: Users can sign up to participate in the bike competition
-   **2**: Users can view photos with the hashtags '' and '' using the Flickr API.
-   **3s**: Users can view current rider locations using the ---- API.
-   **4**: Users can submit entries for the slogan competition and view their results
-   **4**: Users can ---

## Back-end requirements

-   Ruby version 3.2.2
-   [Rails version 7.1.3](https://guides.rubyonrails.org/v5.1/getting_started.html)
-   PostgreSQL database

## Front-end requirements

-   Node version 21.4.0
-   React version 18.3.1
-   `react-router-dom` version 6.23.0
-   Tailwind CSS version 3.4.3

## Installation

1. Clone and access the project using the following commands:

```bash
git clone git@github.com:tssa017/boulder_bike_tour.git
cd boulder_bike_tour
```

2. Install back-end dependencies using the following command:

```bash
cd back
bundle install
```

3. Setup the database with the following commands:

```bash
rails db:create
rails db:migrate
```

4. Start the back-end server:

```bash
rails server
```

2. Install front-end dependencies with the following command:

```bash
cd front
npm i
```

4. Start the front-end server:

```bash
npm start
```

## Configuration

Ensure you have the following environment variables set in a `config/.env` file:

-   `DB_NAME`
-   `DB_USER`
-   `DB_PASSWORD`

## Usage

1.
2.
3.

## Models

-   **users**: - Represents a rider's information
-   **rider_locations**: Stores a rider's given location at any point in the contest
-   **submissions**: - Represents a user's submission to the slogan competition

## Database Schema

The application uses PostgreSQL as the development and production database. Below is the schema definition:

```ruby
ActiveRecord::Schema[7.1].define(version: 0) do
  enable_extension "plpgsql"

    create_table "users", id: :serial, force: :cascade do |t|
    t.string "first_name", limit: 50
    t.string "last_name", limit: 50
    t.string "email", limit: 255
    t.string "origin_city", limit: 50
    t.integer "user_type", limit: 2
    t.datetime "created_at", precision: nil, default: -> { "CURRENT_TIMESTAMP" }
    t.datetime "updated_at", precision: nil, default: -> { "CURRENT_TIMESTAMP" }
    t.check_constraint "user_type >= 0 AND user_type <= 2", name: "users_user_type_check"
  end

  create_table "rider_locations", id: :serial, force: :cascade do |t|
    t.integer "rider_id"
    t.string "location", limit: 50
    t.datetime "created_at", precision: nil, default: -> { "CURRENT_TIMESTAMP" }
    t.datetime "updated_at", precision: nil, default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "submissions", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.string "slogan", limit: 50
    t.integer "status", limit: 2
    t.datetime "created_at", precision: nil, default: -> { "CURRENT_TIMESTAMP" }
    t.datetime "updated_at", precision: nil, default: -> { "CURRENT_TIMESTAMP" }
    t.check_constraint "status >= 0 AND status <= 2", name: "submissions_status_check"
  end

  add_foreign_key "rider_locations", "users", column: "rider_id", name: "rider_locations_rider_id_fkey", on_delete: :cascade
  add_foreign_key "submissions", "users", name: "submissions_user_id_fkey", on_delete: :cascade
end
```

## Testing

---

## Acknowledgments

I would like to acknowledge the following open-source projects for their contributions to this project:

### Images

-   [Twemoji](https://github.com/twitter/twemoji): Utilized the bike emoji for the favicon.ico

## Resources

-   [Rails docs](https://guides.rubyonrails.org/)
-   [Project description](https://openclassrooms.com/fr/paths/509/projects/243/assignment)

Enjoy the platform! 🚀
