# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create!([{
  title: "Whistleblower: White House overruled 25 security clearance denials",
  description: "The individuals 'had a wide range of serious disqualifying issues' including drug use and criminal conduct.",
  likeCount: 14
},
{
  title: "Trump budget cut turns out to be a boon for the Special Olympics",
  description: "In some ways the most powerless, vulnerable, forgotten people in the country brought to their knees the most powerful people in the country.",
  likeCount: 22
},
{
  title: "Killing Obamacare could backfire for Trump",
  description: "Trump's renewed push to gut Obamacare could sabotage the rest of his health agenda.",
  likeCount: 9
}])
 
p "Created #{Post.count} posts"