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

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const validateEmail = (email) => {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const createOptions = (method, payload) => {
  let opt = {};
  if (method === "POST") {
    opt = {
      method,
      mode: "no-cors",
      credentials: "include",
      redirect: "follow",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: qs.stringify(payload),
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
  }
  return opt;
};

export const callAPI = (payload, url, method) => {
  return new Promise((resolve, reject) => {
    fetch(url, createOptions(method, payload))
      .then((response) => response.json())
      .then((res) => {
        if (method === "GET") {
          resolve(res);
        } else {
          resolve("success");
        }
      })
      .catch((error) => {
        reject("error");
      });
  });
};
