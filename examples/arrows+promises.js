return db.getUser(id)
  .then(user => user.invites)
  .then(invites => {
    invites.forEach(invite => invite.accept());
  });
