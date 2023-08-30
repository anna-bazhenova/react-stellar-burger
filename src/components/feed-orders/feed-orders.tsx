import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-orders.module.css";


function FeedOrders() {

  return (
    <div className={`${styles.orders} custom-scroll pr-2`}>
      <div className={`${styles.order_item} p-6 mb-4`}>
        <div className={styles.order_flex}>
          <p className="text text_type_digits-default">#034535</p>
          <FormattedDate date={new Date()} className="text text_type_main-default text_color_inactive" />
        </div>
        <h2 className="text text_type_main-medium mt-6 mb-6">Death Star Starship Main бургер</h2>
        <div className={styles.order_flex}>
          <div className={styles.images_flex}>
            <div className={`${styles.image_box} ${styles.image_1}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_2}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/cheese.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_3}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/meat-03.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_4}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/salad.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_5}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/core.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_6}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/sauce-01.png" alt="" />
              <p className={`${styles.image_digit} text text_type_digits-default`}>+3</p>
            </div>
          </div>
          <div className={styles.order_flex}>
            <p className="text text_type_digits-default mr-2">480</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
      <div className={`${styles.order_item} p-6 mb-4`}>
        <div className={styles.order_flex}>
          <p className="text text_type_digits-default">#034535</p>
          <FormattedDate date={new Date()} className="text text_type_main-default text_color_inactive" />
        </div>
        <h2 className="text text_type_main-medium mt-6 mb-6">Death Star Starship Main бургер</h2>
        <div className={styles.order_flex}>
          <div className={styles.images_flex}>
            <div className={`${styles.image_box} ${styles.image_1}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_2}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/cheese.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_3}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/meat-03.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_4}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/salad.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_5}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/core.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_6}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/sauce-01.png" alt="" />
              <p className={`${styles.image_digit} text text_type_digits-default`}>+3</p>
            </div>
          </div>
          <div className={styles.order_flex}>
            <p className="text text_type_digits-default mr-2">480</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
      <div className={`${styles.order_item} p-6 mb-4`}>
        <div className={styles.order_flex}>
          <p className="text text_type_digits-default">#034535</p>
          <FormattedDate date={new Date()} className="text text_type_main-default text_color_inactive" />
        </div>
        <h2 className="text text_type_main-medium mt-6 mb-6">Death Star Starship Main бургер</h2>
        <div className={styles.order_flex}>
          <div className={styles.images_flex}>
            <div className={`${styles.image_box} ${styles.image_1}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_2}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/cheese.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_3}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/meat-03.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_4}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/salad.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_5}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/core.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_6}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/sauce-01.png" alt="" />
              <p className={`${styles.image_digit} text text_type_digits-default`}>+3</p>
            </div>
          </div>
          <div className={styles.order_flex}>
            <p className="text text_type_digits-default mr-2">480</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
      <div className={`${styles.order_item} p-6 mb-4`}>
        <div className={styles.order_flex}>
          <p className="text text_type_digits-default">#034535</p>
          <FormattedDate date={new Date()} className="text text_type_main-default text_color_inactive" />
        </div>
        <h2 className="text text_type_main-medium mt-6 mb-6">Death Star Starship Main бургер</h2>
        <div className={styles.order_flex}>
          <div className={styles.images_flex}>
            <div className={`${styles.image_box} ${styles.image_1}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_2}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/cheese.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_3}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/meat-03.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_4}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/salad.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_5}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/core.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_6}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/sauce-01.png" alt="" />
              <p className={`${styles.image_digit} text text_type_digits-default`}>+3</p>
            </div>
          </div>
          <div className={styles.order_flex}>
            <p className="text text_type_digits-default mr-2">480</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
      <div className={`${styles.order_item} p-6 mb-4`}>
        <div className={styles.order_flex}>
          <p className="text text_type_digits-default">#034535</p>
          <FormattedDate date={new Date()} className="text text_type_main-default text_color_inactive" />
        </div>
        <h2 className="text text_type_main-medium mt-6 mb-6">Death Star Starship Main бургер</h2>
        <div className={styles.order_flex}>
          <div className={styles.images_flex}>
            <div className={`${styles.image_box} ${styles.image_1}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_2}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/cheese.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_3}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/meat-03.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_4}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/salad.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_5}`}>
              <img className={styles.image} src="https://code.s3.yandex.net/react/code/core.png" alt="" />
            </div>
            <div className={`${styles.image_box} ${styles.image_6}`}>
              <img className={`${styles.image} ${styles.image_black}`} src="https://code.s3.yandex.net/react/code/sauce-01.png" alt="" />
              <p className={`${styles.image_digit} text text_type_digits-default`}>+3</p>
            </div>
          </div>
          <div className={styles.order_flex}>
            <p className="text text_type_digits-default mr-2">480</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeedOrders };