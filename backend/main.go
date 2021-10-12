package main

import (
	"github.com/learning-drops/config"
	"github.com/learning-drops/utils"
)

func main() {
	utils.LoggingSettings(config.Config.LogFile)
}
