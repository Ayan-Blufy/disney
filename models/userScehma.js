import  mongoose  from 'mongoose';

const schema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

});

const User = mongoose.model('users',schema);

export default mongoose.model.user || User;
