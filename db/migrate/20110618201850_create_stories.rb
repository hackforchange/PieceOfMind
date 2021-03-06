class CreateStories < ActiveRecord::Migration
  def self.up
    create_table :stories do |t|
      t.text :text
      t.integer :user_id
      t.integer :pile_id

      t.timestamps
    end
    
    add_index :stories, :pile_id
    add_index :stories, :user_id
  end

  def self.down
    drop_table :stories
  end
end
