import { useEffect, useState } from "react";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../services/actions/auth";
import styles from "./profile-details.module.css";

function ProfileDetails() {
  
  const user = useSelector((store) => store.authReducer.user);
  useEffect(() => {
    setValue(user);
  }, [user]);
  
  const [form, setValue] = useState({
    name: "",
    password: "",
    email: "",
  });
  
  const [changed, setChanged] = useState(false);
  
  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
    setChanged(true);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(form));
    setChanged(false);
  }

  const handleReset = (e) => {
    setValue(user);
    setChanged(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={onChange}
        value={form.name || ""}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        icon="EditIcon"
      />
      <EmailInput
        onChange={onChange}
        value={form.email || ""}
        name={"email"}
        icon="EditIcon"
        extraClass="mt-6"
      />
      <PasswordInput
        onChange={onChange}
        value={form.password || ""}
        name={"password"}
        extraClass="mb-6 mt-6"
        icon="EditIcon"
      />
      {changed && (
        <div className={styles.buttons}>
          <Button type="secondary" size="medium" htmlType="reset" onClick={handleReset}>
            Отменить
          </Button>
          <Button type="primary" size="medium" htmlType="submit">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}

export { ProfileDetails };
