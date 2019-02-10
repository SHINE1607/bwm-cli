//importing the reantlschem 
const Rental =  require('./models/rental')
//we create a afunctionality to push thedata toi the database
module.exports =  class FakeDb{
    constructor(){
        this.rentals = [{
            title: "Nice view on ocean",
            city: "San Francisco",
            street: "Main street",
            category: "condo",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 4,
            shared: true,
            description: "Very nice apartment in center of the city.",
            Rating : 4.3,
            Rate : 43
            },
            {
            title: "Modern apartment in center",
            city: "New York",
            street: "Time Square",
            category: "apartment",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 1,
            shared: false,
            description: "Very nice apartment in center of the city.",
            Rating : 4.8, 
            Rate : 43            },
            {
            title: "Old house in nature",
            city: "Spisska Nova Ves",
            street: "Banicka 1",
            category: "house",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 5,
            shared: true,
            description: "Very nice apartment in center of the city.",
            Rating :4.1,
            Rate : 43}]
    }

    //fubction to removethe the collection on cennecting to databse
    async cleanDb(){
        //ksut empty object wuill clean our databse
        //reantal is an instance of the Schema class,we can access the middle are functins
        await Rental.remove({});
    }
    //function to store the data into schema and push into the database
    pushDatatoDb(){
        this.rentals.forEach(rental =>{
            //creating a new instance of the Rental class and passing pushing the data into it
            const newRental = new Rental(rental);
            //this wi;; save the data ato database
            newRental.save();
        })
    }

    seeDb(){
            //cleaning the databse
        this.cleanDb();
        //this function works asynchronously, so the dtaabase may be cleaned after the pushing the data
        this.pushDatatoDb();
    }
}
