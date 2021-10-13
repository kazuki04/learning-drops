package main

import (
	"github.com/learning-drops/app/controllers"
	"github.com/learning-drops/config"
	"github.com/learning-drops/utils"
)

func main() {
	utils.LoggingSettings(config.Config.LogFile)
	controllers.StartWebServer()
}
