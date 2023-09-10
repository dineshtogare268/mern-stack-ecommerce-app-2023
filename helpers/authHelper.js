import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  // received plane password
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

// Note:- "salt round" they actually mean the cost factor. The cost factor controls how much time is needed to calculate a single BCrypt hash.
