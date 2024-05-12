module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        // name: String,
        // course: String,
        // registered: Boolean,
        orgaName: String,
        password:String,
       
        address: String,
        email: String,
       
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const orga = mongoose.model("Orga", schema);
    return orga;
  };
  