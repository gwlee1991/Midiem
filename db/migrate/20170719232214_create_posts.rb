class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :body
      t.integer :author
      t.string :image_url
      t.integer :topic_id

      t.timestamps
    end

    add_index :posts, :topic_id
  end
end
