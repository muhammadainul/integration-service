// tbl_penyidikan_files schema
module.exports = (sequelize, DataTypes) => {
    const tbl_penyidikan_files = sequelize.define('tbl_penyidikan_files', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_penyidikan: DataTypes.INTEGER,
        filename: DataTypes.STRING,
        originalname: DataTypes.STRING,
        keterangan: DataTypes.STRING,
		createdat: DataTypes.DATE,
        updatedat: DataTypes.DATE
    },
    { 
        freezeTableName: true,
        timestamps: false,
        schema: 'pidsuspemberkasan'  
    }
    );

    tbl_penyidikan_files.associate = function (models) {
        tbl_penyidikan_files.belongsTo(models.tbl_penyidikan, {
            foreignKey: 'id_penyidikan',
            as: 'penyidikan'
        });
        models.tbl_penyidikan.hasMany(tbl_penyidikan_files, {
            foreignKey: 'id_penyidikan',
            as: 'files'
        });
    };

    return tbl_penyidikan_files;
}