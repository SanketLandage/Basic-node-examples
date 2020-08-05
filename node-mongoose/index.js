const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = "mongodb://127.0.0.1:27017/conFusion";
const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log("Connected to the server ");

    Dishes.create({
        name: 'Uthapizzaaa',
        description: 'Test'
    })
    .then((dish) => {
        console.log(dish);
        
        return Dishes.findByIdAndUpdate(dish._id, {
            $set: {description: "Updated Dish desc"}
        },
          {
              new: true
          }
        )
        .exec();
    })

    .then((dish) => {
        console.log("\n Updated Dish is  \n ",dish);

        dish.comments.push({
            rating : 3,
            comment : "A very tasty dish loved it",
            author : "Sanket Landage"
        });

        return dish.save();
    })
    .then((dish)=>{
        console.log("\n Dish with comments included  :\n",dish);

        return dish.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });

});