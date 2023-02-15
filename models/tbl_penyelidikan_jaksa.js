// tbl_penyelidikan_jaksa schema
module.exports = (sequelize, DataTypes) => {
    const tbl_penyelidikan_jaksa = sequelize.define('tbl_penyelidikan_jaksa', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        id_penyelidikan: DataTypes.INTEGER,
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

    tbl_penyelidikan_jaksa.associate = function (models) {
        models.tbl_penyelidikan.hasMany(tbl_penyelidikan_jaksa, {
            foreignKey: 'id_penyelidikan',
            as: 'penyelidikan_jaksa'
        });
    };

    return tbl_penyelidikan_jaksa;
}