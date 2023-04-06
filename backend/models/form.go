package models

type Form struct {
	ID          string     `json:"id"`
	Creator     string     `json:"creator"`
	Name        string     `json:"name"`
	Description string     `json:"description"`
	Questions   []Question `json:"questions"`
}
