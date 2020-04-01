"use strict";
module.exports = (sequelize, DataTypes) => {
  const Poem = sequelize.define(
    "Poems",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {}
  );
  Poem.associate = function(models) {
    // associations can be defined here
  };
  return Poem;
};
