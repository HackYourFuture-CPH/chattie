const knex = require('../../config/db');
const { getUserById } = require('./users-controller');

describe('Users tests', () => {
  beforeAll(async () => {
    // run the migrations and do any other setup here
    await knex.migrate.latest();
  });

  it('Should return no user for -1', async () => {
    const user = await getUserById(-1);
    expect(user).toEqual([]);
  });

  it('Should return previously inserted user', async () => {
    const insertedUser = {
      user_name: 'user name',
    };
    await knex('users').insert(insertedUser);
    const [userId] = await knex('users').insert(insertedUser);

    const user = await getUserById(userId);
    expect(user).toBe({
      id: userId,
      user_name: insertedUser.user_name,
    });
  });
});
