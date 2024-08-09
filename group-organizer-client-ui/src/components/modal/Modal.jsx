import { useState } from "react";
import { Button } from "../button/Button";
import "./modal.css";

export const Modal = ({
  handleSubmit = () => console.log("submit"),
  onClose = () => console.log("close"),
}) => {
  const [request, setRequest] = useState({
    nickName: "",
    bio: "",
    avatarUrl: "",
    age: 0,
    groupId: 0,
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setRequest((previous) => ({ ...previous, [name]: value }));
  };

  const onSubmit = () => {
    handleSubmit(request);
  };

  return (
    <div className="modal-bg">
      <div className="modal-box">
        {/* <pre>{JSON.stringify(request, null, 2)}</pre> */}
        <div className="modal-head">
          <h4>create member</h4>
        </div>
        <div className="modal-body">
          <form>
            <label htmlFor="nickName">
              new member NickName
              <input
                type="text"
                name="nickName"
                value={request.nickname}
                onChange={handleInput}
              />
            </label>
            <label htmlFor="bio">
              new member Bio
              <input
                type="text"
                name="bio"
                value={request.bio}
                onChange={handleInput}
              />
            </label>
            <label htmlFor="avatarUrl">
              new member AvatarURL
              <input
                type="text"
                name="avatarUrl"
                value={request.avatarUrl}
                onChange={handleInput}
              />
            </label>
            <label htmlFor="age">
              new member Age
              <input
                type="text"
                name="age"
                value={request.age}
                onChange={handleInput}
              />
            </label>
            <label htmlFor="groupId">
              new member GroupId
              <input
                type="text"
                name="groupId"
                value={request.groupId}
                onChange={handleInput}
              />
            </label>
            {/* <Button style="icon" text={<Plus />} action={toggleModal} /> */}
          </form>
        </div>
        <div className="modal-foot">
          <Button text="submit" action={onSubmit} />
          <Button text="close" style="cancel" action={onClose} />
        </div>
      </div>
    </div>
  );
};
