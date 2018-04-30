# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
%w(IDE Languages).each do |cate|
  Category.create name: cate
end

(1..10).each do |idx|
  f = Faker::Lorem

  Post.create(name: f.sentence, description: f.sentence(20), content: f.paragraph(rand(20..40)),
    category_id: rand(1..2))
end
