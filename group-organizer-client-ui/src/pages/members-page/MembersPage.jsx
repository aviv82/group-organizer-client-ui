import "./membersPage.css";

import { useEffect, useState } from "react";

import { create, getHealth } from "../../services/healthServices";

import { Button } from "../../components/button/Button";
import { Plus } from "../../assets/icons/plus/Plus";
import { Modal } from "../../components/modal/Modal";

export const MembersPage = () => {
  const [items, setItems] = useState([]);

  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const result = await getHealth();
    setItems(result.data);
  };

  const handleSubmit = async (request = {}) => {
    const result = await create(request);
    console.log("member created:", result.data);
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="home-page">
      {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}

      <Button style="icon" text={<Plus />} action={toggleModal} />

      {isModal && <Modal handleSubmit={handleSubmit} onClose={toggleModal} />}

      {items.length > 0 ? (
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <h4>{item.NickName}</h4>
            </li>
          ))}
        </ul>
      ) : (
        <h3>Loading items...</h3>
      )}
    </div>
  );
};
