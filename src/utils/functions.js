import { BACKEND_URL } from "@/assets/Constants";

export const removeDoubleSlash = (str) => {
  return str.replace(/([^:]\/)\/+/g, "$1");
};

export const getFileURL = (str) => {
  if (str) {
    if (str.indexOf("http") === -1) {
      return removeDoubleSlash(BACKEND_URL + "/" + str);
    } else {
      return str;
    }
  } else {
    return "";
  }
};

export const getShortString = (str, length = 50) => {
  if (str) {
    if (str.length > length) {
      return str.substring(0, length) + "...";
    } else {
      return str;
    }
  } else {
    return "";
  }
};

export const formatDateString = (val) => {
  if (isNaN(+val)) {
    return dayjs(val).format("DD/MM/YYYY");
  } else {
    return dayjs(+val).format("DD/MM/YYYY");
  }
};
