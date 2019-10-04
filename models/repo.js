'use strict';
export default (sequelize, DataTypes) => {
  const Repo = sequelize.define('Repo', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Repository name cannot be empty'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Allows only alphanumeric characters'
        }
      },
      set(value) {
        this.setDataValue('name', value.toString().toLowerCase().trim());
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Url field cannot be empty'
        }
      },
      set(value) {
        this.setDataValue('url', value.toString().trim());
      }
    }
  }, {});
    Repo.associate = (models) => {
      Repo.hasMany(models.Event, {
        foreignKey: 'repoId',
        as: 'events'
      });
      Repo.belongsTo(models.Actor, {
        foreignKey: 'actorId'
      });
    };
  return Repo;
};
