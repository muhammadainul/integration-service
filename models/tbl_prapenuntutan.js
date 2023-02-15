// tbl_prapenuntutan schema
module.exports = (sequelize, DataTypes) => {
    const tbl_prapenuntutan = sequelize.define('tbl_prapenuntutan', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        kode_satker: DataTypes.STRING,
        inst_nama: DataTypes.STRING,
		nomor_berkas: DataTypes.STRING,
        tanggal_berkas: DataTypes.DATEONLY,
        tanggal_terima: DataTypes.DATEONLY,
        nama_perkara: DataTypes.STRING,
        nama_tersangka: DataTypes.STRING,
        jenis_perkara: DataTypes.STRING,
        tppu: DataTypes.STRING,
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

    return tbl_prapenuntutan;
}