class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :image
      t.integer :likes
      t.text :caption

      t.timestamps
    end
  end
end
