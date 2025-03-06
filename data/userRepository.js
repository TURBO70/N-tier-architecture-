const db = require('./dbConfig');

const userRepository = {
  getAllUsers: async function() {
    const result = await db.query('SELECT * FROM users ORDER BY id');
    return result.rows;
  },
  
  getUserById: async function(id) {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  },
  
  createUser: async function(userData) {
    const { name, email } = userData;
    const result = await db.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  },
  
  updateUser: async function(id, userData) {
    const { name, email } = userData;
    const result = await db.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    return result.rows[0];
  },
  
  deleteUser: async function(id) {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
};

module.exports = userRepository;