import React from "react";
import loginSuccess from "../images/success-sign-in.svg";
import loginFailed from "../images/fail-sign-in.svg";

function InfoTooltip({ isOpen, onClose, auth, name }) {
  return (
    <>
      <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
        <div className="popup__container popup__registration">
          <button type="button" className="popup__close" onClick={onClose} />
          <img
            className="popup__img-reg"
            src={auth ? `${loginSuccess}` : `${loginFailed}`}
            alt="Изображение статуса регистрации"
          />
          <p className="popup__reg-status">
            {`${
              auth
                ? "Вы успещно зарегистрировались!"
                : "Что-то пошло не так! Попробуйте еще раз."
            }`}
          </p>
        </div>
      </div>
    </>
  );
}

export default InfoTooltip;