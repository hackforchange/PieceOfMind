class CreatePiles < ActiveRecord::Migration
  def self.up
    create_table :piles do |t|
      t.integer :image_id
      t.integer :shape_id
      t.string :serial
      t.integer :story_id

      t.timestamps
    end
  end

  def self.down
    drop_table :piles
  end
end
