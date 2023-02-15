// tbl_penyidikan_jaksa schema
module.exports = (sequelize, DataTypes) => {
    const tbl_penyidikan_jaksa = sequelize.define('tbl_penyidikan_jaksa', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        id_penyidikan: DataTypes.INTEGER,
		nip: DataTypes.STRING,
        nama: DataTypes.STRING,
        golongan: DataTypes.STRING,
        pangkat: DataTypes.STRING,
        jabatan: DataTypes.STRING,
		createdat: DataTypes.DATE,
        updatedat: DataTypes.DATE
    },
    { 
        freezeTableName: true,
        timestamps: false,
        schema: 'pidsuspemberkasan'  
    }
    );
    
    tbl_penyidikan_jaksa.associate = function (models) {
        models.tbl_penyidikan.hasMany(tbl_penyidikan_jaksa, {
            foreignKey: 'id_penyidikan',
            as: 'penyidikan_jaksa'
        });
    };

    return tbl_penyidikan_jaksa;
}