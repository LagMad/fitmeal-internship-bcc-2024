import React from "react";
import SVGs from "../shared/SVGs";
import Button from "./Button";

const Dialogue = ({
  type,
  title,
  message,
  subMessage,
  onClick,
  onClickWarning1,
  onClickWarning2,
  buttonLabel,
  buttonWarning1,
  buttonWarning2,
}) => {
  const getDialogueType = (type) => {
    switch (type) {
      case "warning":
        return <SVGs.Warning />;
      case "success":
        return <SVGs.Success />;
      default:
        return "";
    }
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm z-50">
      <div className="flex flex-col w-1/4 bg-white drop-shadow-2xl rounded-xl justify-center items-center p-8 gap-5">
        {getDialogueType(type)}
        <div className="font-bold text-cust-orange-normal text-4xl">
          {title}
        </div>
        <div className="text-center justify-center items-center">
          <div className="text-xl">{message}</div>
          <div>{subMessage}</div>
        </div>
        <div className="flex flex-row w-full justify-center items-center gap-3">
          {type === "warning" ? (
            <>
              <Button
                className={
                  "w-1/2 border-cust-orange-normal border-2 text-center"
                }
                type={"button"}
                variation={"secondary-rectangle"}
                onClick={onClickWarning1}
              >
                {buttonWarning1}
              </Button>
              <Button
                className={"w-1/2 text-center text-4xl "}
                type={"button"}
                variation={"primary-rectangle"}
                onClick={onClickWarning2}
              >
                {buttonWarning2}
              </Button>
            </>
          ) : (
            <Button
                className={"w-1/2 text-center text-4xl "}
                type={"button"}
                variation={"primary-rectangle"}
                onClick={onClick}
              >
                {buttonLabel}
              </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
