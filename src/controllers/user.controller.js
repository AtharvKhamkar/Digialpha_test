import { EMAIL_REGEX } from "../constants.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

//This function is used to register user in the database
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNumber } = req.body;

  console.log(`Body of the endpoint is ${req.body}`);

  if (!EMAIL_REGEX.test(email)) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Invalid email format"));
  }

  //check user is already existed or not
  const existedUser = await User.findOne({ email: email });

  if (existedUser) {
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "User is already registered"));
  }

  //Create user
  const createdUser = await User.create({
    firstName,
    lastName,
    email,
    phoneNumber,
  });

  //check user created or
  const checkUser = await User.findById(createdUser._id);

  if (!checkUser) {
    return res
      .status(400)
      .json(
        new ApiResponse(400, {}, "Something went wrong while registering user")
      );
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "User registered successfully!"));
});

export { registerUser };
