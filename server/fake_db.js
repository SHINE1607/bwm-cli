//importing the reantlschem 
const Rental =  require('./models/rental');
const User = require('./models/user');
//we create a afunctionality to push thedata toi the database
module.exports =  class FakeDb{
    constructor(){
        this.rentals = [{
            title: "The Sahara Star",
            city: "Mumbai",
            street: "Mumbai Airport, 4.8 km away from Chhatrapati Shivaji International Airport",
            category: "Culinary, Luxurious Bussiness Stay",
            image: "https://s-ec.bstatic.com/images/hotel/max1280x900/152/152817920.jpg",
            bedrooms: 4,
            shared: true,
            description: "This is a MMT Assured hotel. These are hand picked hotels having awesome rooms with great service topped with our 24x7 hotline.",
            rating : 4.3,
            Rate : 12200,
            website : "https://www.saharastar.com/promotions/accommodation-offers.html",
            latitude : 19.095689,
            longitude : 72.85396041
            },
            {
            title: "The Orchid",
            city: "Mumbai",
            street: "Mumbai Airport, 4.9 km away from Juhu Beach",            
            category: "Luxury",
            image: "https://content3.jdmagicbox.com/comp/mumbai/l5/022pxx22.xx22.000418239735.d5l5/catalog/the-orchid-hotel-vile-parle-east-mumbai-5-star-hotels-wh5c2.jpg",
            bedrooms: 1,
            shared: false,
            description: "Very nice apartment in center of the city.",
            rating : 4.8, 
            Rate : 14470,
            website : "https://www.orchidhotel.com/?utm_source=glopss&utm_medium=cpa&utm_campaign=affiliates"   ,
            latitude : 19.1476221,
            longitude : 72.82817051
            
                   
        },
            {
            title: "Ramada Plaza Palm Grove",
            city: "Mumbai",
            street: "Juhu beach",
            category: "Luxury",
            image: "https://t-ec.bstatic.com/images/hotel/max1024x768/731/73171931.jpg",
            bedrooms: 5,
            shared: true,
            description: "Stay in style at this popular beachfront property",
            rating :4.1,
            Rate : 11470,
            website : "https://www.ramadaplaza-juhu.com/",
            latitude : 19.1363896,
            longitude : 72.8990514
        },
        
        
            
        ]

         this.users = [
             {
             useranme : "Testuser_fake",
             email: "testuser_fake@gmail.com",
             password : "testpassword_fake"
         },
        {
            username: "shine1607",
            email: "shine160700@gmail.com",
            password: "45TraderMan"
        }
    ] 
    }

    async cleanDb(){
        //fubction to removsethe the collection on cennecting to databse
        //ksut empty object wuill clean our databse
        //reantal is an instance of the Schema class,we can access the middle are functins
        await Rental.deleteMany({})
        await User.deleteMany({})

    }
    //function to store the data into schema and push into the database
    pushDatatoDb(){
        const user = new User(this.users[0]);
        
        this.rentals.forEach(rental =>{
            //creating a new instance of the Rental class and passing pushing the data into it
            const newRental = new Rental(rental);
            newRental.user = user;
            //pushing and making  refernce of each rentals to the user 
            user.rentals.push(newRental);

            //this wi;; save the data ato database
        
            newRental.save();
        });
        console.log(user.username);
        user.save();
    }

    async seeDb(){
            //cleaning the databse
        await this.cleanDb();
        //this function works asynchronously, so the dtaabase may be cleaned after the pushing the data
        this.pushDatatoDb();
    }
}
