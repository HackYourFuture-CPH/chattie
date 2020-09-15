/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

//const moment = require('moment-timezone');

const knex = require('../../config/db');

const createUser = async (body) => {
  const newUser = {
    user_name: body.userName,
    email: body.email,
    profile_image: body.profileImage,
    last_seen: new Date(),
  };
  await knex('users').insert(newUser);
  return {
    successful: true,
    user_name: newUser.user_name,
    email: newUser.email,
    profile_image: newUser.profile_image,
    last_seen: newUser.last_seen,
  };
};

module.exports = {
  createUser,
};

/* const createUser = async (body) => {
  await knex('users').insert({
    profileImage: body.profileImage,
    user_name: body.user_name,
    email: body.email,
    lastSeen: moment(body.lastSeen).format(),
    created_at: moment(body.created_at).format(),
    updated_at: moment(body.updated_at).format(),
    deleted_at: moment(body.deleted_at).format(),
    classId: body.classId,
  });

  return {
    successful: true,
  };
};

module.exports = {
    createUser,
};


const createUser = async (body) => {
  await knex('users').insert({
    user_name: body.userName,
    email: body.email,
    profileImage: body.profileImage,
  });

  return {
    successful: true,
  };
};
module.exports = {
  createUser,
}; */
