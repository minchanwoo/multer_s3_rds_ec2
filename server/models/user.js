module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		name: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		nick: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		},
        img: {
            type: DataTypes.STRING(255),
        },
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
		}
	}, {
		paranoid: true,
	})
};