class BikersController < ApplicationController
  def index
    @bikers = Biker.all
  end
end
