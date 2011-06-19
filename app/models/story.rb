class Story < ActiveRecord::Base
  belongs_to :pile
  
  after_create :publish_pile
  
  private
  
  def publish_pile
    pile.publish!
  end
end
