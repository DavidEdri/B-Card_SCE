export const text = {
  emailExist: "כתובת מייל כבר בשימוש",
  emailNotFound: "כתובת מייל לא נמצאה",
  serverError: "בעיית שרת, נסו שוב מאוחר יותר",
  passOrEmailError: "אימייל או סיסמא אינם נכונים",
  registerInstructions: (mail: string) =>
    `אנא עקבו אחרי ההוראות שנשלחו למייל: ${mail}`,
  tokenLinkError: "קישור לא תקין או שפג תוקפו",
  passwordChanged: "סיסמא שונתה בהצלחה",
  // dialog
  dialogClose: "סגור",

  // navbar
  logo: "B-Card",
  profile: "פרופיל",
  logout: "התנתק",
  menu: "תפריט",

  // navbar links
  loginLink: "התחברות",
  homeLink: "דף הבית",
  registerLink: "הרשמה",
  dashboardLink: "Dashboard",
  adminLink: "ניהול",

  // tableAbstract
  tableAdd: "Add new item",
  tableEdit: "Edit",
  // admin links
  adminUsersLink: "Users",
  adminPanel: "Admin Panel",

  // admin tables
  adminUsers: "Users",
  usersNameTitle: "Full Name",
  usersEmailTitle: "Email",
  usersRankTitle: "Rank",
  usersChangePassTitle: "Click to change password",
  usersActiveTitle: "Active?",
  usersChangePassFor: (email: string) => `Changing pass for ${email}`,

  // 404 page
  _404main: "אופס, נראה שהלכת לאיבוד",
  _404sub: "חזור לדף הבית",

  // activate account
  activateInvalid: "קישור לא תקין או שפג תוקפו",
  pleaseActivate: "אנא אמתו את כתובת המייל",
  didntReceiveMail: (email: string) => `לא קיבלת מייל לכתובת ${email}?`,
  clickHere: "לחצו כאן",
  resendActivation: "לשליחת מייל לאישור",
  accActivated: "כתובת המייל אומתה",
  redirectingToLogin: "מעבירים אתכם לדף ההתחברות",
  notRedirected: "אם אינכם מועברים",

  // login
  login: "התחברות",
  loginParagraph: "הזינו פרטים בכדי להתחבר",
  noAccount: "אין לכם משתמש?",
  forgotPass: "שכחתם את הסיסמא?",

  // register
  register: "הרשמה",
  registerParagraph: "הזינו פרטים בכדי להרשם",
  alreadyUser: "כבר יש לכם משתמש?",

  // reset password
  changePassword: "איפוס סיסמא",
  rstPwdFor: "משנה סיסמא עבור:",
  error: "שגיאה",
  success: "בוצע בהצלחה",
  followMail: "עקבו אחר ההוראות שנשלחו למיל",

  // profile
  editProfileInfo: "שינו פרטים",
  clickToEditPass: "שינו סיסמא",

  // labels
  emailLabel: "כתובת מייל",
  passLabel: "סיסמא",
  passConfirmLabel: "אימות סיסמא",
  fullNameLabel: "שם מלא",
  rankLabel: "דרגת משתמש",
  isActiveLabel: "פעיל?",
};
