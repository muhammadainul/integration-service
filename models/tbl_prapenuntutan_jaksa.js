// tbl_prapenuntutan_jaksa schema
module.exports = (sequelize, DataTypes) => {
    const tbl_prapenuntutan_jaksa = sequelize.define('tbl_prapenuntutan_jaksa', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        id_prapenuntutan: DataTypes.INTEGER,
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

    tbl_prapenuntutan_jaksa.associate = function (models) {
        models.tbl_prapenuntutan.hasMany(tbl_prapenuntutan_jaksa, {
            foreignKey: 'id_prapenuntutan',
            as: 'penuntutan_jaksa'
        });
    };

    return tbl_prapenuntutan_jaksa;
}