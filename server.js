const express = require('express');
const app = express();
const PORT = 3000;



const characters = [
    {
        name:  'Yoda', 
        role: 'Jedi Master', 
        forcePoints: '100000', 
        age:900 , 
        avatar: 'https://s3.birthmoviesdeath.com/images/made/Yoda_-_Dagobah_1200_900_81_s.jpg', 
        routeName:'yoda' , 

    },
    {
        name:  'Luke Skywalker', 
        role: 'Jedi Master', 
        forcePoints: '10000', 
        age:40, 
        avatar: 'https://theartisticchristian.files.wordpress.com/2014/02/luke-skywalker.jpg', 
        routeName:'lukeskywalker' , 

    },
    {
        name:  'Princess Laie', 
        role: 'General Princess', 
        forcePoints: '100', 
        age:900 , 
        avatar: 'https://tse1.mm.bing.net/th?id=OIP.R0Ts2LGiG0KIscTVEiGs5wHaJQ&pid=Api&P=0&w=300&h=300', 
        routeName:'princesslaie' , 

    }
]


app.get('/' , (req, res) =>{
    res.send('May the force be with you!')
})


// /api/characters - show all character data

app.get('/api/characters', (req , res) =>{
    res.json(characters)

})

// /api/characters
app.get('characters', (req , res)=>{
    const targetCharacter = req.params.routeName

    const character = characters.find( character => {
       
       console.log(character)
       

    })
    res.end()
})



app.listen(PORT , ()=>{
    console.log(`Server  listening on http://localhost:${PORT}`)
})