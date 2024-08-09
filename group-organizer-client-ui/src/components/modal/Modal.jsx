import { useState } from "react";
import { Button } from "../button/Button";
import "./modal.css";
import { MODAL_TYPES } from "../../common/constants/modalTypes";

export const Modal = ({
  type = MODAL_TYPES.Create,
  item = {},
  handleCreate = () => console.log("create"),
  handleEdit = () => console.log("edit"),
  onClose = () => console.log("close"),
}) => {
  const [request, setRequest] = useState({
    nickName: item.NickName ?? "",
    bio: item.Bio ?? "",
    avatarUrl: item.AvatarURL ?? "",
    age: item.Age ?? 0,
    groupId: item.GroupId ?? 0,
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setRequest((previous) => ({ ...previous, [name]: value }));
  };

  const onSubmitCreate = () => {
    handleCreate(request);
  };

  const onSubmitEdit = () => {
    handleEdit(item.MemberId, request);
  };

  return (
    <div className="modal-bg">
      <div
        className={
          type === MODAL_TYPES.Create
            ? "modal-box modal-create"
            : "modal-box modal-edit"
        }
      >
        {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
        <div className="modal-head">
          <h4>
            {type === MODAL_TYPES.Create ? "create new member" : "edit member"}
          </h4>
        </div>
        <div className="modal-body">
          <form>
            <label htmlFor="nickName">
              new member NickName
              <input
                type="text"
                name="nickName"
                value={request.nickName}
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
          </form>
        </div>
        <div className="modal-foot">
          <Button
            text="submit"
            action={type === MODAL_TYPES.Create ? onSubmitCreate : onSubmitEdit}
          />
          <Button text="close" style="cancel" action={onClose} />
        </div>
      </div>
    </div>
  );
};
