// User Model
"use strict";
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define(
		"User",
		{
			user_id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},

			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isEmail: true
				}
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			user_password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			city: {
				type: DataTypes.STRING,
				allowNull: true
			},
			bio: {
				type: DataTypes.TEXT,
				allowNull: true
			},
			skills: {
				type: DataTypes.TEXT,
				allowNull: true
			},
			organization: {
				type: DataTypes.STRING,
				allowNull: true
			},
			role: {
				type: DataTypes.STRING,
				allowNull: true
			},
			linkedin: {
				type: DataTypes.STRING,
				allowNull: true,
				validate: {
					isUrl: true
				}
			},
			twitter: {
				type: DataTypes.STRING,
				allowNull: true,
				validate: {
					isUrl: true
				}
			},
			other_website: {
				type: DataTypes.STRING,
				allowNull: true,
				validate: {
					isUrl: true
				}
			},
			user_photo: {
				type: DataTypes.STRING,
				allowNull: true
				// require an upload?
			}
		},
		{ timestamps: false }
	);

	User.associate = function(db) {
		// User.hasMany(db.Connections);
		User.hasMany(db.Connections, {
			foreignKey: "connection_id",
			targetKey: "user_id"
		});
	};

	return User;
};
