class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.text :content, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end
