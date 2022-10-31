puts "Seeding DB⏳..."

# Mentor data
puts "Tutors⏳..."
Tutor.create(firstname: "John", lastname: "Doe", work_id: "SE/2022/101", email: "johndoe@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(firstname: "Michael", lastname: "Hill", work_id: "SE/2022/002", email: "mikehill@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(firstname: "Matt", lastname: "Smith", work_id: "SE/2022/003", email: "mattsmith@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(firstname: "Jane", lastname: "Doe", work_id: "SE/2022/004", email: "janedoe@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(firstname: "Mary", lastname: "Smith", work_id: "SE/2022/005", email: "marysmith@gmail.com", password: "123456", password_confirmation: "123456")

# Student data
puts "Students⏳..."
Student.create(firstname: "Wycliffe", lastname: "Ndiba", email: "w.ndiba@gmail.com", username: "wycliffendiba", password: "123456", password_confirmation: "123456")
Student.create(firstname: "Dennis" , lastname:"Shakava", email: "d.shakava@gmail.com", username: "dennishakava", password: "123456", password_confirmation: "123456")
Student.create(firstname: "Stephen", lastname: "Lukanu", email: "s.lukanu@gmail.com", username: "stephenlukanu", password: "123456", password_confirmation: "123456")
Student.create(firstname: "Michael", lastname: "Kaburu", email: "m.kaburu@gmail.com", username: "michaelkaburu", password: "123456", password_confirmation: "123456")
Student.create(firstname: "Elvis" , lastname: "Kimani", email: "e.kimani@gmail.com", username: "elviskimani", password: "123456", password_confirmation: "123456")
Student.create(firstname: "Maurice", lastname: "Nganga", email: "m.nganga@gmail.com", username: "mauricenganga", password: "123456", password_confirmation: "123456")

# Assessment data
puts "Assessments⏳..."
Assessment.create(tutor_id: 1, assessment_title: "Ruby Basics")
Assessment.create(tutor_id: 1, assessment_title: "Ruby Intermediate")
Assessment.create(tutor_id: 2, assessment_title: "Ruby Advanced")
Assessment.create(tutor_id: 2, assessment_title: "Javascript Basics")
Assessment.create(tutor_id: 3, assessment_title: "Javascript Intermediate")
Assessment.create(tutor_id: 3, assessment_title: "Javascript Advanced")


# Multiple Choice Question data
puts "Mcqs⏳..."
Mcq.create(assessment_id: 1, question: "What is the output of the following code? puts 'Hello World'", answers: ["Hello World", "Hello World!", "Hello World!", "Hello World"],student_answer:"Hello World", correct_answer:"Hello World")
Mcq.create(assessment_id: 1, question: "How do we call a validation in a model?", answers: ["validate", "validates", "validate!", "::validates"],student_answer:"Hello World", correct_answer:"validates")
Mcq.create(assessment_id: 1, question: "What version of Rails introduced Hotwire?", answers: ["Rails 6.1", "Rails 6.0", "Rails 7.0","Rails 5.1"],student_answer:"Hello World", correct_answer:"Rails 7.0")
Mcq.create(assessment_id: 2, question: "What do WebSockets do?", answers: ["They allow for real time communication between the client and the server", "They allow for real time communication between the server and the client", "They allow for real time communication between the client and the client", "They allow real time communication between the server and the server"], correct_answer:"They allow for real time communication between the client and the server")
Mcq.create(assessment_id: 2, question: "What is the output of the following code? console.log('Hello World')", answers: ["Hello World", "Hello World!", "Hello World!", "Hello World"],student_answer:"Hello World", correct_answer:"Hello World")
Mcq.create(assessment_id: 2, question: "What is the output of the following code? console.log('Hello World')", answers: ["Hello World", "Hello World!", "Hello World!", "Hello World"],student_answer:"Hello World", correct_answer:"Hello World")

# Kata Question data
puts "katas⏳..."
Kataa.create(assessment_id: 1, question: "Write a program that prints 'Hello World' to the console", instructions: "In the windows alongside, write your solution and click submit")
Kataa.create(assessment_id: 2, question: "Write a program that adds two numbers", instructions: "In the windows alongside, write your solution and click submit")
Kataa.create(assessment_id: 3, question: "Write a program that multiplies two numbers", instructions: "In the windows alongside, write your solution and click submit")
Kataa.create(assessment_id: 1, question: "Write a program that replaces all the vowels in a string with an exclamation mark", instructions: "In the windows alongside, write your solution and click submit")
Kataa.create(assessment_id: 2, question: "Write a program that removes all the vowels in a string", instructions: "In the windows alongside, write your solution and click submit")
Kataa.create(assessment_id: 3, question: "Write a program that returns the sum of all the numbers in an array", instructions: "In the windows alongside, write your solution and click submit")

# Code Question data
puts "Pros⏳..."
Pro.create(assessment_id: 1, question: "Define security in a development context", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Pro.create(assessment_id: 2, question: "Scalability is a key determinant in startups, give your take", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Pro.create(assessment_id: 3, question: "Hiring perfection is not attainable. What are pointers to hire quality?", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Pro.create(assessment_id: 1, question: "What is your understanding or ORMs in the modern dev world", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Pro.create(assessment_id: 2, question: "Discuss the impact of automation in bid data firms", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Pro.create(assessment_id: 3, question: "How would you resolve and mitigate an employer employee conflict sparked by policy misinterpretation?", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")


# Invitation data
puts "Invites⏳..."
Invite.create(tutor_id: 1, student_id: 1, assessment_id: 1, status: false)
Invite.create(tutor_id: 1, student_id: 2, assessment_id: 1, status: false)
Invite.create(tutor_id: 1, student_id: 3, assessment_id: 2, status: false)
Invite.create(tutor_id: 1, student_id: 4, assessment_id: 1, status: false)
Invite.create(tutor_id: 1, student_id: 5, assessment_id: 3, status: false)
Invite.create(tutor_id: 1, student_id: 6, assessment_id: 3, status: false)
Invite.create(tutor_id: 1, student_id: 7, assessment_id: 2, status: false)

#Attempt data
puts "Attempts⏳..."
Attempt.create(assessment_id: 1, tutor_id: 1, student_id: 1, mcq_score: 10, kataa_response: "test", kataa_score: 1, pro_response: "test", pro_score: 1, tutor_feedback: "Good!", total: 0)
Attempt.create(assessment_id: 1, tutor_id: 1, student_id: 2, mcq_score: 5, kataa_response: "test", kataa_score: 2, pro_response: "test", pro_score: 2, tutor_feedback: "Good!", total: 0)
Attempt.create(assessment_id: 2, tutor_id: 2, student_id: 1, mcq_score: 5, kataa_response: "test", kataa_score: 3, pro_response: "test", pro_score: 3, tutor_feedback: "Good!", total: 0)
Attempt.create(assessment_id: 2, tutor_id: 2, student_id: 2, mcq_score: 5, kataa_response: "test", kataa_score: 4, pro_response: "test", pro_score: 4, tutor_feedback: "Good!", total: 0)
Attempt.create(assessment_id: 3, tutor_id: 3, student_id: 1, mcq_score: 5, kataa_response: "test", kataa_score: 5, pro_response: "test", pro_score: 5, tutor_feedback: "Good!", total: 0)
Attempt.create(assessment_id: 3, tutor_id: 3, student_id: 2, mcq_score: 5, kataa_response: "test", kataa_score: 6, pro_response: "test", pro_score: 6, tutor_feedback: "Good!", total: 0)

#Student profile
Studentprofile.create(image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4AGU7PcdzwW1smKQuMMTgKj1yGlUMa84fDyt0SJWoeUG_o5QpbBdN_wP1oaYpHSQSJ4&usqp=CAU", phone: "0795225110",student_id: 1)

#Student profile
Tutorprofile.create(image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxQ32AdfMJt28qStJxIiuJ5cM9TKwuvmcDQ&usqp=CAU", phone: "0795225110",tutor_id: 1)

puts "Done, DB seeded successfully✅"
