package models

type Visualize struct {
	Visualization string `bson:"Visualization" json:"Visualization"`
	Field1        string `bson:"Field 1" json:"Field 1"`
	Field2        string `bson:"Field 2" json:"Field 2"`
}