package config

import (
	"fmt"
	"gopkg.in/ini.v1"
	"os"
)

type ConfigList struct {
	LogFile string
}

var Config ConfigList

func init() {
	cfg, err := ini.Load("../config.ini")
	if err != nil {
		fmt.Printf("Fail to read file: %v", err)
		os.Exit(1)
	}
	Config = ConfigList{
		LogFile: cfg.Section("log").Key("log_file").String(),
	}
}
