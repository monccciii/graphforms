package models

type QuestionAnswer struct {
	Question string `json:"question" bson:"question"`
	Answer   string `json:"answer" bson:"answer"`
}