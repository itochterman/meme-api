module.exports = (sequelize, Sequelize) => {
    const Poem = sequelize.define("poem", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Poem;
  };