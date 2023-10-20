


    var name = prompt("Für wen soll der Putzplan-Generator eine Aufgabe generieren?")

    var task = ["die Küche wischen", "die Küche saugen", "den Müll rausbringen", "die Spülmaschine ausräumen", "die Toilette putzen", "die Oberflächen sauber halten", "für die WG kochen", "einen Kasten Bier kaufen"]
    
    var randomNumber2 = Math.floor(Math.random() *task.length);
    
    var randomTask = task[randomNumber2];

    alert(name + " muss in dieser Woche " + randomTask + "! Los gehts :-) ") 

    