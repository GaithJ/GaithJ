
module.exports=(Sequelize,Datatype)=>{
    const User=Sequelize.define("User",{
        username:{
            type:Datatype.STRING,
            allowNull:false
        },
        email:{
            type:Datatype.STRING,
            allowNull:false
        },
        password:{
            type:Datatype.STRING,
            allowNull:false
        },

    })
    User.associate=models=>{
        User.hasOne(models.Profil,{
            onDelete:"cascade"
        })
    }
    return User
}