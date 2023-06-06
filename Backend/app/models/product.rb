class Product < ActiveRecord::Base
    has_many :reviews
    has_many :users, through: :reviews
    has_many :cart_items
    has_many :carts, through: :cart_items
end  