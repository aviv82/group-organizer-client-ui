import "./membersPage.css";

import { useEffect, useRef, useState } from "react";

import { create, getHealth } from "../../services/healthServices";

import { Button } from "../../components/button/Button";
import { Plus } from "../../assets/icons/plus/Plus";
import { Edit } from "../../assets/icons/edit/Edit";
import { Modal } from "../../components/modal/Modal";
import { MODAL_TYPES } from "../../common/constants/modalTypes";

export const MembersPage = () => {
  const [items, setItems] = useState([]);

  const [isModal, setIsModal] = useState(false);

  const modalType = useRef(MODAL_TYPES.Create);

  useEffect(() => {
    getItems();
  }, [isModal]);

  const getItems = async () => {
    const result = await getHealth();
    setItems(result.data);
  };

  const handleSubmit = async (request = {}) => {
    const result = await create(request);
    console.log("member created:", result.data);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="home-page">
      {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}

      <Button
        style="icon"
        text={<Plus />}
        action={() => {
          modalType.current = MODAL_TYPES.Create;
          toggleModal();
        }}
      />

      {isModal && (
        <Modal
          type={modalType.current}
          handleSubmit={handleSubmit}
          onClose={toggleModal}
        />
      )}

      {items.length > 0 ? (
        <ul>
          {items.map((item, i) => (
            <li className="list-item" key={i}>
              <div>
                <h4>{item.NickName}</h4>
                <p>{item.Bio}</p>
                <p>{item.AvatarURL}</p>
              </div>
              <Button
                action={() => {
                  modalType.current = MODAL_TYPES.Edit;
                  toggleModal();
                }}
                style="icon"
                text={<Edit />}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h3>Loading items...</h3>
      )}
    </div>
  );
};
