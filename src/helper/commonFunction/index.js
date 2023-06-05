import qs from "qs";

export const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
    navigator.userAgent
  );

export const onKeyPress = (event, callBack) => {
  const returnFocusProduct = (id) => {
    try {
      const ele = document.getElementById(id);
      if (!ele) {
        throw new Error();
      }
      return ele;
    } catch (error) {
      throw new Error();
    }
  };

  switch (event.key) {
    case "Enter":
      event.preventDefault();
      event.stopPropagation();
      callBack.call();
      break;
    case "Escape":
      event.preventDefault();
      event.stopPropagation();
      callBack.call();
      break;
    case "ArrowDown": {
      const ele = document.getElementById(event.target.id).nextSibling;
      if (ele) {
        returnFocusProduct(ele.id).focus();
      }
      break;
    }
    case "ArrowUp": {
      const ele = document.getElementById(event.target.id).previousSibling;
      if (ele) {
        returnFocusProduct(ele.id).focus();
      }
      break;
    }
    default:
      break;
  }
};

export const validateEmail = (email) => {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const callAPI = (payload, url) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      credentials: "include",
      redirect: "follow",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify(payload),
    })
      .then((response) => {
        resolve("success");
      })
      .catch((error) => {
        reject("error");
      });
  });
};
