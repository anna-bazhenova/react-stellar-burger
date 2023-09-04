import { FormEvent, ChangeEvent, useEffect, useState } from "react";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { updateUser } from "../../services/actions/auth-actions";
import styles from "./profile-details.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useForm } from "../../hooks/useForm";

const ProfileDetails = () => {
  const user = useAppSelector((store) => store.auth.user!);

  const {form, setValues} = useForm({
    name: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    setValues({ name: user.name!, password: "", email: user.email });
  }, [user, setValues]);

  const [changed, setChanged] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...form, [e.target.name]: e.target.value });
    setChanged(true);
  };

  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateUser(form));
    setChanged(false);
  };

  const handleReset = () => {
    setValues({ name: user.name!, password: "", email: user.email });
    setChanged(false);
  };

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
        isIcon={true}
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
          <Button
            type="secondary"
            size="medium"
            htmlType="reset"
            onClick={handleReset}
          >
            Отменить
          </Button>
          <Button type="primary" size="medium" htmlType="submit">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
};

export { ProfileDetails };
