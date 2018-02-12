#!/bin/sh

#start selenium hub
gnome-terminal -e "java -jar /home/azureuser/Selenium/selenium-server-standalone-3.4.0.jar -role hub -port 4444"

#start & connect nodes to hub
gnome-terminal -e "java -jar /home/azureuser/Selenium/selenium-server-standalone-3.4.0.jar -role node -hub http://localhost:4444/grid/register -port 3333"

gnome-terminal -e "java -jar /home/azureuser/Selenium/selenium-server-standalone-3.4.0.jar -role node -hub http://localhost:4444/grid/register -port 3334"

gnome-terminal -e "java -jar /home/azureuser/Selenium/selenium-server-standalone-3.4.0.jar -role node -hub http://localhost:4444/grid/register -port 3335"

gnome-terminal -e "java -jar /home/azureuser/Selenium/selenium-server-standalone-3.4.0.jar -role node -hub http://localhost:4444/grid/register -port 3336"

gnome-terminal -e "java -jar /home/azureuser/Selenium/selenium-server-standalone-3.4.0.jar -role node -hub http://localhost:4444/grid/register -port 3337"

gnome-terminal -e "java -jar /home/azureuser/Selenium/selenium-server-standalone-3.4.0.jar -role node -hub http://localhost:4444/grid/register -port 3338"
