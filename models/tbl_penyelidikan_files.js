// tbl_penyelidikan_files schema
module.exports = (sequelize, DataTypes) => {
    const tbl_penyelidikan_files = sequelize.define('tbl_penyelidikan_files', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_penyelidikan: DataTypes.INTEGER,
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

    tbl_penyelidikan_files.associate = function (models) {
        tbl_penyelidikan_files.belongsTo(models.tbl_penyelidikan, {
            foreignKey: 'id_penyelidikan',
            as: 'penyelidikan'
        });
        models.tbl_penyelidikan.hasMany(tbl_penyelidikan_files, {
            foreignKey: 'id_penyelidikan',
            as: 'files'
        });
    };

    return tbl_penyelidikan_files;
}