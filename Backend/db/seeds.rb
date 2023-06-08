puts "🌱 Seeding data..."

# Create users
user1 = User.create(
  username: "user1",
  email: "user1@example.com",
  firstname: "bellah",
  lastname: "ellam",
  password_digest: "password_digest"
)

user2 = User.create(
  username: "user2",
  email: "user2@example.com",
  firstname: "Tom",
  lastname: "Kambale",
  password_digest: "password_digest"
)

user3 = User.create(
  username: "user3",
  email: "user3@example.com",
  firstname: "austin",
  lastname: "tandale",
  password_digest: "password_digest"
)

user4 = User.create(
  username: "user4",
  email: "user4@example.com",
  firstname: "bellz",
  lastname: "kwame",
  password_digest: "password_digest"
)

user5 = User.create(
  username: "user5",
  email: "user5@example.com",
  firstname: "nkurumah",
  lastname: "osagyefo",
  password_digest: "password_digest"
)

# Create products
product1 = Product.create({
  "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image_url":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":'3.9'
})

product2 = Product.create(
  {"title":"Mens Casual Premium Slim Fit T-Shirts ","price":2200.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image_url":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":'4.1'
})

product3 = Product.create(
  {"title":"Mens Cotton Jacket","price":5500.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image_url":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":4.7
})

product4 = Product.create(
  {"title":"Mens Casual Slim Fit","price":1500.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image_url":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":2.1
})

product5 = Product.create(
  {"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":6950,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image_url":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":4.6
})
product6 = Product.create(
  {"title":"Solid Gold Petite Micropave ","price":1680,"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image_url":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg","rating":3.9
})
product7 = Product.create(
  {"title":"White Gold Plated Princess","price":999,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","category":"jewelery","image_url":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","rating":3
})
product8 = Product.create(
  {"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":1099,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image_url":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","rating":1.9
})
product9 = Product.create (
  {"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0","price":640,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on users hardware configuration and operating system","category":"electronics","image_url":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","rating":3.3
})
product10 = Product.create(
  {"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":1090,"description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","category":"electronics","image_url":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg","rating":2.9
})
product11 = Product.create(
  {"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":1090,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image_url":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg","rating":4.8
})
product12 = Product.create(
  {"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":1140,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty","category":"electronics","image_url":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg","rating":4.8
})
# Create carts
cart1 = Cart.create(
  user_id: user1.id
)

cart2 = Cart.create(
  user_id: user2.id
)

# Create cart items
CartItem.create(
  quantity: 2,
  cart_id: cart1.id,
  product_id: product1.id
)

CartItem.create(
  quantity: 3,
  cart_id: cart1.id,
  product_id: product2.id
)

CartItem.create(
  quantity: 1,
  cart_id: cart2.id,
  product_id: product3.id
)

# Create reviews
Review.create(
  rating: 4,
  comment: "Review 1 comment",
  user_id: user1.id,
  product_id: product1.id
)

Review.create(
  rating: 5,
  comment: "Review 2 comment",
  user_id: user2.id,
  product_id: product2.id
)

Review.create(
  rating: 3,
  comment: "Review 3 comment",
  user_id: user3.id,
  product_id: product3.id
)

Review.create(
  rating: 4,
  comment: "Review 4 comment",
  user_id: user4.id,
  product_id: product4.id
)

Review.create(
  rating: 5,
  comment: "Review 5 comment",
  user_id: user5.id,
  product_id: product5.id
)

puts "✅ Done seeding!"
