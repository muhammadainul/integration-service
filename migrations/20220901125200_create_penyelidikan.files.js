'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Tbl_penyelidikan_files', {
            id: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4
            },
            id_penyelidikan: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Tbl_penyelidikan',
                    key: 'id'
                }
            },
            filename: Sequelize.STRING,
            originalname: Sequelize.STRING,
            keterangan: Sequelize.STRING,
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
        await queryInterface.dropTable('Tbl_penyelidikan_files');
    }
};
