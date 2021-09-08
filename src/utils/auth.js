const extractUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  bio: user.bio,
  picture: user.picture,
  super: user.super,
})

export { extractUser }
