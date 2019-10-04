'use strict';
export default (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Login ID cannot be empty'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Allows only alphanumeric characters'
        }
      },
      set(value) {
        this.setDataValue('login', value.toString().trim());
      }
    },
    avatarUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Avatar url field cannot be empty'
        }
      },
      set(value) {
        this.setDataValue('avatarUrl', value.toString().trim());
      }
    }
  }, {});
  Actor.associate = (models) => {
    // associations can be defined here
    Actor.hasMany(models.Event, {
      foreignKey: 'actorId',
      as: 'events'
    });
    User.hasMany(models.Repo, {
      foreignKey: 'actorId',
      as: 'repos'
    });
  };
  return Actor;
};
