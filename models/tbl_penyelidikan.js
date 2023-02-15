// tbl_penyelidikan schema
module.exports = (sequelize, DataTypes) => {
    const tbl_penyelidikan = sequelize.define('tbl_penyelidikan', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        id_lapdumas: DataTypes.INTEGER,
        kode_satker: DataTypes.STRING,
        inst_nama: DataTypes.STRING,
		nomor_sprintlid: DataTypes.STRING,
        tanggal_sprintlid: DataTypes.DATEONLY,
        kasus_posisi: DataTypes.STRING,
        status: DataTypes.STRING,
		createdat: DataTypes.DATE,
        updatedat: DataTypes.DATE
    },
    { 
        freezeTableName: true,
        timestamps: false,
        schema: 'pidsuspemberkasan' 
    }
    );

    tbl_penyelidikan.associate = function (models) {
        tbl_penyelidikan.belongsTo(models.tbl_lapdumas, {
            foreignKey: 'id_lapdumas',
            as: 'lapdumas'
        });
    };

    return tbl_penyelidikan;
}