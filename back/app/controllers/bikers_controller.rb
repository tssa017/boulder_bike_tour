class BikersController < ApplicationController
  def index
    @bikers = Biker.all
    render json: @bikers
  end
end
