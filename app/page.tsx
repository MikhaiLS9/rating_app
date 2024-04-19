"use client";

import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";
import Tag from "@/components/Tag/Tag";
import Rating from "@/components/Rating/Rating";
import { useState } from "react";
import Layout from "@/layout/Layout";
import Footer from "@/layout/Footer/Footer";
import Header from "@/layout/Header/Header";
import Sidebar from "@/layout/Sidebar/Sidebar";

export default function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <main className={styles.main}>
      <Layout>
        <Header/>
        <Sidebar/>
        <Footer/>
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
      <Rating isEditable={true} rating={rating} setRating={setRating} />
      </Layout>
    </main>
  );
}
