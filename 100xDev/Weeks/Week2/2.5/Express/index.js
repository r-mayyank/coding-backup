// creating an http server 
// express 
// node deafualt library => no
const express = require('express');
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healty : false
    }, {
        healty : true
    }]
}]; 

app.use(express.json()); 

app.get('/users', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    const noOfHealtyKidneys = johnKidneys.filter(kidney => kidney.healty).length;
    // const noOfHealtyKidneys = 0;
    // for (let i = 0; i < johnKidneys.length; i++) {
    //     if (johnKidneys[i],healty) {
    //         noOfHealtyKidneys++;
    //     }
    const noOfUnhealthKidneys = numberOfKidneys - noOfHealtyKidneys;

    res.json({
        numberOfKidneys,
        noOfHealtyKidneys,
        noOfUnhealthKidneys
    });
});

app.post('/users', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healty: isHealthy
    });
    res.json({
        msg: "Done!!"
    })
});

app.put('/users', (req, res) => {
    if (isThereAnyUnhealthyKidney) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healty = true;
        }
        res.json({
            msg: "Done!!"
        });
    } else {
        res.status(411).json({
            msg: "No unhealthy kidneys"
        })
    }
});

app.delete('/users', (req, res) => {
    if (isThereAnyUnhealthyKidney()) {
        const newKidneys = [];
        for(let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healty) {
                newKidneys.push({
                    healty: true
                });
            }
        }

        users[0].kidneys = newKidneys;
        res.json({
            msg: "Done!!"
        });
    } else {
        res.status(411).json({
            msg: "You dont have bad kidneys"
        });
    }
});

function isThereAnyUnhealthyKidney() {
    let atLeastOneUnhealthyKideny = false;
    for (let i = 0; i > users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healty){
            atLeastOneUnhealthyKideny == true;
        }
    }
    return atLeastOneUnhealthyKiden
}

app.listen(3000);