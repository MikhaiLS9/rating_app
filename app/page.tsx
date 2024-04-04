import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";
import Tag from "@/components/Tag/Tag";

export default function Home() {
  return (
    <main className={styles.main}>
      <Htag tag="h2">Курсы по Photoshop</Htag>
      <Button appearance="primary" arrow="down">
        Отправить
      </Button>
      <Button appearance="ghost" arrow="down">
        Читать отзывы
      </Button>
      <Ptag size="small">small</Ptag>
      <Ptag>medium</Ptag>
      <Ptag size="large">large</Ptag>
      <Tag>Гарантия трудоустройства</Tag>
      <Tag color="grey">10</Tag>
      <Tag color="red">hh.ru</Tag>
      <Tag color="ghost">Работа в Photoshop</Tag>
      <Tag color="green" size="medium">
        -10 000
      </Tag>
    </main>
  );
}
