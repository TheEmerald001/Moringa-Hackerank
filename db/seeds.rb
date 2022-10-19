puts "Seeding Database..."

# Mentor data
Mentor.create(name: "John Doe", work_id: "mtr_1", email: "johndoe@gmail.com", password: "123456", password_confirmation: "123456")
Mentor.create(name: "Michael Hill", work_id: "mtr_2", email: "mikehill@gmail.com", password: "123456", password_confirmation: "123456")
Mentor.create(name: "Matt Smith", work_id: "mtr_3", email: "mattsmith@gmail.com", password: "123456", password_confirmation: "123456")
Mentor.create(name: "Jane Doe", work_id: "mtr_4", email: "janedoe@gmail.com", password: "123456", password_confirmation: "123456")
Mentor.create(name: "Mary Smith", work_id: "mtr_5", email: "marysmith@gmail.com", password: "123456", password_confirmation: "123456")

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
Assessment.create(mentor_id: 1, title: "Ruby Advanced", description: "This is an advanced assessment on Ruby")
Assessment.create(mentor_id: 1, title: "Javascript Basics", description: "This is a basic assessment on Javascript")
Assessment.create(mentor_id: 1, title: "Javascript Intermediate", description: "This is an intermediate assessment on Javascript")
Assessment.create(mentor_id: 1, title: "Javascript Advanced", description: "This is an advanced assessment on Javascript")


# Multiple Choice Question data
MultipleChoiceQuestion.create(mcq_id: 1, assessment_id: 1, question: "What is the output of the following code? puts 'Hello World'", answers: "Hello World, Hello World!, Hello World!, Hello World", correct_answers: "Hello World")
MultipleChoiceQuestion.create(mcq_id: 2, assessment_id: 2, question: "How do we call a validation in a model?", answers: "validate, validates, validate!, ::validates", correct_answers: "validates")
MultipleChoiceQuestion.create(mcq_id: 3, assessment_id: 3, question: "What version of Rails introduced Hotwire?", answers: "Rails 6.1, Rails 6.0, Rails 7.0, Rails 5.1", correct_answers: "Rails 7.0")
MultipleChoiceQuestion.create(mcq_id: 4, assessment_id: 4, question: "What do WebSockets do?", answers: "They allow for real time communication between the client and the server, They allow for real time communication between the server and the client, They allow for real time communication between the client and the client, They allow for real time communication between the server and the server", correct_answers: "They allow for real time communication between the client and the server")
MultipleChoiceQuestion.create(mcq_id: 5, assessment_id: 5, question: "What is the output of the following code? console.log('Hello World')", answers: "Hello World, Hello World!, Hello World!, Hello World", correct_answers: "Hello World")
MultipleChoiceQuestion.create(mcq_id: 6, assessment_id: 6, question: "What is the output of the following code? console.log('Hello World')", answers: "Hello World, Hello World!, Hello World!, Hello World", correct_answers: "Hello World")

# Kata Question data
KataQuestion.create(kq_id: 1, assessment_id: 1, question: "Write a program that prints 'Hello World' to the console", answer: "puts 'Hello World'")
KataQuestion.create(kq_id: 2, assessment_id: 2, question: "Write a program that prints 'Hello World' to the console", answer: "puts 'Hello World'")
KataQuestion.create(kq_id: 3, assessment_id: 3, question: "Write a program that prints 'Hello World' to the console", answer: "puts 'Hello World'")
KataQuestion.create(kq_id: 4, assessment_id: 4, question: "Write a program that prints 'Hello World' to the console", answer: "console.log('Hello World')")
KataQuestion.create(kq_id: 5, assessment_id: 5, question: "Write a program that prints 'Hello World' to the console", answer: "console.log('Hello World')")
KataQuestion.create(kq_id: 6, assessment_id: 6, question: "Write a program that prints 'Hello World' to the console", answer: "console.log('Hello World')")

# Code Question data
CodeQuestion.create(cq_id: 1, assessment_id: 1, question: "Write a program that prints 'Hello World' to the console", answer: "puts 'Hello World'")
CodeQuestion.create(cq_id: 2, assessment_id: 2, question: "Write a program that adds two numbers", answer: "def add(a, b) a + b end")
CodeQuestion.create(cq_id: 3, assessment_id: 3, question: "Write a program that multiplies two numbers", answer: "def multiply(a, b) a * b end")
CodeQuestion.create(cq_id: 4, assessment_id: 4, question: "Write a program that replaces all the vowels in a string with an exclamation mark", answer: "def replace_vowels(string) string.gsub(/[aeiou]/, '!') end")
CodeQuestion.create(cq_id: 5, assessment_id: 5, question: "Write a program that removes all the vowels in a string", answer: "def remove_vowels(string) string.gsub(/[aeiou]/, '') end")
CodeQuestion.create(cq_id: 6, assessment_id: 6, question: "Write a program that returns the sum of all the numbers in an array", answer: "def sum(array) array.sum end")

# Theoretical data
# Assessment Result data
AssessmentResult.create(student_id: 1, assessment_id: 1, score: 0, status: "pending")
AssessmentResult.create(student_id: 1, assessment_id: 2, score: 0, status: "pending")
AssessmentResult.create(student_id: 1, assessment_id: 3, score: 0, status: "pending")
AssessmentResult.create(student_id: 1, assessment_id: 4, score: 0, status: "pending")
AssessmentResult.create(student_id: 1, assessment_id: 5, score: 0, status: "pending")
AssessmentResult.create(student_id: 1, assessment_id: 6, score: 0, status: "pending")
AssessmentResult.create(student_id: 2, assessment_id: 1, score: 0, status: "pending")
AssessmentResult.create(student_id: 2, assessment_id: 2, score: 0, status: "pending")
AssessmentResult.create(student_id: 2, assessment_id: 3, score: 0, status: "pending")
AssessmentResult.create(student_id: 2, assessment_id: 4, score: 0, status: "pending")

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
Attempt.create(assessment_id: 1, mentor_id: 1, student_id: 1, mcq_id: 1, kq_id: 1, cq_id: 1, score: 0, total: 0, status: "passed")
Attempt.create(assessment_id: 1, mentor_id: 1, student_id: 1, mcq_id: 2, kq_id: 2, cq_id: 2, score: 0, total: 0, status: "passed")
Attempt.create(assessment_id: 1, mentor_id: 1, student_id: 1, mcq_id: 3, kq_id: 3, cq_id: 3, score: 0, total: 0, status: "passed")
Attempt.create(assessment_id: 1, mentor_id: 1, student_id: 1, mcq_id: 4, kq_id: 4, cq_id: 4, score: 0, total: 0, status: "passed")
Attempt.create(assessment_id: 1, mentor_id: 1, student_id: 1, mcq_id: 5, kq_id: 5, cq_id: 5, score: 0, total: 0, status: "passed")
Attempt.create(assessment_id: 1, mentor_id: 1, student_id: 1, mcq_id: 6, kq_id: 6, cq_id: 6, score: 0, total: 0, status: "passed")

