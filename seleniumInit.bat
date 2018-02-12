start java -jar selenium-server-standalone-3.4.0.jar -role hub -port 4444 -hubConfig hubConfig.json

timeout /t 15

start java -jar selenium-server-standalone-3.4.0.jar -role node -hub http://localhost:4444/grid/register -port 3333 -nodeConfig nodeConfig.json