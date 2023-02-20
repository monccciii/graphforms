package models

import "time"

type FormSub struct {
	ID        string     `json:"id" bson:"id"`
	Creator   string     `json:"creator" bson:"creator"`
	Username  string     `json:"username" bson:"username"`
	Timestamp time.Time  `json:"timestamp" bson:"timestamp"`
	Questions []Question `json:"questions" bson:"questions"`
}