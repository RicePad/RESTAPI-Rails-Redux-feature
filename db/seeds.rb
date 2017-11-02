3.times do |task|
	Task.create!(title: "Redux Guide", body:"A guide to React-redux")
end

puts '3 tasks created'