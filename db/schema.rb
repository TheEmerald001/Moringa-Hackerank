# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_20_073307) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assessments", force: :cascade do |t|
    t.bigint "tutor_id", null: false
    t.string "assessment_title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tutor_id"], name: "index_assessments_on_tutor_id"
  end

  create_table "attempts", force: :cascade do |t|
    t.bigint "assessment_id", null: false
    t.bigint "student_id", null: false
    t.bigint "tutor_id", null: false
    t.integer "mcq_score"
    t.string "kata_response"
    t.integer "kata_score"
    t.string "prose_response"
    t.integer "prose_score"
    t.string "tutor_feedback"
    t.integer "total"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["assessment_id"], name: "index_attempts_on_assessment_id"
    t.index ["student_id"], name: "index_attempts_on_student_id"
    t.index ["tutor_id"], name: "index_attempts_on_tutor_id"
  end

  create_table "invites", force: :cascade do |t|
    t.bigint "tutor_id", null: false
    t.bigint "student_id", null: false
    t.bigint "assessment_id", null: false
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["assessment_id"], name: "index_invites_on_assessment_id"
    t.index ["student_id"], name: "index_invites_on_student_id"
    t.index ["tutor_id"], name: "index_invites_on_tutor_id"
  end

  create_table "kataas", force: :cascade do |t|
    t.bigint "assessment_id", null: false
    t.string "question"
    t.string "instructions"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["assessment_id"], name: "index_kataas_on_assessment_id"
  end

  create_table "mcqs", force: :cascade do |t|
    t.bigint "assessment_id", null: false
    t.string "question"
    t.string "answers", array: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "correct_answers"
    t.index ["assessment_id"], name: "index_mcqs_on_assessment_id"
  end

  create_table "pros", force: :cascade do |t|
    t.bigint "assessment_id", null: false
    t.string "question"
    t.string "instructions"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["assessment_id"], name: "index_pros_on_assessment_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tutors", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.integer "work_id"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "assessments", "tutors"
  add_foreign_key "attempts", "assessments"
  add_foreign_key "attempts", "students"
  add_foreign_key "attempts", "tutors"
  add_foreign_key "invites", "assessments"
  add_foreign_key "invites", "students"
  add_foreign_key "invites", "tutors"
  add_foreign_key "kataas", "assessments"
  add_foreign_key "mcqs", "assessments"
  add_foreign_key "pros", "assessments"
end
