import sequelize from '../db.js'
import { DataTypes } from "sequelize"

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permissions: {
        type: DataTypes.STRING,
        defaultValue: ''
    }
})