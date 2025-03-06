const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/promptpath');

const Prompt = sequelize.define('Prompt', {
    text: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false }
});

sequelize.sync();

module.exports = { sequelize, Prompt };
