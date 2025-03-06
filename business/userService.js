const userRepository = require('../data/userRepository');

const userService = {
  getAllUsers: async function() {
    return await userRepository.getAllUsers();
  },
  
  getUserById: async function(id) {
    if (!id) {
      throw new Error('User ID is required');
    }
    
    const user = await userRepository.getUserById(id);
    
    if (!user) {
      throw new Error('User not found');
    }
    
    return user;
  },
  
  createUser: async function(userData) {
    if (!userData.name || !userData.email) {
      throw new Error('Name and email are required');
    }
    
    return await userRepository.createUser(userData);
  },
  
  updateUser: async function(id, userData) {
    if (!id) {
      throw new Error('User ID is required');
    }
    
    const existingUser = await userRepository.getUserById(id);
    if (!existingUser) {
      throw new Error('User not found');
    }
    
    if (!userData.name || !userData.email) {
      throw new Error('Name and email are required');
    }
    
    return await userRepository.updateUser(id, userData);
  },
  
  deleteUser: async function(id) {
    if (!id) {
      throw new Error('User ID is required');
    }
    
    const existingUser = await userRepository.getUserById(id);
    if (!existingUser) {
      throw new Error('User not found');
    }
    
    return await userRepository.deleteUser(id);
  }
};

module.exports = userService;