'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Tbl_penyelidikan', {
            id: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4
            },
            id_lapdumas: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'Tbl_penyelidikan',
                    key: 'id'
                }
            },
            kode_satker: Sequelize.STRING,
            inst_nama: Sequelize.STRING,
            nomor_sprintlid: Sequelize.STRING,
            tanggal_sprintlid: Sequelize.DATEONLY,
            kasus_posisi: Sequelize.STRING,
            status: Sequelize.STRING,
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Tbl_penyelidikan');
    }
};
