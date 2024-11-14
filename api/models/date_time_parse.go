package models

import (
	"database/sql/driver"
	"fmt"
	"time"
)

type CustomDate struct {
	time.Time
}

// UnmarshalJSON parses the date in "YYYY-MM-DD" format
func (cd *CustomDate) UnmarshalJSON(b []byte) error {
	// Remove the quotes around the date string
	dateStr := string(b)
	dateStr = dateStr[1 : len(dateStr)-1] // Removing surrounding quotes

	// Parse the date in "2006-01-02" format
	parsedDate, err := time.Parse("2006-01-02", dateStr)
	if err != nil {
		return fmt.Errorf("invalid date format: %v", err)
	}
	cd.Time = parsedDate
	return nil
}

// Value method to convert CustomDate to a database-compatible format
func (cd CustomDate) Value() (driver.Value, error) {
	// Format the date as "YYYY-MM-DD" for the database
	return cd.Time.Format("2006-01-02"), nil
}

// Scan method to scan the date from the database
func (cd *CustomDate) Scan(value interface{}) error {
	// Parse the incoming date from the database as a time.Time object
	if value == nil {
		return nil
	}
	switch v := value.(type) {
	case time.Time:
		cd.Time = v
		return nil
	case string:
		parsedDate, err := time.Parse("2006-01-02", v)
		if err != nil {
			return fmt.Errorf("invalid date format: %v", err)
		}
		cd.Time = parsedDate
		return nil
	default:
		return fmt.Errorf("unsupported type: %T", value)
	}
}
