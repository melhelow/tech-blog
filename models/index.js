const user = require('./user');
const blog = require('./blog');

user.hasMany(blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

blog.belongsTo(user, {
  foreignKey: 'user_id'
});

module.exports = { user, blog };