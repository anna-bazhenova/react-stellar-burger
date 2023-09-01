import { FeedId } from "../../components/feed-id/feed-id";
import styles from "./feed-id-page.module.css"

const FeedIdPage = () => {
  return (
    <div className={styles.feed_page_container}>
      <FeedId/>
    </div>
  );
}

export { FeedIdPage };