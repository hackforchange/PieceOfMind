class Pile < ActiveRecord::Base
  belongs_to :image
  
  attr_accessible :shape_kind,
                  :story_id,
                  :x,
                  :y
                  
  before_create   :create_serial
  
  private
  
  def create_serial
    self.serial = SecureRandom.hex(5)
  end
end

