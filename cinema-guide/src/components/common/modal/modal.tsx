import "./styles.scss";

export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__header">
          <img src={`${process.env.PUBLIC_URL}/logo__black.png`} alt="logo" />
        </div>
        <div className="modal__content"></div>
        <div className="modal__footer"></div>
      </div>
    </div>
  );
};
