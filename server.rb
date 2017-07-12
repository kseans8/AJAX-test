require "sinatra"
require "json"

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

get "/new-question.json" do
  content_type :json
  question_hash = random_question
  question = question_hash.keys.first
  answer = question_hash[:answer]
  options = question_hash[question_hash.keys.first].shuffle

  { question: question, answer: answer, options: options }.to_json
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
      "15",
      "21",
      "39",
      "19"
    ],
    "answer": "7"
  },
  {
    "Every sentence must have a verb.": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "Which of the following is largest?": [
      "Electron",
      "Proton",
      "Atom",
      "Molecule"
    ],
    "answer": "Molecule"
  },
  {
    "A metaphor is figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable using 'like' or 'as'": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "In the equation 'y=2x+5' which variable is the independant variable?": [
      "y",
      "x"
    ],
    "answer": "x"
  }
]
