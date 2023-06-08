class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.string :category
      t.integer :price
      t.integer :rating
      t.string :image_url
      
      t.timestamps
    end 
  end
end
