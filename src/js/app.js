export default class Validator {
  static validatePhone(phoneNumber) {
    const clearNumber = phoneNumber.replace(/\D/g, '');
    if (clearNumber.length === 11 && clearNumber.startsWith('8')) {
      return `+7${clearNumber.slice(1)}`;
    } else if (clearNumber.length === 12) {
      return `+${clearNumber}`;
    } else if (clearNumber.length < 11) {
      return 'Phone number error!';
    } else {
      return `+${clearNumber}`;
    }
  }
}
