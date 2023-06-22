package models

type Question struct {
	Text      string        `json:"question" bson:"question"`
	Type      string        `json:"type" bson:"type"`
	Options   []interface{} `json:"options" bson:"options"`
	ShortName string        `json:"shortName" bson:"shortName"`
}