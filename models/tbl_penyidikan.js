// tbl_penyidikan schema
module.exports = (sequelize, DataTypes) => {
    const tbl_penyidikan = sequelize.define('tbl_penyidikan', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        id_penyelidikan: DataTypes.INTEGER,
        kode_satker: DataTypes.STRING,
        inst_nama: DataTypes.STRING,
		nomor_sprintdik: DataTypes.STRING,
        tanggal_sprintdik: DataTypes.DATEONLY,
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

    tbl_penyidikan.associate = function (models) {
        tbl_penyidikan.belongsTo(models.tbl_penyelidikan, {
            foreignKey: 'id_penyelidikan',
            as: 'penyelidikan'
        });
    };

    return tbl_penyidikan;
}