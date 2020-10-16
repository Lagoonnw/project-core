const {Schema, model} = require('mongoose');

const IceCreamSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        amount:  Number,
        currency: String
    }
});

IceCreamSchema.methods.paginate = function (page, callback) {
    const limit = 10;
    const skip = page - 1;
    let totalCount;

    //count documents
    this.count({}, function(err, count) {
        if (err) {
            totalCount = 0;
        }
        else{
            totalCount = count;
        }
    })
    if(totalCount == 0){
        return callback('No Document in Database..', null);
    }
    //get paginated documents
    this.find().skip(skip).limit(limit).exec(function(err, docs){

        if(err){
            return callback('Error Occured', null);
        }
        else if(!docs){
            return callback('Docs Not Found', null);
        }
        else{
            const result = {
                "totalRecords" : totalCount,
                "page": page,
                "nextPage": page + 1,
                "result": docs
            };
            return callback(null, result);
        }

    });
}

module.exports = model('IceCream', IceCreamSchema);