puts "🌱 Seeding data..."

# Create users
User.create(
  username: "user1",
  email: "user1@example.com",
  password_digest: "password_digest"
)

User.create(
  username: "user2",
  email: "user2@example.com",
  password_digest: "password_digest"
)

User.create(
  username: "user3",
  email: "user3@example.com",
  password_digest: "password_digest"
)

User.create(
  username: "user4",
  email: "user4@example.com",
  password_digest: "password_digest"
)

User.create(
  username: "user5",
  email: "user5@example.com",
  password_digest: "password_digest"
)

# Create products
Product.create(
  name: "Product 1",
  description: "Description 1",
  price: 10,
  image_url: "image1.jpg"
)

Product.create(
  name: "Product 2",
  description: "Description 2",
  price: 20,
  image_url: "image2.jpg"
)

Product.create(
  name: "Product 3",
  description: "Description 3",
  price: 30,
  image_url: "image3.jpg"
)

Product.create(
  name: "Product 4",
  description: "Description 4",
  price: 40,
  image_url: "image4.jpg"
)

Product.create(
  name: "Product 5",
  description: "Description 5",
  price: 50,
  image_url: "image5.jpg"
)

# Create reviews
Review.create(
  rating: 4,
  comment: "Review 1 comment",
  user_id: User.first.id,
  product_id: Product.first.id
)

Review.create(
  rating: 5,
  comment: "Review 2 comment",
  user_id: User.second.id,
  product_id: Product.second.id
)

Review.create(
  rating: 3,
  comment: "Review 3 comment",
  user_id: User.third.id,
  product_id: Product.third.id
)

Review.create(
  rating: 4,
  comment: "Review 4 comment",
  user_id: User.fourth.id,
  product_id: Product.fourth.id
)

Review.create(
  rating: 5,
  comment: "Review 5 comment",
  user_id: User.fifth.id,
  product_id: Product.fifth.id
)

puts "✅ Done seeding!"