puts "Seeding Database⏳..."

# Mentor data
Tutor.create(name: "John Doe", work_id: "mtr_1", email: "johndoe@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(name: "Michael Hill", work_id: "mtr_2", email: "mikehill@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(name: "Matt Smith", work_id: "mtr_3", email: "mattsmith@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(name: "Jane Doe", work_id: "mtr_4", email: "janedoe@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(name: "Mary Smith", work_id: "mtr_5", email: "marysmith@gmail.com", password: "123456", password_confirmation: "123456")

# Student data
Student.create(name: "Wycliffe Ndiba", email: "w.ndiba@gmail.com", username: "wycliffendiba", password: "123456", password_confirmation: "123456")
Student.create(name: "Dennis Shakava", email: "d.shakava@gmail.com", username: "dennishakava", password: "123456", password_confirmation: "123456")
Student.create(name: "Stephen Lukanu", email: "s.lukanu@gmail.com", username: "stephenlukanu", password: "123456", password_confirmation: "123456")
Student.create(name: "Michael Kaburu", email: "m.kaburu@gmail.com", username: "michaelkaburu", password: "123456", password_confirmation: "123456")
Student.create(name: "Elvis Kimani", email: "e.kimani@gmail.com", username: "elviskimani", password: "123456", password_confirmation: "123456")
Student.create(name: "Maurice Nganga", email: "m.nganga@gmail.com", username: "mauricenganga", password: "123456", password_confirmation: "123456")

# Assessment data
Assessment.create(tutor_id: 1, assessment_title: "Ruby Basics")
Assessment.create(tutor_id: 1, assessment_title: "Ruby Intermediate")
Assessment.create(tutor_id: 2, assessment_title: "Ruby Advanced")
Assessment.create(tutor_id: 2, assessment_title: "Javascript Basics")
Assessment.create(tutor_id: 3, assessment_title: "Javascript Intermediate")
Assessment.create(tutor_id: 3, assessment_title: "Javascript Advanced")


# Multiple Choice Question data
Mcq.create(assessment_id: 1, question: "What is the output of the following code? puts 'Hello World'", answers: ["Hello World", "Hello World!", "Hello World!", "Hello World"], correct_answers: "Hello World")
Mcq.create(assessment_id: 1, question: "How do we call a validation in a model?", answers: ["validate", "validates", "validate!", "::validates"], correct_answers: "validates")
Mcq.create(assessment_id: 1, question: "What version of Rails introduced Hotwire?", answers: ["Rails 6.1", "Rails 6.0", "Rails 7.0","Rails 5.1"], correct_answers: "Rails 7.0")
Mcq.create(assessment_id: 2, question: "What do WebSockets do?", answers: ["They allow for real time communication between the client and the server", "They allow for real time communication between the server and the client", "They allow for real time communication between the client and the client", "They allow real time communication between the server and the server"], correct_answers: "They allow for real time communication between the client and the server")
Mcq.create(assessment_id: 2, question: "What is the output of the following code? console.log('Hello World')", answers: ["Hello World", "Hello World!", "Hello World!", "Hello World"], correct_answers: "Hello World")
Mcq.create(assessment_id: 2, question: "What is the output of the following code? console.log('Hello World')", answers: ["Hello World", "Hello World!", "Hello World!", "Hello World"], correct_answers: "Hello World")

# Kata Question data
Kataa.create(assessment_id: 1, question: "Write a program that prints 'Hello World' to the console", instructions: "In the windows alongside, write your solution and click submit")
Kataa.create(assessment_id: 2, question: "Write a program that adds two numbers", instructions: "In the windows alongside, write your solution and click submit")
Kataa.create(assessment_id: 3, question: "Write a program that multiplies two numbers", instructions: "In the windows alongside, write your solution and click submit")
Kataa.create(assessment_id: 1, question: "Write a program that replaces all the vowels in a string with an exclamation mark", instructions: "In the windows alongside, write your solution and click submit")
Kataa.create(assessment_id: 2, question: "Write a program that removes all the vowels in a string", instructions: "In the windows alongside, write your solution and click submit")
Kataa.create(assessment_id: 3, question: "Write a program that returns the sum of all the numbers in an array", instructions: "In the windows alongside, write your solution and click submit")

# Code Question data
Pro.create(assessment_id: 1, question: "Define security in a development context", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Pro.create(assessment_id: 2, question: "Scalability is a key determinant in startups, give your take", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Pro.create(assessment_id: 3, question: "Hiring perfection is not attainable. What are pointers to hire quality?", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Pro.create(assessment_id: 1, question: "What is your understanding or ORMs in the modern dev world", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Pro.create(assessment_id: 2, question: "Discuss the impact of automation in bid data firms", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Pro.create(assessment_id: 3, question: "How would you resolve and mitigate an employer employee conflict sparked by policy misinterpretation?", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")


# Invitation data
# validates :status, inclusion: { in: %w(pending accepted declined) }
Invite.create(tutor_id: 1, student_id: 1, assessment_id: 1, status: "pending")
Invite.create(tutor_id: 1, student_id: 2, assessment_id: 1, status: "accepted")
Invite.create(tutor_id: 1, student_id: 3, assessment_id: 2, status: "pending")
Invite.create(tutor_id: 1, student_id: 4, assessment_id: 1, status: "declined")
Invite.create(tutor_id: 1, student_id: 5, assessment_id: 3, status: "accepted")
Invite.create(tutor_id: 1, student_id: 6, assessment_id: 3, status: "accepted")
Invite.create(tutor_id: 1, student_id: 7, assessment_id: 2, status: "pending")

# Attempt data
Attempt.create(assessment_id: 1, tutor_id: 1, student_id: 1, mcq_score: 5, kata_response: "test", kata_score: 1, prose_response: "test", prose_score: 1, tutor_feedback: "Good!", total: 0)
Attempt.create(assessment_id: 1, tutor_id: 1, student_id: 2, mcq_score: 5, kata_response: "test", kata_score: 2, prose_response: "test", prose_score: 2, tutor_feedback: "Good!", total: 0)
Attempt.create(assessment_id: 2, tutor_id: 2, student_id: 1, mcq_score: 5, kata_response: "test", kata_score: 3, prose_response: "test", prose_score: 3, tutor_feedback: "Good!", total: 0)
Attempt.create(assessment_id: 2, tutor_id: 2, student_id: 2, mcq_score: 5, kata_response: "test", kata_score: 4, prose_response: "test", prose_score: 4, tutor_feedback: "Good!", total: 0)
Attempt.create(assessment_id: 3, tutor_id: 3, student_id: 1, mcq_score: 5, kata_response: "test", kata_score: 5, prose_response: "test", prose_score: 5, tutor_feedback: "Good!", total: 0)
Attempt.create(assessment_id: 3, tutor_id: 3, student_id: 2, mcq_score: 5, kata_response: "test", kata_score: 6, prose_response: "test", prose_score: 6, tutor_feedback: "Good!", total: 0)

#Student profile
Studentprofile.create(image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4AGU7PcdzwW1smKQuMMTgKj1yGlUMa84fDyt0SJWoeUG_o5QpbBdN_wP1oaYpHSQSJ4&usqp=CAU", phone: "0795225110",student_id: 1)

#Student profile
Tutorprofile.create(image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxQ32AdfMJt28qStJxIiuJ5cM9TKwuvmcDQ&usqp=CAU", phone: "0795225110",tutor_id: 1)

puts "Done, DB seeded successfully✅"
