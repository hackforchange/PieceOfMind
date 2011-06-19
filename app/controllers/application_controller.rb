class ApplicationController < ActionController::Base
  protect_from_forgery
  
  private 
  
  def my_tile
    pile = Pile.find_by_serial session[:pile_id]
    session[:pile_id] = nil if !pile
    pile
  end
  helper_method :my_tile
  
end
