'use strict';
export default (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event type cannot be empty'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Allows only alphanumeric characters'
        }
      },
      set(value) {
        this.setDataValue('type', value.toString().toLowerCase().trim());
      }
    }
  }, {});
  Event.associate = (models) => {
    // associations can be defined here
    Event.associate = (models) => {
      Event.belongsTo(models.Actor, {
        foreignKey: 'actorId',
        onDelete: 'CASCADE'
      });
      Event.belongsTo(models.Repo, {
        foreignKey: 'repoId',
        onDelete: 'CASCADE'
      });
    };
  };
  return Event;
};