import React from "react";

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img
        src="https://cdn-icons-png.flaticon.com/512/7778/7778667.png"
        alt="Success"
      />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Назад
      </button>
    </div>
  );
};
