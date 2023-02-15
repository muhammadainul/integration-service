// Tbl_lapdumas_files schema
module.exports = (sequelize, DataTypes) => {
    const tbl_lapdumas_files = sequelize.define('Tbl_lapdumas_files', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_lapdumas: DataTypes.INTEGER,
        filename: DataTypes.STRING,
        originalname: DataTypes.STRING,
        keterangan: DataTypes.STRING,
		createdat: DataTypes.DATE,
        updatedat: DataTypes.DATE
    },
    { 
        freezeTableName: false,
        timestamps: false,
        schema: 'pidsuspemberkasan' 
    }
    );

    tbl_lapdumas_files.associate = function (models) {
        tbl_lapdumas_files.belongsTo(models.tbl_lapdumas, {
            foreignKey: 'id_lapdumas',
            as: 'lapdumas'
        });
        models.tbl_lapdumas.hasMany(tbl_lapdumas_files, {
            foreignKey: 'id_lapdumas',
            as: 'files'
        });
    };

    return tbl_lapdumas_files;
}