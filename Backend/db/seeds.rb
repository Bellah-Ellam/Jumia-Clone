puts ":seedling: Seeding data..."

# Create products
product_data = [
  { name: "Product 1", description: "Description 1", price: 10, image_url: "image1.jpg" },
  { name: "Product 2", description: "Description 2", price: 20, image_url: "image2.jpg" },
  { name: "Product 3", description: "Description 3", price: 15, image_url: "image3.jpg" },
  { name: "Product 4", description: "Description 4", price: 25, image_url: "image4.jpg" },
  { name: "Product 5", description: "Description 5", price: 12, image_url: "image5.jpg" }
]

product_data.each do |product_params|
  Product.create(product_params)
end

# Create users
user_data = [
  { rating: 5, comment: "User 1 comment", user_id: 1, product_id: 1 },
  { rating: 4, comment: "User 2 comment", user_id: 2, product_id: 2 },
  { rating: 3, comment: "User 3 comment", user_id: 3, product_id: 3 },
  { rating: 2, comment: "User 4 comment", user_id: 4, product_id: 4 },
  { rating: 1, comment: "User 5 comment", user_id: 5, product_id: 5 }
]

user_data.each do |user_params|
  User.create(user_params)
end

# Create reviews
review_data = [
  { rating: 4, comment: "Review 1 comment", user_id: 1, product_id: 1 },
  { rating: 5, comment: "Review 2 comment", user_id: 2, product_id: 2 },
  { rating: 3, comment: "Review 3 comment", user_id: 3, product_id: 3 },
  { rating: 2, comment: "Review 4 comment", user_id: 4, product_id: 4 },
  { rating: 1, comment: "Review 5 comment", user_id: 5, product_id: 5 },
  { rating: 4, comment: "Review 6 comment", user_id: 1, product_id: 2 }
]

review_data.each do |review_params|
  Review.create(review_params)
end

puts ":white_check_mark: Done seeding!"