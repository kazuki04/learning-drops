package config

import (
	"fmt"
	"gopkg.in/ini.v1"
	"os"
)

type ConfigList struct {
}

var Config ConfigList

func init() {
	cfg, err := ini.Load("../config.ini")
	if err != nil {
		fmt.Printf("Fail to read file: %v", err)
		os.Exit(1)
	}
	Config = ConfigList{}
}
