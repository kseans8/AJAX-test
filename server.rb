require "sinatra"

set :bind, '0.0.0.0'

get "/" do
  redirect to("new-question")
end

get "/new-question" do
  question_hash = random_question
  @question = question_hash.keys.first
  @answer = question_hash[:answer]
  @options = question_hash[question_hash.keys.first].shuffle

  erb :index
end

def random_question
  QUESTIONS.sample
end

QUESTIONS = [
  {
    "What year was the United States of America founded?": [
      "1492",
      "1776",
      "1792",
      "1476"
    ],
    "answer": "1776"
  },
  {
    "Which number is a prime number?": [
      "4",
      "6",
      "9",
      "7"
    ],
    "answer": "7"
  }
]