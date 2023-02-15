'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn(
                'Tbl_lapdumas_files',
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'Tbl_penyelidikan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'Tbl_penyidikan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'Tbl_prapenuntutan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            )
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn(
                'Tbl_lapdumas_files',
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'Tbl_penyelidikan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'Tbl_penyidikan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'Tbl_prapenuntutan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            )
        ]);
    }
};
