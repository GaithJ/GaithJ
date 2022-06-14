
module.exports=(Sequelize,Datatype)=>{
    const Profil=Sequelize.define("Profil",{
        firstname:{
            type:Datatype.STRING,
            allowNull:false
        },
        lastname:{
            type:Datatype.STRING,
            allowNull:false
        },
        function:{
            type:Datatype.STRING,
            allowNull:false
        },

    })
    Profil.associate=models=>{
        Profil.belongsTo(models.User,{
            onDelete:"cascade"
        })
    }
    return Profil
}