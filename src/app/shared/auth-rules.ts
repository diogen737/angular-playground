export const PWD_PATTERN_WEAK = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{3,})/;
export const PWD_PATTERN_STRONG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
export const PWD_HINT_WEAK = 'Password must be at least 3 chars long and contain any combination of lowercase/uppercase letters and digits';
export const PWD_HINT_STRONG = 'Password must be at least 8 chars long and contain lowercase/uppercase letters, digits and special symbols';