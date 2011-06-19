class Pile < ActiveRecord::Base
  belongs_to :image
  
  attr_accessible :shape_kind,
                  :story_id,
                  :x,
                  :y,
                  :published
                  
  before_create   :create_serial
  has_one         :story
  
  scope :unpublished, where({:published=>false})
  scope :published,   where({:published=>true}).order('updated_at ASC')
  
  def publish!
    self.update_attributes({
      :published => true
    })
  end
  
  private
  
  def create_serial
    self.serial = SecureRandom.hex(5)
  end
end

