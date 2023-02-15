// tbl_prapenuntutan_files schema
module.exports = (sequelize, DataTypes) => {
    const tbl_prapenuntutan_files = sequelize.define('tbl_prapenuntutan_files', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_prapenuntutan: DataTypes.INTEGER,
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

    tbl_prapenuntutan_files.associate = function (models) {
        tbl_prapenuntutan_files.belongsTo(models.tbl_prapenuntutan, {
            foreignKey: 'id_prapenuntutan',
            as: 'prapenuntutan'
        });
        models.tbl_prapenuntutan.hasMany(tbl_prapenuntutan_files, {
            foreignKey: 'id_prapenuntutan',
            as: 'files'
        });
    };

    return tbl_prapenuntutan_files;
}