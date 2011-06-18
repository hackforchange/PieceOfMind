class CreatePiles < ActiveRecord::Migration
  def self.up
    create_table :piles do |t|
      t.integer :image_id
      t.string  :shape_kind, :limit => 1
      t.string  :serial
      t.integer :story_id
      t.integer :x
      t.integer :y

      t.timestamps
    end
  end

  def self.down
    drop_table :piles
  end
end
