// Tbl_lapdumas schema
module.exports = (sequelize, DataTypes) => {
    const tbl_lapdumas = sequelize.define('tbl_lapdumas', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        kode_satker: DataTypes.STRING,
        inst_nama: DataTypes.STRING,
		nomor_surat: DataTypes.STRING,
        tanggal_surat: DataTypes.DATEONLY,
        tanggal_terima: DataTypes.DATEONLY,
        kasus_posisi: DataTypes.STRING,
        asal_surat: DataTypes.STRING,
        status: DataTypes.STRING,
		createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    },
    { 
        freezeTableName: false,
        timestamps: false,
        schema: 'pidsuspemberkasan' 
    }
    );

    return tbl_lapdumas;
}