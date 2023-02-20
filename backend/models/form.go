package models

type Form struct {
	ID        string     `json:"id"`
	Creator   string     `json:"creator"`
	Questions []Question `json:"questions"`
}