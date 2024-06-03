# Boulder Bike Tour

Boulder Bike Tour is a website for a Colorado-based bike race that allows users to sign up, track rider locations, view photos, and submit entries to a competition 🚲

I designed and built this full-stack application as project 7 for the OpenClassrooms Full Stack Developer path. For the back-end I use Ruby on Rails with PostgreSQL for the database. For the front-end I use React with Tailwind CSS.

## Features

-   **1**: Users can track the time until the Boulder Bike Tour begins.
-   **2**: Users can view photos with the hashtags 'bikerace' and 'BoulderBikeTour' using the Flickr API with pagination.
-   **3**: Users can view basic info about each biker.
-   **4**: Users can track biker locations in real time using the Google Maps API.
-   **5**: Users can submit entries for the slogan competition.
-   **6**: Users can interact with accessible interface that conforms with current [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) criteria.

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

Ensure you have the following environment variables set in `config/.env` files in their respective repositories:

### Back .env

-   `DB_NAME`
-   `DB_USER`
-   `DB_PASSWORD`

### Front .env

-   `REACT_APP_FLICKR_API_KEY`
-   `REACT_APP_GOOGLE_MAPS_API_KEY`

## Models

-   **bikers**: - Represents a rider's personal information and coordinates
-   **slogan_submissions**: - Represents a website user's submission to the slogan competition

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

### To run Rails tests, use the following command in your terminal:

```bash
rails test
```

### To run front tests, use the following command in your terminal:

```bash
npx jest
```

## Acknowledgments

I would like to acknowledge the following open-source projects for their contributions to this project:

### Icons

-   [Twemoji](https://github.com/twitter/twemoji): Utilized the bike emoji for the favicon.ico

### Google Maps

-   [@vis.gl/react-google-maps](https://www.npmjs.com/package/@vis.gl/react-google-maps): Utilized the open source Google Maps React API

## Resources

-   [Rails docs](https://guides.rubyonrails.org/)
-   [Project description](https://openclassrooms.com/fr/paths/509/projects/243/assignment)
-   [WCAG2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/).

Enjoy the platform! 🚀
