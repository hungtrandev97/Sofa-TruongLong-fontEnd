const constants = {
  // USER 1XXXX
  USER_EMAIL_EXIST: 10001,
  USER_SAVE_FAILED: 10002,
  USER_LOGIN_FAILED: 10003,
  USER_HCP_NOT_EXIST: 10004,

  // MEMBER
  MEMBER_NOT_FOUND: 20001,
  MEMBER_OR_SAMPLE_NOT_FOUND: 20002,

  // SAMPLE
  SAMPLE_NOT_FOUND: 30003,

  // ASSIGN KIT 4XXXX
  KIT_ALREADY_ASSIGNED: 40001,
};
module.exports = Object.freeze(constants);
