import mongoose from 'mongoose';

function initDB() {

    if (mongoose.connections[0].readyState)
    {
        console.log("db is already connected");
        return;
    }
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })

    mongoose.connection.on('connected',()=>{
        console.log("connected successfully");
    })

    mongoose.connection.on('error',(err)=>{
        console.log(err);
    })

}
export default initDB