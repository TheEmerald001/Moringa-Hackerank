puts "Seeding Database⏳..."

# Mentor data
Tutor.create(name: "John Doe", workid: "mtr_1", email: "johndoe@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(name: "Michael Hill", workid: "mtr_2", email: "mikehill@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(name: "Matt Smith", workid: "mtr_3", email: "mattsmith@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(name: "Jane Doe", workid: "mtr_4", email: "janedoe@gmail.com", password: "123456", password_confirmation: "123456")
Tutor.create(name: "Mary Smith", workid: "mtr_5", email: "marysmith@gmail.com", password: "123456", password_confirmation: "123456")

# Student data
Student.create(name: "Wycliffe Ndiba", email: "w.ndiba@gmail.com", username: "wycliffendiba", password: "123456", password_confirmation: "123456")
Student.create(name: "Dennis Shakava", email: "d.shakava@gmail.com", username: "dennishakava", password: "123456", password_confirmation: "123456")
Student.create(name: "Stephen Lukanu", email: "s.lukanu@gmail.com", username: "stephenlukanu", password: "123456", password_confirmation: "123456")
Student.create(name: "Michael Kaburu", email: "m.kaburu@gmail.com", username: "michaelkaburu", password: "123456", password_confirmation: "123456")
Student.create(name: "Elvis Kimani", email: "e.kimani@gmail.com", username: "elviskimani", password: "123456", password_confirmation: "123456")
Student.create(name: "Maurice Nganga", email: "m.nganga@gmail.com", username: "mauricenganga", password: "123456", password_confirmation: "123456")

# Assessment data
Assessment.create(mentor_id: 1, title: "Ruby Basics", description: "This is a basic assessment on Ruby")
Assessment.create(mentor_id: 1, title: "Ruby Intermediate", description: "This is an intermediate assessment on Ruby")
Assessment.create(mentor_id: 2, title: "Ruby Advanced", description: "This is an advanced assessment on Ruby")
Assessment.create(mentor_id: 2, title: "Javascript Basics", description: "This is a basic assessment on Javascript")
Assessment.create(mentor_id: 3, title: "Javascript Intermediate", description: "This is an intermediate assessment on Javascript")
Assessment.create(mentor_id: 3, title: "Javascript Advanced", description: "This is an advanced assessment on Javascript")


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
Prose.create(assessment_id: 1, question: "Define security in a development context", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Prose.create(assessment_id: 2, question: "Scalability is a key determinant in startups, give your take", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Prose.create(assessment_id: 3, question: "Hiring perfection is not attainable. What are pointers to hire quality?", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Prose.create(assessment_id: 1, question: "What is your understanding or ORMs in the modern dev world", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Prose.create(assessment_id: 2, question: "Discuss the impact of automation in bid data firms", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")
Prose.create(assessment_id: 3, question: "How would you resolve and mitigate an employer employee conflict sparked by policy misinterpretation?", instructions: "Answer, by providing relevant examples and pointers, your understandin and or tale on the questions asked")


# Invitation data
# validates :status, inclusion: { in: %w(pending accepted declined) }
Invitation.create(mentor_id: 1, student_id: 1, assessment_id: 1, status: "pending")
Invitation.create(mentor_id: 1, student_id: 2, assessment_id: 1, status: "accepted")
Invitation.create(mentor_id: 1, student_id: 3, assessment_id: 2, status: "pending")
Invitation.create(mentor_id: 1, student_id: 4, assessment_id: 1, status: "declined")
Invitation.create(mentor_id: 1, student_id: 5, assessment_id: 3, status: "accepted")
Invitation.create(mentor_id: 1, student_id: 6, assessment_id: 3, status: "accepted")
Invitation.create(mentor_id: 1, student_id: 7, assessment_id: 2, status: "pending")

# Attempt data
Attempt.create(assessment_id: 1, tutor_id: 1, student_id: 1, prose_score: 1, kata_response: "test", kata_score: 1, mcq_response: "test", mcq_score: 1, tutor_feedback: "Good!", total_score: 0)
Attempt.create(assessment_id: 1, tutor_id: 1, student_id: 2, prose_score: 2, kata_response: "test", kata_score: 2, mcq_response: "test", mcq_score: 2, tutor_feedback: "Good!", total_score: 0)
Attempt.create(assessment_id: 2, tutor_id: 2, student_id: 1, prose_score: 3, kata_response: "test", kata_score: 3, mcq_response: "test", mcq_score: 3, tutor_feedback: "Good!", total_score: 0)
Attempt.create(assessment_id: 2, tutor_id: 2, student_id: 2, prose_score: 4, kata_response: "test", kata_score: 4, mcq_response: "test", mcq_score: 4, tutor_feedback: "Good!", total_score: 0)
Attempt.create(assessment_id: 3, tutor_id: 3, student_id: 1, prose_score: 5, kata_response: "test", kata_score: 5, mcq_response: "test", mcq_score: 5, tutor_feedback: "Good!", total_score: 0)
Attempt.create(assessment_id: 3, tutor_id: 3, student_id: 2, prose_score: 6, kata_response: "test", kata_score: 6, mcq_response: "test", mcq_score: 6, tutor_feedback: "Good!", total_score: 0)

puts "Done, DB seeded successfully✅"