package models

type User struct {
	Username string `bson:"username" json:"username"`
	Password string `bson:"password" json:"password"`
	Salt     string `bson:"salt" json:"-"`
	IsAdmin  bool   `bson:"is_admin" json:"is_admin"`
}