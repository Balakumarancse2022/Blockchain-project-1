// src/services/patta.service.js

/**
 * Mock service – frontend only
 * Later backend API connect panna ready
 */
export const submitPattaRequest = async (data) => {
  console.log("Submitting patta request:", data);

  // simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // success response
  return {
    success: true,
    message: "Patta request submitted",
  };
};
