/* eslint-disable no-useless-escape */
export var checkInputNumber = (rule: any, value: any, callback: any) => {
  let regex: any = /^\d*$/;
  if (value && !regex.test(value)) {
    return callback(new Error("Field just only allow number."));
  } else return callback();
};

export var checkNotEmpty = (rule: any, value: any, callback: any) => {
  if (!value) return callback(new Error("Field not allow empty."));
  else return callback();
};

export var checkNotSpecialCharacter = (
  rule: any,
  value: any,
  callback: any
) => {
  let regex: any = /^([a-zA-Z0-9àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\.\_\-]+(?:\s[A-Za-z0-9àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\.\_\-]+)*\s?)*$/;
  if (value && !regex.test(value)) {
    return callback(new Error("Do not allow special characters."));
  } else return callback();
};

// only string (text) or whitespace, not digit (number) & special character
export var checkValidName = (rule: any, value: any, callback: any) => {
  let regex: any = /^([a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]+(?:\s[A-Za-zàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]+)*\s?)*$/;
  if (value && !regex.test(value)) {
    return callback(new Error("Do not allow number or special characters"));
  } else return callback();
};

export var checkValidUserName = (rule: any, value: any, callback: any) => {
  let regex: any = /^[A-Za-z0-9]+(?:[a-zA-Z0-9\_\-\.]+)(?:\s?)*$/;
  if (value && !regex.test(value)) {
    return callback(new Error("Do not alllow space or special characters."));
  } else return callback();
};

export var checkEmail = (rule: any, value: any, callback: any) => {
  let regex: any = /^((\w+)([\.\-]\w+)*?([@]{1})(\w+)([\.]{1}\w+){1,3})*$/;
  if (value && !regex.test(value)) {
    return callback(new Error("Please input email type"));
  } else return callback();
};

export var checkValidNameObjPrice = (rule: any, value: any, callback: any) => {
  let regex: any = /[\w+]/;
  if (value && !regex.test(value)) {
    return callback(new Error("Do not allow special characters"));
  } else return callback();
};

export var allowOnlyTypeNumber = (rule: any, value: any, callback: any) => {
  let regex: any = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
  if (value && !regex.test(value)) {
    return callback(new Error("Allow only number"));
  } else return callback();
};
