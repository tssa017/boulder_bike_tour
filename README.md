# (WIP) Boulder Bike Tour

Boulder Bike Tour is a website for a Colorado-based bike race that allows users to sign up, track rider locations, view photos, and submit entries to a competition 🚲

I designed and built this full-stack application as project 7 for the OpenClassrooms Full Stack Developer path. For the back-end I use Ruby on Rails with PostgreSQL for the database. For the front-end I use React with Tailwind CSS.

## Features

-   **1**: Users can sign up to participate in the bike competition
-   **2**: Users can view photos with the hashtags '' and '' using the Flickr API.
-   **3**: Users can view current rider locations using the ---- API.
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
-   `FLICKR_API_KEY`
-   `MAPS_API_KEY`

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
ActiveRecord::Schema[7.1].define(version: 2024_06_01_171834) do
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
end
```

## Testing

---

## Acknowledgments

I would like to acknowledge the following open-source projects for their contributions to this project:

### Icons

-   [Twemoji](https://github.com/twitter/twemoji): Utilized the bike emoji for the favicon.ico

### Google Maps

-   [@vis.gl/react-google-maps](https://www.npmjs.com/package/@vis.gl/react-google-maps): Utilized the open source Google Maps React API

## Resources

-   [Rails docs](https://guides.rubyonrails.org/)
-   [Project description](https://openclassrooms.com/fr/paths/509/projects/243/assignment)

Enjoy the platform! 🚀
